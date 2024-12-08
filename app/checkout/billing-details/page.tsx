'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BillingDetails() {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    town: '',
    phoneNumber: '',
    emailAddress: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBillingInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Billing info submitted:', billingInfo)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Billing Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={billingInfo.firstName}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block mb-1">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={billingInfo.companyName}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="streetAddress" className="block mb-1">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={billingInfo.streetAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="apartment" className="block mb-1">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={billingInfo.apartment}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="town" className="block mb-1">Town/City</label>
            <input
              type="text"
              id="town"
              name="town"
              value={billingInfo.town}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={billingInfo.phoneNumber}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block mb-1">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={billingInfo.emailAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          <div className="border rounded-md p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>H1 Gamepad</span>
              <span>$1100</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="radio" name="payment" value="bank" className="mr-2" />
              Bank
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" value="cash" className="mr-2" />
              Cash on delivery
            </label>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full border rounded-md px-3 py-2 mb-2"
            />
            <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md">
              Apply Coupon
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-500 text-white rounded-md mt-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

