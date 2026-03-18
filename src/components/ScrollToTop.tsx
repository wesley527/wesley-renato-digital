import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed left-3 bottom-4 sm:left-4 sm:bottom-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-primary bg-card shadow-[0_0_15px_hsl(var(--primary-glow))] transition-shadow hover:shadow-[0_0_25px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--primary-glow))]"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
