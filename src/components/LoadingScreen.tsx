import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6">
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            INITIALIZING SYSTEM
          </span>
          <div className="relative h-[2px] w-48 overflow-hidden bg-secondary">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {progress}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
