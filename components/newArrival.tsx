import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react'
import Image from "next/image"

export default function NewArrival() {
  return (
    <section className="w-full px-4 py-8 md:px-6">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-1">
          <div className="text-red-500 font-medium">Featured</div>
          <h2 className="text-2xl font-bold">New Arrival</h2>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PS5 Featured Card */}
          <Card className="bg-black text-white overflow-hidden">
            <CardContent className="p-0 relative aspect-[1/1]">
              <Image
                src="/assets/ps5.png?height=600&width=800"
                alt="PlayStation 5"
                className="object-cover px-6 pt-10"
                fill
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                <p className="text-sm text-gray-200 mb-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Button variant="link" className="text-white p-0 h-auto hover:no-underline">
                  Shop Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Side Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Women's Collections */}
            <Card className="col-span-2 bg-black text-white overflow-hidden">
              <CardContent className="p-0 relative aspect-[2/1]">
                <Image
                  src="/assets/headGirl.png?height=300&width=600"
                  alt="Women's Collections"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Button variant="link" className="text-white p-0 h-auto hover:no-underline">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card className="bg-black text-white overflow-hidden">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/assets/spiker3.png?height=300&width=300"
                  alt="Speakers"
                  className="object-cover p-8"
                  fill
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-lg font-bold mb-2">Speakers</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    Premium wireless speakers.
                  </p>
                  <Button variant="link" className="text-white p-0 h-auto hover:no-underline">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Perfume */}
            <Card className="bg-black text-white overflow-hidden">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/assets/gucciPerfume.png?height=300&width=300"
                  alt="Perfume"
                  className="object-cover p-8"
                  fill
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-lg font-bold mb-2">Perfume</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Button variant="link" className="text-white p-0 h-auto hover:no-underline">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full text-gray-100 bg-primary flex items-center justify-center">
              <Truck className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-muted-foreground">Free delivery for all orders over $140</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary text-gray-100 flex items-center justify-center">
              <HeadphonesIcon className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-muted-foreground">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full text-gray-100 bg-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-muted-foreground">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}

