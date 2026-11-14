import React, { useState, useEffect, useRef } from 'react';
import {
  FolderOpen, Upload, Search, Trash2, Edit3, RefreshCw, Copy, Check,
  X, Image as ImageIcon, Link2, AlertTriangle, CheckCircle2, FileImage, Plus
} from 'lucide-react';
import { Product, Category } from '../types';
import { api } from '../lib/api';

interface FolderSummary {
  folder: string;
  path: string;
  count: number;
  totalBytes: number;
  previewImage: string | null;
}

interface AssetImage {
  name: string;
  title: string;
  description: string;
  folder: string;
  url: string;
  sizeBytes: number;
  updatedAt: string;
  extension: string;
  linkedProducts: Array<{ id: string; name: string }>;
  linkedCategory?: string;
}

interface PendingUpload {
  id: string;
  file: File;
  previewUrl: string;
  title: string;
  description: string;
}

interface ImageManagementPanelProps {
  products: Product[];
  categories: Category[];
  onSynced: () => void;
}

const FOLDER_GROUPS = [
  { id: 'all', label: 'All Folders' },
  { id: 'products', label: 'Product Images' },
  { id: 'smartphones', label: 'Smartphones' },
  { id: 'headphones', label: 'Headphones' },
  { id: 'earbuds', label: 'Earbuds' },
  { id: 'neckbands', label: 'Neckbands' },
  { id: 'leads', label: 'Leads' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'categories', label: 'Category Images' },
  { id: 'Image Folder 2', label: 'Image Folder 2' },
  { id: 'banners', label: 'Homepage Banners' },
  { id: 'hero', label: 'Hero Section' },
  { id: 'sports', label: 'Sports Images' },
  { id: 'phone-covers', label: 'Phone Covers' },
  { id: 'logo', label: 'Logo & Icons' },
];

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const ImageManagementPanel: React.FC<ImageManagementPanelProps> = ({
  products,
  categories,
  onSynced,
}) => {
  const [folders, setFolders] = useState<FolderSummary[]>([]);
  const [images, setImages] = useState<AssetImage[]>([]);
  const [activeFolder, setActiveFolder] = useState<string>('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Upload queue state
  const [pendingFiles, setPendingFiles] = useState<PendingUpload[]>([]);
  const [uploadFolder, setUploadFolder] = useState<string>('products');
  const [attachProductId, setAttachProductId] = useState<string>('');
  const [attachCategorySlug, setAttachCategorySlug] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  // Feedback banner
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // Edit / Replace / Delete modal states
  const [editingImage, setEditingImage] = useState<AssetImage | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editProductId, setEditProductId] = useState('');
  const [editCategorySlug, setEditCategorySlug] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<AssetImage | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const [replacingImage, setReplacingImage] = useState<AssetImage | null>(null);

  const showNotice = (type: 'success' | 'error', text: string) => {
    setNotice({ type, text });
    setTimeout(() => setNotice(null), 4500);
  };

  const fetchImages = async (folder = activeFolder) => {
    setLoading(true);
    try {
      const data = await api.getImageFolders(folder === 'all' ? undefined : folder);
      setFolders(data.folders);
      setImages(data.images);
    } catch (err: any) {
      showNotice('error', err.message || 'Could not load image folders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(activeFolder);
    if (activeFolder !== 'all') {
      setUploadFolder(activeFolder);
    }
  }, [activeFolder]);

  const handleFilesSelected = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml'];
    const added: PendingUpload[] = [];
    Array.from(fileList).forEach((file) => {
      if (!validTypes.includes(file.type.toLowerCase())) {
        showNotice('error', `Skipped "${file.name}": only JPG, JPEG, PNG, WEBP, SVG are allowed.`);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showNotice('error', `Skipped "${file.name}": exceeds 5 MB limit.`);
        return;
      }
      added.push({
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        file,
        previewUrl: URL.createObjectURL(file),
        title: file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' '),
        description: '',
      });
    });
    if (added.length > 0) {
      setPendingFiles((prev) => [...prev, ...added]);
    }
  };

  const removePending = (id: string) => {
    setPendingFiles((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleUploadAll = async () => {
    if (pendingFiles.length === 0) return;
    setUploading(true);
    setUploadProgress(0);
    let successCount = 0;

    try {
      for (let i = 0; i < pendingFiles.length; i++) {
        const item = pendingFiles[i];
        const base64 = await fileToBase64(item.file);
        await api.uploadAdminImage({
          filename: item.file.name,
          mimeType: item.file.type,
          dataBase64: base64,
          folder: uploadFolder,
          title: item.title,
          description: item.description,
          productId: attachProductId || undefined,
          categorySlug: attachCategorySlug || undefined,
        });
        URL.revokeObjectURL(item.previewUrl);
        successCount++;
        setUploadProgress(Math.round(((i + 1) / pendingFiles.length) * 100));
      }

      setPendingFiles([]);
      setAttachProductId('');
      setAttachCategorySlug('');
      showNotice('success', `Uploaded ${successCount} image(s) permanently to /assets/${uploadFolder}/`);
      await fetchImages(activeFolder);
      onSynced();
    } catch (err: any) {
      showNotice('error', err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleReplaceFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !replacingImage) return;
    try {
      setUploading(true);
      const base64 = await fileToBase64(file);
      await api.uploadAdminImage({
        filename: file.name,
        mimeType: file.type,
        dataBase64: base64,
        folder: replacingImage.folder,
        title: replacingImage.title,
        description: replacingImage.description,
        replacePath: replacingImage.url,
      });
      showNotice('success', `Replaced ${replacingImage.name} live across website`);
      setReplacingImage(null);
      await fetchImages(activeFolder);
      onSynced();
    } catch (err: any) {
      showNotice('error', err.message || 'Failed to replace image');
    } finally {
      setUploading(false);
      if (replaceInputRef.current) replaceInputRef.current.value = '';
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingImage) return;
    try {
      await api.updateAdminImage({
        imagePath: editingImage.url,
        title: editTitle,
        description: editDesc,
        productId: editProductId || undefined,
        categorySlug: editCategorySlug || undefined,
      });
      showNotice('success', `Updated metadata and synchronized "${editingImage.name}"`);
      setEditingImage(null);
      await fetchImages(activeFolder);
      onSynced();
    } catch (err: any) {
      showNotice('error', err.message || 'Update failed');
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await api.deleteAdminImage(deleteTarget.url);
      showNotice('success', `Deleted "${deleteTarget.name}" from storage & synced store`);
      setDeleteTarget(null);
      await fetchImages(activeFolder);
      onSynced();
    } catch (err: any) {
      showNotice('error', err.message || 'Delete failed');
    }
  };

  const copyPath = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 1800);
  };

  const filteredImages = images.filter((img) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      img.name.toLowerCase().includes(q) ||
      img.title.toLowerCase().includes(q) ||
      img.folder.toLowerCase().includes(q) ||
      img.linkedProducts.some((p) => p.name.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-5">
      {/* Header & Live Folder Path Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-extrabold text-[#232429] flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-[#A20B1A]" />
            <span>Image Management & Live Product Folders</span>
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Upload, organize, replace, and synchronize images directly inside <span className="font-mono font-semibold text-zinc-700">/public/assets/{activeFolder === 'all' ? '*' : activeFolder}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => fetchImages(activeFolder)}
            className="px-3 py-1.5 text-xs font-bold bg-[#F5F5F7] hover:bg-zinc-200 text-[#232429] rounded-lg flex items-center gap-1.5 cursor-pointer border border-zinc-200"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Folders</span>
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3.5 py-1.5 text-xs font-bold bg-[#A20B1A] hover:bg-[#810916] text-white rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Select Images</span>
          </button>
        </div>
      </div>

      {/* Feedback Notification */}
      {notice && (
        <div
          className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between ${
            notice.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-red-50 border-red-200 text-[#A20B1A]'
          }`}
        >
          <span className="flex items-center gap-2">
            {notice.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
            {notice.text}
          </span>
          <button onClick={() => setNotice(null)} className="cursor-pointer opacity-70 hover:opacity-100">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Folder Tabs */}
      <div className="flex flex-wrap gap-1.5 bg-[#F5F5F7] p-2 rounded-xl border border-zinc-200">
        {FOLDER_GROUPS.map((grp) => {
          const summary = folders.find((f) => f.folder === grp.id);
          const count = grp.id === 'all'
            ? folders.reduce((s, f) => s + f.count, 0)
            : (summary?.count ?? 0);
          const isActive = activeFolder === grp.id;

          return (
            <button
              key={grp.id}
              onClick={() => setActiveFolder(grp.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[#A20B1A] text-white shadow-xs'
                  : 'bg-white text-[#232429] hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              <span>{grp.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] tabular-nums ${
                  isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Drag & Drop Multi-File Upload Box */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFilesSelected(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed rounded-2xl p-5 transition-all text-center ${
          dragActive
            ? 'border-[#A20B1A] bg-[#FEEEEF]/60'
            : 'border-zinc-300 bg-[#F5F5F7]/60 hover:border-[#A20B1A]/60'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp,.svg,image/jpeg,image/png,image/webp,image/svg+xml"
          onChange={(e) => handleFilesSelected(e.target.files)}
          className="hidden"
        />
        <input
          ref={replaceInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.svg,image/jpeg,image/png,image/webp,image/svg+xml"
          onChange={handleReplaceFile}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#A20B1A] shadow-2xs">
            <Upload className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#232429]">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="font-extrabold text-[#A20B1A] hover:underline cursor-pointer"
            >
              Choose multiple images
            </button>{' '}
            or drag & drop them here
          </div>
          <p className="text-[11px] text-zinc-500">
            JPG, JPEG, PNG, WEBP, SVG · Max 5 MB per file · Saved permanently to <span className="font-mono">/assets/{uploadFolder}/</span>
          </p>
        </div>

        {/* Pending Previews & Target Mapping */}
        {pendingFiles.length > 0 && (
          <div className="mt-5 pt-4 border-t border-zinc-200 text-left space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block font-bold text-zinc-700 mb-1">Target Image Folder</label>
                <select
                  value={uploadFolder}
                  onChange={(e) => setUploadFolder(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-300 bg-white outline-none focus:border-[#A20B1A]"
                >
                  {FOLDER_GROUPS.filter((g) => g.id !== 'all').map((g) => (
                    <option key={g.id} value={g.id}>
                      /assets/{g.id}/ ({g.label})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-zinc-700 mb-1">Attach to Product (Optional)</label>
                <select
                  value={attachProductId}
                  onChange={(e) => setAttachProductId(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-300 bg-white outline-none focus:border-[#A20B1A]"
                >
                  <option value="">-- Folder Only --</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-zinc-700 mb-1">Set Category Thumbnail (Optional)</label>
                <select
                  value={attachCategorySlug}
                  onChange={(e) => setAttachCategorySlug(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-300 bg-white outline-none focus:border-[#A20B1A]"
                >
                  <option value="">-- None --</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} ({c.slug})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preview Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pendingFiles.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-zinc-200 p-2.5 flex gap-2.5 items-start">
                  <img
                    src={item.previewUrl}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-contain bg-zinc-50 border border-zinc-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        setPendingFiles((prev) =>
                          prev.map((p) => (p.id === item.id ? { ...p, title: e.target.value } : p))
                        )
                      }
                      placeholder="Image name"
                      className="w-full text-[11px] font-bold p-1 border border-zinc-200 rounded outline-none focus:border-[#A20B1A]"
                    />
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        setPendingFiles((prev) =>
                          prev.map((p) => (p.id === item.id ? { ...p, description: e.target.value } : p))
                        )
                      }
                      placeholder="Short description..."
                      className="w-full text-[11px] p-1 border border-zinc-200 rounded outline-none focus:border-[#A20B1A]"
                    />
                    <span className="text-[10px] text-zinc-400 block">{formatBytes(item.file.size)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removePending(item.id)}
                    className="text-zinc-400 hover:text-[#A20B1A] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Upload Progress & Save Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {uploading ? (
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#A20B1A] transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#A20B1A]">Uploading to server storage ({uploadProgress}%)...</span>
                </div>
              ) : (
                <span className="text-xs font-semibold text-zinc-600">
                  {pendingFiles.length} image(s) ready to save permanently
                </span>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={uploading}
                  onClick={() => setPendingFiles([])}
                  className="px-3 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-200 rounded-lg cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  disabled={uploading}
                  onClick={handleUploadAll}
                  className="px-4 py-2 text-xs font-bold bg-[#A20B1A] hover:bg-[#810916] text-white rounded-lg cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {uploading ? 'Saving...' : `Upload & Sync (${pendingFiles.length})`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar & Library Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by image name, folder, or linked product..."
            className="w-full pl-9 pr-3 py-2 text-xs border border-zinc-200 rounded-xl bg-white outline-none focus:border-[#A20B1A]"
          />
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          Showing <strong className="text-[#232429]">{filteredImages.length}</strong> live images
        </div>
      </div>

      {/* Image Grid Library */}
      {loading ? (
        <div className="py-12 text-center text-xs text-zinc-500">Scanning live asset folders...</div>
      ) : filteredImages.length === 0 ? (
        <div className="py-12 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50 space-y-2">
          <FileImage className="w-8 h-8 text-zinc-300 mx-auto" />
          <p className="text-xs font-bold text-zinc-600">No images in this folder yet</p>
          <p className="text-[11px] text-zinc-400">Upload images above to display them live in /assets/{activeFolder}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredImages.map((img) => (
            <div
              key={img.url}
              className="group bg-white rounded-xl border border-zinc-200 hover:border-[#A20B1A]/60 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[#F5F5F7] p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={`${img.url}?v=${encodeURIComponent(img.updatedAt)}`}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-mono uppercase">
                  {img.folder}
                </span>
                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-white/90 text-zinc-700 text-[9px] font-bold border border-zinc-200">
                  {formatBytes(img.sizeBytes)}
                </span>
              </div>

              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="text-[11px] font-bold text-[#232429] truncate" title={img.title}>
                    {img.title}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-400 truncate" title={img.url}>
                    {img.name}
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">
                    {img.updatedAt.split('T')[0]}
                  </p>
                  {img.linkedProducts.length > 0 && (
                    <span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[9px] font-bold border border-emerald-200 max-w-full truncate">
                      <Link2 className="w-2.5 h-2.5 shrink-0" />
                      {img.linkedProducts[0].name}
                    </span>
                  )}
                  {img.linkedCategory && (
                    <span className="inline-flex items-center gap-1 mt-1 ml-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[9px] font-bold border border-amber-200">
                      Cat: {img.linkedCategory}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-1.5 border-t border-zinc-100 gap-1">
                  <button
                    type="button"
                    onClick={() => copyPath(img.url)}
                    className="p-1.5 text-zinc-500 hover:text-[#232429] hover:bg-zinc-100 rounded-md cursor-pointer"
                    title="Copy asset URL"
                  >
                    {copiedUrl === img.url ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReplacingImage(img);
                      replaceInputRef.current?.click();
                    }}
                    className="p-1.5 text-zinc-500 hover:text-[#A20B1A] hover:bg-[#FEEEEF] rounded-md cursor-pointer"
                    title="Replace image file"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingImage(img);
                      setEditTitle(img.title);
                      setEditDesc(img.description || '');
                      setEditProductId(img.linkedProducts[0]?.id || '');
                      setEditCategorySlug(img.linkedCategory || '');
                    }}
                    className="p-1.5 text-zinc-500 hover:text-[#232429] hover:bg-zinc-100 rounded-md cursor-pointer"
                    title="Edit & link image"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeleteTarget(img)}
                    className="p-1.5 text-zinc-500 hover:text-[#A20B1A] hover:bg-red-50 rounded-md cursor-pointer"
                    title="Delete image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Metadata & Linking Modal */}
      {editingImage && (
        <div className="fixed inset-0 z-60 bg-black/65 flex items-center justify-center p-4" onClick={() => setEditingImage(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-[#232429]">Edit & Sync Image</h4>
              <button onClick={() => setEditingImage(null)} className="text-zinc-400 hover:text-zinc-700 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-[#F5F5F7] rounded-xl">
              <img src={editingImage.url} alt="" className="w-16 h-16 object-contain rounded-lg bg-white border border-zinc-200" />
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-800 truncate">{editingImage.name}</p>
                <p className="text-[10px] font-mono text-zinc-500 truncate">{editingImage.url}</p>
              </div>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-zinc-700 mb-1">Display Name</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                />
              </div>
              <div>
                <label className="block font-bold text-zinc-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                />
              </div>
              <div>
                <label className="block font-bold text-zinc-700 mb-1">Link to Product</label>
                <select
                  value={editProductId}
                  onChange={(e) => setEditProductId(e.target.value)}
                  className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                >
                  <option value="">-- Select Product --</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-bold text-zinc-700 mb-1">Set as Category Image</label>
                <select
                  value={editCategorySlug}
                  onChange={(e) => setEditCategorySlug(e.target.value)}
                  className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                >
                  <option value="">-- None --</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setEditingImage(null)} className="px-3 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg cursor-pointer">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#A20B1A] hover:bg-[#810916] text-white font-bold rounded-lg cursor-pointer">
                  Save & Sync
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-60 bg-black/65 flex items-center justify-center p-4" onClick={() => setDeleteTarget(null)}>
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 text-[#A20B1A]">
              <div className="w-10 h-10 rounded-full bg-[#FEEEEF] flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#232429]">Delete Image Permanently?</h4>
                <p className="text-[11px] text-zinc-500">This removes the file from server storage.</p>
              </div>
            </div>
            <p className="text-xs text-zinc-600 bg-[#F5F5F7] p-2.5 rounded-lg font-mono break-all">
              {deleteTarget.url}
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeleteTarget(null)} className="px-3 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 rounded-lg cursor-pointer">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="px-4 py-2 text-xs font-bold bg-[#A20B1A] hover:bg-[#810916] text-white rounded-lg cursor-pointer">
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
