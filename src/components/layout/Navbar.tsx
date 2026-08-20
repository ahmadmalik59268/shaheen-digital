import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { servicesData } from "../../data/services";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", isDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[var(--color-surface)]/95 backdrop-blur-md border-[var(--color-border)] py-4 shadow-sm"
          : "bg-[var(--color-surface)] border-[var(--color-border)] py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tighter text-[var(--color-heading)]">
            SHAHEEN<span className="text-[var(--color-primary)]">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.isDropdown && setServicesOpen(true)}
              onMouseLeave={() => link.isDropdown && setServicesOpen(false)}
            >
              <Link
                to={link.path}
                className="flex items-center gap-1 text-sm font-bold tracking-widest uppercase text-[var(--color-heading)] hover:text-[var(--color-primary)] transition-colors py-2"
              >
                {link.name}
                {link.isDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Mega Menu Dropdown */}
              {link.isDropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 mt-2"
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="flex items-start gap-3 p-3 hover:bg-[var(--color-background)] rounded-xl transition-colors group"
                        >
                          <div className="p-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/30 transition-colors">
                            <service.icon className="w-5 h-5 text-[var(--color-text)] group-hover:text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-[var(--color-heading)] font-bold text-sm mb-1">{service.title}</div>
                            <div className="text-[var(--color-text)] text-xs line-clamp-1">{service.shortDesc}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 mt-4 pt-4 border-t border-[var(--color-border)] flex justify-between items-center">
                        <span className="text-sm text-[var(--color-text)]">Looking for a tailored solution?</span>
                        <Link to="/services" className="text-sm text-[var(--color-primary)] font-bold flex items-center gap-1 hover:text-[var(--color-secondary)] transition-colors">
                          View all services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button href="/contact" size="sm" className="hidden md:flex">
            Start a Project
          </Button>
          <button
            className="lg:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-heading)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-border)] overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="text-lg font-black uppercase text-[var(--color-heading)] tracking-widest block"
                  >
                    {link.name}
                  </Link>
                  {link.isDropdown && (
                    <div className="mt-4 pl-4 border-l border-[var(--color-border)] flex flex-col gap-4">
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="text-[var(--color-text)] font-bold text-sm uppercase tracking-wide hover:text-[var(--color-primary)]"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-[var(--color-border)]">
                <Button href="/contact" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

