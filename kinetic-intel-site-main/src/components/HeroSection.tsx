import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "./NeuralBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <NeuralBackground />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Future Starts Here
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Transform Your
            <br />
            Business With{" "}
            <span className="text-gradient">Artificial Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            SyncAI Consultancy empowers organizations with cutting-edge AI solutions,
            strategic marketing consultancy, and transformative training programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "50+", label: "AI Projects Delivered" },
            { value: "200+", label: "Professionals Trained" },
            { value: "8+", label: "AI Service Domains" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 sm:p-5 text-center">
              <div className="text-3xl font-heading font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
