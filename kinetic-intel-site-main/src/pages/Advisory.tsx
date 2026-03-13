import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const advisors = [
  { name: "Dr. Sarah Chen", role: "AI Ethics Advisor", expertise: "Machine Learning Ethics" },
  { name: "Prof. Michael Rodriguez", role: "Technology Strategy Advisor", expertise: "Digital Transformation" },
  { name: "Dr. Priya Patel", role: "Data Science Advisor", expertise: "Big Data Analytics" },
  { name: "James Wilson", role: "Business Strategy Advisor", expertise: "Growth Strategy" }
];

const advisoryFocus = [
  "Strategic AI Implementation",
  "Technology Roadmap Planning",
  "Risk Assessment & Mitigation",
  "Innovation Strategy",
  "Team Development & Training"
];

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Advisory</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Expert <span className="text-gradient">Guidance</span> for Success
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our advisory board brings together industry leaders and experts to guide SyncAI's strategic direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Strategic <span className="text-gradient">Advisory Board</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our advisory board consists of renowned experts in AI, technology, and business strategy. They provide invaluable guidance on industry trends, emerging technologies, and strategic decision-making to ensure SyncAI remains at the forefront of innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each advisor brings unique perspectives and deep expertise from their respective fields, helping us navigate complex challenges and seize new opportunities in the rapidly evolving AI landscape.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Join Our Network <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Users className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Board Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Advisors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts who guide our strategic direction and ensure excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, i) => (
              <motion.div
                key={advisor.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{advisor.name}</h3>
                    <p className="text-sm text-muted-foreground">{advisor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mb-2">Expertise: {advisor.expertise}</p>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Advisory Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The key areas where our advisory board provides strategic guidance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryFocus.map((area, i) => (
              <motion.div
                key={area}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advisory;