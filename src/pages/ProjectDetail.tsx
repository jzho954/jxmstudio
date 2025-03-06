
import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import NotFoundComponent from "@/components/NotFoundComponent";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFoundComponent />;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-8">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec arcu tristique posuere. Fusce hendrerit mauris in est scelerisque, non fermentum nisl sagittis.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>Donec euismod, nisi vel consectetur euismod, nisl nisl consectetur nisl, nec ultrices nisl nisl sit amet nisl. Donec euismod, nisi vel consectetur euismod, nisl nisl consectetur nisl, nec ultrices nisl nisl sit amet nisl.</p>
          
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
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
