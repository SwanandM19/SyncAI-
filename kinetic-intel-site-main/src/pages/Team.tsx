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

const teamMembers = [
  { name: "Alex Johnson", role: "Chief Technology Officer", expertise: "AI Architecture" },
  { name: "Sarah Chen", role: "Head of AI Research", expertise: "Machine Learning" },
  { name: "Michael Rodriguez", role: "Lead Data Scientist", expertise: "Big Data Analytics" },
  { name: "Priya Patel", role: "Robotics Engineer", expertise: "Automation Systems" },
  { name: "James Wilson", role: "AR/VR Specialist", expertise: "Immersive Technologies" },
  { name: "Lisa Thompson", role: "Marketing Director", expertise: "Digital Strategy" },
  { name: "David Kim", role: "DevOps Engineer", expertise: "Cloud Infrastructure" },
  { name: "Maria Garcia", role: "UX Designer", expertise: "Human-Centered Design" }
];

const teamValues = [
  "Innovation & Creativity",
  "Collaboration & Teamwork",
  "Continuous Learning",
  "Excellence in Execution",
  "Client-Centric Focus",
  "Ethical AI Development"
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Team</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A diverse group of AI specialists, engineers, and innovators working together to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Passionate <span className="text-gradient">Professionals</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings together top talent from leading universities, research institutions, and industry leaders. Each member contributes unique expertise and perspectives, creating a collaborative environment where innovation thrives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From AI researchers to robotics engineers, from data scientists to UX designers, our multidisciplinary team ensures that every project benefits from comprehensive expertise and creative problem-solving.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Users className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make SyncAI exceptional.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-primary">{member.expertise}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert in {member.expertise.toLowerCase()}, bringing years of experience and innovative thinking to every project.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Team Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((value, i) => (
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

export default Team;