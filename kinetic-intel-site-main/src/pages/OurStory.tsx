import { motion } from "framer-motion";
import { Users, BookOpen, Mic, Award, Trophy, Star, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Story</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              The Journey of <span className="text-gradient">SyncAI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a bold vision to a trusted AI consultancy — discover the people, passion, and purpose behind SyncAI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section id="company" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Company Story</span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Built on <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SyncAI Consultancy Pvt. Ltd. was founded with a singular mission: to democratize artificial intelligence and make it accessible to businesses of all sizes. We believe that AI isn't just a technology — it's a transformative force that can revolutionize how organizations operate, compete, and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Starting from a small team of AI enthusiasts, we've grown into a full-service consultancy offering cutting-edge solutions across digital marketing, automation, robotics, and augmented reality. Our approach combines deep technical expertise with strategic business acumen.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2024", label: "Founded" },
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "8+", label: "AI Domains" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section id="founder" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">About the Founder</span>
            <h2 className="text-4xl font-heading font-bold mb-6">
              Visionary <span className="text-gradient">Leadership</span>
            </h2>
            <div className="glass rounded-2xl p-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Our founder brings years of experience in AI, machine learning, and strategic marketing consultancy. With a passion for innovation and a track record of delivering transformative solutions, they established SyncAI to bridge the gap between cutting-edge AI research and real-world business applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory & Mentors */}
      <section id="advisory" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Advisory & Mentors</span>
            <h2 className="text-4xl font-heading font-bold">
              Guided by <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Industry Advisors", desc: "Seasoned professionals guiding our strategic direction" },
              { icon: BookOpen, title: "Academic Mentors", desc: "Leading researchers keeping us at the frontier of AI" },
              { icon: Users, title: "Business Mentors", desc: "Entrepreneurs who've scaled successful ventures" },
              { icon: Star, title: "Technical Leads", desc: "AI engineers with deep domain expertise" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Team</span>
            <h2 className="text-4xl font-heading font-bold">
              Meet the <span className="text-gradient">Minds</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AI Research Team", desc: "Pushing the boundaries of what's possible with artificial intelligence" },
              { name: "Marketing Strategists", desc: "Crafting data-driven marketing campaigns that deliver results" },
              { name: "Engineering Team", desc: "Building robust, scalable AI solutions for enterprise clients" },
            ].map((member, i) => (
              <motion.div key={member.name} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-8 group hover:glow-effect transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Recognition</span>
            <h2 className="text-4xl font-heading font-bold">
              Awards & <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Best AI Startup 2025", org: "India Tech Awards" },
              { icon: Award, title: "Innovation Excellence", org: "Digital India Summit" },
              { icon: Star, title: "Top AI Consultancy", org: "Business World" },
            ].map((a, i) => (
              <motion.div key={a.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
                <a.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Media */}
      <section id="books" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Publications</span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Books & <span className="text-gradient">Thought Leadership</span>
              </h2>
              <div className="space-y-4">
                {["AI for Business Leaders", "The Marketing AI Revolution", "Digital Transformation Playbook"].map((book) => (
                  <div key={book} className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{book}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Media</span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                In the <span className="text-gradient">Spotlight</span>
              </h2>
              <div className="space-y-4">
                {["Featured in Economic Times", "Interview with NDTV", "TEDx Speaker on AI Ethics"].map((media) => (
                  <div key={media} className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all">
                    <Newspaper className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{media}</span>
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

export default OurStory;
