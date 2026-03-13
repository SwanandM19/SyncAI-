import { motion } from "framer-motion";
import {
  Brain, TrendingUp, Cog, Megaphone,
  Bot, Zap, Cpu, Glasses,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI in Digital Marketing", desc: "Leverage AI to supercharge your digital marketing strategies with data-driven insights." },
  { icon: TrendingUp, title: "AI Consultancy", desc: "Expert guidance on integrating AI into your business operations and decision-making." },
  { icon: Cog, title: "Customized AI Solutions", desc: "Bespoke AI products tailored to your unique business challenges and goals." },
  { icon: Megaphone, title: "Marketing Consultancy", desc: "Strategic marketing planning powered by AI analytics and market intelligence." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous AI agents that think, plan, and execute tasks independently." },
  { icon: Zap, title: "Automations", desc: "Intelligent process automation to eliminate repetitive tasks and boost efficiency." },
  { icon: Cpu, title: "Robotics", desc: "AI-powered robotics solutions for manufacturing, logistics, and beyond." },
  { icon: Glasses, title: "AR Solutions", desc: "Augmented reality experiences enhanced with artificial intelligence." },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
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
  );
};

export default ServicesSection;
