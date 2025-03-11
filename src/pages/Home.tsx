import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Timeline } from "@/components/ui/timeline";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Home = () => {
  // Use the scroll to top hook
  useScrollToTop();

  // Select featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  // Process timeline data
  const processData = [
    {
      title: "Discovery",
      content: (
        <div className="prose prose-neutral dark:prose-invert">
          <p>Initial consultation to understand your vision, goals, and requirements. We'll analyze your needs and plan the perfect approach.</p>
          <ul className="mt-4">
            <li>Requirements gathering</li>
            <li>Project scope definition</li>
            <li>Timeline planning</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div className="prose prose-neutral dark:prose-invert">
          <p>Creating the visual foundation of your project with attention to aesthetics and user experience.</p>
          <ul className="mt-4">
            <li>Wireframe creation</li>
            <li>UI/UX design</li>
            <li>Design review and feedback</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div className="prose prose-neutral dark:prose-invert">
          <p>Bringing the design to life with clean, efficient, and maintainable code.</p>
          <ul className="mt-4">
            <li>Frontend development</li>
            <li>Backend integration</li>
            <li>Responsive implementation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Testing",
      content: (
        <div className="prose prose-neutral dark:prose-invert">
          <p>Rigorous quality assurance to ensure everything works flawlessly.</p>
          <ul className="mt-4">
            <li>Cross-browser testing</li>
            <li>Performance optimization</li>
            <li>Bug fixing</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div className="prose prose-neutral dark:prose-invert">
          <p>Smooth deployment and ongoing support to ensure your project's success.</p>
          <ul className="mt-4">
            <li>Site deployment</li>
            <li>Performance monitoring</li>
            <li>Post-launch support</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-500 mb-3">What I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized web design and development services to create digital experiences that captivate and convert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.color}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-navy-500 text-navy-600 hover:bg-navy-50">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
                View All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-500 mb-3">My Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent projects showcasing web design and development expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-navy-500 text-navy-600 hover:bg-navy-50">
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-navy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's collaborate to build a website that perfectly represents your brand and engages your audience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Tailored Solutions</h3>
                    <p className="text-white/80">
                      Custom design and development that perfectly fits your brand and business needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Stress-Free Process</h3>
                    <p className="text-white/80">
                      Clear communication and a streamlined approach from concept to launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-navy-600 hover:bg-white/90 font-medium px-8">
              <Link to="/contact">
                Schedule Your Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <Timeline data={processData} />
      </section>
    </div>
  );
};

export default Home;
