// import { motion } from "framer-motion";
// import { Users, BookOpen, Mic, Award, Trophy, Star, Newspaper } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const OurStory = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Page Hero */}
//       <section className="pt-32 pb-16 relative overflow-hidden">
//         <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div {...fadeUp} className="max-w-3xl">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Story</span>
//             <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
//               The Journey of <span className="text-gradient">SyncAI</span>
//             </h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               From a bold vision to a trusted AI consultancy — discover the people, passion, and purpose behind SyncAI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Company Story */}
//       <section id="company" className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div {...fadeUp}>
//               <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Company Story</span>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Built on <span className="text-gradient">Innovation</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 SyncAI Consultancy Pvt. Ltd. was founded with a singular mission: to democratize artificial intelligence and make it accessible to businesses of all sizes. We believe that AI isn't just a technology — it's a transformative force that can revolutionize how organizations operate, compete, and grow.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Starting from a small team of AI enthusiasts, we've grown into a full-service consultancy offering cutting-edge solutions across digital marketing, automation, robotics, and augmented reality. Our approach combines deep technical expertise with strategic business acumen.
//               </p>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
//               <div className="grid grid-cols-2 gap-6">
//                 {[
//                   { value: "2024", label: "Founded" },
//                   { value: "50+", label: "Projects" },
//                   { value: "30+", label: "Clients" },
//                   { value: "8+", label: "AI Domains" },
//                 ].map((stat) => (
//                   <div key={stat.label} className="text-center">
//                     <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
//                     <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Founder */}
//      <section id="founder" className="py-20 border-t border-border/30">
//   <div className="container mx-auto px-6">
//     <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
      
//       <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
//         Sync AI
//       </span>

//       <h2 className="text-4xl font-heading font-bold mb-4">
//         Driving Practical Innovation Through{" "}
//         <span className="text-gradient">AI, Strategy, and Intelligent Systems</span>
//       </h2>

//       <div className="glass rounded-2xl p-10 mt-8 space-y-8 text-left">
        
//         {/* Mission Section */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">
//             Mission
//           </h3>
//           <p className="text-muted-foreground leading-relaxed">
//             At Sync AI, our mission is to help businesses effectively adopt and apply technology across key areas such as AI consultancy, digital marketing, agentic AI, and prompt engineering. We focus on delivering solutions that are practical, aligned with business needs, and capable of improving everyday operations, customer engagement, and decision-making.
//           </p>
//         </div>

//         {/* Approach Section */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">
//             Our Approach
//           </h3>
//           <p className="text-muted-foreground leading-relaxed">
//             Our approach is centered on understanding how organizations work and identifying where intelligent systems and automation can create real impact. Whether it is optimizing marketing strategies, building AI-driven workflows, or improving the way teams interact with AI tools, we aim to provide solutions that are both relevant and easy to implement.
//           </p>
//         </div>

//         {/* Vision Section */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">
//             Vision
//           </h3>
//           <p className="text-muted-foreground leading-relaxed">
//             Our vision is to build a future where businesses can seamlessly combine strategy, technology, and creativity to operate more efficiently and grow with confidence. We strive to position Sync AI as a trusted partner that not only delivers solutions, but also builds long-term capability through training, innovation, and continuous support.
//           </p>
//         </div>

//       </div>
//     </motion.div>
//   </div>
// </section>
//       {/* Advisory & Mentors */}
//       <section id="advisory" className="py-20 border-t border-border/30">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-16">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Advisory & Mentors</span>
//             <h2 className="text-4xl font-heading font-bold">
//               Guided by <span className="text-gradient">Experts</span>
//             </h2>
//           </motion.div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Mic, title: "Industry Advisors", desc: "Seasoned professionals guiding our strategic direction" },
//               { icon: BookOpen, title: "Academic Mentors", desc: "Leading researchers keeping us at the frontier of AI" },
//               { icon: Users, title: "Business Mentors", desc: "Entrepreneurs who've scaled successful ventures" },
//               { icon: Star, title: "Technical Leads", desc: "AI engineers with deep domain expertise" },
//             ].map((item, i) => (
//               <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
//                 <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                 <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section id="team" className="py-20 border-t border-border/30">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-16">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Team</span>
//             <h2 className="text-4xl font-heading font-bold">
//               Meet the <span className="text-gradient">Minds</span>
//             </h2>
//           </motion.div>
//           <motion.div {...fadeUp} className="flex justify-center">
//             <img src="/Team.png" alt="Our Team" className="w-full max-w-4xl h-auto rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Awards */}
//       <section id="awards" className="py-20 border-t border-border/30">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-16">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Recognition</span>
//             <h2 className="text-4xl font-heading font-bold">
//               Awards & <span className="text-gradient">Achievements</span>
//             </h2>
//           </motion.div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: Trophy, title: "Best AI Startup 2025", org: "India Tech Awards" },
//               { icon: Award, title: "Innovation Excellence", org: "Digital India Summit" },
//               { icon: Star, title: "Top AI Consultancy", org: "Business World" },
//             ].map((a, i) => (
//               <motion.div key={a.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500">
//                 <a.icon className="w-10 h-10 text-primary mx-auto mb-4" />
//                 <h3 className="font-heading font-semibold mb-1">{a.title}</h3>
//                 <p className="text-sm text-muted-foreground">{a.org}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Books & Media */}
//       <section id="books" className="py-20 border-t border-border/30">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16">
//             <motion.div {...fadeUp}>
//               <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Publications</span>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Books & <span className="text-gradient">Thought Leadership</span>
//               </h2>
//               <div className="space-y-4">
//                 {["AI for Business Leaders", "The Marketing AI Revolution", "Digital Transformation Playbook"].map((book) => (
//                   <div key={book} className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all">
//                     <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
//                     <span className="font-medium">{book}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//               <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Media</span>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 In the <span className="text-gradient">Spotlight</span>
//               </h2>
//               <div className="space-y-4">
//                 {["Featured in Economic Times", "Interview with NDTV", "TEDx Speaker on AI Ethics"].map((media) => (
//                   <div key={media} className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all">
//                     <Newspaper className="w-6 h-6 text-primary flex-shrink-0" />
//                     <span className="font-medium">{media}</span>
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

// export default OurStory;
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Mic,
  Award,
  Trophy,
  Star,
  Newspaper,
  Bot,
  Megaphone,
  Wand2,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const approachAreas = [
  {
    icon: Bot,
    title: "AI Consultancy",
    desc: "We design strategies that fit into existing workflows, helping businesses adopt automation, agentic AI, and intelligent systems in a structured and effective manner — not generic solutions, but tailored frameworks.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "We combine data-driven strategies with AI-powered tools to improve campaign performance, audience targeting, and overall engagement — enabling businesses to make informed decisions with measurable outcomes.",
  },
  {
    icon: Wand2,
    title: "Prompt Engineering",
    desc: "By designing effective prompts and interaction frameworks, we help teams use AI tools more efficiently, improving output quality and enabling better use of AI in everyday tasks.",
  },
  {
    icon: GraduationCap,
    title: "AI Workshops",
    desc: "Hands-on learning sessions focused on real-world applications — helping individuals and teams apply AI consultancy, digital marketing, agentic AI, and prompt engineering in their daily work.",
  },
];

const books = [
  "India's First Book on AI Tools (English & Marathi)",
  "AI for Business Leaders – Strategy & Innovation",
  "Sahaj Sope Digital Marketing (Marathi)",
  "Social Media Marketing – University Textbook",
  "Search Engine Marketing – University Textbook",
  "Metaverse & Digital Economy",
];

const mediaFeatures = [
  "TEDx Talk – \"Who is taking your decisions?\" (Ashiana Road)",
  "TEDx Talk – \"Responsible Intelligence: AI for a Sustainable Planet\"",
  "Rising Star in AI 2025 – Entrepreneur Magazine",
  "AI Researcher of the Year – Entrepreneur India AI Awards",
  "Featured on ABKD Marathi Podcast, Dr. AB's Podium & more",
  "Member – Google RARE Leadership Academy (Global Elite Cohort)",
];

const awards = [
  {
    icon: Trophy,
    title: "Best Digital Marketing Professional",
    org: "India Education Awards – Innovative Advertising Skills",
  },
  {
    icon: Award,
    title: "Rising Star in AI 2025",
    org: "Entrepreneur Magazine",
  },
  {
    icon: Star,
    title: "AI Researcher of the Year",
    org: "AI Awards & Summit – Entrepreneur India",
  },
  {
    icon: CheckCircle,
    title: "Google RARE Leadership Academy",
    org: "Global Elite Digital Marketer Cohort",
  },
  {
    icon: Mic,
    title: "TEDx Speaker",
    org: "TEDx Ashiana Road & TEDx Phool Bagh Park",
  },
  {
    icon: BookOpen,
    title: "Gold Medallist & Best Outgoing Student",
    org: "MIT School of Business – MBA in Marketing",
  },
];

const OurStory = () => {
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
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              The Journey of <span className="text-gradient">SyncAI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a bold vision to a trusted AI consultancy — discover the people, passion, and
              purpose behind SyncAI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section id="company" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Company Story
              </span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Built on <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sync AI Consultancy was founded with a singular mission: to help businesses effectively
                adopt and apply technology across key areas such as AI consultancy, digital marketing,
                agentic AI, and prompt engineering. We believe that AI isn't just a technology — it's a
                transformative force that can revolutionize how organizations operate, compete, and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Dr. Amey Pangarkar — a PhD in Digital Marketing, TEDx Speaker, author of 6
                bestselling books, and trainer to 15,000+ professionals — Sync AI combines deep
                domain expertise with a practical, outcome-driven approach to AI adoption across
                industries.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-10 glow-effect"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2024", label: "Founded" },
                  { value: "15,000+", label: "Professionals Trained" },
                  { value: "1850+", label: "Campaigns Managed" },
                  { value: "2000+", label: "Training Hours" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Approach, Vision */}
      <section id="mission" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Sync AI
            </span>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Driving Practical Innovation Through{" "}
              <span className="text-gradient">AI, Strategy & Intelligent Systems</span>
            </h2>

            <div className="glass rounded-2xl p-10 mt-8 space-y-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Sync AI, our mission is to help businesses effectively adopt and apply technology
                  across key areas such as AI consultancy, digital marketing, agentic AI, and prompt
                  engineering. We focus on delivering solutions that are practical, aligned with business
                  needs, and capable of improving everyday operations, customer engagement, and
                  decision-making.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is centered on understanding how organizations work and identifying where
                  intelligent systems and automation can create real impact. Whether it is optimizing
                  marketing strategies, building AI-driven workflows, or improving the way teams
                  interact with AI tools, we aim to provide solutions that are both relevant and easy
                  to implement.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to build a future where businesses can seamlessly combine strategy,
                  technology, and creativity to operate more efficiently and grow with confidence. We
                  strive to position Sync AI as a trusted partner that not only delivers solutions, but
                  also builds long-term capability through training, innovation, and continuous support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach in Action */}
      <section id="approach" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              How We Work
            </span>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Our Approach <span className="text-gradient">in Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As Sync AI continues to evolve, our focus remains on creating solutions that are
              practical, relevant, and aligned with real business needs. We work closely with
              organizations to understand their processes and identify where AI can create
              meaningful value.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachAreas.map((area, i) => (
              <motion.div
                key={area.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 group hover:glow-effect transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Mentors */}
      <section id="advisory" className="py-20 bg-muted/30 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Advisory & Mentors
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Guided by <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Industry Advisors", desc: "Seasoned professionals guiding our strategic direction" },
              { icon: BookOpen, title: "Academic Mentors", desc: "Leading researchers keeping us at the frontier of AI" },
              { icon: Users, title: "Business Mentors", desc: "Entrepreneurs who've scaled successful ventures" },
              { icon: Star, title: "Technical Leads", desc: "AI engineers with deep domain expertise" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Team
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Meet the <span className="text-gradient">Minds</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="flex justify-center">
            <img
              src="/Team.png"
              alt="Our Team"
              className="w-full max-w-4xl h-auto rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 bg-muted/30 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Recognition
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Awards & <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 flex items-start gap-4 group hover:glow-effect transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1 text-sm">{a.title}</h3>
                  <p className="text-xs text-muted-foreground">{a.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Media */}
      <section id="books" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Publications
              </span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Books & <span className="text-gradient">Thought Leadership</span>
              </h2>
              <div className="space-y-3">
                {books.map((book) => (
                  <div
                    key={book}
                    className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{book}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Media
              </span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                In the <span className="text-gradient">Spotlight</span>
              </h2>
              <div className="space-y-3">
                {mediaFeatures.map((media) => (
                  <div
                    key={media}
                    className="glass rounded-lg p-4 flex items-center gap-4 hover:glow-effect transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Newspaper className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{media}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
