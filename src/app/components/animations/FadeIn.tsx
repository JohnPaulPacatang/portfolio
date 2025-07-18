"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
};

export default function FadeIn({
  children,
  duration = 0.8,
  delay = 0,
  yOffset = 20,
  className = "",
  once = false,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once, amount: 0.3 }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}
