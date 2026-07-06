import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  ArrowLeft,
  ClipboardCheck,
  PhoneCall,
  CalendarCheck,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logoColor from "@/assets/logo-color.svg";

const steps = [
  {
    icon: ClipboardCheck,
    title: "We review your request",
    desc: "Our team looks over the details you shared.",
  },
  {
    icon: PhoneCall,
    title: "We call you back",
    desc: "Usually within a few hours during business hours.",
  },
  {
    icon: CalendarCheck,
    title: "We schedule your service",
    desc: "We agree on a time that works for you.",
  },
];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4">
      {/* Background image with overlay — same treatment as the site Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/85 to-foreground/80" />
      </div>

      {/* White content card floating over the hero background */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-2xl bg-card border border-border/50 shadow-2xl p-8 md:p-12 text-center space-y-7 animate-fade-in">
          <img
            src={logoColor}
            alt="Hands-Hands"
            className="h-11 md:h-12 w-auto mx-auto"
          />

          <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <CheckCircle2 className="h-12 w-12" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Thank{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                You!
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
              Your request was received. Our team will contact you shortly to
              confirm the details and schedule your service.
            </p>
          </div>

          {/* Primary CTA (call) + secondary (home) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" asChild className="group shadow-md w-full sm:w-auto">
              <a href="tel:+17202557466">
                <Phone className="mr-2 h-4 w-4" />
                Call +1 (720) 255-7466
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* What happens next */}
          <div className="pt-4 border-t border-border/60">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-6 mb-5">
              What happens next
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-muted/50 border border-border/60 p-4 text-left transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reassurance / contact line */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-muted-foreground text-[13px] pt-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Colorado &amp; surrounding areas
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" />
              handshands.contact@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" />
              24/7 emergency service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
