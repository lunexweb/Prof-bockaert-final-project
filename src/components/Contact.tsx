import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doqsolr8d/image/upload/f_auto,q_auto/v1760349271/pexels-klaus-nielsen-6303569_raqo47.jpg"
          alt="Medical Excellence"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-muted/85" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation or reach out with any questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in">
              <Card className="border-2 hover:border-secondary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Arwyp Medical Suites, 5th Floor / 5de Vloer<br />
                        22 Pine Avenue / 22 Pine Laan<br />
                        Kempton Park, 1620
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone & Fax</h4>
                      <p className="text-muted-foreground">
                        Tel: <a href="tel:0119703320" className="hover:text-primary transition-colors">(011) 970-3320</a><br />
                        Fax: (011) 970-3321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Languages</h4>
                      <p className="text-muted-foreground">
                        English & Afrikaans
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden border-2">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.1234567890123!2d28.2345678!3d-26.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA1JzU1LjYiUyAyOMKwMTQnMDQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Practice Location"
                  />
                </div>
              </Card>
            </div>

            {/* Email Contacts */}
            <div className="animate-slide-up">
              <Card className="border-2 hover:border-secondary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Email Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">General Enquiries</h4>
                      <p className="text-muted-foreground mb-2">
                        Share medical records, appointment requests, or general questions.
                      </p>
                      <a
                        href="mailto:Bouckaert@myconnection.co.za"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-all duration-200 break-all"
                      >
                        Bouckaert@myconnection.co.za
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Practice Coordination</h4>
                      <p className="text-muted-foreground mb-2">
                        Contact Mike for scheduling support and post-operative queries.
                      </p>
                      <a
                        href="mailto:Mikemfos@myconnection.co.za"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-all duration-200 break-all"
                      >
                        Mikemfos@myconnection.co.za
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    We respond as soon as possible. For urgent concerns, please call the practice directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
