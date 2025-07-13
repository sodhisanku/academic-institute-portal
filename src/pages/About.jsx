import React from 'react';
import { Award, Users, Building2, GraduationCap, Target, CheckCircle, MapPin, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aastha Vidya Mandir</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Excellence in Education • Empowering Tribal Communities • Building Tomorrow's Leaders
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Aastha Vidya Mandir</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p className="text-justify leading-relaxed">
                  Aastha Vidya Mandir English Medium School is a government-aided, CBSE-affiliated residential institution 
                  located in the serene surroundings of Jawanga, Geedam, District Dantewada, Chhattisgarh. Established in 2013, 
                  our school stands as a beacon of hope and educational excellence in the region.
                </p>
                <p className="text-justify leading-relaxed">
                  Managed by the Pioneer Institute of Education under Dantewada District Administration, we are dedicated to 
                  providing free, quality education to tribal, orphan, and students from naxal-affected regions. Our institution 
                  proudly serves over 85% tribal students, with more than 50% being girls, fostering inclusive and equitable education.
                </p>
                <p className="text-justify leading-relaxed">
                  As an ISO 9001:2015 certified institution with CBSE Affiliation No. 3320264, we maintain the highest standards 
                  of educational quality and administrative excellence.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="School Campus" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 text-center leading-relaxed italic">
                "To provide free, quality, value-based education to socio-economically challenged students, 
                particularly from tribal and naxal-affected regions, empowering them with knowledge, skills, 
                and values necessary to become responsible citizens and future leaders of our nation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation & Accreditation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Affiliation & Accreditation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CBSE Affiliated</h3>
              <p className="text-gray-700">Affiliation No: 3320264</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Star className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-700">ISO 9001:2015 Certified Institution</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education City</h3>
              <p className="text-gray-700">Part of Chhattisgarh's Education City Initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Aastha */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Aastha Vidya Mandir?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive educational experience that goes beyond traditional classroom learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Residential</h3>
              <p className="text-gray-600 text-sm">Complete boarding facility with free accommodation and meals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <GraduationCap className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">English Medium</h3>
              <p className="text-gray-600 text-sm">Quality education delivered in English language</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology</h3>
              <p className="text-gray-600 text-sm">Smart classes, Robotics, and 3D Printer facilities</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-10 w-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">Well-trained teachers from across India</p>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Holistic Development Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Academic Excellence</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CBSE curriculum with modern teaching methods</li>
                    <li>• Smart classroom technology</li>
                    <li>• Regular assessments and feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Beyond Academics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sports and physical education</li>
                    <li>• Cultural activities and festivals</li>
                    <li>• Space science and astronomy programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Mr. Gopal Pandey - Principal" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Gopal Pandey</h3>
                  <p className="text-lg text-blue-700 font-semibold mb-4">Principal</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Qualification:</strong> M.A. in Education
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Experience:</strong> 37+ years in educational administration and student welfare
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Under Mr. Pandey's visionary leadership, Aastha Vidya Mandir has emerged as a model institution 
                    in the region. His dedication to providing quality education to underprivileged students and 
                    his commitment to holistic development has transformed countless lives. His experience in 
                    educational administration and deep understanding of rural education challenges makes him 
                    the ideal leader for our mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to educational excellence and student success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Board Exam Pass Rate</h3>
              <p className="text-gray-600">Consistent excellent results in CBSE examinations</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Students Benefited</h3>
              <p className="text-gray-600">Lives transformed through quality education</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">NASA</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Asteroid Day</h3>
              <p className="text-gray-600">Collaboration with international space science programs</p>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recognition & Impact</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-justify leading-relaxed">
                  Our commitment to excellence has been recognized at various levels. We maintain a 100% board 
                  examination pass rate, demonstrating the quality of education we provide. Our students have 
                  successfully participated in national and international programs, including NASA's Asteroid Day 
                  collaboration, showcasing their scientific aptitude and global awareness.
                </p>
                <p className="text-justify leading-relaxed">
                  The rising alumni network of Aastha Vidya Mandir continues to make significant contributions 
                  in various fields, from higher education to professional careers, creating a positive impact 
                  in their communities and society at large.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Campus & Location</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Campus Location" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education City, Jawanga</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-justify leading-relaxed">
                  Our school is strategically located in the peaceful and scenic surroundings of Jawanga, 
                  which is part of Chhattisgarh's ambitious Education City initiative. The campus is 
                  surrounded by lush greenery and natural beauty, providing an ideal environment for 
                  learning and personal development.
                </p>
                <p className="text-justify leading-relaxed">
                  The modern infrastructure includes well-equipped classrooms, science laboratories, 
                  computer labs, library, sports facilities, and comfortable residential quarters. 
                  The serene and pollution-free environment enhances the learning experience and 
                  promotes overall well-being of our students.
                </p>
                <p className="text-justify leading-relaxed">
                  Located in Geedam, District Dantewada, our campus serves as a hub of educational 
                  excellence in the region, easily accessible yet away from the distractions of 
                  urban life, allowing students to focus on their studies and personal growth.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> Jawanga, Geedam, District Dantewada, Chhattisgarh</p>
                  <p><strong>CBSE Affiliation:</strong> 3320264</p>
                  <p><strong>Certification:</strong> ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;