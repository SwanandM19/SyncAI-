import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Star, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const awards = [
  { title: "AI Innovation Award 2024", organization: "Tech Excellence Awards", year: "2024", category: "Emerging Technology" },
  { title: "Best AI Consultancy", organization: "Digital Innovation Summit", year: "2023", category: "Business Excellence" },
  { title: "Robotics Excellence Award", organization: "Automation World", year: "2023", category: "Manufacturing" },
  { title: "AR/VR Innovation Prize", organization: "Immersive Tech Awards", year: "2022", category: "Augmented Reality" },
  { title: "Data Science Leadership", organization: "Analytics Excellence Awards", year: "2022", category: "Data & Analytics" },
  { title: "Startup Innovation Award", organization: "Venture Capital Summit", year: "2021", category: "Entrepreneurship" }
];

const recognitions = [
  "Top 10 AI Companies to Watch",
  "Most Innovative AI Solutions Provider",
  "Best Workplace for AI Talent",
  "Customer Choice Award Winner",
  "Sustainability in Technology Award",
  "Diversity & Inclusion Champion"
];

const AwardsAchievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Awards & Achievements</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Celebrating <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recognition from industry leaders and peers for our innovative AI solutions and outstanding performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Industry <span className="text-gradient">Recognition</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our commitment to innovation, excellence, and client success has earned us numerous awards and recognitions from leading industry organizations. These accolades reflect our dedication to pushing the boundaries of AI technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From AI innovation awards to customer satisfaction recognitions, each achievement motivates us to continue delivering cutting-edge solutions that transform businesses and drive industry progress.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Partner with Award-Winning Experts <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Trophy className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Awards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prestigious awards and recognitions that highlight our achievements.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                    <div className="flex items-center gap-4 text-xs text-primary">
                      <span>{award.year}</span>
                      <span>•</span>
                      <span>{award.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognitions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Industry Recognitions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional honors and rankings that showcase our industry leadership.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((recognition, i) => (
              <motion.div
                key={recognition}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{recognition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsAchievements;