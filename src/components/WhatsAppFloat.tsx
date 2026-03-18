import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(153_100%_50%/0.4)]"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
};

export default WhatsAppFloat;
