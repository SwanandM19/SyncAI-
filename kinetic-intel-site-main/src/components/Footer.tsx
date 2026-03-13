import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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
              {["Our Story", "What We Do", "Trainings", "Case Studies", "Blogs", "Contact Us"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-colors">
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
              {["AI Consultancy", "Digital Marketing AI", "Agentic AI", "Automations", "Robotics"].map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-pointer">{s}</li>
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
  );
};

export default Footer;
