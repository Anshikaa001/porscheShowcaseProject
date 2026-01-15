"use client"

import { motion } from "framer-motion"
import type { Category } from "@/lib/car-data"

const categoryIntros: Record<Category, { title: string; description: string; highlight: string }> = {
  "911": {
    title: "The 911",
    description: "The icon that started it all. Over 60 years of evolution, zero compromise on soul.",
    highlight: "Timeless performance",
  },
  Taycan: {
    title: "Taycan",
    description:
      "Porsche going electric without losing its soul. Instant torque, silent speed, and range that actually makes sense.",
    highlight: "Electric rebellion",
  },
  Panamera: {
    title: "Panamera",
    description: "Four doors, zero excuses. The sports car that grew up but never sold out.",
    highlight: "Luxury meets track",
  },
  Macan: {
    title: "Macan",
    description: "The SUV that drives like it forgot what it is. Compact, aggressive, unapologetic.",
    highlight: "Urban predator",
  },
}

interface CategoryIntroProps {
  category: Category
  onExplore: () => void
}

export function CategoryIntro({ category, onExplore }: CategoryIntroProps) {
  const intro = categoryIntros[category]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4"
      >
        {intro.highlight}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground mb-6"
      >
        {intro.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
      >
        {intro.description}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onClick={onExplore}
        className="group flex items-center gap-3 text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300"
      >
        <span>Explore Models</span>
        <motion.span
          className="inline-block"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.div>
  )
}
