import React from 'react';
import { BookOpen, Music, Palette, Users, Trophy, Heart, Clock, Star } from 'lucide-react';

const StudentLife = () => {
  const sections = [
    {
      title: "Academic Excellence",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      items: [
        { name: "Smart Classrooms", description: "Interactive digital boards and modern teaching aids" },
        { name: "Olympiad Preparation", description: "Special coaching for national and international competitions" },
        { name: "Science Exhibitions", description: "Annual science fairs and project presentations" },
        { name: "Library Resources", description: "Extensive collection of books and digital resources" }
      ]
    },
    {
      title: "Co-curricular Activities",
      icon: Music,
      color: "from-purple-500 to-purple-600",
      items: [
        { name: "Dance & Music", description: "Classical and contemporary dance, vocal and instrumental music" },
        { name: "Yoga & Meditation", description: "Daily yoga sessions for physical and mental wellness" },
        { name: "Arts & Crafts", description: "Creative workshops in painting, sculpture, and handicrafts" },
        { name: "Sports Activities", description: "Cricket, football, basketball, athletics, and indoor games" }
      ]
    },
    {
      title: "Life Skills Development",
      icon: Heart,
      color: "from-green-500 to-green-600",
      items: [
        { name: "Discipline Training", description: "Character building and moral value education" },
        { name: "Morning Assembly", description: "Daily prayers, news reading, and thought sharing" },
        { name: "Mentoring Program", description: "Personal guidance and counseling for students" },
        { name: "Leadership Skills", description: "Student council, team building, and responsibility sharing" }
      ]
    },
    {
      title: "Events & Celebrations",
      icon: Star,
      color: "from-orange-500 to-orange-600",
      items: [
        { name: "Annual Day", description: "Grand celebration showcasing student talents and achievements" },
        { name: "Festival Celebrations", description: "Cultural festivals celebrating diversity and traditions" },
        { name: "Educational Tours", description: "Field trips and excursions for practical learning" },
        { name: "Sports Day", description: "Inter-house competitions and athletic meets" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nurturing holistic development through academic excellence, creative expression, 
            and character building in a supportive environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="space-y-8">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${section.color} text-white mb-4`}>
                    <section.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Gallery */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Student Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">95% students score above 80% in board exams</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">All-round Development</h3>
                <p className="text-gray-600">100% participation in co-curricular activities</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Recognition</h3>
                <p className="text-gray-600">Multiple awards in state and national competitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;