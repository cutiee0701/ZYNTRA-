import React, { useState, useEffect } from 'react';
import { FolderOpen, Search, RefreshCw, Eye, X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';
import { api } from '../lib/api';

interface FolderSummary {
  folder: string;
  path: string;
  count: number;
  totalBytes: number;
  previewImage: string | null;
}

interface FolderImageItem {
  name: string;
  title: string;
  description: string;
  folder: string;
  url: string;
  sizeBytes: number;
  updatedAt: string;
  extension: string;
  linkedProducts: Array<{ id: string; name: string }>;
}

interface ProductFolderGalleryProps {
  products: Product[];
  refreshKey?: number;
  onSelectProduct: (product: Product) => void;
}

const FOLDER_LABELS: Record<string, string> = {
  products: 'Product Folder',
  smartphones: 'Smartphones',
  headphones: 'Headphones',
  earbuds: 'Earbuds',
  neckbands: 'Neckbands',
  leads: 'Leads',
  tablets: 'Tablets',
  categories: 'Categories',
  banners: 'Banners',
  hero: 'Hero',
};

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(0)} KB`;
};

export const ProductFolderGallery: React.FC<ProductFolderGalleryProps> = ({
  products,
  refreshKey = 0,
  onSelectProduct,
}) => {
  const [folders, setFolders] = useState<FolderSummary[]>([]);
  const [images, setImages] = useState<FolderImageItem[]>([]);
  const [activeFolder, setActiveFolder] = useState<string>('products');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<FolderImageItem | null>(null);

  const loadFolder = async (folder = activeFolder) => {
    setLoading(true);
    try {
      const data = await api.getImageFolders(folder);
      setFolders(data.folders.filter((f) => FOLDER_LABELS[f.folder] && f.count > 0));
      setImages(data.images);
    } catch {
      // ignore transient network errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFolder(activeFolder);
  }, [activeFolder, refreshKey]);

  const filtered = images.filter((img) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return img.name.toLowerCase().includes(q) || img.title.toLowerCase().includes(q);
  });

  const visibleImages = showAll ? filtered : filtered.slice(0, 12);

  const handleOpenProduct = (item: FolderImageItem) => {
    const linked = item.linkedProducts[0];
    if (!linked) return;
    const match = products.find((p) => p.id === linked.id);
    if (match) {
      setLightboxImage(null);
      onSelectProduct(match);
    }
  };

  return (
    <section id="product-image-folder" className="py-12 bg-[#F5F5F7] border-y border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FEEEEF] border border-red-200 text-[#A20B1A] text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Live Asset Directory · /public/assets/{activeFolder}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232429] tracking-tight">
              Product Image Folder Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] mt-1">
              Live folder view synchronized directly with stored product, category, and showcase assets.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search image filename..."
                className="pl-9 pr-3 py-2 text-xs bg-white border border-[#E6E6E6] rounded-xl outline-none focus:border-[#A20B1A] w-52 sm:w-64"
              />
            </div>
            <button
              onClick={() => loadFolder(activeFolder)}
              className="px-3 py-2 bg-white hover:bg-zinc-50 border border-[#E6E6E6] rounded-xl text-xs font-bold text-[#232429] flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Refresh live folder"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#A20B1A] ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Folder Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {folders.map((f) => {
            const active = f.folder === activeFolder;
            return (
              <button
                key={f.folder}
                onClick={() => {
                  setActiveFolder(f.folder);
                  setShowAll(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  active
                    ? 'bg-[#A20B1A] text-white border-[#A20B1A] shadow-sm'
                    : 'bg-white text-[#232429] border-[#E6E6E6] hover:border-[#A20B1A]/50'
                }`}
              >
                <FolderOpen className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-[#A20B1A]'}`} />
                <span>{FOLDER_LABELS[f.folder] || f.folder}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] tabular-nums ${
                    active ? 'bg-white/20 text-white' : 'bg-[#F5F5F7] text-zinc-600'
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Grid */}
        {loading && images.length === 0 ? (
          <div className="py-12 text-center text-xs text-zinc-500">Loading product images from /assets/{activeFolder}...</div>
        ) : visibleImages.length === 0 ? (
          <div className="py-12 text-center bg-white rounded-2xl border border-[#E6E6E6] space-y-2">
            <ImageIcon className="w-8 h-8 text-zinc-300 mx-auto" />
            <p className="text-xs font-bold text-[#232429]">No matching images in /assets/{activeFolder}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {visibleImages.map((item) => (
                <div
                  key={item.url}
                  onClick={() => setLightboxImage(item)}
                  className="group bg-white rounded-2xl border border-[#E6E6E6] hover:border-[#A20B1A] overflow-hidden shadow-2xs hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-square bg-gradient-to-b from-[#FAFBFD] to-[#F3F4F6] p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#232429] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#A20B1A]" />
                        View
                      </span>
                    </div>
                    <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-white/90 border border-zinc-200 text-[9px] font-bold text-zinc-600 uppercase">
                      {item.extension} · {formatSize(item.sizeBytes)}
                    </span>
                  </div>
                  <div className="p-2.5 border-t border-zinc-100">
                    <p className="text-[11px] font-bold text-[#232429] truncate" title={item.title}>
                      {item.title}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-400 truncate" title={item.url}>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length > 12 && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="px-5 py-2 bg-white hover:bg-zinc-50 border border-[#E6E6E6] hover:border-[#A20B1A] text-xs font-bold text-[#232429] rounded-xl shadow-2xs transition-all cursor-pointer"
                >
                  {showAll ? 'Show Less' : `View All ${filtered.length} Images in /${activeFolder}`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Live Image Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#E6E6E6] flex items-center justify-between bg-[#F5F5F7]">
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-[#232429] truncate">{lightboxImage.title}</h3>
                <p className="text-[11px] font-mono text-zinc-500 truncate">{lightboxImage.url}</p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 text-zinc-500 hover:text-[#232429] rounded-lg hover:bg-zinc-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 bg-white flex items-center justify-center max-h-[60vh]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[50vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="p-4 border-t border-[#E6E6E6] bg-[#F5F5F7] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-zinc-600">
                Folder: <strong className="text-[#232429]">/assets/{lightboxImage.folder}</strong> · Size:{' '}
                <strong className="text-[#232429]">{formatSize(lightboxImage.sizeBytes)}</strong>
              </div>

              {lightboxImage.linkedProducts.length > 0 && (
                <button
                  onClick={() => handleOpenProduct(lightboxImage)}
                  className="px-4 py-2 bg-[#A20B1A] hover:bg-[#810916] text-white font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Linked Product</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
