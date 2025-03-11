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
    
  },
  {
    id: "plumbing-overhaul",
    title: "Plumbing Overhaul",
    category: "UI/UX Design",
    description: "Custom website with an easy booking system and mobile friendly service pages for a local plumbing business.",
    beforeImage: "/lovable-uploads/05427f30-a45b-4280-87a4-87cbd79563c1.png",
    afterImage: "/lovable-uploads/9502bfbe-7698-4362-ab15-aa1a1a729c58.png",
    fullDescription: "This local plumbing company needed a website that matched their reliable service with a modern edge. I crafted a custom site from scratch, featuring a user-friendly booking system, clear service breakdowns, and mobile optimization for on the go customers. With sharp visuals and smooth animations, it now showcases their expertise and drives a 120% increase in online inquiries.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Booking API", "Responsive Design"],
    
  },
  {
    id: "pest-removal-redesign",
    title: "Pest Removal Redesign",
    category: "UI/UX Design",
    description: "Modern, custom website redesign for a pest removal service with intuitive booking and service visuals.",
    beforeImage: "/lovable-uploads/before-pest.png",
    afterImage: "/lovable-uploads/after-pest.png",
    fullDescription: "This pest removal company needed a website that stood out and simplified customer access. I redesigned it from scratch with a clean, bold design, featuring an easy booking system, clear service breakdowns, and pest visuals to build trust. Subtle animations and a mobile-friendly layout boosted engagement.",
    technologies: ["React", "SVG Animations", "Tailwind CSS", "Firebase", "Figma"],
    
  },
  {
    id: "dream-app",
    title: "Dream JournalApp",
    category: "App Design",
    description: "Minimalist, app design and build for a client needing a dream journal app that helps the record and analyze their dreams much easier than convetional journaling.",
    beforeImage: "/lovable-uploads/consultation.png",
    afterImage: "/lovable-uploads/dream.png",
    fullDescription: "Client needed a dream journal app that would help them record and analyze their dreams much easier than convetional journaling. I designed a minimalist interface with advanced image optimization, lazy loading, and subtle transitions. The gallery features intuitive navigation and adapts beautifully to different screen sizes.",
    technologies: ["React Native", "Next.js", "Expo Go", "Image Optimization", "CSS Grid"],
    clientQuote: {
      text: " Amazing work, I love the app! It's so much easier to use and the design is beautiful. I've already seen a difference in my dream life since using it.",
      author: "Harrison",
      company: "Ensor"
    }
  }
];
