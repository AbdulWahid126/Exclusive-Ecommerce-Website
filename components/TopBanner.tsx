'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-black text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-sm">
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{' '}
          <button className="font-semibold underline ml-2">ShopNow</button>
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
