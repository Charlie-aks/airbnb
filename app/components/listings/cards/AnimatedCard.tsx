"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// 1. Sửa interface: Nhận children thay vì room
interface AnimatedCardProps {
  children: React.ReactNode; 
}

export default function AnimatedCard({ children }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, 
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full" // Thêm h-full để tránh lỗi layout
    >
      {/* 2. Render children ở đây */}
      {children} 
    </motion.div>
  );
}