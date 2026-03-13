import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Clock, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const workshops = [
  {
    title: "AI Fundamentals for Beginners",
    duration: "2 Days",
    level: "Beginner",
    description: "Master the basics of artificial intelligence and machine learning concepts.",
    features: ["Core AI Concepts", "Python Programming", "Data Analysis Basics", "Practical Projects"]
  },
  {
    title: "Advanced Machine Learning",
    duration: "3 Days",
    level: "Advanced",
    description: "Deep dive into advanced ML algorithms and real-world applications.",
    features: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP Techniques"]
  },
  {
    title: "AI in Business Applications",
    duration: "2 Days",
    level: "Intermediate",
    description: "Learn how to apply AI solutions to solve business challenges.",
    features: ["Business Case Studies", "AI Strategy", "Implementation Planning", "ROI Analysis"]
  }
];

const benefits = [
  "Learn from industry experts",
  "Hands-on practical experience",
  "Small class sizes (max 15 participants)",
  "Certificate of completion",
  "Access to workshop materials",
  "Networking opportunities"
];

const schedule = [
  "Day 1: Morning - Theory & Concepts",
  "Day 1: Afternoon - Hands-on Practice",
  "Day 2: Morning - Advanced Topics",
  "Day 2: Afternoon - Project Work",
  "Day 3: Full Day - Advanced Projects (for 3-day workshops)"
];

const OpenWorkshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Open Workshops</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Learn AI from <span className="text-gradient">Industry Experts</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our open workshops are designed for individuals and small teams who want to learn AI fundamentals, explore advanced techniques, and gain practical skills they can apply immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Open Workshops</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Comprehensive <span className="text-gradient">AI Training</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join our open workshops to gain hands-on experience with AI technologies. Whether you're a beginner looking to understand the basics or an experienced professional wanting to deepen your expertise, our workshops provide the perfect learning environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm">Small Groups (Max 15)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">Regular Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Certificate Included</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <GraduationCap className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Offerings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Workshop Offerings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of AI workshops designed for different skill levels and interests.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, i) => (
              <motion.div
                key={workshop.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {workshop.level}
                    </span>
                    <span className="text-xs text-muted-foreground">{workshop.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {workshop.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Our Workshops?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience learning that combines theory with practical application.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Schedule */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Typical Workshop Schedule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to maximize learning and practical application.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {schedule.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenWorkshops;