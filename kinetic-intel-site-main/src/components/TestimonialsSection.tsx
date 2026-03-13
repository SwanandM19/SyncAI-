import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechVista Solutions",
    text: "SyncAI transformed our marketing strategy with their AI-driven insights. Our conversion rates increased by 340% within 6 months.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, InnovateCorp",
    text: "The custom AI solutions built by SyncAI automated 70% of our manual processes. Exceptional team with deep technical expertise.",
    rating: 5,
  },
  {
    name: "Amir Patel",
    role: "Founder, DataDriven Inc",
    text: "Their AI training program upskilled our entire team. The hands-on workshops were practical, relevant, and immediately applicable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
