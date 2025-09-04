import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type PortfolioItem } from "@shared/schema";

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  const categories = [
    { id: "all", label: "All Work" },
    { id: "video", label: "Video" },
    { id: "music-video", label: "Music Videos" },
    { id: "live", label: "Live Shows" }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (isLoading) {
    return (
      <section id="work" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading portfolio...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-gradient mb-6">FEATURED WORK</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of visual narratives, music videos, and live experiences that push creative boundaries.
          </p>
        </div>

        {/* Work Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
                data-testid={`category-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-xl bg-secondary">
                <img 
                  src={item.imageUrl}
                  alt={item.description}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${
                        item.category === 'music-video' 
                          ? 'bg-accent text-accent-foreground'
                          : item.category === 'video'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-destructive text-destructive-foreground'
                      }`}>
                        {item.category === 'music-video' ? 'Music Video' : 
                         item.category === 'video' ? 'Documentary' : 'Live Event'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            data-testid="button-start-project"
          >
            Start Your Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
