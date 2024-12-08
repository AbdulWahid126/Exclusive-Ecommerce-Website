import { ChevronRight } from 'lucide-react'

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
]

export default function CategorySidebar() {
  return (
    <aside className="hidden w-64 pr-8 sm:block">
      <nav>
        <ul className="space-y-4 border-r">
          {categories.map((category) => (
            <li key={category}>
              <button className="flex items-center justify-between w-full text-left hover:text-gray-600 group">
                <span>{category}</span>
                <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

