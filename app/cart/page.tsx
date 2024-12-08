'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: '/placeholder.svg?height=100&width=100&text=LCD%20Monitor' },
    { id: 2, name: 'H1 Gamepad', price: 1100, quantity: 2, image: '/placeholder.svg?height=100&width=100&text=H1%20Gamepad' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">
                    <div className="flex items-center">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="mr-4" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="flex items-center">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border">+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between">
            <Link href="/" className="px-4 py-2 bg-gray-200 rounded-md">
              Return To Shop
            </Link>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">
              Update Cart
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="block w-full text-center px-4 py-2 bg-red-500 text-white rounded-md mt-4">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

