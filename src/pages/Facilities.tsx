import React from 'react';
import { Book, Cpu, Trophy, Home, Heart, Wifi, Shield, Car } from 'lucide-react';
import mockData from '../data/mockData.json';

const Facilities = () => {
  const additionalFacilities = [
    {
      name: "Health Center",
      description: "24/7 medical facilities with qualified doctors and nurses",
      image: "/api/placeholder/400/300",
      features: ["Emergency Care", "Pharmacy", "Ambulance Service", "Regular Checkups"],
      icon: Heart
    },
    {
      name: "Wi-Fi Campus",
      description: "High-speed internet connectivity across the entire campus",
      image: "/api/placeholder/400/300",
      features: ["Fiber Optic Network", "24/7 Connectivity", "Student Access", "Faculty Portal"],
      icon: Wifi
    },
    {
      name: "Security Services",
      description: "Round-the-clock security for a safe campus environment",
      image: "/api/placeholder/400/300",
      features: ["CCTV Surveillance", "Security Personnel", "Access Control", "Emergency Response"],
      icon: Shield
    },
    {
      name: "Transportation",
      description: "Convenient transportation services for students and staff",
      image: "/api/placeholder/400/300",
      features: ["Bus Service", "Parking Facilities", "Shuttle Service", "Emergency Transport"],
      icon: Car
    }
  ];

  const allFacilities = [...mockData.facilities, ...additionalFacilities];

  const getIcon = (facilityName: string) => {
    const iconMap: { [key: string]: any } = {
      'Central Library': Book,
      'Computer Center': Cpu,
      'Sports Complex': Trophy,
      'Hostels': Home,
      'Health Center': Heart,
      'Wi-Fi Campus': Wifi,
      'Security Services': Shield,
      'Transportation': Car
    };
    return iconMap[facilityName] || Book;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Campus Facilities</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            State-of-the-art infrastructure and comprehensive facilities to support 
            academic excellence and holistic development.
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">World-Class Infrastructure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our campus provides everything students need for a comprehensive educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allFacilities.map((facility, index) => {
              const IconComponent = getIcon(facility.name);
              return (
                <div key={index} className="card-academic hover-lift">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">{facility.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {facility.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          {facility.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Facility Statistics</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that showcase our comprehensive infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "50,000+", label: "Books in Library", icon: Book },
              { number: "15", label: "Computer Labs", icon: Cpu },
              { number: "20+", label: "Sports Facilities", icon: Trophy },
              { number: "8", label: "Hostels", icon: Home },
              { number: "24/7", label: "Medical Care", icon: Heart },
              { number: "100%", label: "Wi-Fi Coverage", icon: Wifi },
              { number: "50+", label: "Security Personnel", icon: Shield },
              { number: "10", label: "Transport Vehicles", icon: Car }
            ].map((stat, index) => (
              <div key={index} className="card-academic text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Information */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Residential Facilities</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our campus provides comfortable and secure accommodation facilities for students, 
                creating a home away from home environment that fosters learning and personal growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Boys Hostels</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 5 Hostels with 2000+ capacity</li>
                    <li>• Single and shared rooms</li>
                    <li>• Common rooms and study areas</li>
                    <li>• 24/7 security and warden</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Girls Hostels</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 3 Hostels with 800+ capacity</li>
                    <li>• Modern amenities</li>
                    <li>• Recreational facilities</li>
                    <li>• Enhanced security measures</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <a href="/students/hostel" className="btn-academic-outline">
                  Learn More About Hostels
                </a>
              </div>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Hostel Facilities"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Library Focus */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Central Library"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Book className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Central Library</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Central Library is the heart of academic activities, providing extensive 
                resources and modern facilities to support research and learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Collections</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 50,000+ Books</li>
                    <li>• 500+ Journals</li>
                    <li>• Digital Resources</li>
                    <li>• Thesis Collection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Services</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 24/7 Access</li>
                    <li>• Study Rooms</li>
                    <li>• Inter-library Loan</li>
                    <li>• Reference Service</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <a href="/library" className="btn-academic-outline">
                  Explore Library Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;