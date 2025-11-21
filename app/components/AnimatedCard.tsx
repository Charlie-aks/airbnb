"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RoomCard from "./RoomCard";
import { Room } from "@/app/data/rooms";

interface AnimatedCardProps {
  room: Room;
}

export default function AnimatedCard({ room }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // chạy khi 20% card vào viewport
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
    >
      <RoomCard room={room} />
    </motion.div>
  );
}
