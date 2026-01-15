"use client"

import { useState, useCallback } from "react"
import { Navbar } from "./navbar"
import { CarDisplay } from "./car-display"
import { CategoryIntro } from "./category-intro"
import { carData, type Category } from "@/lib/car-data"
import { AnimatePresence, motion } from "framer-motion"

export function PorscheShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("911")
  const [currentCarIndex, setCurrentCarIndex] = useState(0)
  const [showIntro, setShowIntro] = useState(true)
  const [direction, setDirection] = useState(0)

  const cars = carData[activeCategory]

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category)
    setCurrentCarIndex(0)
    setShowIntro(true)
    setDirection(0)
  }, [])

  const handleExplore = useCallback(() => {
    setShowIntro(false)
  }, [])

  const handlePrevCar = useCallback(() => {
    setDirection(-1)
    setCurrentCarIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1))
  }, [cars.length])

  const handleNextCar = useCallback(() => {
    setDirection(1)
    setCurrentCarIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1))
  }, [cars.length])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Big PORSCHE wordmark */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-12 pb-4 px-8 md:px-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-[0.4em] text-foreground">
          PORSCHE
        </h1>
      </motion.header>

      {/* Navbar */}
      <Navbar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      {/* Main Content */}
      <main className="relative min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <CategoryIntro key={`intro-${activeCategory}`} category={activeCategory} onExplore={handleExplore} />
          ) : (
            <CarDisplay
              key={`display-${activeCategory}`}
              car={cars[currentCarIndex]}
              direction={direction}
              currentIndex={currentCarIndex}
              totalCars={cars.length}
              onPrev={handlePrevCar}
              onNext={handleNextCar}
              prevCarName={cars[currentCarIndex === 0 ? cars.length - 1 : currentCarIndex - 1].name}
              nextCarName={cars[currentCarIndex === cars.length - 1 ? 0 : currentCarIndex + 1].name}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
