import React, { useState } from 'react';
import { 
  X, Mail, Phone, MapPin, Send, MessageSquare, 
  Clock, ShieldCheck, CheckCircle2 
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry?: (message: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSubmitInquiry,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Query & Order Support');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    onSubmitInquiry?.(`Inquiry from ${name} (${email}): ${message}`);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E6E6E6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#232429]">
                Contact Zyntra Customer Care
              </h2>
              <p className="text-xs text-[#777777]">We typically respond within 2 business hours</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#777777] hover:text-[#232429] rounded-lg cursor-pointer"
            aria-label="Close Contact Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Support Channels Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-[#F5F5F7] rounded-xl border border-[#E6E6E6] text-xs">
              <Phone className="w-4 h-4 text-[#A20B1A] mb-1.5" />
              <p className="font-bold text-[#232429]">Helpline</p>
              <p className="text-[11px] text-[#777777] mt-0.5">+91 98765 43210</p>
              <p className="text-[10px] text-zinc-400">9 AM – 8 PM IST</p>
            </div>

            <div className="p-3 bg-[#F5F5F7] rounded-xl border border-[#E6E6E6] text-xs">
              <Mail className="w-4 h-4 text-[#A20B1A] mb-1.5" />
              <p className="font-bold text-[#232429]">Official Email</p>
              <p className="text-[11px] text-[#777777] mt-0.5">support@zyntra.in</p>
              <p className="text-[10px] text-zinc-400">24/7 Priority Desk</p>
            </div>

            <div className="p-3 bg-[#F5F5F7] rounded-xl border border-[#E6E6E6] text-xs">
              <MapPin className="w-4 h-4 text-[#A20B1A] mb-1.5" />
              <p className="font-bold text-[#232429]">Experience Hubs</p>
              <p className="text-[11px] text-[#777777] mt-0.5">Mumbai · Delhi · Bengaluru</p>
              <p className="text-[10px] text-zinc-400">Authorised Flagship Centers</p>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          {submitted ? (
            <div className="py-10 text-center space-y-3 bg-[#FEEEEF]/50 rounded-2xl border border-red-100 p-6 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#16803C] text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#232429]">Message Sent to Zyntra Concierge!</h3>
              <p className="text-xs text-[#777777] max-w-sm mx-auto">
                Thank you for reaching out. Ticket #ZYN-{Date.now().toString().slice(-6)} has been created and an executive will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232429] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Yashika Sharma"
                    className="w-full p-2.5 bg-white border border-[#E6E6E6] rounded-xl text-xs text-[#232429] outline-none focus:border-[#A20B1A] focus:ring-1 focus:ring-[#A20B1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232429] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full p-2.5 bg-white border border-[#E6E6E6] rounded-xl text-xs text-[#232429] outline-none focus:border-[#A20B1A] focus:ring-1 focus:ring-[#A20B1A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#232429] mb-1">
                  Topic of Discussion
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#E6E6E6] rounded-xl text-xs text-[#232429] outline-none focus:border-[#A20B1A] cursor-pointer"
                >
                  <option value="Product Query & Order Support">Product Query & Order Support</option>
                  <option value="Warranty & Replacement Claim">Warranty & Replacement Claim</option>
                  <option value="Shipping, Delivery & Tracking">Shipping, Delivery & Tracking</option>
                  <option value="Corporate / Bulk Hardware Inquiries">Corporate / Bulk Hardware Inquiries</option>
                  <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#232429] mb-1">
                  How can our team help you? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the product or order issue..."
                  className="w-full p-2.5 bg-white border border-[#E6E6E6] rounded-xl text-xs text-[#232429] outline-none focus:border-[#A20B1A] focus:ring-1 focus:ring-[#A20B1A] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#777777] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16803C]" />
                  <span>Protected by 256-Bit SSL Privacy Policy</span>
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
