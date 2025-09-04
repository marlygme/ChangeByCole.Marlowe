export default function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Change by Cole</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating compelling visual narratives that connect, inspire, and drive results for artists and brands across Australia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-youtube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3708a1.7348 1.7348 0 00-1.4596.8617L16.4018 7.8516a.7813.7813 0 01-1.3164-.3407L12.5586 1.2785a.7813.7813 0 00-1.4141 0L8.6172 7.5117a.7812.7812 0 01-1.3164.3407L4.8438 5.2325a1.7348 1.7348 0 00-2.5352 1.2422L.9844 9.3711a.7812.7812 0 00-.1953.5273V15.8125a2.0313 2.0313 0 001.5742 1.9844L11.25 19.4766v2.3437c0 .4336.3515.7813.7813.7813S12.8125 22.2539 12.8125 21.8203V19.4766l8.8906-1.6797A2.0313 2.0313 0 0023.3438 15.8125V9.8984a.7812.7812 0 00-.1953-.5273z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('#home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#work')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Music Videos</span></li>
              <li><span className="text-muted-foreground">Brand Content</span></li>
              <li><span className="text-muted-foreground">Live Events</span></li>
              <li><span className="text-muted-foreground">Post-Production</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Change by Cole. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
