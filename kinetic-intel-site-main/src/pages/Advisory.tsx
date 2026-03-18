import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const advisors = [
  { name: "Dr.Bhooshan Kelkar ", role: "", expertise: "", description: "Dr. Bhooshan Kelkar, PhD is a distinguished technology leader and AI expert with over 25 years of global experience. A B.Tech from IIT Bombay and MS, PhD in Artificial Intelligence from the UK, he is an IBM Master Inventor with 23 granted US patents. During his 13-year tenure at IBM (USA and India), he served as Country Manager – University Relations for IBM India/South Asia.Currently Director at Neuflex Talent Solutions, he is also the author of the first Marathi book on Industry 4.0, contributing actively to MSME growth and future-ready innovation.", image: "/12.png" },
  { name: "Vinayak Pachlag", role: "Technology Strategy Advisor", expertise: "Digital Transformation", description: "Vinayak Pachalag is an Indian entrepreneur, digital strategist, and media professional. He is the Editor-Director of Think Bank Live, a Marathi digital media platform known for in-depth interviews and discussions on social, political, technological, and cultural issues. With a background in engineering and digital strategy, he is also a TEDx speaker, author, columnist, and media panelist, focused on simplifying complex topics for the public.", image: "/13.png" },
  { name: "Viju Mane ", role: "Data Science Advisor", expertise: "Big Data Analytics", description: "Viju Mane is a well-known filmmaker in the Marathi film industry, working as a director, writer, lyricist, producer, and actor. He is best known for films like Khel Mandala, Bioscope, Monkey Baat, and Pandu, which are appreciated for their realistic storytelling and social themes. His work reflects strong cultural roots and meaningful cinema, making him a respected creative voice in Marathi films.", image: "/14.png" },
  { name: "Dr. Madhura Kelkar", role: "Data Science Advisor", expertise: "Big Data Analytics", description: "Madhura is a qualified Psychology Expert with an MA in Psychology from the University of Pune and an MPM degree. With certifications in child counselling, marriage counselling, yoga, NLP, and hypnotherapy, she brings a holistic approach to mental wellness. She has professional experience in applied psychology, assessments, and research through her work with JPIP (Jnana Prabodhini Institute of Psychology), where she contributed to developing and standardizing assessment tools, along with HR experience in a Pune-based hospital.", image: "/15.png" },
  { name: "Achyut Godbole  ", role: "Business Strategy Advisor", expertise: "Growth Strategy", description: "Achyut Godbole is a renowned author, entrepreneur, and mentor with over two decades of leadership experience as a CEO in the IT and business management sector. An IITian and author of 50+ books, he is widely respected as a public speaker and thought leader. Throughout his distinguished career, he has held top leadership positions including Group CEO at Patni Computer Systems, Managing Director at Syntel, CEO at L&T Technology Services and Apar Technologies, and Executive Director at Disha Technologies. His journey reflects deep expertise in technology, strategy, and organizational leadership.", image: "/16.png" },
  { name: "Dr.Pradeep Bavadekar  ", role: "Business Strategy Advisor", expertise: "Growth Strategy", description: "Dr. Pradeep Bavadekar is a distinguished leader with over 45 years of experience in industry, consulting, sustainability, and academia. Former Managing Director of MITCON (1995–2021), he played a key role in expanding renewable energy, infrastructure, agro, and environmental divisions, while advising on major projects across India.Currently Chairman & Managing Trustee of YouthBuild Foundation and Group Director at MIMA Institute of Management, he is also a Professor of CSR, Sustainability, and Corporate Governance. A Ph.D. and MBA from Pune University, he is committed to sustainable agriculture and active thought leadership on socio-economic issues.", image: "/17.png" },
  { name: "Ashok Alurkar", role: "Business Strategy Advisor", expertise: "Growth Strategy", description: "Ashok Alurkar,  is a Certified Financial Planner and owner of Rupee Clinic, with over 20 years of experience in the financial services industry. He specializes in financial planning, retirement planning, wealth management, and insurance advisory, offering holistic solutions that provide clarity and long-term financial confidence to his clients.A columnist for Maharashtra Times for over six years, he actively shares insights on personal finance and has trained 600+ advisors and insurance professionals across India, promoting a comprehensive approach to financial planning.", image: "/18.png" },
  { name: "Dr. Vivek Sawant ", role: "Business Strategy Advisor", expertise: "Growth Strategy", description: "Dr. Vivek Sawant is a visionary technologist and education reformer, serving as Chief Mentor of Maharashtra Knowledge Corporation Limited (MKCL). As its founding Managing Director for 18 years, he led a massive digital literacy movement through the MS-CIT program, empowering over 2 crore learners across India through a vast network of learning centers.Earlier, he played a key role in developing India’s first supercomputer, PARAM, at C-DAC and founded the Advanced Computing Training School (ACTS). Widely honored for his contributions, he is recognized for advancing digital empowerment, skill development, and education innovation at scale.", image: "/19.png" }
];

const advisoryFocus = [
  "Strategic AI Implementation",
  "Technology Roadmap Planning",
  "Risk Assessment & Mitigation",
  "Innovation Strategy",
  "Team Development & Training"
];

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Advisory</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Expert <span className="text-gradient">Guidance</span> for Success
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our advisory board brings together industry leaders and experts to guide SyncAI's strategic direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Strategic <span className="text-gradient">Advisory Board</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our advisory board consists of renowned experts in AI, technology, and business strategy. They provide invaluable guidance on industry trends, emerging technologies, and strategic decision-making to ensure SyncAI remains at the forefront of innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each advisor brings unique perspectives and deep expertise from their respective fields, helping us navigate complex challenges and seize new opportunities in the rapidly evolving AI landscape.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Join Our Network <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
              <Users className="w-20 h-20 text-primary/30 mx-auto animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Board Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Advisors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts who guide our strategic direction and ensure excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, i) => (
              <motion.div
                key={advisor.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="text-center mb-4">
                  <img src={advisor.image} alt={advisor.name} className="w-24 h-24 rounded-lg object-cover mx-auto mb-2" />
                  <h3 className="font-semibold">{advisor.name}</h3>
                  {/* <p className="text-sm text-muted-foreground">{advisor.role}</p> */}
                </div>
                {/* <p className="text-sm text-primary font-medium mb-2">Expertise: {advisor.expertise}</p> */}
                <p className="text-sm text-muted-foreground">
                  {advisor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Advisory Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The key areas where our advisory board provides strategic guidance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryFocus.map((area, i) => (
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

export default Advisory;