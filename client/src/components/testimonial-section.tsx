import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Lead Vocalist, The Echoes",
      quote: "Cole's vision transformed our album launch. The music video exceeded every expectation and perfectly captured our sound visually.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sarah Mitchell", 
      role: "Event Director, Pulse Festival",
      quote: "Professional, creative, and delivered exactly what we envisioned. The festival coverage was phenomenal.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Rodriguez",
      role: "Brand Manager, Sonic Co.",
      quote: "Incredible attention to detail and creative problem-solving. Our brand video is performing amazingly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-6">CLIENT LOVE</h2>
          <p className="text-xl text-muted-foreground">What collaborators say about working with Change by Cole</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="glass-effect p-8 rounded-2xl"
              data-testid={`testimonial-${index}`}
            >
              <div className="mb-6">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`Professional headshot of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
