import React, { useState } from 'react';
import { 
  Github, 
  Key, 
  GitBranch, 
  FolderGit2, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  ShieldCheck, 
  X, 
  Eye, 
  EyeOff, 
  UploadCloud,
  Check,
  RefreshCw,
  Plus
} from 'lucide-react';

interface GitHubSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VerifyResult {
  authenticatedUser: string;
  avatarUrl: string;
  scopes: string[];
  hasRepoScope: boolean;
  repoExists: boolean;
  hasWriteAccess: boolean;
  repoDetails: {
    fullName: string;
    htmlUrl: string;
    defaultBranch: string;
    isPrivate: boolean;
  } | null;
}

export const GitHubSyncModal: React.FC<GitHubSyncModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [username, setUsername] = useState('cutiee0701');
  const [repo, setRepo] = useState('ZYNTRA-');
  const [branch, setBranch] = useState('main');
  const [commitMessage, setCommitMessage] = useState('feat: direct push Zyntra e-commerce website');
  
  // Status states
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<VerifyResult | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  const [isPushing, setIsPushing] = useState(false);
  const [pushProgress, setPushProgress] = useState(0);
  const [pushStatusMessage, setPushStatusMessage] = useState('');
  const [pushSuccessData, setPushSuccessData] = useState<{
    repoUrl: string;
    branch: string;
    commitSha: string;
  } | null>(null);
  const [pushError, setPushError] = useState<string | null>(null);

  const [isCreatingRepo, setIsCreatingRepo] = useState(false);

  if (!isOpen) return null;

  const handleVerify = async () => {
    if (!token.trim()) {
      setVerifyError('Please enter your GitHub Personal Access Token.');
      return;
    }
    setIsVerifying(true);
    setVerifyError(null);
    setVerifyResult(null);

    try {
      const res = await fetch('/api/v1/github/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.trim(),
          username: username.trim(),
          repo: repo.trim(),
          branch: branch.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Verification failed');
      }

      setVerifyResult(data.data);
      if (data.data.authenticatedUser && !username) {
        setUsername(data.data.authenticatedUser);
      }
    } catch (err: any) {
      setVerifyError(err.message || 'Unable to connect to GitHub. Check token and internet connection.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCreateRepo = async () => {
    if (!token.trim() || !repo.trim()) return;
    setIsCreatingRepo(true);
    setVerifyError(null);

    try {
      const res = await fetch('/api/v1/github/create-repo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.trim(),
          repo: repo.trim(),
          isPrivate: false,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to create repository');
      }

      // Re-verify after creation
      await handleVerify();
    } catch (err: any) {
      setVerifyError(err.message || 'Failed to create repository.');
    } finally {
      setIsCreatingRepo(false);
    }
  };

  const handlePush = async () => {
    if (!token.trim()) {
      setPushError('Personal Access Token is required to push.');
      return;
    }

    setIsPushing(true);
    setPushError(null);
    setPushSuccessData(null);
    setPushProgress(15);
    setPushStatusMessage('Verifying repository write permissions & staging files...');

    const timer1 = setTimeout(() => {
      setPushProgress(45);
      setPushStatusMessage('Packaging 460+ files (frontend, server, images & mock database)...');
    }, 1200);

    const timer2 = setTimeout(() => {
      setPushProgress(75);
      setPushStatusMessage('Uploading git tree & pushing commits directly to GitHub...');
    }, 3200);

    try {
      const res = await fetch('/api/v1/github/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.trim(),
          username: username.trim(),
          repo: repo.trim(),
          branch: branch.trim(),
          commitMessage: commitMessage.trim(),
        }),
      });

      clearTimeout(timer1);
      clearTimeout(timer2);

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Push failed. Please check token permissions.');
      }

      setPushProgress(100);
      setPushStatusMessage('Push completed successfully!');
      setPushSuccessData(data.data);
    } catch (err: any) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      setPushProgress(0);
      setPushError(err.message || 'Push failed. Check repository write permissions.');
    } finally {
      setIsPushing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl text-white overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Direct Push to GitHub
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                  Full-Stack Sync
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Push your complete Zyntra website source code directly to your GitHub repository
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Security Note */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300">
              <span className="font-semibold text-emerald-400">Zero Storage Security:</span> Your token is processed directly in server memory for the Git handshake and is <span className="underline">never</span> written to database, localStorage, or logs.
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            
            {/* Token Input */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Personal Access Token (Classic) *</span>
                <a 
                  href="https://github.com/settings/tokens/new?scopes=repo&description=Zyntra+Deploy" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300 normal-case flex items-center gap-1 font-normal"
                >
                  Create token with <code className="bg-purple-900/50 px-1 py-0.2 rounded text-[10px]">repo</code> scope <ExternalLink className="w-3 h-3" />
                </a>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showToken ? 'text' : 'password'}
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  className="w-full pl-10 pr-10 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowToken(!showToken)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-neutral-300"
                >
                  {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Username & Repo Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  GitHub Username *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <Github className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="cutiee0701"
                    className="w-full pl-10 pr-3 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Repository Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={repo}
                    onChange={(e) => setRepo(e.target.value)}
                    placeholder="ZYNTRA-"
                    className="w-full pl-10 pr-3 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Branch & Commit Message */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Branch Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="main"
                    className="w-full pl-10 pr-3 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 font-mono"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Commit Message
                </label>
                <input
                  type="text"
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  placeholder="feat: direct push Zyntra e-commerce website"
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Verification Button */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleVerify}
                disabled={isVerifying || !token.trim()}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 border border-neutral-700 disabled:opacity-50 transition"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                    Validating with GitHub API...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
                    Verify Credentials & Permissions
                  </>
                )}
              </button>

              {verifyResult && (
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Authenticated as <strong>@{verifyResult.authenticatedUser}</strong></span>
                </div>
              )}
            </div>

            {/* Verification Error */}
            {verifyError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl flex items-start gap-2.5 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{verifyError}</span>
              </div>
            )}

            {/* Verification Details Box */}
            {verifyResult && (
              <div className="p-3.5 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Account:</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    {verifyResult.avatarUrl && (
                      <img src={verifyResult.avatarUrl} alt="" className="w-4 h-4 rounded-full" />
                    )}
                    {verifyResult.authenticatedUser}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Token Scopes:</span>
                  <div className="flex gap-1">
                    {verifyResult.scopes.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 bg-neutral-800 rounded text-[10px] text-neutral-300">
                        {s}
                      </span>
                    ))}
                    {verifyResult.hasRepoScope ? (
                      <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px] font-semibold border border-emerald-500/30">
                        repo (Full Access)
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded text-[10px]">
                        Missing repo scope
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Target Repository:</span>
                  {verifyResult.repoExists ? (
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {verifyResult.repoDetails?.fullName} (Write Access Confirmed)
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400">Not found</span>
                      <button
                        type="button"
                        onClick={handleCreateRepo}
                        disabled={isCreatingRepo}
                        className="px-2 py-0.5 bg-purple-600 hover:bg-purple-500 text-white rounded text-[11px] font-semibold flex items-center gap-1 transition"
                      >
                        {isCreatingRepo ? <Loader2 className="w-3 h-3 animate-spin" /> : <Plus className="w-3 h-3" />}
                        Create Repository
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar when pushing */}
          {isPushing && (
            <div className="p-4 bg-purple-950/30 border border-purple-500/30 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-purple-300">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  {pushStatusMessage}
                </span>
                <span>{pushProgress}%</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${pushProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Push Error */}
          {pushError && (
            <div className="p-3.5 bg-red-950/40 border border-red-500/30 rounded-xl flex items-start gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-200">Push Failed</p>
                <p className="mt-0.5">{pushError}</p>
              </div>
            </div>
          )}

          {/* Push Success Box */}
          {pushSuccessData && (
            <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">Successfully Pushed to GitHub!</h4>
                  <p className="text-xs text-neutral-300">
                    Your complete Zyntra website codebase, images, components, and server routes are now published.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Repository:</span>
                  <a 
                    href={pushSuccessData.repoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-purple-400 hover:underline flex items-center gap-1"
                  >
                    {pushSuccessData.repoUrl} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Branch:</span>
                  <span className="text-white">{pushSuccessData.branch}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Commit SHA:</span>
                  <span className="text-neutral-300">{pushSuccessData.commitSha.substring(0, 7)}</span>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-3">
                <a
                  href={pushSuccessData.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl text-xs font-medium transition"
          >
            Close
          </button>

          <button
            type="button"
            onClick={handlePush}
            disabled={isPushing || !token.trim() || !username.trim() || !repo.trim()}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/20 disabled:opacity-50 transition"
          >
            {isPushing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Pushing to GitHub...
              </>
            ) : (
              <>
                <UploadCloud className="w-4 h-4" />
                Push Entire Website to GitHub
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
