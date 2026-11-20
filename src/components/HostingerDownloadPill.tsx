import React, { useState, useEffect } from 'react';
import { Download, Check, Loader2, X, AlertCircle } from 'lucide-react';

const ZIP_PATH = '/country-roads-hostinger-nodejs.zip';
const ZIP_FILENAME = 'country-roads-hostinger-nodejs.zip';

export const HostingerDownloadPill: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'downloading' | 'done' | 'error'>('idle');
  const [progressPct, setProgressPct] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    let cancelled = false;
    fetch(ZIP_PATH, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && res.ok) {
          setIsAvailable(true);
        }
      })
      .catch(() => {
        // Hidden cleanly if archive route is unavailable
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!import.meta.env.DEV || !isAvailable || isDismissed) {
    return null;
  }

  const handleOneClickDownload = async () => {
    if (status === 'downloading') return;
    setStatus('downloading');
    setProgressPct(0);
    setErrorMsg('');

    try {
      const response = await fetch(ZIP_PATH, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const contentLength = Number(response.headers.get('content-length') || 0);
      let blob: Blob;

      if (response.body && contentLength > 0) {
        const reader = response.body.getReader();
        const chunks: Uint8Array[] = [];
        let received = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            received += value.length;
            setProgressPct(Math.min(99, Math.round((received / contentLength) * 100)));
          }
        }
        blob = new Blob(chunks as BlobPart[], { type: 'application/zip' });
      } else {
        blob = await response.blob();
      }

      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = ZIP_FILENAME;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);

      setProgressPct(100);
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Download failed');
    }
  };

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center gap-1.5 max-w-[calc(100vw-130px)]">
      <button
        type="button"
        onClick={handleOneClickDownload}
        disabled={status === 'downloading'}
        data-testid="one-click-zip-download"
        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#05140c] font-semibold text-xs tracking-wide shadow-2xl shadow-black/60 border border-emerald-300/60 transition-all active:scale-95 disabled:opacity-80"
        title="One-click download Hostinger Node.js deployment ZIP"
      >
        {status === 'downloading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            <span>
              Downloading{progressPct !== null ? ` ${progressPct}%` : '...'}
            </span>
          </>
        ) : status === 'done' ? (
          <>
            <Check className="w-4 h-4 shrink-0" />
            <span>ZIP Downloaded</span>
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle className="w-4 h-4 text-red-900 shrink-0" />
            <span>Retry ZIP ({errorMsg})</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Download Hostinger ZIP (14 MB)</span>
            <span className="sm:hidden">Hostinger ZIP</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        aria-label="Hide Hostinger download button"
        className="w-8 h-8 rounded-full bg-[#0b1812]/90 hover:bg-[#13261d] text-emerald-200/80 hover:text-white border border-white/15 flex items-center justify-center shadow-lg transition-colors shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
