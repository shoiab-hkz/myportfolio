import {
  ArrowRight,
  Github,
  ChevronUp,
  Star,
  Code,
  Sparkles,
  Zap,
  Play,
  Eye,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ===================== PROJECT DATA ===================== */

const projects = [
  {
    id: 1,
    title: "Love & Other Pics",
    category: "WordPress",
    description:
      "Wedding photography website redesigned on WordPress with improved UI/UX, storytelling, and inquiry conversion flow.",
    image: "/projects/loveandotherspic.png",
    video: null,
    tags: ["WordPress", "UI/UX", "CRO", "Performance"],
    demoUrl: "https://loveandotherpics.de/",
    githubUrl: "#",
    featured: true,
    accentColor: "from-pink-500 to-rose-600",
    status: "Live",
    highlights: [
      "WordPress UI/UX redesign",
      "Improved inquiry conversion",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "Scholar Guidance",
    category: "Wix",
    description:
      "Educational guidance website built and optimized on Wix with improved structure, SEO, and user experience.",
    image: "/projects/scholarguidance.png",
    video: null,
    tags: ["Wix", "SEO", "Content Management", "UX"],
    demoUrl: "https://www.scholarguidance.org/",
    githubUrl: "#",
    featured: false,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Live",
    highlights: [
      "Wix optimization",
      "SEO improvements",
      "Content restructuring",
    ],
  },
  {
    id: 3,
    title: "CalVitamin",
    category: "Magento",
    description:
      "Magento-based e-commerce store optimized for product presentation, checkout flow, and conversion rate.",
    image: "/projects/calvitamin.png",
    video: null,
    tags: ["Magento", "E-commerce", "CRO", "UI Improvements"],
    demoUrl: "https://calvitamin.com/",
    githubUrl: "#",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: [
      "Magento optimization",
      "Checkout improvements",
      "Conversion-focused layout",
    ],
  },
  {
    id: 4,
    title: "GSRO",
    category: "WordPress",
    description:
      "Non-profit website recovery and optimization including malware removal, server fixes, plugin issues, and donation system integration.",
    image: "/projects/gsro.png",
    video: null,
    tags: ["WordPress", "Security", "Server Fixes", "Donations"],
    demoUrl: "https://gsro.org/",
    githubUrl: "#",
    featured: true,
    accentColor: "from-red-500 to-orange-600",
    status: "Live",
    highlights: [
      "Malware cleanup",
      "Server & plugin fixes",
      "Donation campaign integration",
    ],
  },
  {
    id: 5,
    title: "Fariba Nawa",
    category: "WordPress",
    description:
      "Personal brand website built on WordPress with modern UI, improved content management, and SEO optimization.",
    image: "/projects/faribanawa.png",
    video: null,
    tags: ["WordPress", "UI/UX", "SEO", "Branding"],
    demoUrl: "https://www.faribanawa.com/",
    githubUrl: "#",
    featured: false,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: [
      "WordPress redesign",
      "SEO optimization",
      "Content strategy",
    ],
  },
  {
    id: 6,
    title: "ValueTools",
    category: "Shopify",
    description:
      "Shopify-based tools store focused on performance, clean UI, and conversion optimization.",
    image: "/projects/valuetools.png",
    video: null,
    tags: ["Shopify", "E-commerce", "Performance", "UI/UX"],
    demoUrl: "https://valuetools.co/",
    githubUrl: "#",
    featured: false,
    accentColor: "from-indigo-500 to-blue-600",
    status: "Live",
    highlights: [
      "Shopify optimization",
      "Clean scalable UI",
      "Conversion-focused design",
    ],
  },
  {
    id: 7,
    title: "n8n Automation System",
    category: "Automation",
    description:
      "Custom automation workflows built with n8n to automate data syncing, deal aggregation, and system integrations.",
    image: "/projects/n8n.png",
    video: null,
    tags: ["n8n", "Automation", "Workflows", "Integrations"],
    demoUrl: "https://n8n.shopping-deals.eu/",
    githubUrl: "#",
    featured: true,
    accentColor: "from-amber-500 to-yellow-600",
    status: "Live",
    highlights: [
      "End-to-end automation",
      "Data synchronization",
      "Scalable workflows",
    ],
  },
];

/* ===================== CATEGORY COLORS ===================== */

const categoryColors = {
  WordPress: "from-blue-500/20 to-indigo-600/20 text-blue-600 border-blue-500/30",
  Wix: "from-cyan-500/20 to-sky-600/20 text-cyan-600 border-cyan-500/30",
  Magento:
    "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30",
  Shopify:
    "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  Automation:
    "from-amber-500/20 to-yellow-600/20 text-amber-600 border-amber-500/30",
};

/* ===================== COMPONENT ===================== */

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useScroll({ target: sectionRef });

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles size={16} /> Real Client Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects across CMS platforms, e-commerce, and automation
            systems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs bg-amber-500/20 text-amber-600 px-2 py-1 rounded-full border border-amber-500/30">
                      <Star size={12} /> Featured
                    </span>
                  )}
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full border w-fit mb-3 ${categoryColors[project.category]}`}
                >
                  {project.category}
                </span>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <ul className="mb-4 space-y-1 text-sm">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-lg border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-sm flex items-center justify-center gap-2"
                  >
                    <Eye size={16} /> Live Site
                  </a>
                </div>
              </div>

              <div
                className={`h-1 bg-gradient-to-r ${project.accentColor}`}
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium inline-flex items-center gap-2"
            >
              {showAll ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
