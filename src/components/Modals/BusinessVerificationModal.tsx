import React from 'react';
import { X, ShieldCheck, CheckCircle2, Clock, ExternalLink, FileText, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface BusinessVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessVerificationModal: React.FC<BusinessVerificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div
        className="max-w-2xl w-full luxury-glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Audit Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Governance & Verification Audit</span>
        </div>

        <h3 id="audit-modal-title" className="font-cinzel text-2xl font-bold text-white">
          Business Details & Content Verification
        </h3>

        <p className="text-xs sm:text-sm text-[#9eb6a9] mt-2 leading-relaxed">
          In strict accordance with the master creative brief, this website maintains all verified business attributes and clearly flags details requiring client/owner sign-off before launch.
        </p>

        {/* Source of Truth Links */}
        <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap gap-4 text-xs">
          <a
            href={siteConfig.contact.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white"
          >
            <span>Official Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-white/20">|</span>
          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white"
          >
            <span>Google Maps Listing</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-white/20">|</span>
          <span className="text-white/60 font-mono">Location: Howrah, WB</span>
        </div>

        {/* Audit Table */}
        <div className="mt-6 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          {siteConfig.verificationAudit.map((item) => (
            <div
              key={item.field}
              className="p-4 rounded-xl bg-[#070c0a]/90 border border-white/10 text-xs space-y-1.5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{item.field}</span>
                {item.status === 'verified' ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                    <Clock className="w-3 h-3" /> Pending Confirmation
                  </span>
                )}
              </div>
              <p className="font-mono text-emerald-200/90 text-[11px]">{item.value}</p>
              <p className="text-[#8fa79b] text-[11px] leading-relaxed">{item.notes}</p>
            </div>
          ))}
        </div>

        {/* Central Configuration Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[11px] text-[#8fa79b]">
            Central content file:{' '}
            <code className="text-emerald-300 font-mono">src/data/siteConfig.ts</code>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-colors"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
