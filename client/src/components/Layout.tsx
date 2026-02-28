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
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 90479 33484</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> graceedutech26@gmail.com</span>
            <span className="flex items-center gap-2 font-bold text-secondary ml-4">30+ Years of Combined Experience</span>
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
              <img src="/logo.jpg" alt="Grace Edutech Logo" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight">Grace Edutech</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">A Unit of Grace Associates</span>
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
              className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-slate-900">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-500 hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${isActive(link.href) ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contact Info</p>
                <div className="space-y-4">
                  <a href="tel:+919047933484" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>+91 90479 33484</span>
                  </a>
                  <a href="mailto:graceedutech26@gmail.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span>graceedutech26@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Grace Edutech Logo" className="w-12 h-12 object-contain rounded-md bg-white p-1" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Grace Edutech</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-tighter uppercase">A Unit of Grace Associates</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner in accounting, taxation, and compliance services with 30+ years of combined experience. Since 2009.
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

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>GST & Income Tax Filing</li>
              <li>Company Registration (LLP / Pvt. Ltd.)</li>
              <li>NET / SET / GATE Coaching</li>
              <li>Spoken English Training</li>
              <li>Accounting & Tally Training</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>graceedutech26@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91 90479 33484</span>
              </li>
              <li className="flex gap-3 text-secondary font-bold">
                www.graceedutech.com
              </li>
            </ul>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Grace Edutech. All rights reserved. Powered by <a href="https://opsminttech.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">opsminttech.com</a>
        </div>
      </footer>
    </div>
  );
}
