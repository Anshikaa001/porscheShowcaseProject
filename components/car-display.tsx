"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Car } from "@/lib/car-data"

interface CarDisplayProps {
  car: Car
  direction: number
  currentIndex: number
  totalCars: number
  onPrev: () => void
  onNext: () => void
  prevCarName: string
  nextCarName: string
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

export function CarDisplay({
  car,
  direction,
  currentIndex,
  totalCars,
  onPrev,
  onNext,
  prevCarName,
  nextCarName,
}: CarDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-16"
    >
      {/* Navigation hints - previous */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-12 top-1/3 -translate-y-1/2 group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 z-10"
        aria-label="Previous car"
      >
        <ChevronLeft className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
        <span className="hidden md:block text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity max-w-[100px] truncate">
          {prevCarName}
        </span>
      </button>

      {/* Navigation hints - next */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-12 top-1/3 -translate-y-1/2 group flex items-center gap-2 text-muted-foreground hover:text-accent-blue transition-colors duration-300 z-10"
        aria-label="Next car"
      >
        <span className="hidden md:block text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity max-w-[100px] truncate">
          {nextCarName}
        </span>
        <ChevronRight className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Car Info - ABOVE the car */}
      <AnimatePresence mode="wait">
        <motion.div
          key={car.id + "-info"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">{car.name}</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">{car.description}</p>
          <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase">
            <span className="text-accent font-medium">{car.stat.label}</span>
            <span className="w-px h-4 bg-border" />
            <span className="font-bold text-accent-blue">{car.stat.value}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Car Image Container - BELOW the info */}
      <div className="relative w-full max-w-3xl aspect-[16/7]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={car.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative animate-float">
              <img
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                className="w-full h-auto max-h-[350px] object-contain drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 rounded-[50%] blur-2xl animate-shadow bg-gradient-to-r from-accent/50 via-accent-blue/30 to-accent/50" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: totalCars }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-accent to-accent-blue"
                : "w-1.5 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}
