import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About Path2SAP Consulting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 22 years of experience in the industry, Path2SAP Consulting aims to build 
              long-term relationships with clients rather than focusing solely on transactions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach involves understanding client needs, identifying opportunities, and 
              providing tailored solutions to drive success and profitability in your logistics 
              and supply chain operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Path2SAP Consulting LLC is dedicated to helping businesses streamline their logistics 
              and supply chain operations through expert SAP consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Clock className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-foreground">22+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-muted-foreground">Successful Projects</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Target className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-foreground">EWM</div>
                  <div className="text-muted-foreground">Main Specialization</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-foreground">Long-term</div>
                  <div className="text-muted-foreground">Client Relationships</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower businesses with cutting-edge SAP solutions that transform their supply chain 
              operations, enhance efficiency, and drive sustainable growth through our deep expertise 
              in Extended Warehouse Management and comprehensive logistics optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;