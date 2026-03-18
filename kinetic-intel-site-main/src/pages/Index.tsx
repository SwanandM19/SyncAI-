import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Brain,
  TrendingUp,
  Cog,
  Megaphone,
  Bot,
  Zap,
  Cpu,
  Glasses,
  Award,
  Trophy,
  Medal,
  Crown,
  Star,
  Quote,
  Rocket,
  Mail,
  Phone,
  MapPin, Mic
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
const services = [
  {
    icon: Brain,
    title: "AI in Digital Marketing",
    desc: "Leverage AI to supercharge your digital marketing strategies with data-driven insights.",
  },
  {
    icon: TrendingUp,
    title: "AI Consultancy",
    desc: "Expert guidance on integrating AI into your business operations and decision-making.",
  },
  {
    icon: Cog,
    title: "Customized AI Solutions",
    desc: "Bespoke AI products tailored to your unique business challenges and goals.",
  },
  {
    icon: Megaphone,
    title: "Marketing Consultancy",
    desc: "Strategic marketing planning powered by AI analytics and market intelligence.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Autonomous AI agents that think, plan, and execute tasks independently.",
  },
  {
    icon: Zap,
    title: "Automations",
    desc: "Intelligent process automation to eliminate repetitive tasks and boost efficiency.",
  },
  {
    icon: Cpu,
    title: "Robotics",
    desc: "AI-powered robotics solutions for manufacturing, logistics, and beyond.",
  },
  {
    icon: Glasses,
    title: "AR Solutions",
    desc: "Augmented reality experiences enhanced with artificial intelligence.",
  },
  {
    icon: Mic, // <-- make sure to import Mic icon
    title: "Podcast",
    desc: "AI-driven podcast production, editing, and distribution to amplify your brand voice.",
  },
];

const awards = [
  { icon: Trophy, title: "Best AI Startup 2025", org: "India Tech Awards" },
  { icon: Award, title: "Innovation Excellence", org: "Digital India Summit" },
  { icon: Medal, title: "Top AI Consultancy", org: "Business World" },
  { icon: Crown, title: "Marketing AI Pioneer", org: "AdTech Forum" },
];

const testimonials = [
  {
    name: "Vrushali Mirajgaonkar",
    role: "Brainvoyages",
    text: "Working with Marketing Hammer has been a wonderful experience for us at Brainvoyages. From understanding our concept to translating it into a clean, user-friendly website, Prasad and his team handled everything with clarity and patience. What I appreciated the most was their ability to understand the emotional side of our brand and reflect it beautifully online. The digital marketing strategies they implemented helped us reach the right audience and significantly improved our inquiries. Truly professional and dependable service.",
    rating: 5,
  },
  {
    name: "Dr. Kunal Kamthe",
    role: "Kamthe Piles Clinic",
    text: "As a medical professional, I needed a digital presence that builds trust and clearly communicates our services. Marketing Hammer delivered exactly that. The website is informative, easy to navigate, and patient-friendly. Their digital marketing efforts have helped increase patient awareness and appointments steadily. Prasad ensures everything is handled smoothly and explains technical aspects in simple language. Highly recommended for healthcare professionals looking to grow online.",
    rating: 5,
  },
  {
    name: "Dr. Kaustubh Nisal",
    role: "London",
    text: "Even though I am based in London, working with Marketing Hammer felt seamless and efficient. The team understood my requirements perfectly and created a website that reflects professionalism and credibility. Communication was prompt despite the time difference, and the execution was timely. I appreciate their attention to detail and strategic approach to online branding. It has definitely strengthened my professional presence.",
    rating: 5,
  },
  {
    name: "Rushikesh Lavalekar",
    role: "Rightpath Global Services Pvt. Ltd.",
    text: "Marketing Hammer has been instrumental in shaping our company’s online identity. They didn’t just create a website — they built a platform that represents our values and business goals. Their digital marketing campaigns have generated quality leads and improved our visibility significantly. Prasad is proactive, creative, and always ready with solutions. A reliable partner for long-term digital growth.",
    rating: 5,
  },
  {
    name: "Shailendra Paranjpe",
    role: "Vihang Tours",
    text: "In the travel industry, presentation matters a lot. Marketing Hammer designed a vibrant and engaging website for Vihang Tours that perfectly showcases our tour packages. Their social media and marketing support helped us connect better with travelers and increase booking inquiries. What stands out is their commitment and responsiveness. They treat your business like their own.",
    rating: 5,
  },
  {
    name: "Dhiraj More",
    role: "Shivaji Hospital, Beed",
    text: "We approached Marketing Hammer to upgrade our hospital’s digital presence, and the results have been impressive. The website is structured, informative, and easy for patients to access important details. Their online promotion strategies have helped improve our local visibility in Beed. The team works with sincerity and understands the responsibility involved in healthcare marketing. We are satisfied with their services.",
    rating: 5,
  },
  {
    name: "Shirish Deshpande",
    role: "Sapphire Infotech",
    text: "Marketing Hammer helped us modernize our company website with a clean and professional design. The entire process — from planning to launch — was smooth and well-coordinated. Their suggestions on SEO and digital positioning were practical and result-oriented. We’ve seen improved engagement and better inquiries after the revamp. Appreciate the structured and transparent way they work.",
    rating: 5,
  },
  {
    name: "Omkar Deshpande",
    role: "Omkar Bhel",
    text: "For a local brand like ours, visibility in the digital space was very important. Marketing Hammer created a simple yet attractive website and supported us with local digital promotions. We started getting more online inquiries and better recognition in our area. Prasad is approachable and always ready to guide. A great team to work with.",
    rating: 5,
  },
];

const clients = [
  "TechVista",
  "InnovateCorp",
  "DataDriven",
  "CloudNine",
  "SmartEdge",
  "FutureLabs",
  "NexGen",
  "QuantumLeap",
];

const team = [
  { name: "Amey Pangarker", title: "Founder & Principal Consultant", image: "/amey pangarker.png" },
  { name: "Jay Gondkar", title: "Graphic Desginer", image: "/Jay Gondkar.jpeg" },
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

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }[] = [];
    const nodeCount = 60;
    const connectionDist = 150;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(13, 124, 143, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(46, 204, 113, 0.7)";
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        gradient.addColorStop(0, "rgba(13, 124, 143, 0.3)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

const Index = () => {
  const navigate = useNavigate();
  const teamRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = teamRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollTeam = (direction: "left" | "right") => {
    const el = teamRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <NeuralBackground />
      <Navbar />

      {/* Hero Section */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Future Starts Here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold leading-tight mb-6"
            >
              Transform Your
              <br />
              Business With{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              SyncAI Consultancy empowers organizations with cutting-edge AI solutions,
              strategic marketing consultancy, and transformative training programs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Button>

              <Button variant="hero-outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <video
              src="/logoanimation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[250px] sm:w-[350px] lg:w-[450px] xl:w-[500px] rounded-xl shadow-2xl"
            />
          </motion.div>

        </div>

        {/* Stats (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "50+", label: "AI Projects Delivered" },
            { value: "27000+", label: "Professionals Trained" },
            { value: "8+", label: "AI Service Domains" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 sm:p-5 text-center">
              <div className="text-3xl font-heading font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-24 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Our <span className="text-gradient">AI Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive AI solutions designed to transform every aspect of your business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass rounded-xl p-6 hover:glow-effect transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Recognition
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              Awards & <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:glow-effect transition-all duration-500"
              >
                <a.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-8 relative group hover:glow-effect transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-heading font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Our Team
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold">
                Meet the <span className="text-gradient">Experts</span>
              </h2>
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
            {team.map((member) => (
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-effect"
          >
            <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Ready to <span className="text-gradient">Start Your AI Journey?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10">
              Let's build something extraordinary together. Transform your business
              with the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-6"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-12 sm:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              Trusted By Industry Leaders
            </span>
          </motion.div>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">

            {[...Array(11)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Box */}
                <div className="w-48 h-32 flex items-center justify-center rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm shadow-sm">
                  <img
                    src={`/${i + 1}.png`}
                    alt={`client-${i + 1}`}
                    className="max-h-[80%] max-w-[80%] object-contain"
                  />
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 pt-12 sm:pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12">
            {/* Brand */}
            <div>
              <img src={logo} alt="SyncAI" className="h-10 rounded mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering businesses with AI-driven solutions, consultancy, and training programs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Our Story",
                  "What We Do",
                  "Trainings",
                  "Case Studies",
                  "Blogs",
                  "Contact Us",
                ].map((l) => (
                  <li key={l}>
                    <Link
                      to={`/${l.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "AI Consultancy",
                  "Digital Marketing AI",
                  "Agentic AI",
                  "Automations",
                  "Robotics",
                ].map((s) => (
                  <li
                    key={s}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-primary">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  info@syncai.in
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  +91 XXXXX XXXXX
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  India
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SyncAI Consultancy Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
