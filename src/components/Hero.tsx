
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-navy-500 to-navy-700 dark:from-neutral-950 dark:to-neutral-900">
      {/* Background with sparkles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#ffff33"
          speed={0.5}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <p className="text-white/90 font-medium">Web Designer & Developer</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in text-white" style={{ animationDelay: "0.2s" }}>
            Crafting Stunning Websites <span className="text-[#ffff33]">That Pop</span>
          </h1>
          
          <p className="text-xl md:text-2xl italic text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design experiences, not just pages. Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-navy-500 text-white hover:bg-navy-600 font-medium px-8 border border-white/20">
              <Link to="/contact">
                Let's Work Together
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20 font-medium px-8">
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
