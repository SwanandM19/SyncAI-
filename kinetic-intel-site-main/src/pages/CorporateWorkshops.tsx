import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const corporatePrograms = [
  {
    title: "AI Leadership Program",
    duration: "5 Days",
    audience: "Executives & Managers",
    description: "Strategic AI training for business leaders to drive digital transformation.",
    outcomes: ["AI Strategy Development", "Digital Transformation Planning", "Change Management", "ROI Optimization"]
  },
  {
    title: "Technical AI Training",
    duration: "10 Days",
    audience: "Developers & Engineers",
    description: "Comprehensive technical training for implementing AI solutions.",
    outcomes: ["ML Model Development", "AI System Architecture", "Data Pipeline Design", "Production Deployment"]
  },
  {
    title: "AI for Business Teams",
    duration: "3 Days",
    audience: "Business Analysts & Teams",
    description: "Practical AI skills for non-technical business professionals.",
    outcomes: ["AI Tool Usage", "Data-Driven Decision Making", "Process Automation", "AI Ethics Awareness"]
  }
];

const benefits = [
  "Customized curriculum for your industry",
  "On-site or virtual delivery options",
  "Hands-on projects with company data",
  "Post-training support and resources",
  "Measurable skill development",
  "Team building and collaboration focus"
];

const process = [
  "Needs Assessment & Customization",
  "Curriculum Development",
  "Delivery & Hands-on Training",
  "Assessment & Certification",
  "Follow-up Support & Resources"
];

const CorporateWorkshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Corporate Workshops</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Transform Your <span className="text-gradient">Team's AI Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Customized AI training programs designed specifically for your organization's needs and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Corporate Workshops</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Enterprise-Grade <span className="text-gradient">AI Training</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our corporate workshops are tailored to your organization's specific needs, industry requirements, and team composition. We deliver comprehensive AI training that aligns with your business objectives and accelerates your digital transformation journey.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm">Custom Group Sizes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm">Industry-Specific Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="text-sm">On-Site Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Measurable Results</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Discuss Your Training Needs <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Building className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Corporate Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training solutions designed for different roles and organizational needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {corporatePrograms.map((program, i) => (
              <motion.div
                key={program.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {program.audience}
                    </span>
                    <span className="text-xs text-muted-foreground">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Learning Outcomes:</h4>
                  <ul className="space-y-1">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Corporate Training?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience training that delivers measurable business impact.
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

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Training Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure successful knowledge transfer and skill development.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-2 text-sm">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateWorkshops;