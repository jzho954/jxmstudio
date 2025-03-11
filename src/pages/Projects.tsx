import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const categories = Array.from(new Set(projects.map(project => project.category)));
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">My Portfolio</h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore my recent projects showcasing web design and development expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={filter === null ? "bg-navy-500" : "border-gray-300"}
            >
              All Projects
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-navy-500" : "border-gray-300"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-400">No projects found in this category</h3>
              <p className="text-gray-500 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
