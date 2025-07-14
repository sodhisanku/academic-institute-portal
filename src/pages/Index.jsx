import React from 'react';
import { BookOpen, Users, Home, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Astha Vidya Mandir
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Excellence in Education Since Our Foundation
          </p>
          <p className="text-lg mb-8 text-blue-200">
            Jawanga, Geedam, Dantewada, Chhattisgarh – 494441
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
              Apply Now
            </a>
            <a href="/gallery" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Students", icon: Users },
              { number: "15+", label: "Years of Excellence", icon: Award },
              { number: "50+", label: "Qualified Teachers", icon: BookOpen },
              { number: "24/7", label: "Hostel Care", icon: Home }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=face"
                alt="Principal"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Principal's Message</h2>
              <p className="text-gray-600 leading-relaxed">
                "Welcome to Astha Vidya Mandir, where we nurture young minds with dedication, 
                care, and excellence. Our mission is to provide holistic education that combines 
                academic rigor with character development, preparing students for a bright future."
              </p>
              <p className="text-gray-600 leading-relaxed">
                "With our modern facilities, experienced faculty, and comprehensive hostel care, 
                we create an environment where every child can thrive and discover their potential."
              </p>
              <div className="pt-4">
                <p className="font-semibold text-gray-800">- Dr. [Principal Name]</p>
                <p className="text-gray-600">Principal, Astha Vidya Mandir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive education with world-class facilities and caring environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Smart classrooms, qualified teachers, and modern teaching methods",
                icon: BookOpen,
                features: ["Smart Classrooms", "Qualified Faculty", "Modern Curriculum", "Regular Assessments"]
              },
              {
                title: "Hostel Facility",
                description: "Safe and comfortable accommodation with 24/7 care",
                icon: Home,
                features: ["Separate Boys/Girls Dorms", "24/7 Security", "Nutritious Meals", "Medical Care"]
              },
              {
                title: "Co-curricular Activities",
                description: "Sports, arts, music, and personality development programs",
                icon: Award,
                features: ["Sports Activities", "Cultural Programs", "Arts & Crafts", "Yoga & Meditation"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch for admissions and inquiries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                Astha Vidya Mandir<br />
                Jawanga, Geedam<br />
                Dantewada, Chhattisgarh – 494441
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">
                +91-XXXXXXXXXX<br />
                +91-XXXXXXXXXX
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                info@asthavidyamandir.edu.in<br />
                admissions@asthavidyamandir.edu.in
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
