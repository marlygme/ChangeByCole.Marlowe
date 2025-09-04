import { Video, Music, Package } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: "Music Video Production",
      description: "From concept development to final edit, creating visually stunning music videos that amplify your sound.",
      features: ["Concept Development", "Full Production Crew", "Post-Production"],
      color: "primary"
    },
    {
      icon: Music,
      title: "Live Event Coverage",
      description: "Professional documentation of concerts, festivals, and special events with dynamic multi-camera setups.",
      features: ["Multi-Camera Setup", "Live Streaming", "Event Highlights"],
      color: "accent"
    },
    {
      icon: Package,
      title: "Brand Content Creation",
      description: "Strategic content creation for brands looking to connect authentically with their audience.",
      features: ["Brand Strategy", "Social Content", "Campaign Videos"],
      color: "muted"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-6">SERVICES</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video production services tailored to bring your creative vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="glass-effect p-8 rounded-2xl hover:bg-accent/10 transition-all duration-300 group"
                data-testid={`service-${index}`}
              >
                <div className={`w-16 h-16 bg-${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-8 h-8 text-${service.color}-foreground`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center" data-testid={`feature-${index}-${featureIndex}`}>
                      <span className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
