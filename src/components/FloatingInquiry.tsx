import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FloatingInquiry() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            to="/reservations"
            data-cursor-hover
            className="flex items-center gap-2 bg-[var(--color-white)] px-6 py-3.5 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-ivory)] shadow-[0_10px_40px_rgba(44,44,44,0.35)] transition-colors duration-400 hover:bg-[var(--color-terra)]"
          >
            Request Availability
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
