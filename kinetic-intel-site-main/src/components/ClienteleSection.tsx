import { motion } from "framer-motion";

const clients = [
  "TechVista", "InnovateCorp", "DataDriven", "CloudNine",
  "SmartEdge", "FutureLabs", "NexGen", "QuantumLeap",
];

const ClienteleSection = () => {
  return (
    <section className="py-20 border-t border-border/50">
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

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-xl sm:text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
