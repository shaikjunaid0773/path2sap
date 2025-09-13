import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, TrendingUp, Database, GraduationCap, BarChart3, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "SAP Process Design & Business Process Re-engineering",
      description: "Analyzing and redesigning business processes to enhance efficiency and optimize your operations."
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Optimization",
      description: "Identifying gaps and implementing solutions in warehousing, procurement, and logistics."
    },
    {
      icon: Database,
      title: "SAP Module Expertise",
      description: "Specialization in SAP S/4HANA, MM, WM, EWM, LE, Shipping & Transportation Management."
    },
    {
      icon: GraduationCap,
      title: "Training & Documentation",
      description: "Providing end-user training and creating training materials for smooth SAP system adoption."
    },
    {
      icon: BarChart3,
      title: "Business Planning Support",
      description: "Assisting with performance management, forecasts, and strategic marketing initiatives."
    },
    {
      icon: Truck,
      title: "Extended Warehouse Management",
      description: "Our main specialty - comprehensive EWM solutions for advanced warehouse operations."
    }
  ];

  return (
    <section id="services" className="py-20" style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive SAP consulting services tailored to optimize your supply chain and warehouse operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              SAP Modules We Specialize In
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">S/4HANA</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">MM</div>
                <div className="text-sm text-muted-foreground">Materials Management</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">WM</div>
                <div className="text-sm text-muted-foreground">Warehouse Management</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">EWM</div>
                <div className="text-sm text-muted-foreground">Extended Warehouse Mgmt</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">LE</div>
                <div className="text-sm text-muted-foreground">Logistics Execution</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary">Shipping</div>
                <div className="text-sm text-muted-foreground">Transportation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;