import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  text: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`p-3.5 rounded-xl shadow-xl flex items-center justify-between gap-3 text-xs font-semibold pointer-events-auto border transition-all animate-in slide-in-from-bottom-2 ${
            t.type === 'success'
              ? 'bg-zinc-950 text-white border-zinc-800'
              : t.type === 'error'
              ? 'bg-red-950 text-white border-red-800'
              : 'bg-zinc-900 text-white border-zinc-700'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {t.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
            {t.type === 'error' && <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />}
            {t.type === 'info' && <Info className="w-4 h-4 text-blue-400 shrink-0" />}
            <span>{t.text}</span>
          </div>

          <button
            onClick={() => onDismiss(t.id)}
            className="text-zinc-400 hover:text-white p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
