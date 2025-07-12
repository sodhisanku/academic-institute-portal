import React, { useState } from 'react';
import { GraduationCap, BookOpen, Download, Users, Calendar, Trophy } from 'lucide-react';
import mockData from '../data/mockData.json';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const tabs = [
    { id: 'undergraduate', label: 'Undergraduate (B.Tech)', icon: GraduationCap },
    { id: 'postgraduate', label: 'Postgraduate (M.Tech)', icon: BookOpen },
    { id: 'phd', label: 'Doctoral (Ph.D)', icon: Trophy }
  ];

  const academicHighlights = [
    { 
      icon: Users, 
      title: 'World-Class Faculty', 
      description: 'Distinguished professors with extensive research and industry experience' 
    },
    { 
      icon: BookOpen, 
      title: 'Industry-Aligned Curriculum', 
      description: 'Updated syllabus designed to meet current industry demands' 
    },
    { 
      icon: Calendar, 
      title: 'Flexible Learning', 
      description: 'Semester system with choice-based credit system (CBCS)' 
    },
    { 
      icon: Trophy, 
      title: 'Research Opportunities', 
      description: 'Undergraduate research programs and innovation projects' 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive technical education programs designed to create future leaders 
            in engineering, technology, and innovation.
          </p>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Programs?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our academic programs are designed to provide comprehensive education with practical experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicHighlights.map((highlight, index) => (
              <div key={index} className="card-academic text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of academic programs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.programs[activeTab as keyof typeof mockData.programs]?.map((program, index) => (
              <div key={index} className="card-academic hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{program.name}</h3>
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {program.duration}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Seats:</span>
                    <span className="font-medium">{program.seats}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <a
                    href={program.curriculum}
                    className="flex items-center justify-center w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Curriculum
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground">
              Follow these steps to join our prestigious institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Entrance Exam', description: 'Qualify JEE Main/GATE/NET as applicable' },
              { step: '02', title: 'Application', description: 'Submit online application with required documents' },
              { step: '03', title: 'Counselling', description: 'Participate in centralized counselling process' },
              { step: '04', title: 'Admission', description: 'Complete admission formalities and fee payment' }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="card-academic text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/admissions" className="btn-academic">
              Learn More About Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Academic Calendar</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with important academic dates, examination schedules, 
                and institutional events throughout the academic year.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Semester start and end dates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Examination schedules</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Holiday and vacation periods</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Registration and fee deadlines</span>
                </div>
              </div>
              <div className="pt-4">
                <a href="/academics/calendar" className="btn-academic-outline">
                  View Academic Calendar
                </a>
              </div>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Academic Calendar"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;