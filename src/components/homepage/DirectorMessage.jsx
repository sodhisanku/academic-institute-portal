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
                  alt="Principal Aastha Vidya Mandir"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Principal's Message</h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                "Welcome to Aastha Vidya Mandir English Medium School, where we believe every child 
                deserves quality education regardless of their background."
              </p>
              
              <p>
                "Our school is specially designed to serve tribal and orphan children, providing them 
                with completely free education, boarding, and all necessary facilities. We follow the 
                CBSE curriculum from LKG to Class XII, ensuring our students receive the same quality 
                education as any premier school."
              </p>
              
              <p>
                "Our dedicated faculty, modern facilities including smart classrooms and science labs, 
                and nurturing environment help every child reach their full potential. We don't just 
                educate; we transform lives and create opportunities for a brighter future."
              </p>
              
              <p>
                "Join us in our mission to empower underprivileged children through the power of 
                education and help us build a more inclusive and equitable society."
              </p>
            </div>

            <div className="pt-4">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-foreground">Mr. Gopal Pandey</h4>
                <p className="text-primary font-medium">Principal, Aastha Vidya Mandir</p>
                <p className="text-sm text-muted-foreground">M.Ed., B.Ed. - 20 Years Experience</p>
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