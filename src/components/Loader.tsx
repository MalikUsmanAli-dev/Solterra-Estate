import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--color-charcoal)]"
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.span
            className="eyebrow mb-5 text-[var(--color-gold-light)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Solterra Estate
          </motion.span>
          <div className="relative overflow-hidden">
            <motion.h1
              className="font-display text-3xl md:text-5xl tracking-[0.06em] text-[var(--color-ivory)]"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Where time slows.
            </motion.h1>
          </div>
          <motion.div
            className="mt-10 h-px w-40 bg-[var(--color-gold)]/40 overflow-hidden"
          >
            <motion.div
              className="h-full bg-[var(--color-gold)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
