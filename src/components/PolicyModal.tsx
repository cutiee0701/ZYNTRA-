import React from 'react';
import { X, RotateCcw, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E6E6E6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h2 id="policy-modal-title" className="text-base font-extrabold text-[#232429]">
                Returns & Refund Policy
              </h2>
              <p className="text-xs text-[#777777]">Customer purchase protection & service guidelines</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#777777] hover:text-[#232429] rounded-lg transition-colors cursor-pointer"
            aria-label="Close Returns Policy Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-6 space-y-6 text-sm text-[#232429]">
          {/* Store Owner Configurable Notice Banner */}
          <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] flex items-start gap-3 text-xs text-[#777777]">
            <ShieldAlert className="w-4 h-4 text-[#A20B1A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#232429]">Configurable Policy Notice</p>
              <p className="mt-0.5 leading-relaxed">
                This document serves as Zyntra's official returns and refund policy placeholder. Specific turnaround periods and category exemptions can be configured by the store owner in the admin dashboard.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A20B1A] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              1. Return Eligibility
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              Items are eligible for replacement or return if received damaged, defective, or significantly different from description. Products must remain in original packaging with all included accessories, documentation, and manufacturer tags intact.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A20B1A] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              2. Replacement & Quality Inspection
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              Once a return request is logged with your order number, a reverse pickup is coordinated. Our technical diagnostics team verifies the reported issue before dispatching a brand-new factory-sealed replacement unit.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A20B1A] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              3. Refund Processing
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              Where direct replacement is unavailable, refunds are initiated to the original payment source (UPI, Credit/Debit Card, or NetBanking via Razorpay) within standard banking settlement timeframes. For Cash on Delivery orders, refunds are credited via direct bank transfer or UPI ID.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A20B1A] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              4. How to Initiate
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              To raise a replacement or refund query, have your Order Number ready (e.g. ZY-XXXXXX) and reach out to our customer care team through the support desk.
            </p>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#E6E6E6] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#777777]">Need help with an existing order?</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact?.();
                }}
                className="px-4 py-2 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Contact Support Desk
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white hover:bg-[#F5F5F7] text-[#232429] border border-[#E6E6E6] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
