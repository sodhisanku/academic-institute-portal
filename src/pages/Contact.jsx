import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['National Institute of Technology Silchar', 'Silchar, Assam - 788010, India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-3842-242973', '+91-3842-242974 (Fax)']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@nits.ac.in', 'director@nits.ac.in']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:30 PM', 'Saturday: 9:00 AM - 1:00 PM']
    }
  ];

  const departments = [
    { name: 'Admissions', email: 'admissions@nits.ac.in' },
    { name: 'Academic Office', email: 'academic@nits.ac.in' },
    { name: 'Training & Placement', email: 'placement@nits.ac.in' },
    { name: 'Accounts', email: 'accounts@nits.ac.in' },
    { name: 'Estate Office', email: 'estate@nits.ac.in' },
    { name: 'Library', email: 'library@nits.ac.in' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch with us for admissions, general inquiries, or any assistance. 
            We're here to help you with your questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-academic text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-academic">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`pl-10 pr-4 py-3 w-full rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-border'
                        } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 pr-4 py-3 w-full rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-border'
                        } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 pr-4 py-3 w-full rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`px-4 py-3 w-full rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-border'
                      } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="placement">Placement Related</option>
                      <option value="facilities">Facilities</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`px-4 py-3 w-full rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none`}
                    placeholder="Enter your message here..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full btn-academic flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="card-academic">
              <h2 className="text-3xl font-bold mb-6">Find Us Here</h2>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map will be embedded here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    NIT Silchar, Silchar, Assam - 788010
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Directions</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 22 km from Silchar Airport</p>
                  <p>• 5 km from Silchar Railway Station</p>
                  <p>• Well connected by road from major cities</p>
                  <p>• Campus shuttle available from city center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to specific departments for targeted assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="card-academic hover-lift">
                <h3 className="text-lg font-semibold text-foreground mb-2">{dept.name}</h3>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;