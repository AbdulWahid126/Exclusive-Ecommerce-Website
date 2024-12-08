import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Wishlist() {
  const wishlistItems = [
    { id: 1, name: 'Gucci Duffle Bag', price: 960, image: '/placeholder.svg?height=200&width=200&text=Gucci%20Bag' },
    { id: 2, name: 'RGB liquid CPU Cooler', price: 1960, image: '/placeholder.svg?height=200&width=200&text=CPU%20Cooler' },
    { id: 3, name: 'GP11 Shooter USB Gamepad', price: 550, image: '/placeholder.svg?height=200&width=200&text=Gamepad' },
    { id: 4, name: 'Quilted Satin Jacket', price: 750, image: '/placeholder.svg?height=200&width=200&text=Jacket' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist (4)</h1>
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">Move All To Bag</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <Image src={item.image} alt={item.name} width={200} height={200} className="mb-4" />
            <h3 className="font-semibold mb-2">{item.name}</h3>
            <p className="text-red-500 mb-4">${item.price.toFixed(2)}</p>
            <button className="w-full px-4 py-2 bg-black text-white rounded-md flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Just For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <Image src={`/placeholder.svg?height=200&width=200&text=Product ${i}`} alt={`Product ${i}`} width={200} height={200} className="mb-4" />
              <h3 className="font-semibold mb-2">Recommended Product</h3>
              <p className="text-red-500">$99.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

