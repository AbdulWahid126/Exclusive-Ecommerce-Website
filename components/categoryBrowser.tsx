import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CategoryBrowser() {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Watch },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad },
  ]

  return (
    <section className="w-full px-4 py-8 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="text-red-500 font-medium">Categories</div>
            <h2 className="text-2xl font-bold">Browse By Category</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className='rounded-full bg-secondary hover:bg-gray-200'>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className='rounded-full bg-secondary hover:bg-gray-200'>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = category.name === "Camera"
            
            return (
              <Card
                key={category.name}
                className={`group cursor-pointer transition-colors hover:border-red-500 ${
                  isActive ? "bg-red-500 text-white" : "hover:bg-red-50"
                }`}
              >
                <button className="w-full p-6 flex flex-col items-center justify-center gap-4">
                  <Icon className={`h-6 w-6 ${
                    isActive ? "text-white" : "text-gray-600 group-hover:text-red-500"
                  }`} />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

