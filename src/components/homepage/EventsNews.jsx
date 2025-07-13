import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import mockData from '../../data/mockData.json';

const EventsNews = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-IN', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      festival: 'bg-purple-100 text-purple-800',
      seminar: 'bg-blue-100 text-blue-800',
      sports: 'bg-green-100 text-green-800',
      workshop: 'bg-orange-100 text-orange-800',
      conference: 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-academic">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Events & News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant campus life through our events, workshops, seminars, and latest happenings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockData.events.map((event) => {
            const dateObj = formatDate(event.date);
            return (
              <div key={event.id} className="card-academic hover-lift group">
                {/* Event Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-medium">
                    <div className="text-2xl font-bold text-primary">{dateObj.day}</div>
                    <div className="text-sm text-muted-foreground">{dateObj.month}</div>
                    <div className="text-xs text-muted-foreground">{dateObj.year}</div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{dateObj.day} {dateObj.month}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>10:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="text-primary hover:text-primary-dark font-medium text-sm flex items-center transition-colors group-hover:translate-x-1 duration-200">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <a href="/events" className="btn-academic">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsNews;