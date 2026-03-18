// import { motion } from "framer-motion";
// import { GraduationCap, Building, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const Trainings = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Page Hero */}
//       <section className="pt-32 pb-16 relative overflow-hidden">
//         <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div {...fadeUp} className="max-w-3xl">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Trainings</span>
//             <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
//               AI <span className="text-gradient">Training Programs</span>
//             </h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Upskill your team with hands-on AI workshops designed for professionals at every level.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Open Workshops */}
//       <section id="open-workshops" className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div {...fadeUp}>
//               <div className="flex items-center gap-3 mb-4">
//                 <GraduationCap className="w-8 h-8 text-primary" />
//                 <span className="text-primary text-sm font-semibold tracking-widest uppercase">Open Workshops</span>
//               </div>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Learn AI from <span className="text-gradient">Industry Experts</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Our open workshops are designed for individuals and small teams who want to learn AI fundamentals, explore advanced techniques, and gain practical skills they can apply immediately.
//               </p>
//               <ul className="space-y-3 mb-8">
//                 {[
//                   "Hands-on projects with real datasets",
//                   "Certificate of completion",
//                   "Small batch sizes for personalized learning",
//                   "Post-workshop mentorship support",
//                   "Access to exclusive learning resources",
//                 ].map((item) => (
//                   <li key={item} className="flex items-start gap-3 text-foreground/80">
//                     <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <Button variant="hero" size="lg">
//                 View Upcoming Workshops <ArrowRight className="w-5 h-5 ml-1" />
//               </Button>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: Users, title: "500+", label: "Professionals Trained" },
//                   { icon: Clock, title: "40+", label: "Hours of Content" },
//                   { icon: GraduationCap, title: "15+", label: "Workshop Topics" },
//                   { icon: Building, title: "20+", label: "Workshops Conducted" },
//                 ].map((s) => (
//                   <div key={s.label} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
//                     <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
//                     <div className="text-2xl font-heading font-bold text-gradient">{s.title}</div>
//                     <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Workshops */}
//       <section id="corporate" className="py-20 border-t border-border/30">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div {...fadeUp} className="lg:order-2">
//               <div className="flex items-center gap-3 mb-4">
//                 <Building className="w-8 h-8 text-primary" />
//                 <span className="text-primary text-sm font-semibold tracking-widest uppercase">Corporate Workshops</span>
//               </div>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Tailored for <span className="text-gradient">Your Organization</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Custom-designed AI training programs built around your industry, use cases, and team skill levels. We bring the expertise to your doorstep.
//               </p>
//               <ul className="space-y-3 mb-8">
//                 {[
//                   "Customized curriculum for your industry",
//                   "On-site or virtual delivery options",
//                   "Team assessments and skill gap analysis",
//                   "Ongoing support and consultation",
//                   "Executive AI literacy programs",
//                 ].map((item) => (
//                   <li key={item} className="flex items-start gap-3 text-foreground/80">
//                     <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <Button variant="hero" size="lg">
//                 Request Corporate Training <ArrowRight className="w-5 h-5 ml-1" />
//               </Button>
//             </motion.div>
//             <motion.div {...fadeUp} className="lg:order-1 glass rounded-2xl p-10 glow-effect">
//               <div className="space-y-6">
//                 {["AI Fundamentals for Teams", "Advanced ML & Deep Learning", "AI in Marketing Masterclass", "Generative AI Workshop", "AI Ethics & Governance"].map((t, i) => (
//                   <div key={t} className="flex items-center gap-4">
//                     <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
//                       {i + 1}
//                     </div>
//                     <span className="font-medium">{t}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Trainings;


import { motion } from "framer-motion";
import {
  GraduationCap,
  Building,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Briefcase,
  UserCheck,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const trainingHighlights = [
  { icon: Zap, text: "Hands-on training with industry-relevant AI tools and platforms" },
  { icon: BarChart3, text: "Real-world business use cases and scenario-based learning" },
  { icon: Bot, text: "Practical exposure to automation workflows and intelligent systems" },
  { icon: UserCheck, text: "Chatbot development and deployment for business applications" },
  { icon: GraduationCap, text: "Introduction to agentic AI and its operational use-cases" },
  { icon: ShieldCheck, text: "Understanding of AI policies, governance, and ethical frameworks" },
  { icon: Building, text: "Customized training modules tailored to specific business needs" },
  { icon: CheckCircle, text: "Focus on implementation, optimization, and measurable impact" },
  { icon: Briefcase, text: "Guidance on integrating AI solutions into existing workflows" },
  { icon: Clock, text: "Continuous learning approach with emphasis on scalability and improvement" },
];

const b2bFeatures = [
  "Customized curriculum aligned with your industry requirements",
  "AI consultancy frameworks and workflow automation",
  "Agentic AI deployment and intelligent customer interaction systems",
  "Build automated workflows and deploy chatbots for customer engagement",
  "AI-driven insights for marketing optimization and operational decisions",
  "Integration of AI into existing systems without disrupting operations",
  "Continuous optimization — monitor, refine, and scale AI solutions",
  "On-site or virtual delivery options available",
];

const b2cFeatures = [
  "AI tools, automation platforms, and chatbot development",
  "Emerging technologies including agentic AI",
  "Applications in digital marketing, content creation, and productivity",
  "Business process automation for non-technical professionals",
  "AI governance, ethical usage, and policy considerations",
  "Scenario-based learning with simple real-world use-cases",
  "Career-focused outcomes for students and working professionals",
  "Confidence to apply AI tools in real-world business situations",
];

const corporateModules = [
  "AI Fundamentals for Business Teams",
  "Workflow Automation & Process Intelligence",
  "Agentic AI Deployment",
  "Chatbots & Customer Engagement AI",
  "AI in Marketing & Analytics",
  "AI Ethics & Governance",
];

const stats = [
  { icon: Users, title: "15,000+", label: "Professionals Trained" },
  { icon: Clock, title: "2000+", label: "Training Hours Delivered" },
  { icon: GraduationCap, title: "B2B & B2C", label: "Program Formats" },
  { icon: Building, title: "Multi-Industry", label: "Domain Coverage" },
];

const Trainings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Trainings
            </span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              AI <span className="text-gradient">Training Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Application-driven AI training for organizations and individuals — focused on real-world
              tools, hands-on execution, and measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Training at Sync AI */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Our Approach
              </span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Training at <span className="text-gradient">Sync AI</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sync AI, our training programs are designed to enable organizations and individuals to
                effectively understand, adopt, and implement artificial intelligence in real business
                environments. Our approach focuses on <strong className="text-foreground">application-driven
                learning</strong> — participants are exposed to real-world use cases, tools, and workflows
                actively used across industries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We emphasize AI integration across key business functions — marketing, customer engagement,
                operations, and decision-making — helping participants streamline processes, reduce manual
                effort, and enhance productivity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our goal is to create not just awareness, but <strong className="text-foreground">capability</strong> —
                enabling participants to confidently apply AI in real-world situations and drive
                measurable business impact.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Enquire About Training <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500"
                  >
                    <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-heading font-bold text-gradient">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B Training */}
      <section id="b2b" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  B2B Training
                </span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored for <span className="text-gradient">Your Organization</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sync AI's B2B training programs are structured for organizations aiming to integrate AI
                into their operational and strategic frameworks. We collaborate closely with businesses to
                understand their workflows, identify improvement opportunities, and design programs aligned
                with their industry requirements and long-term growth objectives.
              </p>
              <ul className="space-y-3 mb-8">
                {b2bFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Request Corporate Training <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Corporate Modules */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-10 glow-effect"
            >
              <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-6">
                Corporate Training Modules
              </p>
              <div className="space-y-4">
                {corporateModules.map((t, i) => (
                  <div key={t} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2C Training */}
      <section id="b2c" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  B2C Training
                </span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                For <span className="text-gradient">Individuals & Professionals</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our B2C training programs are designed for students, working professionals, and
                entrepreneurs who want to build practical, industry-relevant AI skills. These programs
                make AI accessible while maintaining a strong emphasis on real-world application and
                career-ready outcomes.
              </p>
              <ul className="space-y-3 mb-8">
                {b2cFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Enroll Now <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </motion.div>

            {/* B2C Audience Cards */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="lg:order-1 grid gap-4"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Students",
                  desc: "Build AI literacy early and gain a competitive edge in the job market with practical, hands-on exposure to real AI tools.",
                },
                {
                  icon: Briefcase,
                  title: "Working Professionals",
                  desc: "Upskill in AI automation, digital marketing AI, and productivity tools to advance your career and stay relevant.",
                },
                {
                  icon: UserCheck,
                  title: "Entrepreneurs",
                  desc: "Learn to leverage AI for business growth — from automating operations to enhancing customer engagement and marketing.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-xl p-5 flex items-start gap-4 hover:glow-effect transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              What You Get
            </span>
            <h2 className="text-3xl font-heading font-bold mb-4">Training Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every Sync AI program is designed to deliver practical value and measurable outcomes through
              a structured, execution-focused approach.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {trainingHighlights.map((item, i) => (
              <motion.div
                key={item.text}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="glass rounded-2xl p-12 glow-effect text-center max-w-3xl mx-auto"
          >
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Build <span className="text-gradient">Long-Term AI Capability</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto">
              In today's evolving digital landscape, the ability to effectively utilize AI has become a
              key differentiator. Whether you're an organization looking to scale intelligently or an
              individual building future-ready skills, Sync AI provides the foundation required to
              succeed in an increasingly AI-driven world.
            </p>
            <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
              Our approach goes beyond training — it aims to create long-term capability through
              practical learning, real-world application, and strategic understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started Today <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Corporate Program
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainings;
