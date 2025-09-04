import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitContactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-8">
              LET'S CREATE SOMETHING AMAZING
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to bring your vision to life? Let's discuss your project and explore how we can create something extraordinary together.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Melbourne, Victoria<br />Australia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                  <a 
                    href="mailto:hello@changebycole.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid="email-link"
                  >
                    hello@changebycole.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-foreground mb-6">Follow the Journey</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-secondary hover:bg-primary rounded-xl flex items-center justify-center transition-colors group"
                  data-testid="social-pinterest"
                >
                  <svg className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-secondary hover:bg-primary rounded-xl flex items-center justify-center transition-colors group"
                  data-testid="social-instagram"
                >
                  <svg className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-secondary hover:bg-primary rounded-xl flex items-center justify-center transition-colors group"
                  data-testid="social-youtube"
                >
                  <svg className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Your first name"
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Your last name"
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="project-type">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger data-testid="select-project-type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music-video">Music Video</SelectItem>
                    <SelectItem value="commercial">Commercial/Brand</SelectItem>
                    <SelectItem value="live-event">Live Event Coverage</SelectItem>
                    <SelectItem value="documentary">Documentary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger data-testid="select-budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                    <SelectItem value="30k-plus">$30,000+</SelectItem>
                    <SelectItem value="discuss">Let's discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project vision, timeline, and any specific requirements..."
                  rows={6}
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={submitContactMutation.isPending}
                data-testid="button-send-message"
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
