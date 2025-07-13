import React, { useState } from 'react';
import { Search, Users, Mail, Phone, ExternalLink, Award, BookOpen } from 'lucide-react';
import mockData from '../data/mockData.json';

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('cse');
  const [searchTerm, setSearchTerm] = useState('');

  const currentDept = mockData.departments.find(dept => dept.id === selectedDepartment);

  const filteredFaculty = currentDept?.faculty.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Departments</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore our world-class departments led by distinguished faculty members 
            committed to excellence in education and research.
          </p>
        </div>
      </section>

      {/* Department Navigation */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {mockData.departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {dept.shortName}
              </button>
            ))}
          </div>

          {/* Department Info */}
          {currentDept && (
            <div className="card-academic mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">{currentDept.name}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentDept.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{currentDept.faculty.length}</div>
                  <div className="text-sm text-muted-foreground">Faculty Members</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Research Areas</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Faculty Members</h2>
            
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-80 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty, index) => (
              <div key={index} className="card-academic hover-lift">
                <div className="text-center mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-32 h-40 object-cover rounded-lg mx-auto mb-4 shadow-medium"
                  />
                  <h3 className="text-xl font-semibold text-foreground">{faculty.name}</h3>
                  <p className="text-primary font-medium">{faculty.designation}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Specialization</h4>
                    <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <a 
                        href={`mailto:${faculty.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {faculty.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{faculty.phone}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                      View Profile
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No faculty members found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Research Areas */}
      {currentDept && (
        <section className="section-padding bg-white">
          <div className="container-academic">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Research Areas</h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge research initiatives in {currentDept.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Artificial Intelligence & Machine Learning',
                'Computer Networks & Security',
                'Software Engineering',
                'Database Systems',
                'Human Computer Interaction',
                'Distributed Systems',
                'Mobile Computing',
                'Cloud Computing',
                'Internet of Things'
              ].map((area, index) => (
                <div key={index} className="card-academic hover-lift">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{area}</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced research and development in {area.toLowerCase()} with practical applications.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Departments;