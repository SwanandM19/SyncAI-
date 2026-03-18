import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const teamMembers = [
  { name: "Amey Pangarker", title: "Founder & Principal Consultant", image: "/amey pangarker.png" },
  { name: "Jay Gondkar", title: "Graphic Designer", image: "/Jay Gondkar.jpeg" },
  { name: "Krutika", title: "Website Developer", image: "/krutika.jpeg" },
  { name: "Mitali", title: "Website Developer", image: "/mitalicropped.webp" },
  { name: "Nikhil", title: "SEO Expert", image: "/nilkhil.jpeg" },
  { name: "Nishant", title: "Graphic Designer", image: "/nishant.jpeg" },
  { name: "Prasad", title: "Digital Marketing Manager", image: "/prasadd.png" },
  { name: "Pratiksha", title: "Team Member", image: "/pratikshacropped.webp" },
  { name: "Riya", title: "Team Member", image: "/riyacropped (1).webp" },
  { name: "Sahil", title: "Sr. Marketing Specialist", image: "/sahil.jpeg" },
  { name: "Sanika", title: "Website Developer", image: "/sanika.jpeg" },
  { name: "Saurabh", title: "Graphics Designer", image: "/saurabh.jpeg" },
  { name: "Suhani", title: "Team Member", image: "/suhani.webp" },
  { name: "Tanvi", title: "Content Marketing Specialist", image: "/tanvi.jpeg" },
  { name: "Tejas", title: "Team Member", image: "/tejas.webp" },
  { name: "Vijya", title: "Website Developer", image: "/vijya.jpeg" },
];

const teamValues = [
  "Innovation & Creativity",
  "Collaboration & Teamwork",
  "Continuous Learning",
  "Excellence in Execution",
  "Client-Centric Focus",
  "Ethical AI Development"
];

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = teamRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Team</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A diverse group of AI specialists, engineers, and innovators working together to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Passionate <span className="text-gradient">Professionals</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings together top talent from leading universities, research institutions, and industry leaders. Each member contributes unique expertise and perspectives, creating a collaborative environment where innovation thrives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From AI researchers to robotics engineers, from data scientists to UX designers, our multidisciplinary team ensures that every project benefits from comprehensive expertise and creative problem-solving.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Users className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make SyncAI exceptional.
            </p>
          </motion.div>

          {/* Big Team Photo */}
          <motion.div {...fadeUp} className="flex justify-center mb-12">
            <img src="/Team.png" alt="Our Team" className="w-full max-w-4xl h-auto rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" />
          </motion.div>

          {/* Team Carousel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Meet the Experts
              </span>
              <h3 className="text-2xl font-heading font-bold">
                Our <span className="text-gradient">Team</span>
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollTeam("left")}
                disabled={!canScrollLeft}
                className="inline-flex items-center justify-center rounded-full border border-border/50 bg-card/70 p-3 text-sm text-muted-foreground shadow-sm transition hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Scroll team left"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => scrollTeam("right")}
                disabled={!canScrollRight}
                className="inline-flex items-center justify-center rounded-full border border-border/50 bg-card/70 p-3 text-sm text-muted-foreground shadow-sm transition hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Scroll team right"
              >
                ▶
              </button>
            </div>
          </div>

          <div
            ref={teamRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="min-w-[240px] max-w-[240px] flex-shrink-0 glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-lg font-heading font-semibold">{member.name}</div>
                <div className="text-sm text-muted-foreground">{member.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Team Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((value, i) => (
              <motion.div
                key={value}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;