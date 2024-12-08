import Link from 'next/link'
import { Search, Heart, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Exclusive
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
              <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
              <li><Link href="/signup" className="hover:text-gray-600">Sign Up</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-4 pr-10 py-2 border rounded-md w-[300px]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Link href="/wishlist" className="hover:text-gray-600">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="hover:text-gray-600">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

