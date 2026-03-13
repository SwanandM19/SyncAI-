import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const blogPosts = [
  {
    title: "The Rise of Agentic AI: What It Means for Business",
    excerpt: "Agentic AI is transforming how businesses operate by enabling autonomous decision-making. Discover how this technology is reshaping industries.",
    date: "March 5, 2026",
    readTime: "8 min read",
    tag: "Agentic AI",
  },
  {
    title: "How AI is Revolutionizing Digital Marketing in 2026",
    excerpt: "From personalized content to predictive analytics, AI is changing the marketing landscape. Learn the strategies that top brands are using.",
    date: "February 28, 2026",
    readTime: "6 min read",
    tag: "Digital Marketing",
  },
  {
    title: "Building Custom AI Solutions: A Step-by-Step Guide",
    excerpt: "A comprehensive guide to developing bespoke AI solutions for your business, from problem identification to deployment.",
    date: "February 20, 2026",
    readTime: "10 min read",
    tag: "AI Solutions",
  },
  {
    title: "AI Ethics: Navigating the Responsible AI Landscape",
    excerpt: "As AI becomes more prevalent, ethical considerations are paramount. Explore the frameworks and best practices for responsible AI deployment.",
    date: "February 15, 2026",
    readTime: "7 min read",
    tag: "AI Ethics",
  },
  {
    title: "Augmented Reality Meets AI: The Future of Immersive Experiences",
    excerpt: "The convergence of AR and AI is creating unprecedented opportunities for businesses. See what's possible today.",
    date: "February 10, 2026",
    readTime: "5 min read",
    tag: "AR & AI",
  },
  {
    title: "Top 5 AI Automation Trends to Watch in 2026",
    excerpt: "Automation is evolving rapidly with AI at its core. Here are the top trends shaping the future of intelligent automation.",
    date: "February 5, 2026",
    readTime: "6 min read",
    tag: "Automation",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Blog</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Insights & <span className="text-gradient">Ideas</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thought leadership, industry trends, and practical AI insights from the SyncAI team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl overflow-hidden group hover:glow-effect transition-all duration-500 flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-border/30 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link to="#" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
