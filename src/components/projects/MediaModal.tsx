import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  fit?: "contain" | "cover";
  position?: string;
}

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem[];
  initialIndex?: number;
}

const MediaModal = ({ isOpen, onClose, media, initialIndex = 0 }: MediaModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen, media]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), video[controls]');
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
        if (e.key === "Escape") onClose();
        if ((e.target as HTMLElement).tagName === "VIDEO") return;
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault();
        if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(0, i - 1));
        if (e.key === "ArrowRight") setCurrentIndex((i) => Math.min(media.length - 1, i + 1));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [isOpen, media.length, onClose]);

  const current = media[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Project media viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close media viewer"
              onClick={onClose}
              className="absolute top-2 right-2 z-10 rounded-full bg-background/90 p-2 text-foreground hover:bg-muted transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative rounded-lg overflow-hidden border border-primary/30 box-glow-cyan">
              {current?.type === "image" ? (
                <img
                  src={current.src}
                  alt={current.alt || "Project media"}
                  className="w-full h-auto max-h-[80vh] object-contain bg-card"
                />
              ) : (
                <video
                  key={current?.src}
                  src={current?.src}
                  poster={current?.poster}
                  controls
                  playsInline
                  aria-label={current?.alt || "Project video"}
                  className="w-full max-h-[80vh] bg-card"
                />
              )}
            </div>

            {media.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  type="button"
                  aria-label="Previous media"
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  disabled={currentIndex === 0}
                  className="p-2 rounded border border-border hover:border-primary/40 disabled:opacity-30 transition-all text-muted-foreground hover:text-primary"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="font-mono text-xs text-terminal-comment">
                  {currentIndex + 1} / {media.length}
                </span>
                <button
                  type="button"
                  aria-label="Next media"
                  onClick={() => setCurrentIndex((i) => Math.min(media.length - 1, i + 1))}
                  disabled={currentIndex === media.length - 1}
                  className="p-2 rounded border border-border hover:border-primary/40 disabled:opacity-30 transition-all text-muted-foreground hover:text-primary"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaModal;
export type { MediaItem };
