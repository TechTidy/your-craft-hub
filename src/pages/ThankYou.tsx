import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ThankYou = () => {
  useEffect(() => {
    // Fire the Google Ads / GA conversion event on mount, only if gtag is loaded.
    // TODO: Replace 'AW-XXXXXXXXX/XXXXXXX' with the real Google Ads conversion ID
    // (Conversion action -> "Tag setup" -> send_to value) before launching the campaign.
    window.gtag?.("event", "conversion", {
      send_to: "AW-XXXXXXXXX/XXXXXXX",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted/30 px-4 py-20">
      <div className="container mx-auto max-w-xl">
        <Card className="shadow-lg">
          <CardContent className="p-8 md:p-10 text-center space-y-6">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold">
                Thank you! Your request was received
              </h1>
              <p className="text-muted-foreground text-lg">
                Our team will contact you shortly. If your request is urgent, feel
                free to call us right now.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="tel:+17202557466">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +1 (720) 255-7466
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThankYou;
