import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Admissions', path: '/admissions' },
    { label: 'Academic Calendar', path: '/academics/calendar' },
    { label: 'Examination', path: '/examination' },
    { label: 'Library', path: '/facilities' },
    { label: 'Placement', path: '/placement' },
    { label: 'Alumni', path: '/alumni' }
  ];

  const importantLinks = [
    { label: 'NIRF Ranking', path: '#', external: true },
    { label: 'AQAR Reports', path: '#', external: true },
    { label: 'RTI', path: '/rti' },
    { label: 'Tenders', path: '/tenders' },
    { label: 'Careers', path: '/careers' },
    { label: 'Grievance Portal', path: '/students/grievance' }
  ];

  const departments = [
    { label: 'Computer Science & Engineering', path: '/departments/cse' },
    { label: 'Electronics & Communication', path: '/departments/ece' },
    { label: 'Mechanical Engineering', path: '/departments/me' },
    { label: 'Civil Engineering', path: '/departments/ce' },
    { label: 'Electrical Engineering', path: '/departments/ee' }
  ];

  return (
    <footer className="bg-[hsl(var(--academic-navy))] text-white">
      {/* Main Footer Content */}
      <div className="container-academic py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AVM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Aastha Vidya Mandir</h3>
                  <p className="text-sm text-gray-300">English Medium School</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aastha Vidya Mandir English Medium School is committed to providing quality education 
                with CBSE curriculum from LKG to Class XII, nurturing young minds for a bright future.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Aastha Vidya Mandir English Medium School</p>
                  <p>Jawanga, Geedam, Chhattisgarh - 494114, India</p>
                  <p>CBSE Affiliation: 3320264</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">info@aasthavidyamandir.edu.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.label}>
                  <Link
                    to={dept.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-academic py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              <p>&copy; 2024 Aastha Vidya Mandir English Medium School. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;