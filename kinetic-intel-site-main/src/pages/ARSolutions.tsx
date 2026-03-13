import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Cog, Megaphone, Bot, Zap, Cpu, Glasses, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const service = {
  icon: Glasses,
  title: "Augmented Reality Solutions",
  slug: "ar-solutions",
  desc: "Immersive AR experiences enhanced with artificial intelligence for training, marketing, retail, and enterprise applications.",
  features: ["AR Training Simulations", "Virtual Try-On", "Interactive Product Demos", "Spatial Computing"],
  benefits: [
    "Enhanced user engagement",
    "Improved learning outcomes",
    "Increased sales conversion",
    "Innovative customer experiences"
  ],
  process: [
    "Concept Development",
    "AR Design",
    "Development & Integration",
    "User Testing & Launch"
  ]
};

const ARSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Augmented Reality Solutions</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Immersive <span className="text-gradient">AR Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
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
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="glass rounded-2xl p-10 glow-effect">
              <service.icon className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create unforgettable experiences with cutting-edge AR technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we bring AR visions to life.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ARSolutions;