import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const milestones = [
  { year: "2020", title: "Founded", desc: "SyncAI Consultancy Pvt. Ltd. established with a vision to democratize AI." },
  { year: "2021", title: "First Major Client", desc: "Successfully delivered AI-powered marketing solutions to our first enterprise client." },
  { year: "2022", title: "Team Expansion", desc: "Grew from 5 to 25+ AI specialists and consultants." },
  { year: "2023", title: "Innovation Awards", desc: "Recognized for excellence in AI implementation and digital transformation." },
  { year: "2024", title: "Global Reach", desc: "Expanded services to international markets and partnerships." },
];

const values = [
  "Innovation First",
  "Client-Centric Approach",
  "Ethical AI Practices",
  "Continuous Learning",
  "Collaborative Excellence"
];

const CompanyStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Company Story</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Built on <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a bold vision to a trusted AI consultancy — discover the journey that shaped SyncAI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Our <span className="text-gradient">Foundation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SyncAI Consultancy Pvt. Ltd. was founded with a singular mission: to democratize artificial intelligence and make it accessible to businesses of all sizes. We believe that AI isn't just a technology — it's a transformative force that can revolutionize how organizations operate, compete, and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Starting from a small team of AI enthusiasts, we've grown into a full-service consultancy offering cutting-edge solutions across digital marketing, automation, robotics, and augmented reality. Our approach combines deep technical expertise with strategic business acumen.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Learn More About Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Building2 className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success.
            </p>
          </motion.div>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyStory;