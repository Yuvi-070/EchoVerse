"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 30, rotateX: 15, scale: 0.98 },
  animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
  exit: { opacity: 0, y: -30, rotateX: -15, scale: 0.98 },
};

const transition = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={transition}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}