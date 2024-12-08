import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="mt-4 flex">
            <input type="email" placeholder="Enter your email" className="bg-black border border-white px-4 py-2 rounded-sm" />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="/profile">My Account</Link></li>
            <li><Link href="/login">Login / Register</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
            <li><Link href="/">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms Of Use</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Download App</h3>
          <p className="mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <div className="w-24 h-24 mt-1">
            <img src="/assets/Qr Code.png?height=40&width=120" alt="Qr Code" className="" />
            </div>
            <div className="space-y-2">
              <img src="/assets/AppStore.png?height=40&width=120" alt="App Store" className="h-10" />
              <img src="/assets/playstore.png?height=40&width=120" alt="Google Play" className="h-10" />
            </div>
          </div>
          <div className="flex space-x-4">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-primary">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

