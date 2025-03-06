
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  fullDescription: string;
  technologies: string[];
  clientQuote?: {
    text: string;
    author: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-redesign",
    title: "E-commerce Redesign",
    category: "Web Design",
    description: "Complete redesign of an outdated e-commerce platform with modern UI and improved user flow.",
    beforeImage: "/lovable-uploads/ff230f24-8b76-41ea-8ded-ebf48bc993a0.png",
    afterImage: "/lovable-uploads/7351ea72-f37d-448c-b066-e7dc46239084.png",
    fullDescription: "This e-commerce platform was struggling with cart abandonment and low conversion rates. I completely redesigned the user experience, focusing on a cleaner product presentation, streamlined checkout process, and mobile optimization. The result was a 43% increase in conversions and a 27% decrease in cart abandonment.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Framer Motion"],
    clientQuote: {
      text: "The redesign completely transformed our online presence. Sales increased immediately after launch, and customers have been raving about how easy the site is to use now.",
      author: "Sarah Johnson",
      company: "Elemental Lifestyle"
    }
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "UI/UX Design",
    description: "Modern website with online reservation system and mobile-optimized menu for a high-end restaurant.",
    beforeImage: "/lovable-uploads/05427f30-a45b-4280-87a4-87cbd79563c1.png",
    afterImage: "/lovable-uploads/9502bfbe-7698-4362-ab15-aa1a1a729c58.png",
    fullDescription: "This upscale restaurant needed a digital presence that matched the elegance of their dining experience. I designed a visually stunning website with smooth animations, an intuitive reservation system, and a beautifully presented menu that adapts perfectly to mobile devices. The site also features professional food photography and chef profiles to tell the restaurant's unique story.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Reservation API", "Responsive Design"],
    clientQuote: {
      text: "Our new website perfectly captures the essence of our restaurant. Online reservations have increased by 65%, and guests frequently mention how they love browsing our menu before they arrive.",
      author: "Michael Chen",
      company: "Fusion Table"
    }
  },
  {
    id: "fitness-app",
    title: "Fitness App Interface",
    category: "UI/UX Design",
    description: "Clean, motivational fitness application interface with workout tracking and progress visualization.",
    beforeImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    fullDescription: "This fitness startup needed a user interface that was both functional and motivational. I created a clean, energetic design with intuitive workout tracking, progress visualization, and social features. The interface uses color psychology and subtle animations to create a motivating experience that keeps users engaged with their fitness goals.",
    technologies: ["React Native", "SVG Animations", "Chart.js", "Firebase", "Figma"],
    clientQuote: {
      text: "User retention has doubled since implementing the new interface. The design motivates users to keep coming back, and the progress visualizations have been particularly popular.",
      author: "Emma Rodriguez",
      company: "FitTrack"
    }
  },
  {
    id: "portfolio-site",
    title: "Photographer Portfolio",
    category: "Web Design",
    description: "Minimalist, image-focused portfolio site that showcases a photographer's work with optimal loading speed.",
    beforeImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2455&auto=format&fit=crop&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    fullDescription: "This photographer needed a portfolio that would showcase their work without distractions, while also loading quickly despite the high-resolution images. I designed a minimalist interface with advanced image optimization, lazy loading, and subtle transitions. The gallery features intuitive navigation and adapts beautifully to different screen sizes.",
    technologies: ["React", "Next.js", "Framer Motion", "Image Optimization", "CSS Grid"],
    clientQuote: {
      text: "My portfolio finally displays my work exactly as I envisioned. The site loads surprisingly fast even with all my high-resolution images, and I've received multiple new client inquiries directly through the site.",
      author: "David Winters",
      company: "David Winters Photography"
    }
  }
];
