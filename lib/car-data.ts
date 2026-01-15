export type Category = "911" | "Taycan" | "Panamera" | "Macan"

export interface Car {
  id: string
  name: string
  description: string
  image: string
  stat: {
    label: string
    value: string
  }
}

export const carData: Record<Category, Car[]> = {
  "911": [
    {
      id: "911-carrera",
      name: "911 Carrera",
      description: "This is the 911. The Batman of sports cars. Timeless, fast, and always in control.",
      image: "/white-porsche-911-carrera-sports-car-side-view.jpg",
      stat: { label: "0-100 km/h", value: "4.2s" },
    },
    {
      id: "911-turbo-s",
      name: "911 Turbo S",
      description: "When someone says 'supercar killer' — this is what they mean. Raw power, refined soul.",
      image: "/black-porsche-911-turbo-s-sports-car-side-view.jpg",
      stat: { label: "0-100 km/h", value: "2.7s" },
    },
    {
      id: "911-gt3",
      name: "911 GT3",
      description: "Track-bred, street-legal. This car accelerates like your favorite song's beat drop.",
      image: "/red-porsche-911-gt3-sports-car-side-view.jpg",
      stat: { label: "0-100 km/h", value: "3.4s" },
    },
    {
      id: "911-targa",
      name: "911 Targa 4S",
      description: "Open-top vibes with 911 DNA. The convertible that didn't compromise.",
      image: "/silver-porsche-911-targa-convertible-side-view.jpg",
      stat: { label: "0-100 km/h", value: "3.6s" },
    },
  ],
  Taycan: [
    {
      id: "taycan-4s",
      name: "Taycan 4S",
      description: "Taycan feels like listening to synthwave at midnight — silent but intense.",
      image: "/white-porsche-taycan-electric-car-side-view.jpg",
      stat: { label: "Range", value: "464 km" },
    },
    {
      id: "taycan-turbo",
      name: "Taycan Turbo",
      description: "Electric doesn't mean boring. This proves it every time you floor it.",
      image: "/blue-porsche-taycan-turbo-electric-sports-car.jpg",
      stat: { label: "Range", value: "435 km" },
    },
    {
      id: "taycan-turbo-s",
      name: "Taycan Turbo S",
      description: "The fastest Taycan. Instant torque that pins you to your seat like gravity forgot the rules.",
      image: "/gray-porsche-taycan-turbo-s-electric-car-side-view.jpg",
      stat: { label: "0-100 km/h", value: "2.8s" },
    },
    {
      id: "taycan-cross-turismo",
      name: "Taycan Cross Turismo",
      description: "Adventure mode: activated. The electric wagon that doesn't play it safe.",
      image: "/green-porsche-taycan-cross-turismo-wagon.jpg",
      stat: { label: "Range", value: "456 km" },
    },
  ],
  Panamera: [
    {
      id: "panamera",
      name: "Panamera",
      description: "Four doors, infinite possibilities. Luxury that actually knows how to drive.",
      image: "/black-porsche-panamera-luxury-sedan-side-view.jpg",
      stat: { label: "0-100 km/h", value: "5.3s" },
    },
    {
      id: "panamera-4s",
      name: "Panamera 4S",
      description: "Business in the front, Porsche in the soul. Your executive commute, redefined.",
      image: "/white-porsche-panamera-4s-sedan-side-view.jpg",
      stat: { label: "0-100 km/h", value: "4.3s" },
    },
    {
      id: "panamera-turbo-s",
      name: "Panamera Turbo S",
      description: "680 hp in a sedan. Because sometimes you need to drop the kids AND drop jaws.",
      image: "/red-porsche-panamera-turbo-s-luxury-car.jpg",
      stat: { label: "0-100 km/h", value: "3.1s" },
    },
  ],
  Macan: [
    {
      id: "macan",
      name: "Macan",
      description: "The SUV that forgot it was supposed to be practical. Compact, quick, addictive.",
      image: "/blue-porsche-macan-suv-side-view.jpg",
      stat: { label: "0-100 km/h", value: "6.2s" },
    },
    {
      id: "macan-s",
      name: "Macan S",
      description: "More power, same swagger. The daily driver that makes every errand an event.",
      image: "/white-porsche-macan-s-compact-suv.jpg",
      stat: { label: "0-100 km/h", value: "4.6s" },
    },
    {
      id: "macan-gts",
      name: "Macan GTS",
      description: "GTS stands for 'Gets The Stares.' Sportier suspension, meaner attitude.",
      image: "/black-porsche-macan-gts-sporty-suv.jpg",
      stat: { label: "0-100 km/h", value: "4.3s" },
    },
    {
      id: "macan-turbo",
      name: "Macan Turbo",
      description: "The apex predator of compact SUVs. Urban jungle? More like urban playground.",
      image: "/red-porsche-macan-turbo-performance-suv.jpg",
      stat: { label: "0-100 km/h", value: "4.3s" },
    },
  ],
}
