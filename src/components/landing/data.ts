/**
 * Shared, typed content constants for the Hands-Hands landing page.
 *
 * REAL BUSINESS DATA (BUSINESS, SERVICES, REVIEWS, SMS_OPT_IN_TEXT) is validated
 * against the live site. MARKETING COPY (WHY_US, STEPS, FAQ, SERVICE_AREAS) is
 * copied verbatim from the approved static mockup per client decision.
 */

// ── Business info ──────────────────────────────────────────────
export interface Business {
  phone: string;
  telHref: string;
  email: string;
  location: string;
  officeHours: string[];
  emergency: string;
}

export const BUSINESS: Business = {
  phone: "+1 (720) 255-7466",
  telHref: "tel:+17202557466",
  email: "handshands.contact@gmail.com",
  location: "Colorado",
  officeHours: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
  emergency: "24 Hours - for urgent requests",
};

// ── Services (8 real services in 4 categories) ─────────────────
export interface Service {
  title: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export const SERVICES: ServiceCategory[] = [
  {
    category: "Steam Carpet Cleaning",
    services: [
      {
        title: "Deep Commercial & Residential Steam Cleaning",
        description:
          "Comprehensive steam cleaning services for homes and businesses, using industrial-grade equipment to restore carpets to like-new condition.",
      },
      {
        title: "Pet Treatment",
        description:
          "Specialized enzyme treatments that eliminate pet stains and odors at the source, keeping your home fresh and hygienic for your furry friends.",
      },
      {
        title: "Stain Removal",
        description:
          "Expert stain removal for wine, coffee, ink, grease, and other tough stains using advanced techniques and professional-grade solutions.",
      },
      {
        title: "Upholstery Cleaning",
        description:
          "Gentle yet effective cleaning for sofas, chairs, and other upholstered furniture, removing dirt and stains while preserving fabric quality.",
      },
      {
        title: "Odor Control",
        description:
          "Complete odor elimination services that neutralize unpleasant smells from pets, smoke, mold, and more, leaving your space fresh and clean.",
      },
    ],
  },
  {
    category: "Restoration & Renovation",
    services: [
      {
        title: "Carpet Restoration",
        description:
          "Revive worn, damaged, or heavily soiled carpets with our professional restoration services that bring back color, texture, and softness.",
      },
    ],
  },
  {
    category: "Site Management",
    services: [
      {
        title: "Mitigation",
        description:
          "Rapid on-site damage assessment and containment to prevent further deterioration, with professional planning and coordination for full restoration.",
      },
    ],
  },
  {
    category: "Water Extraction",
    services: [
      {
        title: "Water Extraction",
        description:
          "Fast-response water extraction using industrial-grade pumps and vacuums to remove standing water from floods, leaks, or burst pipes, minimizing damage to your property.",
      },
    ],
  },
];

// ── Reviews (9 real reviews, all 5 stars) ──────────────────────
export interface Review {
  name: string;
  quote: string;
}

export const REVIEWS: Review[] = [
  { name: "Sarah", quote: "My bedroom carpet looks brand new! Amazing results." },
  { name: "Michael", quote: "Great job on our commercial hallway. Very professional!" },
  { name: "Jennifer", quote: "The steam cleaning left perfect lines. Love it!" },
  { name: "David", quote: "They cleaned all our rugs beautifully. Highly recommend!" },
  { name: "Lisa", quote: "Thorough work even around furniture. Excellent service!" },
  { name: "Robert", quote: "Our family room carpet hasn't looked this good in years!" },
  { name: "Amanda", quote: "Spotless results throughout the whole house. Thank you!" },
  { name: "James", quote: "They restored our couch to like-new condition. Impressed!" },
  { name: "Emily", quote: "Quick service and fantastic results. Will call again!" },
];

// ── SMS opt-in legal text (verbatim, required) ─────────────────
export const SMS_OPT_IN_TEXT =
  "I agree to receive SMS text messages from Hands-Hands regarding my inquiry. Message frequency varies. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.";

// ── Marketing copy — "Why Us" (verbatim from mockup) ───────────
export interface WhyUsItem {
  title: string;
  desc: string;
}

export const WHY_US: WhyUsItem[] = [
  {
    title: "Fast Response",
    desc: "We answer 24/7 and dispatch immediately. For emergencies, speed saves your home.",
  },
  {
    title: "Professional Equipment",
    desc: "Industrial-grade tools that clean deeper and extract more than standard services.",
  },
  {
    title: "Local Experts",
    desc: "We know Colorado and surrounding areas neighborhoods — and we've built our reputation serving homeowners here.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear estimate before work starts. No surprise charges. Ever.",
  },
];

// ── Marketing copy — "How It Works" steps (verbatim) ───────────
export interface Step {
  n: number;
  title: string;
  desc: string;
}

export const STEPS: Step[] = [
  {
    n: 1,
    title: "Call or Request a Quote",
    desc: "Reach us any time. Tell us what you need — carpet cleaning, water emergency, or both. We pick up fast.",
  },
  {
    n: 2,
    title: "We Arrive in Colorado and surrounding areas Fast",
    desc: "Our technician shows up promptly, assesses the situation, and gives you a clear, upfront estimate before touching anything.",
  },
  {
    n: 3,
    title: "We Solve the Problem",
    desc: "We get to work with professional equipment. Carpets restored. Water extracted. Your home back to normal.",
  },
];

// ── Marketing copy — FAQ (verbatim from mockup) ────────────────
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "How fast do you arrive for a water emergency in Colorado and surrounding areas?",
    a: "We target a 60-minute response time for all emergency water extraction calls in Colorado and surrounding areas and surrounding areas. Our team is on standby around the clock — including nights, weekends, and holidays.",
  },
  {
    q: "Do you offer same-day service for carpet cleaning?",
    a: "Yes! We frequently schedule same-day carpet cleaning appointments in Colorado and surrounding areas depending on availability. Call us in the morning and we can often be there that afternoon.",
  },
  {
    q: "Do you handle both carpet cleaning AND water damage?",
    a: "Absolutely. Hands Hands specializes in both professional carpet cleaning and emergency water extraction — with equal expertise in each. Many clients use us for both, especially after a flood that damages carpets.",
  },
  {
    q: "Are you available 24/7 for emergencies?",
    a: "Yes — 24 hours a day, 365 days a year. Water damage doesn't respect business hours and neither do we. Our emergency line is staffed by a real person, never a voicemail.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the size of the area and the scope of work. We always provide a transparent, no-obligation estimate before any work starts — and we stick to it. No hidden fees, ever. Contact us for a free quote.",
  },
  {
    q: "Do you serve areas outside Colorado and surrounding areas?",
    a: "Yes! We serve Denver, Aurora, Centennial, Estes Park, and surrounding communities. Not sure if we cover your address? Just call — we'll tell you in 30 seconds.",
  },
];

// ── Marketing copy — Service Area chips (verbatim) ─────────────
export interface ServiceArea {
  label: string;
  /** true for the four covered cities, false for the "+ More Areas" chip */
  active: boolean;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { label: "Denver, CO", active: true },
  { label: "Aurora, CO", active: true },
  { label: "Centennial, CO", active: true },
  { label: "Estes Park, CO", active: true },
  { label: "+ More Areas", active: false },
];
