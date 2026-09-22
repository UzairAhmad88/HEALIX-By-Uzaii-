export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: "Everyday Pharmacy" | "Pharmacy Franchisee" | "Clinical Care";
  href: string;
  ctaText: string;
  isComingSoon?: boolean;
  features: string[];
  stats: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    id: "everyday-pharmacy",
    number: "01",
    title: "EVERYDAY PHARMACY",
    tagline: "Everyday pharmacy support and healthcare essentials designed around the needs of our community.",
    description:
      "Healix Pharmacy delivers authentic prescription fulfillment, clear dosage guidance, over-the-counter health essentials, and certified advisory in a welcoming community setting.",
    category: "Everyday Pharmacy",
    href: "/pharmacy",
    ctaText: "Explore Pharmacy",
    isComingSoon: false,
    features: [
      "Certified pharmacist advice & consultation",
      "100% verified authentic prescription medicines",
      "Everyday health essentials, vitamins & skincare",
      "Cold-chain medication safety storage",
      "Clear visual dosage labeling & safety screening"
    ],
    stats: [
      { label: "Community Access", value: "Everyday" },
      { label: "Medication Authenticity", value: "100%" },
      { label: "Pharmacist Advisory", value: "Certified" }
    ]
  },
  {
    id: "pharmacy-franchisee",
    number: "02",
    title: "PHARMACY FRANCHISEE",
    tagline: "A modern pharmacy franchising opportunity supported by Healix Care's business, operational and technology model.",
    description:
      "Join the Healix Care pharmacy franchise model and build a modern pharmacy business with structured support across setup, site evaluation, staff training, initial stock fulfillment, and technology.",
    category: "Pharmacy Franchisee",
    href: "/pharmacy-franchise",
    ctaText: "Explore Franchise",
    isComingSoon: false,
    features: [
      "Site evaluation & location selection guidance",
      "Licensing, compliance & store setup assistance",
      "Comprehensive staff training & operational blueprints",
      "Initial stock fulfillment & supply chain access",
      "Pharmacy management software & inventory technology"
    ],
    stats: [
      { label: "Model", value: "Structured" },
      { label: "Support", value: "End-to-End" },
      { label: "Technology", value: "Integrated" }
    ]
  },
  {
    id: "clinical-care",
    number: "03",
    title: "CLINICAL CARE",
    tagline: "Future clinical care services as Healix Care continues to grow.",
    description:
      "Looking ahead, Healix Care plans to integrate clinical consultations and healthcare services alongside our pharmacy network to bring care even closer to families.",
    category: "Clinical Care",
    href: "/contact",
    ctaText: "Coming Soon",
    isComingSoon: true,
    features: [
      "Future doctor consultations & primary care",
      "Integrated healthcare ecosystem",
      "Preventive health assessments",
      "Community wellness outreach"
    ],
    stats: [
      { label: "Status", value: "Coming Soon" },
      { label: "Vision", value: "Integrated Care" }
    ]
  }
];
