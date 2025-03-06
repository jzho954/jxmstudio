
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [id]);
  
  // If project not found, show error and navigation option
  if (!loading && !project) {
    return (
      <div className="min-h-screen pt-32 flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the project you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            onClick={() => navigate("/projects")}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            View All Projects
          </Button>
        </div>
      </div>
    );
  }
  
  if (loading || !project) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-gray-400">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6"
            >
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{project.title}</h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {project.category}
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.beforeImage} 
                  alt={`${project.title} before`} 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 text-white rounded-md">
                  Before
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.afterImage} 
                  alt={`${project.title} after`} 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 text-white rounded-md">
                  After
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">{project.fullDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.clientQuote && (
              <div className="bg-gray-50 border-l-4 border-indigo-500 rounded-lg p-6 mb-10">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{project.clientQuote.text}"
                </blockquote>
                <div>
                  <div className="font-medium text-gray-900">{project.clientQuote.author}</div>
                  <div className="text-gray-600">{project.clientQuote.company}</div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                <Link to="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
