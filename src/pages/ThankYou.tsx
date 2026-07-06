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
import logoWhite from "@/assets/logo-white.svg";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background image with overlay — same treatment as the site Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <img
            src={logoWhite}
            alt="Hands-Hands"
            className="h-12 md:h-14 w-auto mx-auto"
          />

          <div className="inline-flex p-5 rounded-full bg-primary/15 ring-1 ring-primary/30 backdrop-blur-sm">
            <CheckCircle2 className="h-14 w-14 text-primary" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Thank{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                You!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
              Your request was received. Our team will contact you shortly to
              confirm the details and schedule your service.
            </p>
          </div>

          {/* Primary CTA (call) + secondary (home) — same button styles as Hero */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="group shadow-lg w-full sm:w-auto">
              <a href="tel:+17202557466">
                <Phone className="mr-2 h-4 w-4" />
                Call +1 (720) 255-7466
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent text-white border-white/70 hover:bg-white hover:text-foreground"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* What happens next */}
          <div className="pt-6">
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] mb-5">
              What happens next
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 text-left transition-colors hover:bg-white/[0.14]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold">
                        {index + 1}
                      </span>
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reassurance / contact line */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70 text-sm pt-2">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Colorado &amp; surrounding areas
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              handshands.contact@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
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
