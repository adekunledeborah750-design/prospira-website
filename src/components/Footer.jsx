import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#233038] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="font-headline font-black text-3xl tracking-tighter mb-6 block">
              PROSPIRA
            </Link>
            <p className="text-white/60 mb-8 max-w-xs leading-relaxed">
              A premium digital agency specializing in high-performance websites, applications, and future-forward digital products.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Agency</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white/60 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">
              Stay updated with our latest insights and projects.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors text-white placeholder-white/40 text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center shrink-0"
              >
                {subscribed ? <Check size={20} /> : <ArrowRight size={20} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-primary mt-2">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Team Prospira. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
