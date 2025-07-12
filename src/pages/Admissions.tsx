import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Heart, Users, GraduationCap, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import mockData from '@/data/mockData.json';

const Admissions = () => {
  const { admissions } = mockData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-academic">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions Open</h1>
            <p className="text-xl mb-8 text-white/90">
              Free Education for Tribal & Orphan Students - Building Futures, Creating Hope
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white text-primary">
              CBSE Affiliation: 3320264
            </Badge>
          </div>
        </div>
      </section>

      <div className="container-academic py-16">
        {/* Free Education Highlight */}
        <section className="mb-16">
          <Card className="border-accent/20 shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-accent" />
              </div>
              <CardTitle className="text-3xl text-primary">Completely Free Education</CardTitle>
              <CardDescription className="text-lg">
                Our commitment to empowering tribal and orphan children through quality education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Free Education</h3>
                  <p className="text-muted-foreground">Complete CBSE education from LKG to Class XII</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Free Boarding</h3>
                  <p className="text-muted-foreground">Comfortable hostel facilities with all amenities</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Free Everything</h3>
                  <p className="text-muted-foreground">Books, uniforms, meals, and study materials</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What We Provide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What We Provide (Absolutely Free)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissions.facilities.map((facility, index) => (
              <Card key={index} className="border border-border/50 hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">{facility}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Students */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Who Can Apply?</CardTitle>
              <CardDescription>We focus on providing opportunities to underprivileged children</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {admissions.targetStudents.map((group, index) => (
                  <div key={index} className="text-center p-6 bg-muted/50 rounded-lg">
                    <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-lg">{group}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Eligibility Criteria</CardTitle>
              <CardDescription>Age requirements for different classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(admissions.eligibility).map(([level, criteria]) => (
                  <div key={level} className="p-4 border border-border/50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 capitalize">{level.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-muted-foreground">{criteria}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Required Documents</CardTitle>
              <CardDescription>Please bring the following documents for admission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {admissions.documents.map((document: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Admissions */}
        <section>
          <Card className="border-accent/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Contact for Admissions</CardTitle>
              <CardDescription>Get in touch with us for admission inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">{admissions.contact.phone}</p>
                </div>
                <div>
                  <Mail className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">{admissions.contact.email}</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Visit Office</h3>
                  <p className="text-muted-foreground">{admissions.contact.office}</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Download className="mr-2 h-5 w-5" />
                  Download Admission Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Admissions;