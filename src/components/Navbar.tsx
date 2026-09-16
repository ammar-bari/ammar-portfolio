import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Workshops", href: "#workshops" },
  { label: "Resume", href: "#resume" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-mono text-lg text-primary text-glow-cyan">
          {"<"}<span className="text-foreground">ammar</span>{"/>"}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span>
                {" "}{item.label}
              </a>
            </li>
          ))}
        </ul>


        {/* Mobile toggle */}
        <button type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation" className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary">{">"}</span> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
