import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import NotFoundComponent from "@/components/NotFoundComponent";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Compare } from "@/components/ui/compare";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use the scroll to top hook
  useScrollToTop();

  if (!project) {
    return <NotFoundComponent />;
  }

  return (
    <div className="container mx-auto py-12 px-4 pt-24 sm:pt-28" ref={containerRef}>
      <div className="absolute top-16 left-0 w-full z-10">
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gray-200" />
        <ScrollProgress 
          className="absolute top-0 h-0.5 bg-navy-600" 
          containerRef={containerRef}
          springOptions={{ stiffness: 280, damping: 18, mass: 0.3 }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm" className="mb-4">
            <Link to="/projects" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <img 
          src={project.afterImage} 
          alt={project.title} 
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-8">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-navy-100 text-navy-800 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge</h2>
          <p>{project.fullDescription}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">My Approach</h2>
          {project.id === "pest-removal-redesign" && (
            <div className="mb-8">
              <p className="mb-4">
                My concept design demonstrates a complete transformation from the old website.
                You can view our interactive concept design:
              </p>
              <div className="mb-4">
                <a 
                  href="https://pestremoval-mockup.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
                >
                  View Interactive Mockup
                </a>
              </div>
              <p className="mb-4">
                The new design focuses on:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Clean, modern interface replacing the cluttered old design</li>
                <li>SEO-optimized structure to improve search visibility</li>
                <li>Fast-loading, responsive mobile layout</li>
                <li>Streamlined lead generation process</li>
              </ul>
            </div>
          )}
          {project.id === "plumbing-overhaul" && (
            <div className="mb-8">
              <p className="mb-4">
                Client wanted a themed plumbing site specifically tailored to his business needs.
                You can view our interactive concept design:
              </p>
              <div className="mb-4">
                <a 
                  href="https://plumbing-mockup.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
                >
                  View Interactive Mockup
                </a>
              </div>
              <p className="mb-4">
                The new design focuses on:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Professional, branded interface that reflects the client's business identity</li>
                <li>Clear service presentation to highlight expertise areas</li>
                <li>Mobile optimized layout for on the go customers</li>
                <li>Simplified contact process to increase conversion rates</li>
              </ul>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 my-8">
            <div className="rounded-lg overflow-hidden">
              <h3 className="text-lg font-medium mb-2">Before & After</h3>
              <Compare 
                firstImage={project.beforeImage}
                secondImage={project.afterImage}
                className="w-full h-[350px] md:h-[450px] rounded-lg object-cover"
                firstImageClassName="object-cover"
                secondImageClassname="object-cover"
                slideMode="hover"
                autoplay={true}
                autoplayDuration={3000}
              />
            </div>
          </div>
          
          {project.clientQuote && (
            <div className="bg-navy-50 p-6 rounded-lg my-8">
              <blockquote className="italic text-gray-700 mb-4">
                "{project.clientQuote.text}"
              </blockquote>
              <p className="font-medium">
                {project.clientQuote.author}, {project.clientQuote.company}
              </p>
            </div>
          )}
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">The Results</h2>
          {project.id === "windshield-revamp" && (
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>40% increase in appointment bookings</li>
              <li>80% boost in local search traffic</li>
              <li>Added mobile compatibility</li>
              <li>Streamlined booking process</li>
            </ul>
          )}
          {project.id === "plumbing-overhaul" && (
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>120% increase in online inquiries</li>
              <li>Enhanced mobile responsiveness</li>
              <li>Improved service visibility</li>
              <li>Streamlined customer booking process</li>
            </ul>
          )}
          {project.id === "pest-removal-redesign" && (
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Increased customer trust through visual design</li>
              <li>Enhanced mobile engagement</li>
              <li>Simplified service navigation</li>
              <li>Improved booking conversion rate</li>
            </ul>
          )}
          {project.id === "dream-app" && (
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Built and designed IOS app</li>
              <li>Andriod Compatible</li>
              <li>Improved dream analysis</li>
              <li>Very satisfied client</li>
            </ul>
          )}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Interested in similar results?</h2>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
