import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Cog, Megaphone, Bot, Zap, Cpu, Glasses, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  { icon: Brain, title: "AI in Digital Marketing", slug: "ai-digital-marketing", desc: "Harness the power of AI to revolutionize your digital marketing campaigns. From predictive analytics to personalized content, we help you reach the right audience at the right time with data-driven precision.", features: ["Predictive Customer Analytics", "AI-Powered Content Creation", "Programmatic Advertising", "Sentiment Analysis"] },
  { icon: TrendingUp, title: "AI Consultancy", slug: "ai-consultancy", desc: "Strategic AI advisory services to help businesses identify opportunities, mitigate risks, and build a roadmap for successful AI adoption across the organization.", features: ["AI Readiness Assessment", "Technology Stack Selection", "Implementation Roadmap", "ROI Optimization"] },
  { icon: Cog, title: "Customized AI Solutions", slug: "custom-solutions", desc: "Bespoke AI products engineered specifically for your business challenges. From custom ML models to intelligent automation workflows.", features: ["Custom ML Models", "NLP Solutions", "Computer Vision", "Recommendation Engines"] },
  { icon: Megaphone, title: "Marketing Consultancy", slug: "marketing", desc: "Strategic marketing planning powered by AI analytics and deep market intelligence. We combine creativity with data to deliver campaigns that convert.", features: ["Market Research & Analysis", "Brand Strategy", "Growth Hacking", "Performance Marketing"] },
  { icon: Bot, title: "Agentic AI", slug: "agentic-ai", desc: "Next-generation autonomous AI agents that think, plan, and execute tasks independently. Build intelligent systems that operate with minimal human oversight.", features: ["Autonomous Agents", "Multi-Agent Systems", "Task Orchestration", "Self-Learning Systems"] },
  { icon: Zap, title: "Automations", slug: "automations", desc: "Intelligent process automation that eliminates repetitive tasks, reduces errors, and frees your team to focus on high-value strategic work.", features: ["Workflow Automation", "Document Processing", "Data Pipeline Automation", "Integration Services"] },
  { icon: Cpu, title: "Robotics", slug: "robotics", desc: "AI-powered robotics solutions for manufacturing, logistics, healthcare, and beyond. We design and deploy intelligent robotic systems.", features: ["Industrial Robotics", "Collaborative Robots", "Autonomous Navigation", "Quality Inspection"] },
  { icon: Glasses, title: "Augmented Reality Solutions", slug: "ar-solutions", desc: "Immersive AR experiences enhanced with artificial intelligence for training, marketing, retail, and enterprise applications.", features: ["AR Training Simulations", "Virtual Try-On", "Interactive Product Demos", "Spatial Computing"] },
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">What We Do</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Our <span className="text-gradient">AI Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Sync AI, we focus on helping organizations adopt artificial intelligence in practical and meaningful ways. Many businesses understand the potential of AI but struggle to integrate it effectively into their daily operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our role is to bridge that gap by designing solutions that are not only innovative but also useful in real business environments. We work closely with companies to understand their processes, goals, and challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Based on this understanding, we develop intelligent systems that improve efficiency, reduce manual effort, and support better decision‑making. Our approach combines technical expertise with a strong understanding of business strategy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              From marketing intelligence and automation to robotics and immersive technologies, Sync AI builds solutions that help organizations modernize their operations and prepare for a technology‑driven future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                {...fadeUp}
                transition={{ delay: 0.1 }}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`glass rounded-2xl p-10 glow-effect ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="w-20 h-20 text-primary/30 mx-auto animate-float" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
