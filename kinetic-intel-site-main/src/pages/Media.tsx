import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Newspaper, Mic, Video, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const mediaFeatures = [
  { title: "TEDx Talk: AI Revolution", type: "Video", date: "2024", description: "Exploring how AI is transforming business landscapes" },
  { title: "Forbes: AI Trends 2024", type: "Article", date: "2024", description: "Featured in Forbes on emerging AI technologies" },
  { title: "TechCrunch Interview", type: "Podcast", date: "2023", description: "Discussion on AI ethics and responsible development" },
  { title: "Wired Magazine Feature", type: "Article", date: "2023", description: "Cover story on innovative AI applications" },
  { title: "Bloomberg TV Appearance", type: "Video", date: "2023", description: "Live interview on AI's impact on manufacturing" },
  { title: "Harvard Business Review", type: "Article", date: "2022", description: "Case study on AI-driven digital transformation" }
];

const mediaTypes = [
  "Featured Articles",
  "Video Interviews",
  "Podcast Appearances",
  "Conference Speaking",
  "Industry Reports",
  "Expert Commentary"
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Media</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              In the <span className="text-gradient">Spotlight</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our thought leadership and expertise featured in leading publications, podcasts, and media outlets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Global <span className="text-gradient">Recognition</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team regularly contributes to industry discussions through articles, interviews, podcasts, and speaking engagements. We share our insights on AI trends, technological innovations, and their impact on businesses worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From TEDx talks to major publications like Forbes and Wired, our media presence reflects our commitment to advancing the understanding and adoption of AI technologies across industries.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Media Inquiries <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Newspaper className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Recent Media Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our latest appearances and contributions in major media outlets.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  {feature.type === "Video" && <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
                  {feature.type === "Article" && <Newspaper className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
                  {feature.type === "Podcast" && <Mic className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{feature.type}</span>
                      <span>•</span>
                      <span>{feature.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Media Coverage Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The various platforms and formats where our expertise is featured.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaTypes.map((type, i) => (
              <motion.div
                key={type}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;