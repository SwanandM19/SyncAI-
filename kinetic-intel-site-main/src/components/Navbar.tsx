import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Our Story",
    path: "/our-story",
    children: [
      { label: "Company Story", path: "/our-story/company" },
      { label: "About Founder", path: "/our-story/founder" },
      { label: "Advisory", path: "/our-story/advisory" },
      { label: "Mentors", path: "/our-story/mentors" },
      { label: "Team", path: "/our-story/team" },
      { label: "Awards & Achievements", path: "/our-story/awards" },
      { label: "Books", path: "/our-story/books" },
      { label: "Media", path: "/our-story/media" },
    ],
  },
  {
    label: "What We Do",
    path: "/what-we-do",
    children: [
      { label: "AI in Digital Marketing", path: "/what-we-do/ai-digital-marketing" },
      { label: "AI Consultancy", path: "/what-we-do/ai-consultancy" },
      { label: "Customized AI Solutions", path: "/what-we-do/custom-solutions" },
      { label: "Marketing Consultancy", path: "/what-we-do/marketing" },
      { label: "Agentic AI", path: "/what-we-do/agentic-ai" },
      { label: "Automations", path: "/what-we-do/automations" },
      { label: "Robotics", path: "/what-we-do/robotics" },
      { label: "AR Solutions", path: "/what-we-do/ar-solutions" },
    ],
  },
  {
    label: "Trainings",
    path: "/trainings",
    children: [
      { label: "Open Workshops", path: "/trainings/open-workshops" },
      { label: "Corporate Workshops", path: "/trainings/corporate" },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SyncAI Consultancy" className="h-10 w-auto rounded" />
          <span className="hidden sm:block text-lg font-heading font-bold text-gradient">
            SyncAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to={item.path}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 glass-strong rounded-lg py-2 shadow-2xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
