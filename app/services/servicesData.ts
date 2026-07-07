export type ServicePackage = {
  id: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  shortDescription: string;
  includes: string[];
};

export const packages: ServicePackage[] = [
  {
    id: "intimate",
    title: "The Intimate — Elopements & Micro Weddings",
    subtitle: "Intimate celebrations with intentional coordination",
    priceLabel: "Starting at $795",
    shortDescription:
      "Designed for celebrations with up to 40 guests and a refined, stress-free experience.",
    includes: [
      "Planning consultation",
      "Vendor coordination",
      "Ceremony management",
      "Timeline creation",
      "Up to 6 hours of coordination",
    ],
  },
  {
    id: "essential",
    title: "The Essential — Day-of Coordination",
    subtitle: "Polished execution for a seamless wedding day",
    priceLabel: "Starting at $1,295",
    shortDescription:
      "Perfect for couples who have planned their wedding and want a calm professional lead on the day.",
    includes: [
      "Complimentary consultation",
      "Wedding day timeline review",
      "Vendor confirmations (1–2 weeks before)",
      "Ceremony processional planning",
      "Wedding day management (up to 10 hours)",
      "Coordination with all vendors",
      "Emergency kit",
      "Timeline and logistics management",
      "Point of contact for family and vendors",
    ],
  },
  {
    id: "signature",
    title: "The Signature — Month-of Coordination",
    subtitle: "Comprehensive final-month guidance and oversight",
    priceLabel: "Starting at $1,995",
    shortDescription:
      "For couples who have done the planning and want experienced leadership in the final stretch.",
    includes: [
      "Everything in The Essential",
      "Begins approximately 4–6 weeks before the wedding",
      "Final planning meeting",
      "Unlimited email support during the final month",
      "Detailed wedding timeline creation",
      "Vendor communication and confirmations",
      "Floor plan review",
      "Ceremony rehearsal coordination",
      "Decor setup oversight",
      "Assistant coordinator if needed (depending on guest count)",
    ],
  },
];
