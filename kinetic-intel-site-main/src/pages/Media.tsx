// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Newspaper, Mic, Video, ArrowRight, CheckCircle } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const mediaFeatures = [
//   { title: "TEDx Talk: AI Revolution", type: "Video", date: "2024", description: "Exploring how AI is transforming business landscapes" },
//   { title: "Forbes: AI Trends 2024", type: "Article", date: "2024", description: "Featured in Forbes on emerging AI technologies" },
//   { title: "TechCrunch Interview", type: "Podcast", date: "2023", description: "Discussion on AI ethics and responsible development" },
//   { title: "Wired Magazine Feature", type: "Article", date: "2023", description: "Cover story on innovative AI applications" },
//   { title: "Bloomberg TV Appearance", type: "Video", date: "2023", description: "Live interview on AI's impact on manufacturing" },
//   { title: "Harvard Business Review", type: "Article", date: "2022", description: "Case study on AI-driven digital transformation" }
// ];

// const mediaTypes = [
//   "Featured Articles",
//   "Video Interviews",
//   "Podcast Appearances",
//   "Conference Speaking",
//   "Industry Reports",
//   "Expert Commentary"
// ];

// const Media = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Page Hero */}
//       <section className="pt-32 pb-16 relative overflow-hidden">
//         <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div {...fadeUp} className="max-w-3xl">
//             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Media</span>
//             <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
//               In the <span className="text-gradient">Spotlight</span>
//             </h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our thought leadership and expertise featured in leading publications, podcasts, and media outlets.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Media Overview */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div {...fadeUp}>
//               <h2 className="text-4xl font-heading font-bold mb-6">
//                 Global <span className="text-gradient">Recognition</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 Our team regularly contributes to industry discussions through articles, interviews, podcasts, and speaking engagements. We share our insights on AI trends, technological innovations, and their impact on businesses worldwide.
//               </p>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 From TEDx talks to major publications like Forbes and Wired, our media presence reflects our commitment to advancing the understanding and adoption of AI technologies across industries.
//               </p>
//               <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
//                 Media Inquiries <ArrowRight className="w-4 h-4" />
//               </Link>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass rounded-2xl p-10 glow-effect">
//               <Newspaper className="w-20 h-20 text-primary/30 mx-auto animate-float" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Media Features */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl font-heading font-bold mb-4">Recent Media Features</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Our latest appearances and contributions in major media outlets.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {mediaFeatures.map((feature, i) => (
//               <motion.div
//                 key={feature.title}
//                 {...fadeUp}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass p-6 rounded-lg"
//               >
//                 <div className="flex items-start gap-4">
//                   {feature.type === "Video" && <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
//                   {feature.type === "Article" && <Newspaper className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
//                   {feature.type === "Podcast" && <Mic className="w-8 h-8 text-primary flex-shrink-0 mt-1" />}
//                   <div>
//                     <h3 className="font-semibold mb-2">{feature.title}</h3>
//                     <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
//                       <span>{feature.type}</span>
//                       <span>•</span>
//                       <span>{feature.date}</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground">{feature.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Media Types */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div {...fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl font-heading font-bold mb-4">Media Coverage Areas</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               The various platforms and formats where our expertise is featured.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {mediaTypes.map((type, i) => (
//               <motion.div
//                 key={type}
//                 {...fadeUp}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass p-6 rounded-lg text-center"
//               >
//                 <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
//                 <p className="text-sm font-medium">{type}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Media;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Newspaper, Mic, ExternalLink, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const podcasts = [
  {
    id: "0sPwq2OKeuQ",
    title: "AI मुळे धोका कोणाला?",
    channel: "Untapped By Gaurav",
    description: "Is AI Friend or Foe? Dr. Amey explores AI's impact on jobs and India's future.",
    url: "https://youtu.be/0sPwq2OKeuQ",
  },
  {
    id: "jd3L9Acd_8g",
    title: "Hidden Algorithm: Cracking the Code",
    channel: "Dr. AB's Podium – Ep 17",
    description: "Decoding the hidden algorithm behind social media page growth and digital reach.",
    url: "https://youtu.be/jd3L9Acd_8g",
  },
  {
    id: "dlyue-nOSzQ",
    title: "Grow with AI... Consciously!",
    channel: "Selfless Parenting Podcast",
    description: "A conscious conversation on using AI responsibly in everyday life and parenting.",
    url: "https://youtu.be/dlyue-nOSzQ",
  },
  {
    id: "VubjIoeepKQ",
    title: "AI, Metaverse & Digital Economy",
    channel: "MIT-WPU Podcast – E02",
    description: "Exploring AI, Metaverse, and emerging technologies reshaping business and society.",
    url: "https://youtu.be/VubjIoeepKQ",
  },
  {
    id: "STCdFE9mgoU",
    title: "Decoding AI: A Journey into Tomorrow",
    channel: "Tech Conversations",
    description: "A deep dive into what AI means for the future of India and global industries.",
    url: "https://youtu.be/STCdFE9mgoU",
  },
  {
    id: "IeZyCumoKoQ",
    title: "Who Is Taking Your Decisions?",
    channel: "TEDx – Ashiana Road",
    description: "Dr. Amey's landmark TEDx Talk on decision-making in the age of AI.",
    url: "https://www.youtube.com/watch?v=IeZyCumoKoQ",
  },
  {
    id: "kyompQ3qcF8",
    title: "AI for Business Leaders",
    channel: "Business Podcast",
    description: "How business leaders can leverage AI for strategy, growth, and transformation.",
    url: "https://www.youtube.com/watch?v=kyompQ3qcF8",
  },
  {
    id: "7P3fd9BdsWI",
    title: "Responsible Intelligence: AI for a Sustainable Planet",
    channel: "TEDx – Phool Bagh Park",
    description: "How to harness AI's power while protecting our environment and society.",
    url: "https://www.youtube.com/watch?v=7P3fd9BdsWI",
  },
  {
    id: "Q3KssXM9VFg",
    title: "Decoding AI: A Journey into Tomorrow's World",
    channel: "AI Insights",
    description: "An exploration of tomorrow's AI-driven world with Dr. Amey Pangarkar.",
    url: "https://www.youtube.com/watch?v=Q3KssXM9VFg",
  },
  {
    id: "8ROtE_ySeOs",
    title: "AI in Education & the Job Market",
    channel: "EdTech Conversations",
    description: "What AI means for freshers, students, and the future of education in India.",
    url: "https://www.youtube.com/watch?v=8ROtE_ySeOs",
  },
  {
    id: "gt7b0IjVcSc",
    title: "AI: Future or Threat?",
    channel: "ABKD Marathi Podcast",
    description: "Busting myths and exploring the real risks and rewards of Artificial Intelligence.",
    url: "https://www.youtube.com/watch?v=gt7b0IjVcSc",
  },
  {
    id: "mi2kXalF9Xs",
    title: "AI नोकरी देणार की खाणार?",
    channel: "Marathi Tech Talk",
    description: "Will AI create or destroy jobs? Dr. Amey answers in this Marathi interview.",
    url: "https://www.youtube.com/watch?v=mi2kXalF9Xs",
  },
  {
    id: "y070tRwBU6Y",
    title: "AI Strategy for Modern Businesses",
    channel: "Marketing Minds",
    description: "Practical AI strategies for entrepreneurs and marketing professionals.",
    url: "https://www.youtube.com/watch?v=y070tRwBU6Y",
  },
  {
    id: "7zGLxWorpu4",
    title: "Exploring AI, Metaverse & Digital Economy",
    channel: "MIT-WPU Emerging Tech Series",
    description: "Immersive tech, digital economy trends, and the next wave of innovation.",
    url: "https://www.youtube.com/watch?v=7zGLxWorpu4",
  },
  {
    id: "8jlp3UpbioA",
    title: "AI Tools for Creators & Professionals",
    channel: "Creator Economy Podcast",
    description: "How AI tools are transforming workflows for designers, developers, and marketers.",
    url: "https://www.youtube.com/watch?v=8jlp3UpbioA",
  },
  {
    id: "_yd1yoUdZyo",
    title: "Digital Marketing in the Age of AI",
    channel: "Digital Growth Show",
    description: "The intersection of digital marketing and AI — what's changing and what's not.",
    url: "https://www.youtube.com/watch?v=_yd1yoUdZyo",
  },
  {
    id: "iJqS3_V0tis",
    title: "Cracking the Code for Your Page",
    channel: "Dr. AB's Podium – Ep 17",
    description: "Understanding algorithms and how to make your content reach the right audience.",
    url: "https://www.youtube.com/watch?v=iJqS3_V0tis",
  },
  {
    id: "RXAIlCe4Yzs",
    title: "Making India the AI Capital of the World",
    channel: "Dr. AB's Podium – Ep 6",
    description: "Steps India needs to take to lead the global AI revolution.",
    url: "https://www.youtube.com/watch?v=RXAIlCe4Yzs",
  },
  {
    id: "tXl1KWxmcD4",
    title: "AI मुळे धोका कोणाला? (EP 19)",
    channel: "Untapped By Gaurav",
    description: "Is AI a friend or foe for India's workforce? A candid discussion on risks and benefits.",
    url: "https://www.youtube.com/watch?v=tXl1KWxmcD4",
  },
];

