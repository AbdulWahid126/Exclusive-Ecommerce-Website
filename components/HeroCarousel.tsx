"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: "/assets/iphone.png?height=400&width=400&text=iPhone+14",
    buttonText: "Shop Now",
    buttonLink: "/products/iphone-14",
  },
  // Add more slides as needed
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative bg-black text-white rounded-lg overflow-hidden">
      <div className="relative h-[400px]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-12 flex items-center justify-between">
            <div className="max-w-lg">
              <Image
                src="/assets/appleLogo.png"
                alt="Apple"
                width={50}
                height={50}
                className="mb-4 inline-block"
              />
              <h2 className="text-2xl mb-2 ml-6 inline-block">
                {slides[currentSlide].title}
              </h2>
              <h1 className="text-5xl font-bold mb-6">
                {slides[currentSlide].subtitle}
              </h1>
              <button className="inline-flex items-center text-lg hover:underline ">
                Shop Now
                <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="relative w-[400px] h-[400px]">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-ful"
        aria-label="Previous slide"
      >
        {/* <ChevronLeft className="text-white" /> */}
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
        aria-label="Next slide"
      >
        {/* <ChevronRight className="text-white" /> */}
      </button>
    </div>
  );
}
