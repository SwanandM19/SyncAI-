// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { BookOpen, ArrowRight, CheckCircle } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const books = [
//   {
//     title: "AI for Business Leaders",
//     author: "Our Founder",
//     year: "2023",
//     description: "A comprehensive guide for executives looking to leverage AI in their organizations.",
//     topics: ["AI Strategy", "Digital Transformation", "Leadership"]
//   },
//   {
//     title: "The Future of Automation",
//     author: "Sarah Chen & Team",
//     year: "2022",
//     description: "Exploring the impact of intelligent automation on modern businesses.",
//     topics: ["Robotics", "Process Automation", "Industry 4.0"]
//   },
//   {
//     title: "Augmented Reality: Beyond Gaming",
//     author: "James Wilson",
//     year: "2021",
//     description: "How AR is transforming industries from manufacturing to healthcare.",
//     topics: ["AR/VR", "Immersive Tech", "Enterprise Applications"]
//   }
// ];

// const publications = [
//   "AI Ethics in Business Applications",
//   "Machine Learning for Small Businesses",
//   "The ROI of AI Implementation",
//   "Building Scalable AI Systems",
//   "Data Privacy in the AI Era",
//   "Future of Work with AI"
// ];

// const Books = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Page Hero */}
//       <section className="pt-32 pb-16 relative overflow-hidden">
//         <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div {...fadeUp} className="max-w-3xl">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Books</span>
//             <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
//               Knowledge <span className="text-gradient">Sharing</span>
//             </h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our published works and research contributions that advance the understanding of AI and technology.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Books Overview */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div {...fadeUp}>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Thought <span className="text-gradient">Leadership</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 Through our books and publications, we share insights, research findings, and practical guidance on AI implementation, digital transformation, and emerging technologies. Our works serve as valuable resources for businesses and individuals.
//               </p>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Each publication reflects our commitment to advancing the field of AI through rigorous research, real-world case studies, and actionable strategies that drive meaningful change.
//               </p>
//               <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
//                 Explore Our Research <ArrowRight className="w-4 h-4" />
//               </Link>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
//               <BookOpen className="w-20 h-20 text-primary/30 mx-auto animate-float" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Books Grid */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl font-heading font-bold mb-4">Our Books</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Comprehensive guides and research publications from our team.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {books.map((book, i) => (
//               <motion.div
//                 key={book.title}
//                 {...fadeUp}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass p-6 rounded-lg"
//               >
//                 <div className="mb-4">
//                   <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-1">By {book.author}</p>
//                   <p className="text-xs text-primary mb-3">{book.year}</p>
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {book.topics.map((topic) => (
//                     <span key={topic} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
//                       {topic}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Publications */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl font-heading font-bold mb-4">Research Publications</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Additional research papers and articles contributing to the AI community.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {publications.map((publication, i) => (
//               <motion.div
//                 key={publication}
//                 {...fadeUp}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass p-6 rounded-lg text-center"
//               >
//                 <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
//                 <p className="text-sm font-medium">{publication}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Books;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const books = [
  {
    cover: "/30.jpeg",
    title: "AI Tools for Everyone",
    subtitle: "India's First Book on AI Tools",
    author: "Dr. Amey Pangarkar",
    year: "2023",
    description:
      "India's pioneering guide to understanding and using AI tools across industries — written for professionals, students, and entrepreneurs.",
    topics: ["Artificial Intelligence", "AI Tools", "Productivity"],
  },
  {
    cover: "/31.jpeg",
    title: "Digital Marketing Mastery",
    subtitle: "The Complete Strategy Guide",
    author: "Dr. Amey Pangarkar",
    year: "2022",
    description:
      "A comprehensive framework for building high-performance digital marketing campaigns from strategy to execution.",
    topics: ["Digital Marketing", "SEO", "Performance Marketing"],
  },
  {
    cover: "/32.jpeg",
    title: "Social Media Marketing",
    subtitle: "University Textbook Series",
    author: "Dr. Amey Pangarkar",
    year: "2021",
    description:
      "An academic textbook on social media marketing strategies, platforms, and analytics for university students.",
    topics: ["Social Media", "Content Strategy", "Analytics"],
  },
  {
    cover: "/33.jpeg",
    title: "Search Engine Marketing",
    subtitle: "University Textbook Series",
    author: "Dr. Amey Pangarkar",
    year: "2021",
    description:
      "A practical textbook on SEM, paid advertising, and search engine optimization for distance-learning programs.",
    topics: ["SEM", "Google Ads", "PPC"],
  },
  {
    cover: "/34.jpeg",
    title: "Sahaj Sope Digital Marketing",
    subtitle: "मराठी आवृत्ती",
    author: "Dr. Amey Pangarkar & Prasad Kulkarni",
    year: "2022",
    description:
      "A Marathi-language guide to digital marketing that makes modern marketing concepts accessible to Marathi-speaking audiences.",
    topics: ["Digital Marketing", "Marathi", "Beginner Friendly"],
  },
  {
    cover: "/35.jpeg",
    title: "AI for Business Leaders",
    subtitle: "Strategy & Innovation",
    author: "Dr. Amey Pangarkar",
    year: "2023",
    description:
      "A strategic playbook for executives and decision-makers to adopt and scale AI within their organizations.",
    topics: ["AI Strategy", "Leadership", "Digital Transformation"],
  },
  {
    cover: "/36.jpeg",
    title: "Metaverse & Digital Economy",
    subtitle: "The Next Frontier",
    author: "Dr. Amey Pangarkar",
    year: "2024",
    description:
      "An academic and practical exploration of the Metaverse's impact on marketing, commerce, and the future digital economy.",
    topics: ["Metaverse", "Web3", "Digital Economy"],
  },
];

const Books = () => {
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
              Published Works
            </span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              Books & <span className="text-gradient">Publications</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              7 published titles by Dr. Amey Pangarkar — covering AI Tools, Digital Marketing, 
              Metaverse, and more. Including India's first book on AI Tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Thought <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Amey Pangarkar has authored 7 books spanning AI tools, digital marketing strategy,
                social media, search engine marketing, and the Metaverse — including university textbooks
                designed for distance-learning programs across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His books have trained thousands of students and professionals, and his Marathi-language
                title makes digital marketing knowledge accessible to regional audiences. He is also the
                author of India's first book on AI Tools, available in both English and Marathi.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-10 glow-effect grid grid-cols-2 gap-6"
            >
              {[
                { value: "7", label: "Books Published" },
                { value: "6+", label: "Bestsellers" },
                { value: "15,000+", label: "Readers Trained" },
                { value: "2", label: "Languages (EN + MR)" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-4xl font-heading font-bold text-gradient mb-1">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">All Books</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse all published titles by Dr. Amey Pangarkar.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col"
              >
                {/* Book Cover */}
                <div className="relative mb-5 rounded-xl overflow-hidden shadow-xl aspect-[3/4] bg-muted">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex flex-wrap gap-1">
                      {book.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] bg-primary/80 text-white px-2 py-0.5 rounded-full font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {book.year}
                  </div>
                </div>

                {/* Book Info */}
                <div className="flex flex-col flex-1 glass rounded-xl p-5">
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider mb-1">
                    {book.subtitle}
                  </p>
                  <h3 className="text-base font-heading font-bold leading-snug mb-1 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">By {book.author}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {book.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="glass rounded-2xl p-12 glow-effect text-center max-w-2xl mx-auto"
          >
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Get Dr. Amey's <span className="text-gradient">Books</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Interested in bulk orders for your institution, corporate training, or personal library?
              Reach out for availability and special pricing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Enquire About Books <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;