const newsArticles = [
  {
    image: "/20.jpg",
    title: "AI Expert Dr. Amey Pangarkar",
    category: "Artificial Intelligence",
    description: "Featured coverage on Dr. Amey Pangarkar's work in AI consulting and digital strategy.",
  },
  {
    image: "/21.jpg",
    title: "AI in Fashion & Designing",
    category: "AI Tools · Fashion",
    description: "How AI tools are reshaping fashion designing and creative industries.",
  },
  {
    image: "/22.jpg",
    title: "AI in Banking & Technology",
    category: "AI · Banking",
    description: "Dr. Amey's insights on Artificial Intelligence transforming the banking sector.",
  },
  {
    image: "/23.jpg",
    title: "AI for Animation & Motion Graphics",
    category: "AI Tools · Animation",
    description: "Exploring AI-driven tools revolutionizing animation and motion graphics workflows.",
  },
  {
    image: "/24.jpg",
    title: "AI for Creatives: Future of Art",
    category: "AI for All · Creatives",
    description: "How AI is becoming the most powerful tool for artists and creative professionals.",
  },
  {
    image: "/25.jpg",
    title: "AI Impact Summit",
    category: "Summit · AI Leadership",
    description: "Dr. Amey Pangarkar's address at the prestigious AI Impact Summit.",
  },
  {
    image: "/26.jpg",
    title: "AI in Academics & Smart Research",
    category: "AI · Education",
    description: "Leveraging AI for smarter research, learning, and academic growth.",
  },
  {
    image: "/27.jpg",
    title: "Coding with AI for Developers",
    category: "AI for Developers",
    description: "How developers can harness AI to write better code faster.",
  },
  {
    image: "/28.jpg",
    title: "AI & Parenting – Divya Marathi",
    category: "AI · Parenting · Marathi Media",
    description: "Divya Marathi feature on AI's role in modern parenting and family life.",
  },
  {
    image: "/29.jpg",
    title: "Smart Products & AI",
    category: "AI · Smart Technology",
    description: "Dr. Amey discusses how AI is powering the next generation of smart products.",
  },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Media</span>
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              In the <span className="text-gradient">Spotlight</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Podcasts, interviews, news features, and media appearances by Dr. Amey Pangarkar
              across India's top platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PODCASTS SECTION ─── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
              Audio & Video
            </span>
            <h2 className="text-3xl font-heading font-bold mb-4 flex items-center gap-3">
              <Mic className="w-8 h-8 text-primary" />
              Podcast Appearances
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Dr. Amey Pangarkar featured across 19+ podcast episodes, TEDx talks, and YouTube interviews
              on AI, digital marketing, and India's tech future.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {podcasts.map((podcast, i) => (
              <motion.a
                key={podcast.id}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden group hover:border-primary/40 border border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
              >
                {/* YouTube Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={`https://img.youtube.com/vi/${podcast.id}/mqdefault.jpg`}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                  {/* Channel badge */}
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                    {podcast.channel}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{podcast.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-primary text-xs font-medium">
                    <ExternalLink className="w-3 h-3" />
                    Watch on YouTube
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS ARTICLES SECTION ─── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
              Press & Features
            </span>
            <h2 className="text-3xl font-heading font-bold mb-4 flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-primary" />
              News & Media Coverage
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Dr. Amey Pangarkar featured across news platforms, summits, and industry publications
              on AI, technology, and digital innovation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl overflow-hidden group border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category badge */}
                  <div className="absolute top-2 left-2 bg-primary/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {article.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex-1">{article.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Inquiry CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="glass rounded-2xl p-12 glow-effect text-center max-w-2xl mx-auto"
          >
            <Mic className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Invite Dr. Amey to Your <span className="text-gradient">Podcast</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Looking for an AI & Digital Marketing expert for your show, summit, or publication?
              Get in touch for media collaborations and speaking requests.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Media Inquiries <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
