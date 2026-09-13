export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Pharmacy" | "Laboratory" | "Clinics" | "Technology" | "Healthcare Chain";
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
    title: "HEALIX Modern Pharmacy Experience",
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
    impact: "Portfolio concept — verified operational outcomes will be added when available.",
    tags: ["Pharmacy", "Service Design", "Accessibility", "HEALIX"],
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
    slug: "healix-care-diagnostics",
    title: "HEALIX Diagnostic Clarity System",
    subtitle: "Making complex laboratory data accessible and understandable for patients",
    category: "Laboratory",
    year: "2026",
    summary:
      "An end-to-end diagnostic testing identity and result visualization framework designed to eliminate lab report anxiety.",
    challenge:
      "Laboratory reports are traditionally dense and filled with technical jargon that leaves patients reliant on internet searches.",
    approach:
      "We restructured diagnostic test reporting using visual reference ranges, plain-language summaries, and doctor-approved context.",
    solution:
      "A modern laboratory service concept that delivers clean, highly readable diagnostic summaries directly integrated with clinic records.",
    impact: "Portfolio concept — verified operational outcomes will be added when available.",
    tags: ["Laboratory", "Diagnostics", "Data Visualization", "HEALIX"],
    keyFeatures: [
      "Plain-language diagnostic summaries",
      "Visual biomarker reference indicators",
      "Automated critical value highlights",
      "Direct clinic referral integration"
    ],
    galleryPlaceholders: [
      { title: "Patient Diagnostic Summary", caption: "Clean interface presenting metabolic trends over time." },
      { title: "Laboratory Quality Standard", caption: "ISO-aligned quality control verification flow." }
    ]
  },
  {
    slug: "healix-care-clinics",
    title: "HEALIX Human-Centered Clinics",
    subtitle: "Calm, welcoming clinical care spaces connected to diagnostic labs",
    category: "Clinics",
    year: "2026",
    summary:
      "A clinical environment and appointment workflow model designed to reduce patient stress, streamline wait times, and provide holistic consultations.",
    challenge:
      "Medical clinics frequently suffer from chaotic waiting rooms, hurried consultations, and disconnected diagnostic workflows.",
    approach:
      "We crafted a clinical model focused on warmth, quiet environments, and real-time synchronization with nearby HEALIX labs and pharmacies.",
    solution:
      "A multi-specialty clinical network prototype featuring unhurried 30-minute doctor visits, digital intake check-ins, and clear care plans.",
    impact: "Portfolio concept — verified operational outcomes will be added when available.",
    tags: ["Clinics", "Patient Experience", "Primary Care", "HEALIX"],
    keyFeatures: [
      "Calm reception and intake design",
      "Integrated lab test ordering during consults",
      "Comprehensive digital care summary generation",
      "Multi-specialty doctor coordination"
    ],
    galleryPlaceholders: [
      { title: "Consultation Room", caption: "Natural light, comfortable seating, and interactive digital health screens." },
      { title: "Care Plan Summary", caption: "Clear follow-up instructions provided at the end of every visit." }
    ]
  },
  {
    slug: "healix-care-network-pass",
    title: "HEALIX Connected Platform Architecture",
    subtitle: "The underlying technological foundation connecting pharmacy, lab, and clinic",
    category: "Technology",
    year: "2026",
    summary:
      "A secure data exchange architecture concept connecting pharmacy fulfillment, diagnostic laboratory data, and clinical patient care.",
    challenge:
      "Healthcare systems operate in isolated silos, requiring patients to manually carry paper lab results and prescriptions between providers.",
    approach:
      "We engineered a unified API schema and consent-driven data structure to safely bridge disparate healthcare services.",
    solution:
      "A future-proof technological blueprint that gives patients control over their records while allowing verified care teams instant access.",
    impact: "Portfolio concept — verified operational outcomes will be added when available.",
    tags: ["Technology", "System Architecture", "Security", "HEALIX"],
    keyFeatures: [
      "Consent-driven health record sharing",
      "Unified API layer for lab & pharmacy sync",
      "Encrypted data transmission standards",
      "Extensible modular architecture"
    ],
    galleryPlaceholders: [
      { title: "Unified Data Flow Diagram", caption: "Seamless sync between clinic diagnoses and lab orders." },
      { title: "Patient Privacy Controls", caption: "Simple granular permissions for sharing medical records." }
    ]
  }
];
