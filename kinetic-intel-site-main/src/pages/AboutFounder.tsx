
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Award, BookOpen, ArrowRight, CheckCircle, Mic, Briefcase, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const achievements = [
  "Doctorate (PhD) in Digital Marketing – Applications in the Metaverse",
  "MBA in Marketing – Gold Medallist & Best Outgoing Student, MIT School of Business",
  "Best Digital Marketing Professional with Innovative Advertising Skills – India Education Awards",
  "Rising Star in AI (2025) – Entrepreneur Magazine",
  "AI Researcher of the Year – AI Awards & Summit, Entrepreneur India",
  "Member of Google RARE Leadership Academy – Global Elite Cohort",
  "Google Certified Digital Marketer",
  "1850+ Campaigns & 1200+ Websites Managed",
  "Achieved Two-Digit ROAS on Performance-Based Campaigns",
];

const expertise = [
  "Artificial Intelligence & Generative AI Tools",
  "Digital Marketing Strategy & Performance Marketing",
  "Metaverse Marketing (PhD Research Area)",
  "SEO, SEM & Social Media Marketing",
  "Business Development & Brand Consulting",
  "Leadership, Mentoring & Entrepreneurship",
];

const books = [
  "India's First Book on AI Tools (English & Marathi editions)",
  "4 Textbooks on Digital Marketing for Distance Learning University",
  "Sahaj Sope Digital Marketing (Marathi, co-authored)",
  "6 Bestselling Books in Total",
];

const speakingEngagements = [
  "TEDx Talk – \"Who is taking your decisions?\"",
  "TiE – The Indus Entrepreneurs",
  "FICCI – Federation of Indian Chambers of Commerce & Industry",
  "NASSCOM – India's Premier Tech Industry Body",
  "AI Awards & Summit – Entrepreneur India",
  "2000+ Training Hours Delivered to 15,000+ Learners",
];

const consultingClients = [
  "Quick Heal – AI-based marketing strategies & real-time analytical dashboards",
  "Jacuzzi – Digital marketing consulting",
  "MIMA Institute of Management – Increased enrollment by 20% via performance marketing",
  "Chanakya Mandal Pariwar",
  "A.T.E. Group",
  "Neuflex Talent Solutions",
];

const AboutFounder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      {/* Page Hero */}
<section className="pt-32 pb-16 relative overflow-hidden">
  <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left: Text Content */}
      <motion.div {...fadeUp} className="max-w-2xl">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
          Meet the Founder
        </span>
        <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
          Dr. Amey <span className="text-gradient">Pangarkar</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Doctorate in Digital Marketing · AI & Strategy Expert · TEDx Speaker · Author of 6 Bestselling Books
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "PhD – Digital Marketing",
            "TEDx Speaker",
            "6 Bestselling Books",
            "1850+ Campaigns",
            "Google RARE Academy",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right: Founder Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative shrink-0"
      >
        {/* Glow ring behind image */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110 z-0" />
        
        {/* Decorative rotating border ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow z-0" />

        {/* Photo */}
        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl glow-effect">
          <img
            src="/amey pangarker.png"
            alt="Dr. Amey Pangarkar – Founder"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating badge – Award */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-4 -left-6 glass px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20"
        >
          <Award className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold">India Education Awards</span>
        </motion.div>

        {/* Floating badge – Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-4 -right-6 glass px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20"
        >
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold">1850+ Campaigns</span>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>


      {/* Founder Bio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                A Journey of <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Amey Pangarkar holds a Doctorate in Digital Marketing with a specialization in Metaverse
                applications, along with an MBA in Marketing where he graduated as a Gold Medallist and Best
                Outgoing Student from MIT School of Business. A B.E. by foundation, he uniquely bridges
                analytical engineering thinking with creative marketing strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As the Founder of A Consultancy (aconsultancy.marketing), Dr. Amey has managed over 1850
                digital marketing campaigns and 1200+ websites, delivering measurable, performance-based
                results for clients ranging from cybersecurity leaders like Quick Heal to global brands like
                Jacuzzi. He has trained 15,000+ learners across digital marketing, advertising, and AI tools,
                and delivered 2000+ training hours.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recognized as the Rising Star in AI (2025) by Entrepreneur Magazine and AI Researcher of the
                Year at the Entrepreneur India AI Awards & Summit, he is also a proud member of Google's RARE
                Leadership Academy — a global cohort of elite digital marketers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Connect with Dr. Amey <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-10 glow-effect space-y-5"
            >
              {[
                { icon: GraduationCap, label: "Doctorate in Digital Marketing (Metaverse)" },
                { icon: Award, label: "Best Digital Marketer – India Education Awards" },
                { icon: BookOpen, label: "Author of 6 Bestselling Books" },
                { icon: Mic, label: "TEDx, TiE, FICCI, NASSCOM Speaker" },
                { icon: Briefcase, label: "Consultant – Quick Heal, Jacuzzi & MIMA" },
                { icon: User, label: "15,000+ Learners Trained Across India" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that define Dr. Amey Pangarkar's impact in Digital Marketing and AI.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authored Books */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Published Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Author of India's first book on AI Tools and 6 bestselling titles across marketing and AI.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {books.map((book, i) => (
              <motion.div
                key={book}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg flex items-start gap-4"
              >
                <BookOpen className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p className="text-sm font-medium">{book}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Speaking Engagements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A sought-after speaker at India's most prestigious platforms for AI, business, and technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingEngagements.map((engagement, i) => (
              <motion.div
                key={engagement}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg flex items-start gap-4"
              >
                <Mic className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p className="text-sm font-medium">{engagement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Clients */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Notable Clients & Consulting</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading brands and institutions to drive AI-led marketing transformation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingClients.map((client, i) => (
              <motion.div
                key={client}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg flex items-start gap-4"
              >
                <Briefcase className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p className="text-sm font-medium">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The domains where Dr. Amey excels and leads transformation for businesses.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, i) => (
              <motion.div
                key={area}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutFounder;
