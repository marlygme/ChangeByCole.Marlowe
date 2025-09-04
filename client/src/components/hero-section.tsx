import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="video-container w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Creative video production setup with professional lighting and camera equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gradient mb-6 tracking-tight">
            CHANGE
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8">
            BY COLE
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
            Visual storyteller crafting compelling narratives through video, music, and live experiences in Melbourne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScrollToWork}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={handleScrollToContact}
              className="border border-border hover:bg-accent/10 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={handleScrollToWork}
          className="w-6 h-10 border border-muted rounded-full flex justify-center cursor-pointer"
          data-testid="scroll-indicator"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  );
}
