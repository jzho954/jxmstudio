
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, gradient, delay = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className={`stagger-item animate-scale-in hover-scale overflow-hidden border border-white/20 shadow-xl`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-[0.03]`}></div>
      <CardHeader className="pb-2">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} w-fit mb-2`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
