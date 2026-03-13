import { motion } from "framer-motion";
import { Award, Trophy, Medal, Crown } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best AI Startup 2025", org: "India Tech Awards" },
  { icon: Award, title: "Innovation Excellence", org: "Digital India Summit" },
  { icon: Medal, title: "Top AI Consultancy", org: "Business World" },
  { icon: Crown, title: "Marketing AI Pioneer", org: "AdTech Forum" },
];

const AwardsSection = () => {
  return (
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
  );
};

export default AwardsSection;
