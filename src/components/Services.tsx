import { useState } from "react";
import { Bone, Smile, Wrench, Microscope, Activity, Skull } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import jawIllustration from "@/assets/transparente-copia.png";
import implantIllustration from "@/assets/tooth-implant-process-what-to-expect.png";
import orthognathicIllustration from "@/assets/Orthognathic-Surgery-Jaw-Surgery-.png";
import oralPathologyIllustration from "@/assets/oral-pathology.png";
import craniofacialIllustration from "@/assets/cmtr-17-00045-g003.png";
import traumaIllustration from "@/assets/1-6.png";

const services = [
  {
    icon: Bone,
    title: "Jaw and Facial Surgery",
    description: "Advanced surgical procedures for jaw alignment, facial reconstruction, and structural corrections.",
    image: jawIllustration,
  },
  {
    icon: Smile,
    title: "Dental Implants",
    description: "State-of-the-art dental implant placement for permanent tooth replacement solutions.",
    image: implantIllustration,
  },
  {
    icon: Wrench,
    title: "Orthognathic Surgery",
    description: "Corrective jaw surgery to treat skeletal and dental irregularities for improved function and aesthetics.",
    image: orthognathicIllustration,
  },
  {
    icon: Microscope,
    title: "Oral Pathology",
    description: "Diagnosis and treatment of diseases affecting the oral and maxillofacial region.",
    image: oralPathologyIllustration,
  },
  {
    icon: Activity,
    title: "Facial Trauma Management",
    description: "Expert treatment of facial injuries, fractures, and soft tissue trauma with precision care.",
    image: traumaIllustration,
  },
  {
    icon: Skull,
    title: "Craniofacial Surgery",
    description: "Complex reconstructive surgery for congenital and acquired craniofacial deformities and abnormalities.",
    image: craniofacialIllustration,
  },
];

const Services = () => {
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doqsolr8d/image/upload/f_auto,q_auto/v1760593288/Website-facial-and-oral_blekto.webp"
          alt="Facial and Oral Surgery Services"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Specialized Services
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maxillofacial and oral surgery services delivered with expertise and care
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group flex h-full flex-col border border-border/60 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="inline-flex rounded-2xl bg-primary/5 p-3 transition-all duration-300 group-hover:bg-gradient-accent">
                      <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-medical-blue-light">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col items-center gap-4 text-center">
                    {service.image && (
                      <button
                        type="button"
                        aria-pressed={expandedImageIndex === index}
                        onClick={() =>
                          setExpandedImageIndex(
                            expandedImageIndex === index ? null : index,
                          )
                        }
                        className="w-full max-w-[200px] rounded-3xl border border-dashed border-primary/30 bg-muted/30 p-3 transition-all duration-300 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                      >
                        <img
                          src={service.image}
                          alt={`${service.title} illustration`}
                          className={`h-[140px] w-full rounded-2xl object-cover transition-transform duration-300 ${
                            expandedImageIndex === index ? "scale-105" : "scale-95"
                          }`}
                        />
                      </button>
                    )}
                    <CardDescription className="text-base leading-relaxed text-gray-700">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              Each treatment is personalized to meet your unique needs. 
              <span className="block mt-2 text-primary font-semibold">
                Contact us to discuss your specific requirements.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
