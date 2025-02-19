// "use client";

import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  programs: [
    { name: "Vidhya Bhagya", href: "/programs/vidhya-bhagya" },
    { name: "Bala Sangama", href: "/programs/bala-sangama" },
    { name: "Arogya Bhagya", href: "/programs/arogya-bhagya" },
    { name: "Swavalambana", href: "/programs/swavalambana" },
    { name: "Vidhya Vahini", href: "/programs/vidhya-vahini" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Updates", href: "/updates" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8" />
              <span className="text-2xl font-bold text-primary">KSS</span>
            </div>
            <p className="text-white/80">
              Transforming lives through education, healthcare, and empowerment
              since 1999.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <p className="text-white/80">
                  237, 2nd Cross Road, Pai Layout
                  <br />
                  Mahadevapura, Bengaluru
                  <br />
                  Karnataka - 560016
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-white"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a
                  href="mailto:info@kss.org"
                  className="text-white/80 hover:text-white"
                >
                  info@kss.org
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for updates on our activities and
              impact.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-primary text-white placeholder:text-white/60"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/80 hover:text-secondary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Keshava Seva Samithi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
