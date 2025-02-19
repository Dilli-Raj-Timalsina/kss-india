"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import * as Icons from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSlide {
  title: string;
  description: string;
  iconName: string;
  image: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const IconComponent = (Icons as any)[slides[currentSlide].iconName];

  return (
    <div className="relative overflow-hidden">
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-[80vh]">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={75}
                  priority={index === 0} // Prioritize first image
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                  <IconComponent className="w-8 h-8 mx-auto mb-6 text-primary" />
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-primary/90 mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
