
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-900">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-500/70 via-purple-500/70 to-pink-500/70"></div>
      
      {/* Background boxes */}
      <Boxes className="z-0" />
      
      {/* Mask for gradient fade */}
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <p className="text-white/90 font-medium">Web Designer & Developer</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crafting Stunning Websites <span className="text-pink-400">That Pop</span>
          </h1>
          
          <p className="text-xl md:text-2xl italic text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design experiences, not just pages. Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-medium px-8">
              <Link to="/contact">
                Let's Work Together
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-medium px-8">
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <p className="text-white/50 text-sm mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="italic">Tip:</span> Try hovering and clicking on the background grid for a surprise
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
