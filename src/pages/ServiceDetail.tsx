
import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { notFound } from "@/lib/utils";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(service => service.id === id);

  if (!service) {
    return notFound();
  }

  const Icon = service.icon;

  // Get service-specific details
  const serviceDetails = getServiceDetails(service.id);
  const processList = getServiceProcess(service.id);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className={`bg-gradient-to-br ${service.color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="text-white mb-8 hover:bg-white/10">
            <Link to="/services" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Services
            </Link>
          </Button>
          
          <div className="max-w-3xl mx-auto">
            <div className={`p-4 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-6 bg-white/10`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/80">
              {service.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">What's Included</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {serviceDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">My {service.title} Process</h2>
            
            <div className="space-y-16">
              {processList.map((process, index) => (
                <div key={index} className="relative">
                  {/* Process step number */}
                  <div className={`absolute top-0 left-0 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  
                  <div className="ml-20">
                    <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                    <p className="text-gray-600 mb-6">{process.description}</p>
                    
                    <div className="space-y-3">
                      {process.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${service.color} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started with {service.title}?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how my {service.title.toLowerCase()} services can help your business grow.
            </p>
            
            <Button asChild size="lg" className="bg-white hover:bg-white/90 font-medium px-8" style={{color: `var(--${service.color.split('-')[1].split(' ')[0]})`}}>
              <Link to="/contact">
                Get Your Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get service specific details
const getServiceDetails = (serviceId: string) => {
  switch (serviceId) {
    case "web-design":
      return [
        {
          title: "Custom Website Design",
          description: "Unique designs tailored specifically to your brand identity and business goals."
        },
        {
          title: "Responsive Layouts",
          description: "Websites that look and function beautifully on desktop, tablet, and mobile devices."
        },
        {
          title: "Design Systems",
          description: "Comprehensive design systems to ensure consistency across your entire digital presence."
        },
        {
          title: "Prototyping",
          description: "Interactive prototypes that allow you to experience your website before development begins."
        }
      ];
    case "ui-ux":
      return [
        {
          title: "User Research",
          description: "In-depth analysis of your target audience to inform design decisions."
        },
        {
          title: "User Journey Mapping",
          description: "Strategic planning of the user's path through your website to optimize conversions."
        },
        {
          title: "Wireframing",
          description: "Low-fidelity layouts to establish information hierarchy and page structure."
        },
        {
          title: "Usability Testing",
          description: "Testing with real users to identify and resolve any experience issues."
        }
      ];
    case "frontend-dev":
      return [
        {
          title: "Performance Optimization",
          description: "Fast-loading websites with optimized assets and code splitting for better user experience."
        },
        {
          title: "Modern Framework Implementation",
          description: "Development using React, Vue, or other modern frameworks tailored to your project needs."
        },
        {
          title: "Responsive Coding",
          description: "Implementation of responsive designs that work flawlessly across all devices."
        },
        {
          title: "Interactive Elements",
          description: "Smooth animations and transitions that enhance user engagement without sacrificing performance."
        }
      ];
    case "backend-dev":
      return [
        {
          title: "API Development",
          description: "Custom API endpoints with RESTful or GraphQL architecture to power your frontend applications."
        },
        {
          title: "Database Design",
          description: "Efficient database schemas and query optimization for faster data retrieval and manipulation."
        },
        {
          title: "Authentication & Security",
          description: "Robust security measures including authentication flows, authorization, and data encryption."
        },
        {
          title: "Scalable Architecture",
          description: "Future-proof systems designed to scale with your business growth and increasing traffic."
        }
      ];
    case "seo":
      return [
        {
          title: "Keyword Research",
          description: "Identifying high-value search terms that your target audience is actively searching for."
        },
        {
          title: "On-Page Optimization",
          description: "Strategic implementation of keywords and SEO best practices throughout your website."
        },
        {
          title: "Technical SEO",
          description: "Resolving technical issues that could be preventing search engines from indexing your site."
        },
        {
          title: "Performance Improvement",
          description: "Optimizing site speed and mobile-friendliness, which are critical ranking factors."
        }
      ];
    default:
      return [];
  }
};

// Helper function to get service specific process
const getServiceProcess = (serviceId: string) => {
  switch (serviceId) {
    case "web-design":
      return [
        {
          title: "Discovery",
          description: "Understanding your business, target audience, and design preferences.",
          points: [
            "In-depth consultation to understand your vision",
            "Competitor analysis to identify opportunities",
            "Definition of project scope and goals",
            "Establishing success metrics"
          ]
        },
        {
          title: "Design Concept",
          description: "Creating initial designs and visual direction for your approval.",
          points: [
            "Mood board development",
            "Color palette and typography selection",
            "Initial homepage and key page concepts",
            "Client feedback and revisions"
          ]
        },
        {
          title: "Design Development",
          description: "Expanding the approved design concept to all required pages.",
          points: [
            "Complete website layout design",
            "Responsive adaptations for all devices",
            "Interactive element design",
            "Final design review and approval"
          ]
        }
      ];
    case "ui-ux":
      return [
        {
          title: "User Research",
          description: "Understanding the needs and behaviors of your target users.",
          points: [
            "User interviews and surveys",
            "Creating user personas",
            "Competitive analysis",
            "Establishing UX goals and metrics"
          ]
        },
        {
          title: "Information Architecture",
          description: "Organizing content in a logical, user-friendly structure.",
          points: [
            "Site mapping and content organization",
            "User flow diagrams",
            "Navigation planning",
            "Taxonomy development"
          ]
        },
        {
          title: "Prototyping & Testing",
          description: "Creating and testing interactive prototypes with real users.",
          points: [
            "Wireframe development",
            "Interactive prototype creation",
            "Usability testing sessions",
            "Iteration based on user feedback"
          ]
        }
      ];
    case "frontend-dev":
      return [
        {
          title: "Setup & Planning",
          description: "Establishing the technical foundation for your project.",
          points: [
            "Technology stack selection",
            "Development environment setup",
            "Component architecture planning",
            "Code standards and conventions definition"
          ]
        },
        {
          title: "Implementation",
          description: "Translating designs into functional frontend code.",
          points: [
            "HTML/CSS implementation",
            "JavaScript/React component development",
            "Responsive behavior implementation",
            "Integration with backend APIs"
          ]
        },
        {
          title: "Testing & Optimization",
          description: "Ensuring quality and performance across all browsers and devices.",
          points: [
            "Cross-browser and device testing",
            "Performance optimization",
            "Accessibility compliance",
            "Code review and refactoring"
          ]
        }
      ];
    case "backend-dev":
      return [
        {
          title: "Architecture Planning",
          description: "Designing a robust backend system that meets your requirements.",
          points: [
            "System architecture design",
            "Database schema modeling",
            "API endpoint planning",
            "Security considerations and planning"
          ]
        },
        {
          title: "Development",
          description: "Building secure, scalable backend services and APIs.",
          points: [
            "Database implementation",
            "API development",
            "Authentication and authorization systems",
            "Business logic implementation"
          ]
        },
        {
          title: "Testing & Deployment",
          description: "Ensuring reliability and performance before going live.",
          points: [
            "Unit and integration testing",
            "Load testing and optimization",
            "Security testing",
            "Deployment and CI/CD setup"
          ]
        }
      ];
    case "seo":
      return [
        {
          title: "SEO Audit",
          description: "Comprehensive analysis of your current SEO performance.",
          points: [
            "Technical SEO evaluation",
            "Content quality assessment",
            "Backlink profile analysis",
            "Competitor SEO comparison"
          ]
        },
        {
          title: "Strategy Development",
          description: "Creating a tailored SEO plan based on audit findings.",
          points: [
            "Keyword research and selection",
            "Content strategy planning",
            "Technical improvement roadmap",
            "Link building strategy"
          ]
        },
        {
          title: "Implementation & Monitoring",
          description: "Executing the strategy and tracking performance improvements.",
          points: [
            "On-page optimization implementation",
            "Technical SEO fixes",
            "Content creation or optimization",
            "Performance tracking and reporting"
          ]
        }
      ];
    default:
      return [];
  }
};

export default ServiceDetail;
