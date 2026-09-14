export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Pharmacy" | "Technology" | "Healthcare Brand";
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  impact: string;
  tags: string[];
  keyFeatures: string[];
  galleryPlaceholders: { title: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "healix-care-pharmacy",
    title: "Healix Care Modern Pharmacy Experience",
    subtitle: "Reimagining everyday community pharmacy through transparent advice and modern presentation",
    category: "Pharmacy",
    year: "2026",
    summary:
      "A comprehensive pharmacy service concept created to make medication management, wellness selection, and pharmacist interaction stress-free.",
    challenge:
      "Traditional pharmacies often feel clinical, cluttered, and transaction-driven rather than patient-focused.",
    approach:
      "We developed a brand identity and physical/digital workflow model that places the pharmacist as an accessible community advisor.",
    solution:
      "A human-centered pharmacy framework featuring clear dosage guides, unhurried patient consultations, and cold-chain safety protocols.",
    impact: "Brand concept — verified operational outcomes will be added when available.",
    tags: ["Pharmacy", "Service Design", "Accessibility", "Healix Care"],
    keyFeatures: [
      "Intuitive medication category organization",
      "Dedicated patient consultation space",
      "Prescription verification protocols",
      "Curated wellness & preventive health collections"
    ],
    galleryPlaceholders: [
      { title: "Pharmacy Consultation Area", caption: "Designed for private, unhurried discussions between patient and pharmacist." },
      { title: "Medication Verification Display", caption: "Clear typography and visual color coding for safety." }
    ]
  },
  {
    slug: "healix-care-network-pass",
    title: "Healix Care Digital Architecture",
    subtitle: "The underlying technological foundation for prescription verification and patient support",
    category: "Technology",
    year: "2026",
    summary:
      "A secure data exchange architecture concept connecting pharmacy fulfillment and digital patient guidance.",
    challenge:
      "Healthcare communications often lack accessibility, leaving patients uncertain about dosage schedules and medication safety.",
    approach:
      "We engineered a modern platform architecture and consent-driven data structure to support digital prescription verification.",
    solution:
      "A future-proof technological blueprint that gives patients clarity over their pharmacy care.",
    impact: "Brand concept — verified operational outcomes will be added when available.",
    tags: ["Technology", "System Architecture", "Security", "Healix Care"],
    keyFeatures: [
      "Consent-driven health information security",
      "Unified prescription verification API layer",
      "Encrypted data transmission standards",
      "Extensible modular architecture"
    ],
    galleryPlaceholders: [
      { title: "Data Security Diagram", caption: "Seamless encryption for prescription verification." },
      { title: "Patient Privacy Controls", caption: "Simple granular permissions for prescription records." }
    ]
  }
];
