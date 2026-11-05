import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ExternalLink, ShieldCheck, Truck, Heart, Phone, ShoppingBag, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenTracking?: () => void;
  onOpenContact?: () => void;
  onOpenWishlist?: () => void;
  onOpenPolicy?: () => void;
  onExploreProducts?: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  categoryTag: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenTracking,
  onOpenContact,
  onOpenWishlist,
  onOpenPolicy,
  onExploreProducts,
}) => {
  // State: Only one item open at a time (null if all closed, default 0 for welcoming experience)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      categoryTag: 'Ordering',
      question: 'How can I place an order on Zyntra?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            Browse products, select your preferred item, add it to your cart, and follow the checkout instructions to complete your order.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => {
                if (onExploreProducts) {
                  onExploreProducts();
                } else {
                  const el = document.getElementById('catalogue');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F7] hover:bg-[#FEEEEF] text-[#A20B1A] border border-[#E6E6E6] hover:border-red-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Browse Catalog</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-2',
      categoryTag: 'Payments',
      question: 'What payment methods do you accept?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            We support all payment methods configured in our secure checkout system:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#232429]">
            <li className="flex items-center gap-2 p-2 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A20B1A]" />
              <span><strong>Razorpay Gateway:</strong> Visa, Mastercard, RuPay & NetBanking</span>
            </li>
            <li className="flex items-center gap-2 p-2 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A20B1A]" />
              <span><strong>UPI Payments:</strong> Google Pay, PhonePe, Paytm & BHIM</span>
            </li>
            <li className="flex items-center gap-2 p-2 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A20B1A]" />
              <span><strong>Cash on Delivery (COD):</strong> Pay in cash at your doorstep</span>
            </li>
            <li className="flex items-center gap-2 p-2 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A20B1A]" />
              <span><strong>Bank Grade Security:</strong> 256-bit encrypted checkout</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'faq-3',
      categoryTag: 'Tracking',
      question: 'How can I track my order?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            You can track your order using the order tracking feature on our store. Enter your unique Order Number (e.g. <code>ZY-XXXXXX</code>) to view live consignment milestones, courier dispatch status, and expected delivery date.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenTracking}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Open Order Tracking</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-4',
      categoryTag: 'Returns',
      question: 'What is your return and refund policy?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            Review our official return and replacement terms for product eligibility, inspection protocols, and refund processing details.
          </p>
          <div className="p-3 bg-[#F5F5F7] rounded-xl border border-[#E6E6E6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <p className="font-semibold text-[#232429]">Returns & Refunds Policy</p>
              <p className="text-zinc-500 text-[11px] mt-0.5">Placeholder policy documentation configured for store operations</p>
            </div>
            <button
              onClick={onOpenPolicy}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-zinc-50 text-[#A20B1A] border border-[#E6E6E6] hover:border-red-200 font-bold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <span>View Policy Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-5',
      categoryTag: 'Delivery',
      question: 'How long does delivery take?',
      answer: (
        <div className="space-y-2">
          <p className="text-zinc-600 leading-relaxed text-sm">
            Standard delivery typically takes <strong>48 to 72 hours</strong> for major metropolitan areas across India, and <strong>3 to 5 business days</strong> for regional tier-2 and tier-3 locations.
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed">
            All orders above ₹999 qualify for Free Express Shipping (otherwise ₹99 applies). You can also verify real-time pin code delivery estimates provided at checkout.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-6',
      categoryTag: 'Orders',
      question: 'Can I cancel or modify my order?',
      answer: (
        <div className="space-y-2 text-sm text-zinc-600">
          <p className="leading-relaxed">
            Orders can be cancelled or modified before they enter the "Dispatched" phase in our fulfillment warehouse.
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            To request an immediate cancellation or address correction, open your Order Tracking status or contact our customer support team with your order number as soon as possible.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-7',
      categoryTag: 'Support',
      question: 'How can I contact Zyntra customer support?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            Our dedicated customer concierge team is available to help with orders, tech specifications, and inquiries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <p className="font-bold text-[#232429]">Helpline Desk</p>
              <p className="text-[#A20B1A] font-semibold mt-0.5">+91 98765 43210</p>
              <p className="text-[10px] text-zinc-400">9:00 AM – 8:00 PM IST (Mon – Sat)</p>
            </div>
            <div className="p-2.5 bg-[#F5F5F7] rounded-lg border border-[#E6E6E6]">
              <p className="font-bold text-[#232429]">Email Support</p>
              <p className="text-[#A20B1A] font-semibold mt-0.5">support@zyntra.in</p>
              <p className="text-[10px] text-zinc-400">Average response within 2 hours</p>
            </div>
          </div>
          <div className="pt-1">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Open Contact Us Modal</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-8',
      categoryTag: 'Wishlist',
      question: 'How do I add a product to my wishlist?',
      answer: (
        <div className="space-y-3">
          <p className="text-zinc-600 leading-relaxed text-sm">
            Simply click the heart icon located on any product card or in the product view modal to save it to your wishlist. You can view, manage, or move items to your cart anytime by clicking the Wishlist (heart) icon in the navigation bar.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenWishlist}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FEEEEF] hover:bg-red-100 text-[#A20B1A] border border-red-200 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-[#A20B1A]" />
              <span>View My Wishlist</span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="faq-section" 
      className="py-16 md:py-20 bg-white border-t border-[#E6E6E6] relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEEEEF] border border-red-100 text-[11px] font-bold text-[#A20B1A] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Guidance</span>
          </div>

          <h2 
            id="faq-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#232429] tracking-tight"
          >
            Frequently Asked Questions
          </h2>

          {/* Subtle red accent line below heading */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#A20B1A] to-[#810916] rounded-full mx-auto my-3.5" />

          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
            Have questions? Find answers to the most common questions about shopping with Zyntra.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#A20B1A]/40 bg-[#FFFFFF] shadow-sm'
                    : 'border-[#E6E6E6] bg-white hover:border-zinc-300'
                }`}
              >
                {/* Accordion Header / Clickable Row */}
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20B1A] rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-3">
                    <span 
                      className={`text-xs font-bold px-2 py-0.5 rounded-md transition-colors shrink-0 ${
                        isOpen 
                          ? 'bg-[#A20B1A] text-white' 
                          : 'bg-[#F5F5F7] text-zinc-500 group-hover:text-[#232429]'
                      }`}
                    >
                      Q{index + 1}
                    </span>
                    <span 
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? 'text-[#A20B1A]' : 'text-[#232429] group-hover:text-[#A20B1A]'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Plus / Minus Icon Badge */}
                  <div 
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#A20B1A] text-white rotate-0'
                        : 'bg-[#F5F5F7] text-[#232429] group-hover:bg-[#FEEEEF] group-hover:text-[#A20B1A]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Body with smooth transition */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100 text-sm">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Micro Support Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F5F5F7] border border-[#E6E6E6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#232429]">
              Still have questions about your purchase?
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
              Our Bangalore-based tech support team is ready to assist you anytime.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 bg-[#232429] hover:bg-black text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Contact Customer Care
          </button>
        </div>

      </div>
    </section>
  );
};
