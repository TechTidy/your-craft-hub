import { Clock, Wrench, MapPin, BadgeDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Same-day service and 24/7 availability for urgent water damage and emergencies.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description:
      "Industrial-grade steam cleaning and water extraction tools for deep, lasting results.",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description:
      "A trusted Colorado team that knows the area and treats your home like our own.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "Clear, upfront quotes with no hidden fees—so you always know what to expect.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Hands-Hands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What makes us the right call for your cleaning and restoration needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
