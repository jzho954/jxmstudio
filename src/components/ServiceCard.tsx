import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  id: string;
}

const ServiceCard = ({ icon: Icon, title, description, gradient, delay = 0, id }: ServiceCardProps) => {
  // Replace gradient colors with navy/yellow
  let updatedGradient = gradient;
  if (gradient.includes("indigo") || gradient.includes("purple") || gradient.includes("pink")) {
    updatedGradient = "from-navy-500 to-navy-700";
  }

  return (
    <Link to={`/services/${id}`} className="block h-full">
      <Card 
        className={`stagger-item animate-scale-in hover-scale overflow-hidden border border-white/20 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl h-full flex flex-col`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-t ${updatedGradient} opacity-[0.03]`}></div>
        <CardHeader className="pb-2">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${updatedGradient} w-fit mb-2`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
