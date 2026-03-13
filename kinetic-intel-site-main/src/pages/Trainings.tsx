import { motion } from "framer-motion";
import { GraduationCap, Building, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Trainings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Trainings</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              AI <span className="text-gradient">Training Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upskill your team with hands-on AI workshops designed for professionals at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Workshops */}
      <section id="open-workshops" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Open Workshops</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Learn AI from <span className="text-gradient">Industry Experts</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our open workshops are designed for individuals and small teams who want to learn AI fundamentals, explore advanced techniques, and gain practical skills they can apply immediately.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hands-on projects with real datasets",
                  "Certificate of completion",
                  "Small batch sizes for personalized learning",
                  "Post-workshop mentorship support",
                  "Access to exclusive learning resources",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg">
                View Upcoming Workshops <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "500+", label: "Professionals Trained" },
                  { icon: Clock, title: "40+", label: "Hours of Content" },
                  { icon: GraduationCap, title: "15+", label: "Workshop Topics" },
                  { icon: Building, title: "20+", label: "Workshops Conducted" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
                    <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-heading font-bold text-gradient">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Workshops */}
      <section id="corporate" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Corporate Workshops</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored for <span className="text-gradient">Your Organization</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Custom-designed AI training programs built around your industry, use cases, and team skill levels. We bring the expertise to your doorstep.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Customized curriculum for your industry",
                  "On-site or virtual delivery options",
                  "Team assessments and skill gap analysis",
                  "Ongoing support and consultation",
                  "Executive AI literacy programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg">
                Request Corporate Training <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </motion.div>
            <motion.div {...fadeUp} className="lg:order-1 glass rounded-2xl p-10 glow-effect">
              <div className="space-y-6">
                {["AI Fundamentals for Teams", "Advanced ML & Deep Learning", "AI in Marketing Masterclass", "Generative AI Workshop", "AI Ethics & Governance"].map((t, i) => (
                  <div key={t} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainings;
