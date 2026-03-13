import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-effect"
        >
          <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Ready to <span className="text-gradient">Start Your AI Journey?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10">
            Let's build something extraordinary together. Transform your business
            with the power of artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-6">
              Book a Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-6">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
