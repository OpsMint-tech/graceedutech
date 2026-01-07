import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/practical-services", label: "Practical Services" },
    { href: "/why-us", label: "Why Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 96552 14330</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@graceassociates.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight">Grace Associates</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">ACCOUNTING & COMPLIANCE</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-base font-semibold transition-colors ${isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center text-white font-bold">G</div>
              <span className="text-xl font-bold text-white">Grace Associates</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted partner in accounting, compliance, and professional training since 2009. Committed to excellence and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/courses" className="hover:text-secondary transition-colors">Training Courses</Link></li>
              <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Expertise</h3>
            <ul className="space-y-3 text-sm">
              <li>GST Filing & Registration</li>
              <li>Income Tax Compliance</li>
              <li>Corporate Returns</li>
              <li>Practical Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>123 Business Park, Main Avenue,<br />Coimbatore, Tamil Nadu 641001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91 96552 14330</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@graceassociates.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Grace Associates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
