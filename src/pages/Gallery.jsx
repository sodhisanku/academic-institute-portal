import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Smart Classroom Learning",
      category: "Academic"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      title: "Beautiful Campus",
      category: "Campus"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      title: "Morning Assembly",
      category: "Activities"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      title: "School Building",
      category: "Campus"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      title: "Sports Activities",
      category: "Sports"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      title: "Hostel Common Room",
      category: "Hostel"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
      title: "Library & Reading",
      category: "Academic"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=800&h=600&fit=crop",
      title: "Cultural Programs",
      category: "Activities"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop",
      title: "Science Laboratory",
      category: "Academic"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      title: "Annual Day Celebration",
      category: "Activities"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      title: "Hostel Dining Hall",
      category: "Hostel"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      title: "Playground & Sports",
      category: "Sports"
    }
  ];

  const categories = ["All", "Academic", "Campus", "Activities", "Sports", "Hostel"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Capturing precious moments and memories from our vibrant school life, 
            activities, and achievements.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-screen object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey in Pictures</h2>
            <p className="text-gray-600">Years of memories, achievements, and growth</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Happy Moments" },
              { number: "50+", label: "Events Captured" },
              { number: "15+", label: "Years of Memories" },
              { number: "500+", label: "Student Achievements" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;