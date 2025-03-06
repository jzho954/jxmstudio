
import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import NotFoundComponent from "@/components/NotFoundComponent";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Compare } from "@/components/ui/compare";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFoundComponent />;
  }

  return (
    <div className="container mx-auto py-12 px-4 pt-24 sm:pt-28">
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
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
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
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Improved user engagement by 45%</li>
            <li>Decreased load time by 30%</li>
            <li>Increased conversion rate by 25%</li>
            <li>Reduced bounce rate by 20%</li>
          </ul>
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
