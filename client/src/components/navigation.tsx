import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveNav = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 200) {
          current = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActiveNav);
    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('#home')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              data-testid="logo-button"
            >
              Change by Cole
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: '#home', label: 'Home' },
                { href: '#work', label: 'Work' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`transition-colors duration-200 font-medium ${
                    activeSection === href.slice(1)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid={`nav-${label.toLowerCase()}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring rounded-lg p-2"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg">
            {[
              { href: '#home', label: 'Home' },
              { href: '#work', label: 'Work' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid={`mobile-nav-${label.toLowerCase()}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
