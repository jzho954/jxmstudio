
import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import NotFoundComponent from "@/components/NotFoundComponent";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!service) {
    return <NotFoundComponent />;
  }

  // Replace gradient colors with navy/yellow
  let updatedColor = service.color;
  if (service.color.includes("indigo") || service.color.includes("purple") || service.color.includes("pink")) {
    updatedColor = "from-navy-500 to-navy-700";
  }

  return (
    <div className="container mx-auto px-4 relative">
      <div className="absolute top-16 left-0 w-full z-10">
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gray-200" />
        <ScrollProgress 
          className="absolute top-0 h-0.5 bg-navy-600" 
          containerRef={containerRef}
          springOptions={{ stiffness: 280, damping: 18, mass: 0.3 }}
        />
      </div>
      
      <div 
        ref={containerRef} 
        className="max-w-4xl mx-auto py-12 pt-24 sm:pt-28 overflow-auto max-h-screen"
      >
        <div className="mb-6">
          <Button asChild variant="outline" size="sm" className="mb-4">
            <Link to="/services" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className={`p-3 rounded-lg bg-gradient-to-r ${updatedColor} w-fit mb-4`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">{service.description}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
          <p>Our {service.title.toLowerCase()} services include comprehensive solutions tailored to your specific needs:</p>
          
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Initial consultation and requirement gathering</li>
            <li>Detailed planning and conceptualization</li>
            <li>Regular progress updates and client feedback implementation</li>
            <li>Quality assurance and testing</li>
            <li>Post-deployment support and maintenance</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Process</h2>
          <p>We follow a structured approach to ensure high-quality results:</p>
          
          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Discovery:</strong> Understanding your business goals and requirements</li>
            <li><strong>Planning:</strong> Creating a detailed roadmap for your project</li>
            <li><strong>Execution:</strong> Implementing the solution with regular check-ins</li>
            <li><strong>Testing:</strong> Thorough quality assurance and validation</li>
            <li><strong>Deployment:</strong> Smooth transition to production</li>
            <li><strong>Support:</strong> Ongoing maintenance and updates</li>
          </ol>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Ready to get started?</h2>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
