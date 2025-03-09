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
    id: "windshield-revamp",
    title: "Car Windshield Revamp",
    category: "Web Design",
    description: "A full custom redesign for a car windshield repair company, featuring a modern look and seamless booking flow.",
    beforeImage: "/lovable-uploads/ff230f24-8b76-41ea-8ded-ebf48bc993a0.png",
    afterImage: "/lovable-uploads/7351ea72-f37d-448c-b066-e7dc46239084.png",
    fullDescription: "This car windshield repair company had an outdated site that turned customers away with slow navigation and poor visibility. I built a custom website from scratch, with a sleek design, an easy-to-use booking system, and mobile-first optimization. Post-launch, they saw a 40% uptick in appointment bookings and a 30% boost in local search traffic.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Google Maps API", "Framer Motion"],
    clientQuote: {
      text: "The new site's a game-changer—customers love the quick booking feature, and we're getting way more calls. It's night and day from the old one!",
      author: "Mike Reynolds",
      company: "Auckland Windshield Pros"
    }
  },
  {
    id: "plumbing-overhaul",
    title: "Plumbing Overhaul",
    category: "UI/UX Design",
    description: "Custom website with an easy booking system and mobile-friendly service pages for a local plumbing business.",
    beforeImage: "/lovable-uploads/05427f30-a45b-4280-87a4-87cbd79563c1.png",
    afterImage: "/lovable-uploads/9502bfbe-7698-4362-ab15-aa1a1a729c58.png",
    fullDescription: "This local plumbing company needed a website that matched their reliable service with a modern edge. I crafted a custom site from scratch, featuring a user-friendly booking system, clear service breakdowns, and mobile optimization for on-the-go customers. With sharp visuals and smooth animations, it now showcases their expertise and drives a 60% increase in online inquiries.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Booking API", "Responsive Design"],
    clientQuote: {
      text: "The new site nails it—customers book us in a snap, and we're getting way more calls. It's made our business look top-notch!",
      author: "Tom Bradley",
      company: "Auckland Plumbing Co."
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
