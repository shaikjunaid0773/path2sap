import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" style={{
      background: 'var(--gradient-hero)'
    }}>
        <div className="absolute inset-0 bg-background/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Driving Supply Chain Excellence with
                <span className="text-primary block">SAP</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We specialize in helping businesses streamline logistics and supply chain operations through expert SAP consulting services. With over 22 years of hands-on experience, we deliver sustainable solutions that adapt to your business needs today and prepare you for tomorrow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8 py-6">
                Our Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">22+ Years of Consulting Excellence</h3>
              <p className="text-muted-foreground">Industry-leading expertise in SAP supply chain solutions</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialized Focus</h3>
              <p className="text-muted-foreground">Extended Warehouse Management and logistics optimization</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border sm:col-span-2">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Long-term Partnerships</h3>
              <p className="text-muted-foreground">Building lasting relationships focused on your success and profitability</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;