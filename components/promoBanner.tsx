'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 23,
    hours: 6,
    minutes: 59,
    seconds: 38
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
    <section className="w-full px-4 py-8 md:px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-black text-white">
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="space-y-2 mb-8">
              <div className="text-green-400">Categories</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Enhance Your<br />Music Experience
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-col items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <span className="text-sm">Hours</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="text-sm">Minutes</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                <span className="text-sm">Seconds</span>
              </div>
            </div>

            <Button className="bg-green-400 hover:bg-green-500 text-black">
              Buy Now
            </Button>
          </div>
          
          <div className="absolute right-0 bottom-0 w-1/2 h-full">
            <img
              src="/assets/spiker.png?height=400&width=400"
              alt="JBL Speaker"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

