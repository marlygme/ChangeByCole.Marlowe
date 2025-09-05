import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('main');

  if (currentPage === 'boring') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-2xl font-bold text-black mb-8">the boring stuff</h1>
          
          <div className="space-y-4">
            <a 
              href="mailto:change@changebycole.com" 
              className="block text-black hover:text-gray-600 transition-colors"
              data-testid="contact-email"
            >
              Privacy Policy
            </a>
            <a 
              href="mailto:change@changebycole.com" 
              className="block text-black hover:text-gray-600 transition-colors"
              data-testid="terms-link"
            >
              Terms of Service
            </a>
          </div>

          <button 
            onClick={() => setCurrentPage('main')}
            className="text-black hover:text-gray-600 transition-colors mt-8"
            data-testid="back-button"
          >
            ← back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm">
        
        {/* Main Logo/Branding - Using the GIF animation from original */}
        <div className="mb-8">
          <img 
            src="/Image-86f58a28-ea6e-474d-a4e6-e8b7f1f2a98a.gif" 
            alt="Change logo" 
            className="w-32 h-auto mx-auto"
            data-testid="main-logo"
          />
        </div>

        {/* TICKETS */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black tracking-wider">
            TICKETS
          </h1>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <a 
            href="mailto:change@changebycole.com"
            className="text-xl text-black hover:text-gray-600 transition-colors font-medium"
            data-testid="contact-email"
          >
            contact
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-3 mb-6">
          <a 
            href="https://instagram.com/changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-black hover:text-gray-600 transition-colors"
            data-testid="instagram-link"
          >
            instagram
          </a>
          
          <a 
            href="https://youtube.com/changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-black hover:text-gray-600 transition-colors"
            data-testid="youtube-link"
          >
            youtube
          </a>
          
          <a 
            href="https://tiktok.com/@changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-black hover:text-gray-600 transition-colors"
            data-testid="tiktok-link"
          >
            tiktok
          </a>
        </div>

        {/* The boring stuff */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentPage('boring')}
            className="text-lg text-black hover:text-gray-600 transition-colors"
            data-testid="boring-stuff-link"
          >
            the boring stuff
          </button>
        </div>

        {/* Footer logo */}
        <div className="mt-12">
          <img 
            src="/Image-8a292774-f62d-40d6-8714-76f49fcc647c.gif" 
            alt="Cole logo" 
            className="w-8 h-auto mx-auto opacity-70"
            data-testid="footer-logo"
          />
        </div>
      </div>
    </div>
  );
}