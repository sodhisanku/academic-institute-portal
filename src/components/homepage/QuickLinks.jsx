import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Building, 
  FileText, 
  Phone, 
  Calendar,
  MapPin,
  Award,
  Briefcase,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const QuickLinks = () => {
  const quickLinkCategories = [
    {
      title: "Academic Services",
      links: [
        { icon: GraduationCap, label: "Free Admissions", path: "/admissions", external: false },
        { icon: BookOpen, label: "CBSE Curriculum", path: "/academics", external: false },
        { icon: FileText, label: "School Calendar", path: "/academics/calendar", external: false },
        { icon: Award, label: "Student Results", path: "/results", external: false }
      ]
    },
    {
      title: "Student Services", 
      links: [
        { icon: Building, label: "Hostel Facility", path: "/students/hostel", external: false },
        { icon: Users, label: "Student Life", path: "/students/life", external: false },
        { icon: Briefcase, label: "Career Guidance", path: "/career-guidance", external: false },
        { icon: Phone, label: "Grievance Portal", path: "/students/grievance", external: false }
      ]
    },
    {
      title: "School Information",
      links: [
        { icon: FileText, label: "Notices", path: "/notices", external: false },
        { icon: Calendar, label: "Events", path: "/events", external: false },
        { icon: MapPin, label: "School Location", path: "/contact", external: false },
        { icon: ExternalLink, label: "CBSE Portal", path: "#", external: true }
      ]
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-academic">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quick Links</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access important services and information quickly through our convenient links
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {quickLinkCategories.map((category, index) => (
            <div key={index} className="card-academic">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                {category.title}
                <div className="ml-2 w-2 h-2 bg-primary rounded-full"></div>
              </h3>
              
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.path}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Students", icon: Users },
            { number: "25+", label: "Faculty Members", icon: GraduationCap },
            { number: "100%", label: "Free Education", icon: Award },
            { number: "3320264", label: "CBSE Affiliation", icon: Building }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-soft hover-lift">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;