import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Cog, Megaphone, Bot, Zap, Cpu, Glasses, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const service = {
  icon: Brain,
  title: "AI in Digital Marketing",
  slug: "ai-digital-marketing",
  desc: `Digital marketing has become increasingly data-driven, and artificial intelligence plays an important role in making sense of large amounts of customer information. At Sync AI, we help businesses use AI tools to better understand their audience and improve the effectiveness of their marketing efforts.

Our solutions analyze customer behavior, campaign performance, and market trends to provide insights that support smarter marketing decisions. Businesses can use these insights to refine their strategies, improve audience targeting, and create more relevant marketing content.

By integrating AI into marketing workflows, companies can automate repetitive tasks such as campaign monitoring, reporting, and optimization. This allows marketing teams to spend more time focusing on strategy and creativity while technology handles the complex data analysis behind the scenes.`,
  features: ["Predictive Customer Analytics", "AI-Powered Content Creation", "Programmatic Advertising", "Sentiment Analysis"],
  benefits: [
    "Increase conversion rates by up to 300%",
    "Reduce customer acquisition costs by 50%",
    "Personalize marketing at scale",
    "Real-time campaign optimization"
  ],
  process: [
    "Data Analysis & Insights",
    "AI Model Development",
    "Integration & Testing",
    "Deployment & Monitoring"
  ]
};

const AIDigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">AI in Digital Marketing</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Revolutionize Your <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="glass rounded-2xl p-10 glow-effect">
              <service.icon className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how AI-powered digital marketing can transform your business results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to implementing AI in your digital marketing strategy.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground">
                  Each step is designed to deliver measurable value while keeping your business goals front and center.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDigitalMarketing;