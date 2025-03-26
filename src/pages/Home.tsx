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
import { motion } from "framer-motion";

const Home = () => {
  // Use the scroll to top hook
  useScrollToTop();

  // Select featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  // Process timeline data
  const processData = [
    {
      title: "Discovery",
      emoji: "🔍",
      content: {
        description: "Initial consultation to understand your vision, goals, and requirements. We'll analyze your needs and plan the perfect approach.",
        bulletPoints: [
          "Requirements gathering",
          "Project scope definition",
          "Timeline planning"
        ]
      }
    },
    {
      title: "Design",
      emoji: "🎨",
      content: {
        description: "Creating the visual foundation of your project with attention to aesthetics and user experience.",
        bulletPoints: [
          "Wireframe creation",
          "UI/UX design",
          "Design review and feedback"
        ]
      }
    },
    {
      title: "Development",
      emoji: "💻",
      content: {
        description: "Bringing the design to life with clean, efficient, and maintainable code.",
        bulletPoints: [
          "Frontend development",
          "Backend integration",
          "Responsive implementation"
        ]
      }
    },
    {
      title: "Testing",
      emoji: "✅",
      content: {
        description: "Rigorous quality assurance to ensure everything works flawlessly.",
        bulletPoints: [
          "Cross-browser testing",
          "Performance optimization",
          "Bug fixing"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-center mb-4">What I Offer</h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Specialized web design and development services to create digital experiences 
              that captivate and convert.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ServiceCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradient={service.color}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy-500 text-navy-600 rounded-md hover:bg-navy-50 transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-500 mb-3">My Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent projects showcasing web design and development expertise.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="border-navy-500 text-navy-600 hover:bg-navy-50">
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-navy-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's collaborate to build a website that perfectly represents your brand and engages your audience.
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Tailored Solutions</h3>
                    <p className="text-white/80">
                      Custom design and development that perfectly fits your brand and business needs.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Stress-Free Process</h3>
                    <p className="text-white/80">
                      Clear communication and a streamlined approach from concept to launch.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button asChild size="lg" className="bg-white text-navy-600 hover:bg-white/90 font-medium px-8">
                <Link to="/contact">
                  Schedule Your Free Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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
