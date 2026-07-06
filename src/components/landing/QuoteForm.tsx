import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { sendContactSMS } from "@/utils/api";
import { SMS_OPT_IN_TEXT } from "./data";

/**
 * Functional "Request Your Free Quote" card for the landing hero.
 *
 * Visual layout uses the mockup's exact `.hero-form-card` / `.form-field`
 * classes (see landing.css). The submit logic mirrors Contact.tsx: same
 * Cloudflare Turnstile integration, same backend contract (sendContactSMS),
 * and the same required SMS opt-in consent.
 */

const TURNSTILE_TEST_SITE_KEYS = {
  pass: "1x00000000000000000000AA",
  fail: "2x00000000000000000000AB",
  interactive: "3x00000000000000000000FF",
} as const;

/** Service option whose selection flags the request as urgent. */
const EMERGENCY_SERVICE = "Emergency Water Extraction";

const SERVICE_OPTIONS = [
  "Carpet Cleaning",
  "Emergency Water Extraction",
  "Both Services",
  "Not sure — I need an assessment",
] as const;

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Number must have at least 10 digits" })
    .max(15, { message: "Number must be less than 15 digits" })
    .regex(/^[0-9+\s()-]+$/, { message: "Invalid phone format" }),
  service: z
    .string()
    .trim()
    .min(1, { message: "Please select a service" }),
  zipCode: z
    .string()
    .trim()
    .min(5, { message: "Zip code must be at least 5 characters" })
    .max(10, { message: "Zip code must be less than 10 characters" })
    .regex(/^[0-9-]+$/, { message: "Invalid zip code format" }),
  city: z
    .string()
    .trim()
    .max(100, { message: "City must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  smsOptIn: z.boolean().refine((value) => value === true, {
    message: "You must explicitly opt in to receive SMS messages.",
  }),
});

