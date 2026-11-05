import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquarePlus, X } from 'lucide-react';
import { Review } from '../types';
import { api } from '../lib/api';

interface ReviewsSectionProps {
  reviews: Review[];
  onReviewAdded: (newReview: Review) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onReviewAdded }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim() || !title.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const created = await api.submitReview({
        productId: 'prod-1',
        authorName: authorName.trim(),
        rating,
        title: title.trim(),
        comment: comment.trim(),
      });
      onReviewAdded(created);
      setModalOpen(false);
      setAuthorName('');
      setTitle('');
      setComment('');
    } catch (err: any) {
      setError(err.message || 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews-section" className="py-14 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A20B1A] uppercase tracking-wider mb-1">
              <span>Verified Customer Feedback</span>
              <span>·</span>
              <span className="text-zinc-500 font-normal">Authentic Community Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232429]">
              Loved by Tech Enthusiasts Across India
            </h2>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="self-start sm:self-auto px-4 py-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-[#E6E6E6] text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#A20B1A]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="p-5 rounded-xl bg-white border border-[#E6E6E6] flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{r.date}</span>
                </div>

                <h4 className="text-xs font-bold text-[#232429] line-clamp-1">{r.title}</h4>
                <p className="text-xs text-[#777777] leading-relaxed line-clamp-4">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#232429]">{r.authorName}</span>
                {r.verifiedPurchase && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Buyer</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#232429] mb-1">Share Your Experience</h3>
            <p className="text-xs text-[#777777] mb-4">Your honest feedback helps the Zyntra community.</p>

            {error && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Vikramaditya Sharma"
                  className="w-full text-xs p-2.5 border border-[#E6E6E6] rounded-lg outline-none focus:border-[#A20B1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-zinc-700 ml-2">{rating} out of 5</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Review Headline</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Outstanding battery life and sound quality"
                  className="w-full text-xs p-2.5 border border-[#E6E6E6] rounded-lg outline-none focus:border-[#A20B1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Describe what you liked, features that stood out, or packaging..."
                  className="w-full text-xs p-2.5 border border-[#E6E6E6] rounded-lg outline-none focus:border-[#A20B1A]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#A20B1A] hover:bg-[#810916] rounded-lg shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Post Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
