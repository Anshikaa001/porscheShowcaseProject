"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Category } from "@/lib/car-data"

const categories: Category[] = ["911", "Taycan", "Panamera", "Macan"]

interface NavbarProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export function Navbar({ activeCategory, onCategoryChange }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="px-8 md:px-16 py-6"
    >
      <ul className="flex gap-8 md:gap-12">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={cn(
                "relative text-sm md:text-base font-medium tracking-widest uppercase transition-opacity duration-300",
                activeCategory === category ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
