import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  User,
  Download,
  Calendar,
  Sparkles,
  Target,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  /* ===================== STATS ===================== */

  const achievements = [
    { number: "8+", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
    { number: "2+", label: "Years Experience", icon: <Calendar className="h-5 w-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Target className="h-5 w-5" /> },
    { number: "8+", label: "Clients", icon: <User className="h-5 w-5" /> },
  ];

  /* ===================== TECH STACK ===================== */

  const techStack = [
    {
      category: "Shopify",
      items: [
        "Conversion Rate Optimization (CRO)",
        "Page Speed Optimization",
        "Content Management",
        "Order & Inventory Automation",
        "Product Listing Automation",
        "HTML & Tailwind CSS",
      ],
    },
    {
      category: "WordPress",
      items: [
        "Content Management",
        "UI/UX Improvements",
        "Custom Themes & Plugins",
        "PHP & MySQL",
      ],
    },
    {
      category: "SEO",
      items: [
        "Keyword Research",
        "E-E-A-T Optimization",
        "Technical SEO",
        "Domain Authority Improvement",
      ],
    },
  ];

  /* ===================== WHY ME ===================== */

  const features = [
    "Shopify & CMS expertise",
    "Clean, maintainable builds",
    "SEO & performance optimization",
    "E-commerce automation",
    "Responsive design",
    "On-time delivery",
  ];

  /* ===================== SOCIAL ===================== */

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/shoiab-hkz" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/sayed-shoaib-hakimzada-56b7911b9/",
    },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:shoaibhakimzad@gmail.com" },
  ];

  /* ===================== TABS ===================== */

  const tabContent = {
    personal:
      "I’m passionate about building and optimizing websites that help businesses grow. Outside of client work, I explore new e-commerce trends, automation tools, and SEO strategies.",
    professional:
      "With 2+ years of hands-on experience, I’ve worked across Shopify, WordPress, Webflow, Wix, and Magento, delivering scalable and conversion-focused solutions for real clients.",
    approach:
      "I focus on clean, maintainable builds, performance optimization, and SEO best practices. My workflow emphasizes clear communication, efficiency, and measurable results.",
  };

  /* ===================== EFFECTS ===================== */

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((prev) => (prev + 1) % achievements.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MyCV.pdf";
    link.download = "Shoaib_Hakimzada_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-4 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">ABOUT ME</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming <span className="text-primary">Ideas</span> Into Reality
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating scalable e-commerce experiences with{" "}
            <span className="text-primary font-semibold">Shopify</span>,{" "}
            <span className="text-primary font-semibold">automation</span>, and{" "}
            <span className="text-primary font-semibold">SEO</span>
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Left */}
          <div className="xl:col-span-2 space-y-8">
            {/* About Card */}
            <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20">
                  <img
                    src="/profile-logo.png"
                    alt="Shoaib Hakimzada"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold">Shoaib Hakimzada</h2>
                  <p className="text-primary font-semibold mb-4">
                    Shopify Developer · SEO & Automation
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((item, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border ${
                          counter === i
                            ? "bg-primary/10 border-primary"
                            : "border-border"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <div>
                            <div className="font-bold">{item.number}</div>
                            <div className="text-xs text-muted-foreground">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border mt-8">
                {["personal", "professional", "approach"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 font-medium ${
                      activeTab === tab
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-6 min-h-[100px]">
                <AnimatePresence mode="sync">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-muted-foreground text-lg"
                  >
                    {tabContent[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                E-Commerce Tech Stack
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {techStack.map((stack, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-2xl p-6"
                  >
                    <h4 className="font-semibold mb-3">{stack.category}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {stack.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* CTA */}
            <div className="bg-card/50 border border-border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Let’s Work Together</h3>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground rounded-xl py-4 font-semibold"
                >
                  Start a Project
                </a>

                <button
                  onClick={handleDownload}
                  className="border border-border rounded-xl py-4 font-semibold"
                >
                  Download Resume
                </button>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="p-2 rounded-lg border border-border"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Why Me */}
            <div className="bg-card/50 border border-border rounded-3xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Star className="text-primary" /> Why Choose Me
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
