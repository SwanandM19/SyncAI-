import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const books = [
  {
    title: "AI for Business Leaders",
    author: "Our Founder",
    year: "2023",
    description: "A comprehensive guide for executives looking to leverage AI in their organizations.",
    topics: ["AI Strategy", "Digital Transformation", "Leadership"]
  },
  {
    title: "The Future of Automation",
    author: "Sarah Chen & Team",
    year: "2022",
    description: "Exploring the impact of intelligent automation on modern businesses.",
    topics: ["Robotics", "Process Automation", "Industry 4.0"]
  },
  {
    title: "Augmented Reality: Beyond Gaming",
    author: "James Wilson",
    year: "2021",
    description: "How AR is transforming industries from manufacturing to healthcare.",
    topics: ["AR/VR", "Immersive Tech", "Enterprise Applications"]
  }
];

const publications = [
  "AI Ethics in Business Applications",
  "Machine Learning for Small Businesses",
  "The ROI of AI Implementation",
  "Building Scalable AI Systems",
  "Data Privacy in the AI Era",
  "Future of Work with AI"
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Books</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Knowledge <span className="text-gradient">Sharing</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our published works and research contributions that advance the understanding of AI and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Thought <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through our books and publications, we share insights, research findings, and practical guidance on AI implementation, digital transformation, and emerging technologies. Our works serve as valuable resources for businesses and individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each publication reflects our commitment to advancing the field of AI through rigorous research, real-world case studies, and actionable strategies that drive meaningful change.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Explore Our Research <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <BookOpen className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Books</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and research publications from our team.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">By {book.author}</p>
                  <p className="text-xs text-primary mb-3">{book.year}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                <div className="flex flex-wrap gap-2">
                  {book.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Research Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional research papers and articles contributing to the AI community.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication, i) => (
              <motion.div
                key={publication}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{publication}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;