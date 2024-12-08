import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  price: number
  rating: number
  reviews: number
  isNew?: boolean
  colors?: string[]
  addToCart?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image: "/assets/Frame09.png?height=200&width=200",
    price: 100,
    rating: 4,
    reviews: 35
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: "/assets/Frame10.png?height=200&width=200",
    price: 360,
    rating: 4,
    reviews: 95,
    addToCart: true
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: "/assets/Frame11.png?height=200&width=200",
    price: 700,
    rating: 5,
    reviews: 325
  },
  {
    id: 4,
    name: "Curology Product Set",
    image: "/assets/Frame12.png?height=200&width=200",
    price: 500,
    rating: 4,
    reviews: 145
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: "/assets/Frame13.png?height=200&width=200",
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ['#FF0000', '#000000']
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: "/assets/Frame14.png?height=200&width=200",
    price: 1160,
    rating: 5,
    reviews: 35,
    colors: ['#00FF00', '#FF0000']
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: "/assets/Frame15.png?height=200&width=200",
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: true,
    colors: ['#000000', '#FFFFFF']
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: "/assets/Frame16.png?height=200&width=200",
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ['#008000', '#FF8C00']
  }
]

export default function ExploreProducts() {
  return (
    <section className="w-full px-4 py-8 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="text-red-500 font-medium">Our Products</div>
            <h2 className="text-2xl font-bold">Explore Our Products</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group border-none">
              <div className="relative aspect-square bg-secondary p-12">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                      NEW
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                  <Button variant="outline" size="icon" className="bg-white rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                {product.addToCart && (
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <Button className="w-full bg-black hover:bg-gray-800">
                      Add To Cart
                    </Button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.price}</span>
                </div>
                <div className="flex items-center justify-between">
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
                  {product.colors && (
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
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

