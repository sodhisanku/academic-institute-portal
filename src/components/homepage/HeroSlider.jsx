import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Excellence in Technical Education",
      subtitle: "Shaping Tomorrow's Engineers and Innovators",
      description: "NIT Silchar stands as a beacon of engineering education, fostering innovation and research excellence since its establishment.",
      buttonText: "Explore Programs",
      buttonLink: "/academics",
      background: "bg-gradient-hero"
    },
    {
      title: "Research & Innovation Hub",
      subtitle: "Advancing Science and Technology",
      description: "Our state-of-the-art research facilities and distinguished faculty drive cutting-edge research in various engineering disciplines.",
      buttonText: "Research Areas",
      buttonLink: "/research",
      background: "bg-gradient-primary"
    },
    {
      title: "Campus Life & Beyond",
      subtitle: "Holistic Development Experience",
      description: "Beyond academics, we nurture well-rounded individuals through sports, cultural activities, and leadership opportunities.",
      buttonText: "Campus Tour",
      buttonLink: "/institute/campus",
      background: "bg-gradient-accent"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`h-full ${slide.background} text-white flex items-center`}>
            <div className="container-academic">
              <div className="max-w-3xl">
                <div className="space-y-6 fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={slide.buttonLink}
                      className="btn-academic bg-white text-[hsl(var(--primary))] hover:bg-white/90 inline-flex items-center justify-center"
                    >
                      {slide.buttonText}
                    </a>
                    <button className="btn-academic-outline border-white text-white hover:bg-white hover:text-[hsl(var(--primary))] inline-flex items-center justify-center">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default HeroSlider;