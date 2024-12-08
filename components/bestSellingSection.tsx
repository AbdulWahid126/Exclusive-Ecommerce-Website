"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "The North Coat",
    image: "/assets/Frame05.png?height=200&width=200",
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/assets/Frame06.png?height=200&width=200",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/assets/Frame07.png?height=200&width=200",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small Bookshelf",
    image: "/assets/Frame08.png?height=200&width=200",
    currentPrice: 360,
    rating: 5,
    reviews: 65,
  },
];

export default function BestSellingSection() {
  return (
    <section className="w-full px-4 py-8 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="text-red-500 font-medium">This Month</div>
            <h2 className="text-2xl font-bold">Best Selling Products</h2>
          </div>
          <Button
            variant="outline"
            className="bg-red-500 text-white hover:bg-red-600"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group border-none">
              <div className="relative aspect-square bg-secondary p-10">
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white rounded-full"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">
                    ${product.currentPrice}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
