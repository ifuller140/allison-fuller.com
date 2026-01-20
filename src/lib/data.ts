export interface Project {
  id: string;
  title: string;
  category: "marketing" | "film" | "social";
  description: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  videoUrl?: string; // For Film projects
  mediaType?: "image" | "video" | "slideshow"; // Explicit override
  date: string;
  client?: string;
  role: string;
  tools: string[];
}

export const projects: Project[] = [
  // Marketing Projects
  {
    id: "roc-nation-paper-planes",
    title: "Roc Nation x Paper Planes Campaign",
    category: "marketing",
    description: "Cross-brand marketing campaign development and social media content creation.",
    fullDescription: "As a Digital Marketing & Strategy Intern at Roc Nation (Summer 2025), created and presented a comprehensive cross-brand marketing campaign between Paper Planes and a Roc Nation client. Filmed and edited social media content generating over 2,000 views per video. Curated weekly social media trend reports to assist digital media managers in content planning for high-profile clients. Restructured client information databases and automated systems to send timely reminders to key managers.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2025",
    client: "Roc Nation / Paper Planes",
    role: "Digital Marketing & Strategy Intern",
    tools: ["Adobe Premiere Pro", "Social Media Analytics", "Content Strategy"],
  },
  {
    id: "adamit-brand-strategy",
    title: "Adamit Productions Multi-Brand Strategy",
    category: "marketing",
    description: "Digital marketing strategy for 4 brands with 60k+ followers and 200k monthly views.",
    fullDescription: "As Digital Marketing & Social Media Strategy Manager at Adamit Productions (2023-Present), developed and managed social media marketing strategies for 4 brands, growing audiences to over 60,000 followers and generating 200,000 views per month. Designed comprehensive branding guides to streamline and optimize branding strategy, creating cohesive messaging and visual identity. Conducted market research on paid advertisement platforms, SEO content blogging, and brand partnerships. Created bi-monthly data-driven analytics reports to summarize social media performance.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2023-Present",
    client: "Adamit Productions",
    role: "Digital Marketing & Social Media Strategy Manager",
    tools: ["Metricool", "Manychat", "Google Ads", "Mailchimp", "WordPress"],
  },
  {
    id: "possible-consulting",
    title: "Possible Consulting Capstone Project",
    category: "marketing",
    description: "Strategic consulting project simulating real client work and recommendations.",
    fullDescription: "Selected as 1 of 40 students for competitive consulting program focused on strategic thinking and client strategy. Strengthened skills in market analysis and problem-solving through workshops and case studies. Completed a capstone project simulating real client work and strategic recommendations, applying data-driven insights to business challenges.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2025",
    client: "Possible Consulting Career Accelerator",
    role: "Consulting Participant",
    tools: ["Market Analysis", "Strategic Planning", "Client Strategy"],
  },
  // Film Projects
  {
    id: "camp-nesher-theater",
    title: "Camp Nesher Theater Productions",
    category: "film",
    description: "Assistant Theater Director managing 2-3 productions per summer with 100+ performers.",
    fullDescription: "Served as Assistant Theater Director at Camp Nesher for three summers (2022-2024), producing 2-3 theater performances each summer with 100+ campers aged 9-14 per production. Assisted with organizing and leading rehearsals, choreographing dance routines, writing scripts, and constructing props and sets. Developed and taught a daily improv theater curriculum for campers. Also assisted in the camp's choirs as soprano section leader, learning and teaching music to co-staff and campers.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2022-2024",
    role: "Assistant Theater Director & Improv Specialist",
    tools: ["Directing", "Choreography", "Scriptwriting", "Production Design"],
  },
  {
    id: "brandeis-film-projects",
    title: "Brandeis Film & Media Projects",
    category: "film",
    description: "Film, Television & Interactive Media coursework and creative projects.",
    fullDescription: "As a Film, Television & Interactive Media major at Brandeis University, developing skills in video production, storytelling, and media creation. Combining creative filmmaking with marketing expertise to produce compelling content that connects with audiences. Currently building a portfolio of student film work and collaborative projects.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg"],
    mediaType: "image",
    date: "2024-Present",
    role: "Film Student",
    tools: ["Adobe Premiere Pro", "CapCut", "Video Production"],
  },
  // Social Media Projects
  {
    id: "adamit-social-media",
    title: "Adamit Productions Social Strategy",
    category: "social",
    description: "Multi-platform social media management generating 200k+ monthly views.",
    fullDescription: "Managed social media content across all platforms for multiple brands under Adamit Productions. Scripted, scheduled, analyzed, and managed content strategies. Created digital marketing campaigns to boost brand awareness, including launching email lists, creating content calendars, and building ad campaign strategies. Secured brand partnerships and increased monetization revenue through strategic content planning.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "image",
    date: "2023-Present",
    client: "Adamit Productions",
    role: "Social Media Strategy Manager",
    tools: ["Metricool", "Canva", "Content Calendars", "Analytics"],
  },
  {
    id: "manginah-acapella",
    title: "Manginah Acapella Social Media",
    category: "social",
    description: "Communications and social media presence for Brandeis acapella group.",
    fullDescription: "As Communications Coordinator for Manginah Acapella Group at Brandeis University (2025-Present), manage the group's social media presence and create content to promote events and performances. Develop engaging content that showcases the group's performances and builds audience engagement within the Brandeis community.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    mediaType: "image",
    date: "2025-Present",
    client: "Manginah Acapella Group",
    role: "Communications Coordinator",
    tools: ["Social Media Management", "Content Creation", "Event Promotion"],
  },
  {
    id: "roc-nation-social",
    title: "Roc Nation Social Content",
    category: "social",
    description: "Social media content creation and trend analysis for high-profile clients.",
    fullDescription: "Created content ideas and filmed/edited social media videos for Paper Planes and Roc Nation's social channels. Curated weekly social media trend reports to inform content planning for the digital marketing team. Videos generated over 2,000 views each, contributing to brand engagement and audience growth.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "image",
    date: "2025",
    client: "Roc Nation",
    role: "Digital Marketing & Strategy Intern",
    tools: ["Adobe Premiere Pro", "Trend Analysis", "Content Strategy"],
  },
];

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((p) => p.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id);
};
