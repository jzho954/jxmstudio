
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  delay?: number;
}

const ProjectCard = ({
  id,
  title,
  category,
  description,
  beforeImage,
  afterImage,
  delay = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="stagger-item animate-scale-in overflow-hidden border-none shadow-lg transition-all duration-300 group"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy-50 to-white opacity-90 z-0"></div>
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={beforeImage} 
                alt={`${title} before`} 
                className="w-full h-40 object-cover rounded-lg transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-medium text-sm">Before</span>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={afterImage} 
                alt={`${title} after`} 
                className="w-full h-40 object-cover rounded-lg transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-medium text-sm">After</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button
            asChild
            variant="outline"
            className="w-full border-navy-500 text-navy-600 hover:bg-navy-50 group"
          >
            <Link to={`/projects/${id}`} className="flex items-center justify-center gap-2">
              View Details
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
