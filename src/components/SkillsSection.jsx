import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import reactIcon from "@/assets/icons/react.png";

import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";

import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import vscodeIcon from "@/assets/icons/vscode.png";

// CMS
import shopifyIcon from "@/assets/icons/profile-logo.png";
import wordpressIcon from "@/assets/icons/wordpress.png";
import webflowIcon from "@/assets/icons/webflow.svg";
import wixIcon from "@/assets/icons/wix.png";
import magentoIcon from "@/assets/icons/825535.png";

// Automation
import zapierIcon from "@/assets/icons/zapier.svg";
import n8nIcon from "@/assets/icons/n8n.png";
import makeIcon from "@/assets/icons/make.png";

// Technical
import seoIcon from "@/assets/icons/seo.png";
import croIcon from "@/assets/icons/cro.png";
import hostingIcon from "@/assets/icons/hosting.avif";

// ---------------- SKILLS DATA ----------------

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 90, category: "frontend", icon: "css" },
  { name: "SASS", level: 85, category: "frontend", icon: "sass" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "typescript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Next.js", level: 75, category: "frontend", icon: "nextjs" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "nodejs" },
  { name: "Express", level: 80, category: "backend", icon: "express" },
  { name: "MongoDB", level: 85, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 70, category: "backend", icon: "postgresql" },

  // CMS
  { name: "Shopify", level: 95, category: "cms", icon: "shopify" },
  { name: "WordPress", level: 90, category: "cms", icon: "wordpress" },
  { name: "Webflow", level: 85, category: "cms", icon: "webflow" },
  { name: "Wix", level: 80, category: "cms", icon: "wix" },
  { name: "Magento", level: 75, category: "cms", icon: "magento" },

  // Automation
  { name: "Zapier", level: 90, category: "automation", icon: "zapier" },
  { name: "n8n", level: 85, category: "automation", icon: "n8n" },
  { name: "Make", level: 85, category: "automation", icon: "make" },
  { name: "API Integrations", level: 90, category: "automation", icon: "api" },
  { name: "Webhooks", level: 85, category: "automation", icon: "webhook" },

  // Technical / Growth
  { name: "SEO", level: 90, category: "technical", icon: "seo" },
  { name: "CRO", level: 85, category: "technical", icon: "cro" },
  { name: "Performance Optimization", level: 90, category: "technical", icon: "performance" },
  { name: "Security & Malware Cleanup", level: 85, category: "technical", icon: "security" },
  { name: "Hosting & Deployment", level: 90, category: "technical", icon: "hosting" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 90, category: "tools", icon: "github" },
  { name: "Docker", level: 70, category: "tools", icon: "docker" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
];

// ---------------- CATEGORIES ----------------

const categories = [
  { id: "all", label: "All Skills" },
  { id: "cms", label: "CMS" },
  { id: "automation", label: "Automation" },
  { id: "technical", label: "Technical" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

// ---------------- ICON MAP ----------------

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  react: reactIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  vscode: vscodeIcon,
  shopify: shopifyIcon,
  wordpress: wordpressIcon,
  webflow: webflowIcon,
  wix: wixIcon,
  magento: magentoIcon,
  zapier: zapierIcon,
  n8n: n8nIcon,
  make: makeIcon,
  seo: seoIcon,
  cro: croIcon,
  hosting: hostingIcon,
};

// ---------------- COMPONENT ----------------

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 rounded-xl border bg-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={iconImages[skill.icon]}
                    alt={skill.name}
                    className="w-8 h-8"
                  />
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="ml-auto text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-secondary/30 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
