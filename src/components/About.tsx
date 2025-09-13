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
              At Path2SAP Consulting LLC, we empower organizations to achieve operational excellence by optimizing their SAP supply chain landscape. Our expertise lies in SAP Extended Warehouse Management (EWM), Materials Management (MM), and Transportation Management (TM)—ensuring seamless integration and sustainable solutions tailored to your business.<br /><br />
              We Focus on:
            </p>
            <ul className="list-disc pl-6 text-lg text-muted-foreground leading-relaxed space-y-2">
              <li>Business process design and global blueprint rollouts to local warehouses</li>
              <li>Identifying gaps and reducing custom development to maintain a clean core</li>
              <li>Prototyping, proof of concepts, and user training to drive adoption</li>
              <li>Developing training materials for smooth knowledge transfer</li>
              <li>Integration testing across supply chain modules with Finance &amp; Controlling</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <Clock className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-foreground">22+</div>
                  <div className="text-muted-foreground">Years in SAP Consulting & Implementation</div>
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