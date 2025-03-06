
import React from "react";
import { useParams } from "react-router-dom";
import { services } from "@/data/services";
import NotFoundComponent from "@/components/NotFoundComponent";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <NotFoundComponent />;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-4`}>
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
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
