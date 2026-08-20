import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { servicesData } from "../../data/services";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#060B14] text-white border-t border-white/5 pt-16 pb-8 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <span className="text-xl font-black tracking-tighter text-white">
                SHAHEEN<span className="text-primary-accent">DIGITAL</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm">
              Engineering Digital Growth. We design powerful digital experiences, intelligent software, and growth strategies for ambitious businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary-accent hover:border-primary-accent hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary-accent hover:border-primary-accent hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary-accent hover:border-primary-accent hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary-accent hover:border-primary-accent hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-6">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wide">
              <li><Link to="/" className="text-slate-400 hover:text-primary-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-primary-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary-accent transition-colors">Contact</Link></li>
            </ul>
            
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mt-8 mb-4">Get In Touch</h4>
            <a href="tel:03326109729" className="text-sm font-bold text-slate-400 hover:text-primary-accent transition-colors block">0332 6109729</a>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-6">Services</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wide">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-slate-400 hover:text-primary-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-6">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">Get digital insights and agency updates in your inbox.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border border-white/10 rounded-xl h-12 px-4 text-sm text-white focus:outline-none focus:border-primary-accent transition-colors shadow-inner"
                required
              />
              <Button type="submit" className="w-full justify-between group shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                Subscribe 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            &copy; {new Date().getFullYear()} Shaheen Digital Marketing &mdash; Engineering Growth
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
