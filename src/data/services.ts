
import { Briefcase, Code, LayoutGrid, Search } from "lucide-react";

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
    description: "Pixel-perfect, responsive designs built with modern frameworks that adapt flawlessly to any device. I create visually stunning websites that captivate your audience.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "ui-ux",
    icon: LayoutGrid,
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that guide your visitors toward their goals. I create designs that are beautiful and deeply functional.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "frontend-dev",
    icon: Code,
    title: "Frontend Development",
    description: "Clean, efficient code using React, Tailwind CSS, and other modern technologies to bring designs to life with smooth animations and interactions.",
    color: "from-pink-500 to-indigo-500"
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and get your business the recognition it deserves. I implement SEO best practices to help your site rank higher in search results.",
    color: "from-indigo-600 to-purple-600"
  }
];
