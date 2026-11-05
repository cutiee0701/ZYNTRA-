import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { api } from '../lib/api';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const msg = await api.subscribeNewsletter(email);
      setStatus('success');
      setMessage(msg || 'Subscribed successfully! Use coupon WELCOME10 for 10% off.');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Subscription failed. Please try again.');
    }
  };

  return (
    <section className="py-14 bg-[#A20B1A] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 text-white mb-4 border border-white/20 backdrop-blur-xs">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Join the Zyntra Insider Circle
        </h2>
        <p className="text-xs sm:text-sm text-red-100 mt-2 max-w-lg mx-auto leading-relaxed">
          Get secret flash drop alerts, product launch invitations, and receive a flat <strong className="text-white underline">10% welcome coupon</strong> immediately.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-xs bg-white text-[#232429] placeholder:text-[#777777] rounded-lg border border-white outline-none focus:ring-2 focus:ring-white/40 shadow-xs"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-[#232429] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-60"
          >
            <span>{status === 'loading' ? 'Verifying...' : 'Subscribe'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Real feedback from backend */}
        {status === 'success' && (
          <div className="mt-4 inline-flex items-center gap-2 p-3 bg-white/20 border border-white/30 rounded-lg text-white text-xs font-semibold backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-300" />
            <span>{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 inline-flex items-center gap-2 p-3 bg-black/40 border border-red-300 rounded-lg text-red-200 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </section>
  );
};
