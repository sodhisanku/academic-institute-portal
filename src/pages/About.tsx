import React from 'react';
import { Award, Target, Eye, Users, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1967', event: 'Establishment of Regional Engineering College Silchar' },
    { year: '2002', event: 'Upgraded to National Institute of Technology' },
    { year: '2007', event: 'Granted Institute of National Importance status' },
    { year: '2010', event: 'Launch of PhD programs across all departments' },
    { year: '2020', event: 'Celebration of 50+ years of excellence' }
  ];

  const achievements = [
    { icon: Award, title: 'NAAC A+ Accreditation', description: 'Highest academic quality recognition' },
    { icon: Users, title: '5000+ Alumni Network', description: 'Graduates serving globally in tech industry' },
    { icon: Target, title: '95% Placement Rate', description: 'Excellent industry partnerships and opportunities' },
    { icon: Calendar, title: '50+ Years Legacy', description: 'Decades of educational excellence and innovation' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About NIT Silchar</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            A premier technical institution committed to excellence in engineering education, 
            research, and innovation for over five decades.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Excellence in Technical Education</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                National Institute of Technology Silchar, established in 1967, stands as one of India's 
                premier technical institutions. Originally founded as Regional Engineering College Silchar, 
                it was upgraded to NIT status in 2002 and granted Institute of National Importance status in 2007.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the beautiful valley of Silchar, Assam, the institute has been at the forefront 
                of technical education in the northeastern region of India. With a sprawling campus spread 
                over 625 acres, NIT Silchar provides an ideal environment for learning, research, and 
                personal growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The institute offers undergraduate, postgraduate, and doctoral programs in various branches 
                of engineering, science, and management. Our commitment to academic excellence, combined 
                with state-of-the-art infrastructure and distinguished faculty, ensures that our graduates 
                are well-prepared to meet the challenges of the modern technological landscape.
              </p>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="NIT Silchar Campus"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-academic">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized center of excellence in technical education, research, and innovation, 
                contributing to the socio-economic development of the nation while maintaining the highest standards 
                of academic integrity and institutional governance.
              </p>
            </div>

            <div className="card-academic">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>• To provide quality technical education and foster research and innovation</p>
                <p>• To develop competent and ethical engineers, scientists, and leaders</p>
                <p>• To promote industry-academia collaboration and technology transfer</p>
                <p>• To contribute to sustainable development and social welfare</p>
                <p>• To nurture creativity, entrepreneurship, and lifelong learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our journey towards excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card-academic">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-medium"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Recognition and milestones that define our excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-academic text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Campus</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our sprawling 625-acre campus is nestled in the picturesque Barak Valley of Assam, 
                providing an ideal environment for academic pursuits and personal growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Modern academic buildings and laboratories</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Comfortable residential facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Recreational and sports facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Green and sustainable environment</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="NIT Silchar Campus Aerial View"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;