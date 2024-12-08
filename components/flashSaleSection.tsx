'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  currentPrice: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "/assets/Frame01.png?height=200&width=200",
    currentPrice: 120,
    originalPrice: 160,
    discount: 45,
    rating: 5,
    reviews: 88
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "/assets/Frame02.png?height=200&width=200",
    currentPrice: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "/assets/Frame03.png?height=200&width=200",
    currentPrice: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "/assets/Frame04.png?height=200&width=200",
    currentPrice: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99
  }
]

export default function FlashSaleSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }
        
        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 }
        
        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }
        
        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }
        
        clearInterval(timer)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full px-4 py-8 md:px-6 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between max-md:block mb-8">
          <div className="space-y-1">
            <div className="text-red-500 font-medium">Today's</div>
            <h2 className="text-2xl font-bold">Flash Sales</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 text-lg font-semibold">
              <div className="text-center">
                <span className="block">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Days</span>
              </div>
              <span>:</span>
              <div className="text-center">
                <span className="block">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Hours</span>
              </div>
              <span>:</span>
              <div className="text-center">
                <span className="block">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Minutes</span>
              </div>
              <span>:</span>
              <div className="text-center">
                <span className="block">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">Seconds</span>
              </div>
            </div>
            <div className="flex gap-2 max-md:hidden">
              <Button variant="outline" size="icon" className='rounded-full bg-secondary hover:bg-gray-200'>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className='rounded-full bg-secondary hover:bg-gray-200'>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="relative group border-none">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                  -{product.discount}%
                </span>
              </div>
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <Button variant="outline" size="icon" className="bg-white rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white rounded-full">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative bg-secondary p-10 aspect-square" >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.currentPrice}</span>
                  <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

