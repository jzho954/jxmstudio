import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Timeline } from "@/components/ui/timeline";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Services = () => {
  // Use the scroll to top hook
  useScrollToTop();

  // Process timeline data
  const processData = [
    {
      title: "Discovery",
      emoji: "🔍",
      content: {
        description: "Understanding your business, goals, and target audience to create a strategic plan that aligns with your vision.",
        bulletPoints: [
          "In-depth consultation and requirement gathering",
          "Market and competitor analysis",
          "User persona development",
          "Strategic planning and project scope definition"
        ]
      }
    },
    {
      title: "Planning",
      emoji: "📋",
      content: {
        description: "Creating a detailed roadmap for your project's success with clear milestones and deliverables.",
        bulletPoints: [
          "Project timeline development",
          "Resource allocation",
          "Technical requirements specification",
          "Risk assessment and mitigation strategies"
        ]
      }
    },
    {
      title: "Execution",
      emoji: "⚡",
      content: {
        description: "Bringing your vision to life with expert development and continuous communication.",
        bulletPoints: [
          "Agile development process",
          "Regular progress updates",
          "Quality assurance testing",
          "Performance optimization"
        ]
      }
    },
    {
      title: "Launch",
      emoji: "🚀",
      content: {
        description: "Ensuring a smooth deployment and successful project launch with comprehensive support.",
        bulletPoints: [
          "Pre-launch testing and validation",
          "Deployment and configuration",
          "Post-launch monitoring",
          "Training and documentation"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Services & Expertise</h1>
            <p className="text-xl text-white/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Elevate your online presence with professional web design and development services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={service.id} className="flex flex-col">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {getServiceDetails(service.id).map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="border-navy-500 text-navy-600 hover:bg-navy-50 w-fit mt-auto">
                  <Link to={`/services/${service.id}`} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section with Timeline */}
      <section className="py-20 bg-gray-50">
        <Timeline data={processData} />
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-600 to-navy-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss your project and create a website that helps you achieve your business goals.
            </p>
            
            <Button asChild size="lg" className="bg-[#ffff33] text-navy-700 hover:bg-[#ffff33]/90 font-medium px-8">
              <Link to="/contact">
                Book Your Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get service details
const getServiceDetails = (serviceId: string): string[] => {
  switch (serviceId) {
    case "web-design":
      return [
        "Custom website design tailored to your brand",
        "Mobile-first, responsive layouts",
        "Intuitive user interfaces",
        "Visual hierarchy optimization",
        "Mood boards and style guides"
      ];
    case "backend-dev":
      return [
        "API development and integration",
        "Database design and management",
        "Server-side application logic",
        "Authentication and security",
        "Scalable architecture design"
      ];
    case "seo":
      return [
        "Keyword research and optimization",
        "On-page SEO implementation",
        "Technical SEO audits",
        "Content optimization",
        "Local SEO strategies"
      ];
    case "marketing":
      return [
        "Google Ads & Search Marketing",
        "Facebook & Instagram Advertising",
        "TikTok Content & Ads Strategy",
        "Social Media Content Creation",
        "Performance Analytics & ROI Tracking"
      ];
    default:
      return [];
  }
};

export default Services;
