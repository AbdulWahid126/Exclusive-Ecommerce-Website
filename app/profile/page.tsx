'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: 'Kingston, 5236, United States',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Profile data submitted:', profileData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex mb-6">
        <div className="w-1/4">
          <h2 className="text-2xl font-bold mb-4">Manage My Account</h2>
          <nav>
            <ul className="space-y-2">
              <li><Link href="/profile" className="text-red-500">My Profile</Link></li>
              <li><Link href="/address-book">Address Book</Link></li>
              <li><Link href="/payment-options">My Payment Options</Link></li>
            </ul>
          </nav>
          <h2 className="text-2xl font-bold mt-8 mb-4">My Orders</h2>
          <nav>
            <ul className="space-y-2">
              <li><Link href="/orders">My Returns</Link></li>
              <li><Link href="/cancellations">My Cancellations</Link></li>
            </ul>
          </nav>
        </div>
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-6">Edit Your Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Password Changes</h3>
              <div className="space-y-2">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={profileData.currentPassword}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2"
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={profileData.newPassword}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2"
                />
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  value={profileData.confirmNewPassword}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button type="button" className="px-4 py-2 border rounded-md">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

