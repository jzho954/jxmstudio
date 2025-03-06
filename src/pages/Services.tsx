
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
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
                
                <Button asChild variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 w-fit mt-auto">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700 mb-3">My Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured, collaborative approach that ensures your project's success from concept to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
              <div className="h-2 bg-indigo-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 font-bold">1</div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  Understanding your business, goals, and target audience to create a strategic plan that aligns with your vision.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 font-bold">2</div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-gray-600">
                  Creating wireframes, mockups, and prototypes with multiple review cycles to ensure the design meets your expectations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
              <div className="h-2 bg-pink-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full mb-4 font-bold">3</div>
                <h3 className="text-xl font-bold mb-3">Delivery</h3>
                <p className="text-gray-600">
                  Development, testing, and launch with continued support to ensure your website performs optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss your project and create a website that helps you achieve your business goals.
            </p>
            
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-medium px-8">
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
    case "ui-ux":
      return [
        "User journey mapping",
        "Wireframing and prototyping",
        "Usability testing",
        "Information architecture",
        "Interaction design"
      ];
    case "frontend-dev":
      return [
        "Clean, semantic HTML5",
        "Modern CSS and JavaScript",
        "React framework implementation",
        "Performance optimization",
        "Animation and micro-interactions"
      ];
    case "seo":
      return [
        "Keyword research and optimization",
        "On-page SEO implementation",
        "Technical SEO audits",
        "Content optimization",
        "Local SEO strategies"
      ];
    default:
      return [];
  }
};

export default Services;
