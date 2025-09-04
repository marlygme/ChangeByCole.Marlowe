export default function AboutSection() {
  const skills = [
    "Video Production",
    "Music Videos", 
    "Live Events",
    "Post-Production",
    "Creative Direction",
    "Brand Content"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-8">
              Creative Vision Meets Technical Excellence
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Based in Melbourne, I transform ideas into compelling visual narratives that resonate with audiences and drive meaningful connections.
              </p>
              <p>
                With years of experience in video production, music video direction, and live event coverage, I bring a unique perspective that blends artistic vision with commercial viability.
              </p>
              <p>
                My approach focuses on authentic storytelling, innovative cinematography, and creating experiences that leave lasting impressions.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3" data-testid={`skill-${index}`}>
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait of a creative videographer in their studio environment"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="text-2xl font-black text-primary-foreground">5+</div>
                <div className="text-sm font-semibold text-primary-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
