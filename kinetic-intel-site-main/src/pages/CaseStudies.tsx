import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const caseStudies = [
  {
    title: "AI-Driven Marketing for E-Commerce Giant",
    industry: "E-Commerce",
    icon: TrendingUp,
    result: "340% increase in conversion rate",
    desc: "Implemented AI-powered customer segmentation and personalized marketing campaigns that dramatically improved ROI across all digital channels.",
    metrics: [
      { label: "Conversion Rate", value: "+340%" },
      { label: "Customer Retention", value: "+85%" },
      { label: "Ad Spend ROI", value: "5.2x" },
    ],
  },
  {
    title: "Process Automation for Manufacturing",
    industry: "Manufacturing",
    icon: Zap,
    result: "70% reduction in manual processes",
    desc: "Designed and deployed intelligent automation workflows that eliminated repetitive tasks and reduced operational costs by 45%.",
    metrics: [
      { label: "Automation Rate", value: "70%" },
      { label: "Cost Reduction", value: "45%" },
      { label: "Error Reduction", value: "92%" },
    ],
  },
  {
    title: "Predictive Analytics for Healthcare",
    industry: "Healthcare",
    icon: BarChart3,
    result: "Early detection accuracy of 94%",
    desc: "Built a custom ML model for early disease detection that achieved 94% accuracy, enabling proactive patient care and resource allocation.",
    metrics: [
      { label: "Detection Accuracy", value: "94%" },
      { label: "Processing Time", value: "-60%" },
      { label: "Patient Outcomes", value: "+78%" },
    ],
  },
  {
    title: "AI Chatbot for Financial Services",
    industry: "Finance",
    icon: Users,
    result: "90% customer query resolution",
    desc: "Deployed an intelligent agentic AI chatbot that handles 90% of customer queries autonomously, reducing support costs and improving satisfaction.",
    metrics: [
      { label: "Query Resolution", value: "90%" },
      { label: "Response Time", value: "<2s" },
      { label: "CSAT Score", value: "4.8/5" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Case Studies</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Real <span className="text-gradient">Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how we've helped organizations transform their operations with AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 sm:p-10 hover:glow-effect transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <cs.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm text-primary font-semibold">{cs.industry}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{cs.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{cs.desc}</p>
                  <div className="inline-flex items-center gap-2 text-secondary font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-gradient">{m.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
