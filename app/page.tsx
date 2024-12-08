import BestSellingSection from '@/components/bestSellingSection'
import CategoryBrowser from '@/components/categoryBrowser'
import CategorySidebar from '@/components/CategorySidebar'
import ExploreProducts from '@/components/exploreProducts'
import FlashSaleSection from '@/components/flashSaleSection'
import HeroCarousel from '@/components/HeroCarousel'
import NewArrival from '@/components/newArrival'
import PromoBanner from '@/components/promoBanner'

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex">
          <CategorySidebar />
          <div className="flex-1">
            <HeroCarousel />
          </div>
        </div>
        <div className='flex-col'>
            <FlashSaleSection />
            <CategoryBrowser />
            <BestSellingSection />
            <PromoBanner />
            <ExploreProducts />
            <NewArrival />
        </div>
      </main>
    </>
  )
}

