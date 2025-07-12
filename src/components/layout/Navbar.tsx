import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', path: '/', hasDropdown: false },
    {
      label: 'Institute',
      path: '/institute',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Institute', path: '/institute/about' },
        { label: 'Vision & Mission', path: '/institute/vision' },
        { label: 'Administration', path: '/institute/administration' },
        { label: 'Campus', path: '/institute/campus' }
      ]
    },
    {
      label: 'Academics',
      path: '/academics',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Undergraduate', path: '/academics/undergraduate' },
        { label: 'Postgraduate', path: '/academics/postgraduate' },
        { label: 'Ph.D Programs', path: '/academics/phd' },
        { label: 'Academic Calendar', path: '/academics/calendar' }
      ]
    },
    {
      label: 'Departments',
      path: '/departments',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Computer Science & Engineering', path: '/departments/cse' },
        { label: 'Electronics & Communication', path: '/departments/ece' },
        { label: 'Mechanical Engineering', path: '/departments/me' }
      ]
    },
    {
      label: 'Research',
      path: '/research',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Research Areas', path: '/research/areas' },
        { label: 'Publications', path: '/research/publications' },
        { label: 'Labs & Centers', path: '/research/labs' }
      ]
    },
    {
      label: 'Students',
      path: '/students',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Student Clubs', path: '/students/clubs' },
        { label: 'Hostel', path: '/students/hostel' },
        { label: 'Grievance', path: '/students/grievance' }
      ]
    },
    { label: 'Facilities', path: '/facilities', hasDropdown: false },
    { label: 'Tenders', path: '/tenders', hasDropdown: false },
    { label: 'Contact', path: '/contact', hasDropdown: false }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top Header */}
      <div className="bg-[hsl(var(--academic-navy))] text-white py-2 hidden md:block">
        <div className="container-academic">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-3842-242973</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nits.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Silchar, Assam - 788010</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
              <Link to="/alumni" className="hover:text-accent transition-colors">Alumni</Link>
              <Link to="/rti" className="hover:text-accent transition-colors">RTI</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-medium' : 'bg-white'}`}>
        <div className="container-academic">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AVM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Aastha Vidya Mandir</h1>
                <p className="text-sm text-muted-foreground">English Medium School</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'nav-link-active bg-primary/10'
                        : 'nav-link hover:bg-muted'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-strong border border-border z-50">
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'nav-link-active bg-primary/10'
                          : 'nav-link'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="p-2"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="pl-4 py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;