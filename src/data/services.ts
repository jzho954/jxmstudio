
import { Briefcase, Code, LayoutGrid, Search, Server } from "lucide-react";

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "web-design",
    icon: Briefcase,
    title: "Web Design",
    description: "Fully custom, responsive designs that pop on any device, built with modern frameworks to showcase your business in style.",
    color: "from-navy-500 to-navy-700"
  },
  {
    id: "ui-ux",
    icon: LayoutGrid,
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that guide your visitors toward their goals. I create designs that are beautiful and deeply functional.",
    color: "from-navy-600 to-navy-800"
  },
  {
    id: "frontend-dev",
    icon: Code,
    title: "Frontend Development",
    description: "Clean, efficient code using React, Tailwind CSS, and other modern technologies to bring designs to life with smooth animations and interactions.",
    color: "from-navy-500 to-navy-700"
  },
  {
    id: "backend-dev",
    icon: Server,
    title: "Backend Development",
    description: "Robust server-side solutions with secure APIs, database management, and scalable architecture to power your web applications effortlessly.",
    color: "from-navy-600 to-navy-800"
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and get your business the recognition it deserves. I implement SEO best practices to help your site rank higher in search results.",
    color: "from-navy-500 to-navy-700"
  }
];
