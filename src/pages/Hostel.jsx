import React from 'react';
import { Shield, Users, Utensils, Heart, Clock, Camera, BookOpen, Phone } from 'lucide-react';

const Hostel = () => {
  const facilities = [
    {
      title: "Separate Accommodation",
      icon: Users,
      description: "Well-maintained separate dormitories for boys and girls with comfortable beds and study areas",
      features: ["4-6 students per room", "Individual storage lockers", "Study tables and chairs", "Proper ventilation"]
    },
    {
      title: "24/7 Security & Safety",
      icon: Shield,
      description: "Round-the-clock security with CCTV surveillance and trained staff for student safety",
      features: ["CCTV monitoring", "Security guards", "Restricted entry/exit", "Emergency protocols"]
    },
    {
      title: "Nutritious Food & Dining",
      icon: Utensils,
      description: "Hygienic kitchen facilities serving balanced, nutritious meals in a clean dining environment",
      features: ["4 meals per day", "Balanced nutrition", "Clean kitchen", "Special diet accommodation"]
    },
    {
      title: "Health & Medical Care",
      icon: Heart,
      description: "On-campus medical facility with qualified nurse and tie-up with local hospitals",
      features: ["First aid facility", "Regular health checkups", "Medicine storage", "Emergency medical care"]
    }
  ];

  const dailySchedule = [
    { time: "5:30 AM", activity: "Wake up and Morning Prayers" },
    { time: "6:00 AM", activity: "Yoga and Physical Exercise" },
    { time: "7:00 AM", activity: "Personal Hygiene and Bath" },
    { time: "8:00 AM", activity: "Breakfast" },
    { time: "8:30 AM", activity: "School Hours Begin" },
    { time: "12:30 PM", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "Rest/Free Time" },
    { time: "2:00 PM", activity: "School Hours Continue" },
    { time: "4:30 PM", activity: "Evening Snacks" },
    { time: "5:00 PM", activity: "Sports/Co-curricular Activities" },
    { time: "7:00 PM", activity: "Study Hours" },
    { time: "8:30 PM", activity: "Dinner" },
    { time: "9:30 PM", activity: "Personal Time/Preparation for bed" },
    { time: "10:00 PM", activity: "Lights Out" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hostel Facility</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            A home away from home with modern amenities, nutritious food, 
            and caring supervision for our boarding students.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hostel Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete care and comfort for students with modern facilities and dedicated staff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <facility.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily Schedule</h2>
            <p className="text-gray-600">Structured routine for optimal growth and development</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-4 min-w-20">
                    {item.time}
                  </div>
                  <div className="text-gray-700">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Care */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Care & Celebrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Birthday Celebrations</h3>
              <p className="text-gray-600">
                Special birthday celebrations with cake cutting and gifts to make every child feel special
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Festival Celebrations</h3>
              <p className="text-gray-600">
                Cultural and religious festivals celebrated with enthusiasm, food, and traditional activities
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Study Support</h3>
              <p className="text-gray-600">
                Dedicated study hours with supervision and help from resident teachers and senior students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hostel Life</h2>
            <p className="text-gray-600">A glimpse into our comfortable and caring hostel environment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "photo-1506744038136-46273834b3fb", title: "Dormitory Rooms" },
              { img: "photo-1501854140801-50d01698950b", title: "Dining Hall" },
              { img: "photo-1487958449943-2429e8be8625", title: "Recreation Area" },
              { img: "photo-1472396961693-142e6e269027", title: "Study Hall" },
              { img: "photo-1582562124811-c09040d0a901", title: "Common Room" },
              { img: "photo-1493962853295-0fd70327578a", title: "Sports Area" }
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
                <img
                  src={`https://images.unsplash.com/${item.img}?w=400&h=300&fit=crop`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="text-white p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Hostel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Hostel Inquiries</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hostel Warden</h3>
            <p className="text-gray-600 mb-2">For hostel-related queries and admissions</p>
            <p className="text-green-600 font-semibold">+91-XXXXXXXXXX</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hostel;