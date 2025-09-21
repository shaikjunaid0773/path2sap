import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Path2SAP Consulting
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Path2SAP is a consulting organization to provide excellence in SAP experts to help in your project success with focus on Supply Chain with to keep your Inventory Low and Warehouse optimization as well as provide guidance in Transportation Management requirements.
          </p>
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