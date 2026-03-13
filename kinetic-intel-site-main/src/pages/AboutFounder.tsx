import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Award, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const achievements = [
  "Founded SyncAI Consultancy in 2020",
  "15+ years in AI and technology leadership",
  "Published author of 'AI for Business Leaders'",
  "Speaker at TEDx and major tech conferences",
  "Mentor to 50+ AI startups"
];

const expertise = [
  "Artificial Intelligence & Machine Learning",
  "Digital Transformation Strategy",
  "Technology Innovation",
  "Business Development",
  "Leadership & Entrepreneurship"
];

const AboutFounder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">About Founder</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Meet the <span className="text-gradient">Visionary</span> Behind SyncAI
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the story of our founder and the passion that drives SyncAI's mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                A Journey of <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years in technology leadership, our founder has been at the forefront of AI adoption across industries. His vision for democratizing AI technology led to the creation of SyncAI Consultancy, a company dedicated to making cutting-edge AI solutions accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His expertise spans artificial intelligence, machine learning, digital transformation, and strategic business development. He has successfully led numerous AI implementations and has been recognized as a thought leader in the AI space.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Connect with Our Founder <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <User className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that showcase our founder's impact in the AI industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The domains where our founder excels and guides our company.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, i) => (
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

export default AboutFounder;