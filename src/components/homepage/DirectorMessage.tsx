import React from 'react';
import { Quote } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-academic">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Director's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src="/api/placeholder/400/500"
                  alt="Director NIT Silchar"
                  className="w-full h-auto rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Quote className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Director's Message</h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                "Welcome to the National Institute of Technology Silchar, a premier institution 
                that has been at the forefront of technical education and innovation for decades."
              </p>
              
              <p>
                "Our commitment to excellence in education, research, and holistic development 
                continues to attract the brightest minds from across the nation. We believe in 
                nurturing not just engineers, but leaders who will shape the future of technology 
                and society."
              </p>
              
              <p>
                "At NIT Silchar, we foster an environment of academic rigor, creative thinking, 
                and practical application. Our state-of-the-art facilities, distinguished faculty, 
                and industry partnerships ensure that our students are well-prepared to meet the 
                challenges of the rapidly evolving technological landscape."
              </p>
              
              <p>
                "I invite you to explore the myriad opportunities that NIT Silchar offers and 
                join us in our mission to create tomorrow's innovators and leaders."
              </p>
            </div>

            <div className="pt-4">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-foreground">Prof. Dr. Rajesh Kumar</h4>
                <p className="text-primary font-medium">Director, NIT Silchar</p>
                <p className="text-sm text-muted-foreground">Ph.D. (IIT Delhi), M.Tech (IIT Kanpur)</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="/institute/administration" className="btn-academic-outline">
                Meet Our Leadership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;