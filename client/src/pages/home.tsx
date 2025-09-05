import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('main');

  if (currentPage === 'boring') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-2xl text-black mb-8" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>the boring stuff</h1>
          
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="block text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              data-testid="privacy-link"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="block text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              data-testid="terms-link"
            >
              Terms of Service
            </button>
          </div>

          <button 
            onClick={() => setCurrentPage('main')}
            className="text-black hover:text-gray-600 transition-colors mt-8"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            data-testid="back-button"
          >
            ← back
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-3xl text-black mb-8" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>
            Privacy Policy
          </h1>
          
          <div className="text-left space-y-6">
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>
              <h2 className="text-xl text-black mb-4">Our website is hosted on Cloudflare Pages.</h2>
              
              <div className="text-base text-black space-y-4">
                <p>
                  Change by Cole is committed to protecting your privacy and ensuring the security of your personal information. 
                  This privacy policy explains how we collect, use, and protect your information when you visit our website, 
                  which is hosted on Cloudflare Pages for optimal performance and security.
                </p>
                
                <h3 className="text-lg font-bold">Information We Collect</h3>
                <p>
                  We collect minimal information to provide our services effectively. This may include information you 
                  provide directly when contacting us via email, such as your name, email address, project details, 
                  and any other information you choose to share with us about your video production needs.
                </p>
                
                <h3 className="text-lg font-bold">How We Use Your Information</h3>
                <p>
                  We use the information collected solely to respond to your inquiries, provide video production 
                  services, communicate about projects, and deliver the creative content you've requested. We do not 
                  use your information for marketing purposes without explicit consent.
                </p>
                
                <h3 className="text-lg font-bold">Data Security & Hosting</h3>
                <p>
                  Your data is protected through Cloudflare's enterprise-grade security infrastructure. We implement 
                  appropriate security measures to protect against unauthorized access, alteration, disclosure, or 
                  destruction of your personal information.
                </p>
                
                <h3 className="text-lg font-bold">Information Sharing</h3>
                <p>
                  We do not sell, trade, rent, or otherwise transfer your personal information to third parties. 
                  Your information is kept confidential and is only used to provide the video production services 
                  you've requested.
                </p>
                
                <h3 className="text-lg font-bold">Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy or how we handle your information, 
                  please contact us at change@changebycole.com.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button 
              onClick={() => setCurrentPage('boring')}
              className="text-base text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              data-testid="back-button"
            >
              ← back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-3xl text-black mb-8" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>
            Terms of Service
          </h1>
          
          <div className="text-left space-y-6">
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>
              <div className="text-base text-black space-y-4">
                <h3 className="text-lg font-bold">1. Acceptance of Terms</h3>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision 
                  of this agreement.
                </p>
                
                <h3 className="text-lg font-bold">2. Services</h3>
                <p>
                  Change by Cole provides video production services including music videos, live events, and brand 
                  content creation based in Melbourne, Australia.
                </p>
                
                <h3 className="text-lg font-bold">3. Intellectual Property</h3>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, and videos, 
                  is the property of Change by Cole and is protected by copyright and other intellectual property laws.
                </p>
                
                <h3 className="text-lg font-bold">4. User Conduct</h3>
                <p>
                  You agree not to use the website for any unlawful purpose or in any way that could damage, disable, 
                  overburden, or impair the website.
                </p>
                
                <h3 className="text-lg font-bold">5. Disclaimer</h3>
                <p>
                  The information on this website is provided on an "as is" basis. Change by Cole makes no 
                  representations or warranties regarding the accuracy or completeness of the information provided.
                </p>
                
                <h3 className="text-lg font-bold">6. Limitation of Liability</h3>
                <p>
                  Change by Cole shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages arising from your use of the website.
                </p>
                
                <h3 className="text-lg font-bold">7. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the website after 
                  changes constitutes acceptance of the new terms.
                </p>
                
                <h3 className="text-lg font-bold">8. Contact Information</h3>
                <p>
                  If you have questions about these terms, please contact us at change@changebycole.com.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button 
              onClick={() => setCurrentPage('boring')}
              className="text-base text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              data-testid="back-button"
            >
              ← back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm">
        
        {/* Main Logo/Branding - Change Logo */}
        <div className="mb-6">
          <img 
            src="/change-logo.png" 
            alt="Change logo" 
            className="w-64 h-auto mx-auto"
            data-testid="main-logo"
          />
        </div>

        {/* TICKETS */}
        <div className="mb-6">
          <h1 className="text-5xl text-black tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}>
            TICKETS
          </h1>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <a 
            href="mailto:change@changebycole.com"
            className="text-2xl text-black hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
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
            className="block text-base text-black hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            data-testid="instagram-link"
          >
            instagram
          </a>
          
          <a 
            href="https://youtube.com/changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base text-black hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            data-testid="youtube-link"
          >
            youtube
          </a>
          
          <a 
            href="https://tiktok.com/@changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base text-black hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            data-testid="tiktok-link"
          >
            tiktok
          </a>
        </div>

        {/* The boring stuff */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentPage('boring')}
            className="text-base text-black hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            data-testid="boring-stuff-link"
          >
            the boring stuff
          </button>
        </div>

        {/* Footer logo */}
        <div className="mt-12">
          <a 
            href="https://marlyg.me"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-logo-link"
          >
            <img 
              src="/Image-8a292774-f62d-40d6-8714-76f49fcc647c.gif" 
              alt="marlyg.me logo" 
              className="w-24 h-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
              data-testid="footer-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}