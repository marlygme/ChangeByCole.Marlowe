import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('main');

  // Create the minimal original design structure
  const MainPage = () => (
    <div 
      className="bg-white relative overflow-hidden"
      style={{ 
        width: '1024px',
        height: '672px',
        margin: '0 auto'
      }}
    >
      {/* Main GIF/Animation - positioned exactly as in original */}
      <div 
        className="absolute"
        style={{
          left: '333.02px',
          top: '13.04px',
          width: '371.97px',
          height: '122.2px',
          zIndex: 301
        }}
      >
        <img 
          src="/img/6666f57326be89003f9494ae/5684925/Image-8a292774-f62d-40d6-8714-76f49fcc647c.gif"
          alt="Change by Cole"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            // Fallback if GIF doesn't load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Contact Link */}
      <div 
        className="absolute"
        style={{
          left: '452.33px',
          top: '150.49px',
          width: '119.35px',
          height: '20px',
          zIndex: 303
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '20px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <a 
            href="mailto:change@changebycole.com"
            className="text-black no-underline"
            style={{
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="contact-email"
          >
            contact
          </a>
        </h1>
      </div>

      {/* Instagram Link */}
      <div 
        className="absolute"
        style={{
          left: '479.88px',
          top: '192.04px',
          width: '64.25px',
          height: '20px',
          zIndex: 304
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <a 
            href="http://instagram.com/changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline"
            style={{
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="instagram-link"
          >
            instagram
          </a>
        </h1>
      </div>

      {/* YouTube Link */}
      <div 
        className="absolute"
        style={{
          left: '485.15px',
          top: '226.53px',
          width: '53.69px',
          height: '20px',
          zIndex: 305
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <a 
            href="https://www.youtube.com/@changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline"
            style={{
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="youtube-link"
          >
            youtube
          </a>
        </h1>
      </div>

      {/* TikTok Link */}
      <div 
        className="absolute"
        style={{
          left: '488px',
          top: '260px',
          width: '53.69px',
          height: '20px',
          zIndex: 306
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <a 
            href="https://www.tiktok.com/@changebycole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline"
            style={{
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="tiktok-link"
          >
            tiktok
          </a>
        </h1>
      </div>

      {/* Link to boring stuff page */}
      <div 
        className="absolute"
        style={{
          left: '20px',
          bottom: '20px',
          zIndex: 307
        }}
      >
        <button 
          onClick={() => setCurrentPage('boring')}
          className="text-black no-underline"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            background: 'none',
            border: 'none',
            padding: 0,
            color: 'rgba(0, 0, 0, 1)',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
          onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
          data-testid="boring-stuff-link"
        >
          the mind numbing stuff
        </button>
      </div>
    </div>
  );

  const BoringStuffPage = () => (
    <div 
      className="bg-white relative overflow-hidden"
      style={{ 
        width: '1024px',
        height: '672px',
        margin: '0 auto'
      }}
    >
      {/* Fixed logo/image - positioned exactly as in original */}
      <div 
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: '112px',
          height: '111px',
          marginLeft: '-56px',
          marginTop: '40.83px',
          zIndex: 304
        }}
      >
        <img 
          src="/img/656c88fa5dd68c0052737b6c/4831496/Image-15a04d6a-30bf-4102-b324-90edfad4e807.gif"
          alt="Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Title */}
      <div 
        className="absolute"
        style={{
          left: '418.57px',
          top: '56px',
          width: '186.87px',
          height: '19px',
          zIndex: 303
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '18px',
            paddingTop: 0,
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}
        >
          the mind numbing stuff
        </h1>
      </div>

      {/* Privacy Policy Link */}
      <div 
        className="absolute"
        style={{
          left: '474.76px',
          top: '124px',
          width: '74.48px',
          height: '12px',
          zIndex: 301
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '12px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <button 
            onClick={() => setCurrentPage('privacy')}
            className="text-black no-underline"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="privacy-policy-link"
          >
            privacy policy
          </button>
        </h1>
      </div>

      {/* Terms of Service Link */}
      <div 
        className="absolute"
        style={{
          left: '467.8px',
          top: '188.79px',
          width: '88.4px',
          height: '12px',
          zIndex: 302
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '12px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <button 
            onClick={() => setCurrentPage('terms')}
            className="text-black no-underline"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="terms-service-link"
          >
            terms of service
          </button>
        </h1>
      </div>

      {/* Back to main link */}
      <div 
        className="absolute"
        style={{
          left: '20px',
          bottom: '20px',
          zIndex: 307
        }}
      >
        <button 
          onClick={() => setCurrentPage('main')}
          className="text-black no-underline"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            background: 'none',
            border: 'none',
            padding: 0,
            color: 'rgba(0, 0, 0, 1)',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
          onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
          data-testid="back-to-main"
        >
          ← back
        </button>
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div 
      className="bg-white relative overflow-auto"
      style={{ 
        width: '1024px',
        height: '100vh',
        margin: '0 auto'
      }}
    >
      {/* Back link positioned as in original */}
      <div 
        className="absolute"
        style={{
          left: '25px',
          top: '25px',
          width: '111px',
          height: '31px',
          zIndex: 314
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '31px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <button 
            onClick={() => setCurrentPage('boring')}
            className="text-black no-underline"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="back-from-privacy"
          >
            the boring stuff
          </button>
        </h1>
      </div>

      {/* Title */}
      <div 
        className="absolute"
        style={{
          left: '272px',
          top: '20px',
          width: '480px',
          height: '28px',
          zIndex: 301
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '47px',
            lineHeight: '18px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}
        >
          Privacy Policy
        </h1>
      </div>

      {/* Content area */}
      <div 
        className="absolute"
        style={{
          left: '280px',
          top: '82px',
          width: '480px',
          right: '24px',
          zIndex: 302
        }}
      >
        <div style={{
          fontFamily: 'custom_154210, Arial, sans-serif',
          fontSize: '12px',
          color: 'rgba(0, 0, 0, 1)',
          lineHeight: '18px'
        }}>
          <p className="mb-4">This website no longer uses Readymag hosting services.</p>
          <p className="mb-4">We collect minimal information and respect your privacy. Any contact information you provide through our contact methods is used solely for business communication purposes.</p>
          <p className="mb-4">We do not share, sell, or distribute your personal information to third parties.</p>
        </div>
      </div>
    </div>
  );

  const TermsPage = () => (
    <div 
      className="bg-white relative overflow-auto"
      style={{ 
        width: '1024px',
        height: '100vh',
        margin: '0 auto'
      }}
    >
      {/* Back link positioned as in original */}
      <div 
        className="absolute"
        style={{
          left: '25px',
          top: '25px',
          width: '111px',
          height: '31px',
          zIndex: 304
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '31px',
            paddingTop: 0,
            margin: 0
          }}
        >
          <button 
            onClick={() => setCurrentPage('boring')}
            className="text-black no-underline"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'rgba(0, 0, 0, 1)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 0.6)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(0, 0, 0, 1)'}
            data-testid="back-from-terms"
          >
            the boring stuff
          </button>
        </h1>
      </div>

      {/* Title */}
      <div 
        className="absolute"
        style={{
          left: '272px',
          top: '23px',
          width: '480px',
          height: '41px',
          zIndex: 303
        }}
      >
        <h1 
          className="text-center"
          style={{
            fontFamily: 'custom_154210, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '31px',
            lineHeight: '31px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}
        >
          Terms of Service
        </h1>
      </div>

      {/* Content area */}
      <div 
        className="absolute"
        style={{
          left: '24px',
          top: '82px',
          width: '976px',
          right: '24px',
          zIndex: 302
        }}
      >
        <div style={{
          fontFamily: 'custom_154210, Arial, sans-serif',
          fontSize: '12px',
          color: 'rgba(0, 0, 0, 1)',
          lineHeight: '18px'
        }}>
          <p className="mb-4">By using this website, you agree to these terms of service.</p>
          <p className="mb-4">This is an independent website no longer hosted by Readymag.</p>
          <p className="mb-4">All content and creative work shown belongs to Change by Cole.</p>
        </div>
      </div>
    </div>
  );

  // Router logic
  const renderPage = () => {
    switch (currentPage) {
      case 'boring':
        return <BoringStuffPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif',
      color: '#282828'
    }}>
      {renderPage()}
    </div>
  );
}
