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
  {
    id: "brand-refresh-luxe",
    title: "Luxe Beauty Brand Refresh",
    category: "marketing",
    description: "Complete brand identity and marketing strategy for a luxury skincare line.",
    fullDescription: "Led the comprehensive brand refresh for Luxe Beauty, a premium skincare company looking to reposition in the luxury market. Developed new brand guidelines, marketing collateral, and a multi-channel campaign strategy that resulted in a 45% increase in brand awareness.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2024",
    client: "Luxe Beauty Co.",
    role: "Lead Marketing Strategist",
    tools: ["Adobe Creative Suite", "Figma", "HubSpot"],
  },
  {
    id: "sustainable-fashion-campaign",
    title: "Sustainable Fashion Launch",
    category: "marketing",
    description: "Integrated campaign for eco-conscious fashion brand launch.",
    fullDescription: "Orchestrated the market launch for an emerging sustainable fashion brand. Created compelling narratives around ethical production and developed influencer partnerships that generated over 2M impressions in the first month.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2024",
    client: "Verde Apparel",
    role: "Campaign Director",
    tools: ["Sprout Social", "Canva", "Google Analytics"],
  },
  {
    id: "tech-startup-pitch",
    title: "FinTech Startup Pitch Deck",
    category: "marketing",
    description: "Investor pitch presentation for Series A funding round.",
    fullDescription: "Crafted a compelling pitch deck and presentation strategy for a fintech startup seeking Series A funding. The presentation helped secure $5M in investment by clearly articulating the value proposition and market opportunity.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "slideshow",
    date: "2023",
    client: "PayFlow Inc.",
    role: "Presentation Designer",
    tools: ["Keynote", "After Effects", "Pitch"],
  },
  {
    id: "urban-stories-doc",
    title: "Urban Stories",
    category: "film",
    description: "Documentary exploring the lives of street artists in major cities.",
    fullDescription: "Directed and produced a 45-minute documentary following street artists across New York, London, and Tokyo. The film examines the intersection of art, urban space, and cultural identity, featuring intimate interviews and stunning cinematography.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg"], // Thumbnail placeholder
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    mediaType: "video",
    date: "2024",
    role: "Director & Producer",
    tools: ["DaVinci Resolve", "Adobe Premiere", "Cinema Camera"],
  },
  {
    id: "midnight-short",
    title: "Midnight in Brooklyn",
    category: "film",
    description: "Award-winning short film about connection in the digital age.",
    fullDescription: "Wrote and directed this 12-minute narrative short exploring themes of loneliness and connection in modern urban life. The film premiered at the Brooklyn Film Festival and received the Audience Choice Award.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    mediaType: "video",
    date: "2023",
    role: "Writer & Director",
    tools: ["Final Cut Pro", "DaVinci Resolve", "Blackmagic"],
  },
  {
    id: "music-video-aurora",
    title: "Aurora - 'Neon Dreams'",
    category: "film",
    description: "Music video for indie artist featuring experimental visuals.",
    fullDescription: "Conceptualized and directed a visually striking music video for indie artist Aurora. The video blends practical effects with digital manipulation to create a dreamlike atmosphere that has garnered over 500K views on YouTube.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    mediaType: "video",
    date: "2024",
    role: "Director",
    tools: ["After Effects", "Premiere Pro", "RED Camera"],
  },
  {
    id: "wellness-brand-social",
    title: "Zenith Wellness Social Strategy",
    category: "social",
    description: "Complete social media overhaul for wellness lifestyle brand.",
    fullDescription: "Developed and executed a comprehensive social media strategy for Zenith Wellness, growing their Instagram following from 5K to 50K in 6 months. Created content calendars, brand voice guidelines, and engagement strategies.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "image", // Will form a grid
    date: "2024",
    client: "Zenith Wellness",
    role: "Social Media Manager",
    tools: ["Later", "Canva", "Instagram Insights"],
  },
  {
    id: "restaurant-launch-social",
    title: "Farm & Table Restaurant Launch",
    category: "social",
    description: "Social media campaign for farm-to-table restaurant opening.",
    fullDescription: "Managed the complete social media presence for the launch of Farm & Table, a farm-to-table restaurant. Created visually cohesive content that highlighted the sourcing story and chef profiles, building anticipation that led to a fully booked opening month.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "image",
    date: "2023",
    client: "Farm & Table",
    role: "Content Creator & Manager",
    tools: ["Lightroom", "Hootsuite", "TikTok"],
  },
  {
    id: "fitness-influencer",
    title: "Fitness Brand Partnership Campaign",
    category: "social",
    description: "Influencer collaboration campaign for athletic wear brand.",
    fullDescription: "Coordinated a multi-platform influencer campaign for an emerging athletic wear brand. Managed relationships with 15 fitness influencers, resulting in a 300% increase in social engagement and 150% increase in website traffic.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    mediaType: "image",
    date: "2024",
    client: "Pulse Athletics",
    role: "Influencer Marketing Manager",
    tools: ["Grin", "Notion", "Analytics Suite"],
  },
];

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((p) => p.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id);
};
