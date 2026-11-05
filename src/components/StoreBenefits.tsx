import React from 'react';
import { Truck, RotateCcw, ShieldCheck, HeadphonesIcon } from 'lucide-react';

export const StoreBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Truck className="w-6 h-6 text-[#A20B1A]" />,
      title: 'Free Express Shipping',
      description: 'Zero shipping fee on all orders across India above ₹999.',
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-[#A20B1A]" />,
      title: '7-Day Easy Replacement',
      description: 'Hassle-free doorstep pickup & direct brand replacement.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#A20B1A]" />,
      title: '100% Secure Payments',
      description: 'Powered by Razorpay, UPI, EMI, and verified Cash on Delivery.',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-[#A20B1A]" />,
      title: '24/7 Priority Support',
      description: 'Dedicated tech experts available via phone, chat & email.',
    },
  ];

  return (
    <section id="benefits" className="py-12 bg-white border-y border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] flex items-start gap-4 transition-all hover:border-zinc-300"
            >
              <div className="p-3 rounded-lg bg-white shadow-xs shrink-0 border border-zinc-200">
                {b.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#232429]">{b.title}</h4>
                <p className="text-xs text-[#777777] mt-1 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