type QuoteFormValues = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const useTurnstileTestKeys = import.meta.env.VITE_TURNSTILE_USE_TEST_KEYS === "true";
  const turnstileTestBehavior = import.meta.env.VITE_TURNSTILE_TEST_BEHAVIOR || "pass";
  const turnstileSiteKey = useTurnstileTestKeys
    ? TURNSTILE_TEST_SITE_KEYS[
        turnstileTestBehavior as keyof typeof TURNSTILE_TEST_SITE_KEYS
      ] || TURNSTILE_TEST_SITE_KEYS.pass
    : import.meta.env.VITE_TURNSTILE_SITE_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      zipCode: "",
      city: "",
      smsOptIn: false,
    },
  });

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainerRef.current) {
      return;
    }

    let cancelled = false;
    let scriptToClean: HTMLScriptElement | null = null;

    const renderTurnstile = () => {
      if (
        cancelled ||
        !window.turnstile ||
        !turnstileContainerRef.current ||
        turnstileWidgetIdRef.current
      ) {
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: "auto",
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileReady(true);
          setTurnstileError("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileReady(false);
          setTurnstileError("Captcha expired. Please verify again.");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileReady(false);
          setTurnstileError("Captcha could not be verified. Please try again.");
        },
      });
    };

    const existingScript = document.getElementById("cf-turnstile-script") as HTMLScriptElement | null;

    if (window.turnstile) {
      renderTurnstile();
    } else if (existingScript) {
      existingScript.addEventListener("load", renderTurnstile);
    } else {
      const script = document.createElement("script");
      script.id = "cf-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", renderTurnstile);
      document.head.appendChild(script);
      scriptToClean = script;
    }

    return () => {
      cancelled = true;

      if (window.turnstile && turnstileWidgetIdRef.current) {
        window.turnstile.remove?.(turnstileWidgetIdRef.current);
      }

      if (existingScript) {
        existingScript.removeEventListener("load", renderTurnstile);
      }

      if (scriptToClean) {
        scriptToClean.removeEventListener("load", renderTurnstile);
      }

      turnstileWidgetIdRef.current = null;
    };
  }, [turnstileSiteKey]);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileReady(false);

    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  const onSubmit = async (values: QuoteFormValues) => {
    if (!turnstileSiteKey) {
      toast({
        title: "Captcha configuration missing",
        description: "Set VITE_TURNSTILE_SITE_KEY to enable the quote form.",
        variant: "destructive",
      });
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Please complete the captcha before requesting your quote.");
      return;
    }

    const city = values.city?.trim() || "Not provided";
    const message = `Service: ${values.service}. City: ${city}. Quote request from website.`;
    const urgent = values.service === EMERGENCY_SERVICE;

    setIsSubmitting(true);

    try {
      const result = await sendContactSMS({
        name: values.name,
        phone: values.phone,
        zipCode: values.zipCode,
        message,
        urgent,
        smsOptIn: values.smsOptIn,
        turnstileToken,
      });

      if (result.success) {
        toast({
          title: "Quote request sent successfully",
          description: "We will contact you soon. Thank you!",
          variant: "default",
        });

        reset();
        setTurnstileError("");
        resetTurnstile();
      } else {
        let errorDescription = result.error || "Please try again later.";

        if (
          result.error?.includes("Too many requests") ||
          result.error?.includes("Demasiadas solicitudes")
        ) {
          errorDescription = "You have reached the request limit. Please try again in 24 hours.";
        } else if (
          result.error?.includes("temporarily unavailable") ||
          result.error?.includes("temporalmente no disponible")
        ) {
          errorDescription = "Service temporarily unavailable. Please try again in a few minutes.";
        } else if (
          result.error?.toLowerCase().includes("captcha") ||
          result.error?.toLowerCase().includes("turnstile")
        ) {
          errorDescription = "Captcha verification failed. Please try again.";
        }

        toast({
          title: "Error sending quote request",
          description: errorDescription,
          variant: "destructive",
        });

        resetTurnstile();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Unexpected error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });

      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero-form-card">
      <h3>Request Your Free Quote</h3>
      <p className="form-sub">Carpet cleaning or water emergency — we respond fast.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <label htmlFor="quote-name">Your Name</label>
          <input
            id="quote-name"
            type="text"
            placeholder="John Smith"
            disabled={isSubmitting}
            {...register("name")}
          />
          {errors.name ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="quote-phone">Phone Number</label>
          <input
            id="quote-phone"
            type="tel"
            placeholder="(720) 000-0000"
            disabled={isSubmitting}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="quote-service">Service Needed</label>
          <select id="quote-service" disabled={isSubmitting} {...register("service")}>
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="quote-zip">Zip Code</label>
          <input
            id="quote-zip"
            type="text"
            inputMode="numeric"
            placeholder="80202"
            disabled={isSubmitting}
            {...register("zipCode")}
          />
          {errors.zipCode ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.zipCode.message}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="quote-city">Your City</label>
          <input
            id="quote-city"
            type="text"
            placeholder="Denver, Aurora, Centennial..."
            disabled={isSubmitting}
            {...register("city")}
          />
          {errors.city ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.city.message}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label
            htmlFor="quote-sms-optin"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              textTransform: "none",
              letterSpacing: "normal",
              fontWeight: 400,
              fontSize: "12px",
              color: "var(--text-mid)",
              cursor: "pointer",
              lineHeight: 1.5,
            }}
          >
            <input
              id="quote-sms-optin"
              type="checkbox"
              disabled={isSubmitting}
              style={{ width: "auto", marginTop: "2px", flexShrink: 0 }}
              {...register("smsOptIn")}
            />
            <span>{SMS_OPT_IN_TEXT}</span>
          </label>
          {errors.smsOptIn ? (
            <p className="form-microcopy" style={{ color: "#E53E3E", textAlign: "left" }}>
              {errors.smsOptIn.message}
            </p>
          ) : null}
        </div>

        <div className="form-field" style={{ display: "flex", justifyContent: "center" }}>
          <div ref={turnstileContainerRef} />
        </div>
        {!turnstileSiteKey ? (
          <p className="form-microcopy" style={{ color: "#E53E3E" }}>
            Captcha is not configured. Add VITE_TURNSTILE_SITE_KEY to enable submissions.
          </p>
        ) : null}
        {turnstileError ? (
          <p className="form-microcopy" style={{ color: "#E53E3E" }}>
            {turnstileError}
          </p>
        ) : null}
        {useTurnstileTestKeys ? (
          <p className="form-microcopy">Turnstile test mode is active.</p>
        ) : null}

        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={isSubmitting || !turnstileSiteKey || !turnstileReady}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Request Free Quote
            </>
          )}
        </button>

        <p className="form-microcopy">No spam. No obligation. Just fast help.</p>
      </form>
    </div>
  );
}
