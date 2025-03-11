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
    title: "Strategic Website Design",
    description: "Captivating, conversion-focused designs that make an impact across all devices. Built with cutting-edge frameworks to elevate your brand's digital presence.",
    color: "from-navy-500 to-navy-700"
  },
  {
    id: "ui-ux",
    icon: LayoutGrid,
    title: "Conversion-Driven UI/UX",
    description: "Strategic interfaces and customer journey mapping that transform visitors into loyal clients. I create experiences that not only look stunning but drive measurable business results.",
    color: "from-navy-600 to-navy-800"
  },
  {
    id: "marketing",
    icon: Code,
    title: "Social Media & Content Marketing",
    description: "Comprehensive digital marketing across Google Ads, Facebook, Instagram, and TikTok. Creating engaging content and targeted campaigns that drive engagement, leads, and measurable results.",
    color: "from-navy-500 to-navy-700"
  },
  {
    id: "backend-dev",
    icon: Server,
    title: "Scalable Backend Solutions",
    description: "Enterprise-grade infrastructure with secure APIs, optimized database architecture, and cloud-ready solutions that support your business growth without limits.",
    color: "from-navy-600 to-navy-800"
  },
  {
    id: "seo",
    icon: Search,
    title: "Revenue-Focused SEO",
    description: "Data-driven optimization strategies that increase organic traffic, improve rankings, and convert visitors into customers. I implement ROI-focused SEO to maximize your digital investment.",
    color: "from-navy-500 to-navy-700"
  }
];
