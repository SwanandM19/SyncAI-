import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const mentors = [
  { name: "Dr. Emily Watson", role: "AI Research Mentor", company: "Stanford AI Lab" },
  { name: "Prof. David Kim", role: "Machine Learning Mentor", company: "MIT CSAIL" },
  { name: "Dr. Lisa Thompson", role: "Data Science Mentor", company: "Google Research" },
  { name: "Prof. Robert Chen", role: "Robotics Mentor", company: "Carnegie Mellon" },
  { name: "Dr. Maria Garcia", role: "AI Ethics Mentor", company: "OpenAI" },
  { name: "Prof. James Liu", role: "Computer Vision Mentor", company: "UC Berkeley" }
];

const mentorshipAreas = [
  "AI Research & Development",
  "Machine Learning Algorithms",
  "Data Science & Analytics",
  "Robotics & Automation",
  "AI Ethics & Governance",
  "Computer Vision & NLP"
];

const Mentors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Mentors</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Learning from <span className="text-gradient">Industry Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mentorship program connects us with world-class experts who guide our innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Expert <span className="text-gradient">Mentorship</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mentorship program brings together leading researchers, professors, and industry experts from top institutions worldwide. These mentors provide invaluable guidance on cutting-edge AI research, emerging technologies, and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through regular sessions, workshops, and collaborative projects, our mentors help us stay at the forefront of AI innovation while ensuring our solutions are built on solid scientific foundations and ethical principles.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Learn More About Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <GraduationCap className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Mentors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished experts who guide our AI innovation and research.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                    <p className="text-xs text-primary">{mentor.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leading expert in {mentor.role.toLowerCase().split(' ')[0]} research and development, providing strategic guidance on emerging technologies and best practices.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Mentorship Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The specialized areas where our mentors provide expert guidance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorshipAreas.map((area, i) => (
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

export default Mentors;