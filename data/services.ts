export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Pharmacy" | "Laboratory" | "Clinics";
  href: string;
  iconName: string;
  features: string[];
  stats: { label: string; value: string }[];
  visualAccent: string;
  capabilities: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    id: "pharmacy",
    title: "Pharmacy Services",
    tagline: "Everyday healthcare essentials and professional pharmacy support.",
    description:
      "Healix Care Pharmacy redefines how communities interact with pharmaceutical care. We combine certified advice, transparent guidance, and medication verification to make essential health management simpler.",
    category: "Pharmacy",
    href: "/pharmacy",
    iconName: "Pill",
    features: [
      "Medication consultation & guidance",
      "Specialty pharmaceutical care",
      "Temperature-controlled storage standards",
      "Comprehensive prescription verification",
      "Everyday wellness & health supplies"
    ],
    stats: [
      { label: "Community Access", value: "Everyday" },
      { label: "Medication Verification", value: "100%" },
      { label: "Pharmacist Advisory", value: "Available" }
    ],
    visualAccent: "from-[#075A46] to-[#0E745B]",
    capabilities: [
      {
        title: "Medication Advisory",
        desc: "Professional guidance on dosing, interactions, and proper storage of prescribed medicines."
      },
      {
        title: "Specialty Pharmacy",
        desc: "Tailored medication protocols for complex conditions and specialized health regimens."
      },
      {
        title: "Health & Wellness Essentials",
        desc: "Curated range of vitamins, supplements, and clinical skin-care products."
      },
      {
        title: "Future Digital Pharmacy",
        desc: "Future-ready architecture for digital refills and location pickup tracking."
      }
    ]
  },
  {
    id: "laboratory",
    title: "Laboratory & Diagnostics",
    tagline: "Modern diagnostic services designed around clarity and confidence.",
    description:
      "Healix Care Diagnostics brings clarity to healthcare through modern laboratory science, rigorous quality standards, and patient-first report design. Better understanding starts with better diagnostics.",
    category: "Laboratory",
    href: "/laboratory",
    iconName: "FlaskConical",
    features: [
      "Comprehensive blood & metabolic panels",
      "Preventive health screening suites",
      "Rapid turnaround laboratory reports",
      "Advanced diagnostic equipment standards",
      "Clear, readable patient result formats"
    ],
    stats: [
      { label: "Testing Standards", value: "ISO Aligned" },
      { label: "Diagnostic Clarity", value: "Visual" },
      { label: "Sample Processing", value: "Streamlined" }
    ],
    visualAccent: "from-[#0E745B] to-[#075A46]",
    capabilities: [
      {
        title: "Preventive Health Screening",
        desc: "Routine blood work, lipid profiles, and metabolic checkups to catch issues early."
      },
      {
        title: "Specialized Biomarker Testing",
        desc: "Hormonal, metabolic, and targeted assay testing for specific health inquiries."
      },
      {
        title: "Digital Result Delivery",
        desc: "Clean, accessible digital reporting that patients and doctors can easily review."
      },
      {
        title: "Quality Assurance Protocols",
        desc: "Verified testing methods adhering to strict international laboratory standards."
      }
    ]
  },
  {
    id: "clinics",
    title: "Clinical Care",
    tagline: "Professional clinical care in a comfortable, patient-centered environment.",
    description:
      "Healix Care Clinics connect individuals and families with compassionate, experienced healthcare professionals. Designed to eliminate waiting room stress, our care spaces prioritize patient comfort and listening.",
    category: "Clinics",
    href: "/clinics",
    iconName: "Stethoscope",
    features: [
      "Primary care & family consultations",
      "Specialist referral network",
      "Preventive health assessments",
      "Patient-first appointment scheduling",
      "Comfortable, anxiety-free care spaces"
    ],
    stats: [
      { label: "Care Philosophy", value: "Patient-First" },
      { label: "Specialty Coverage", value: "Multi-Discipline" },
      { label: "Consultation Quality", value: "Unhurried" }
    ],
    visualAccent: "from-[#075A46] to-[#94D126]/40",
    capabilities: [
      {
        title: "Primary & Family Medicine",
        desc: "Comprehensive checkups, chronic condition management, and routine wellness visits."
      },
      {
        title: "Specialist Care Integration",
        desc: "Direct coordination with cardiologists, endocrinologists, pediatricians, and more."
      },
      {
        title: "Preventive Health Consults",
        desc: "Lifestyle guidance, nutrition planning, and long-term health risk reduction."
      },
      {
        title: "Integrated Ecosystem Care",
        desc: "Direct link between clinic doctors, diagnostic testing, and pharmacy fulfillment."
      }
    ]
  }
];
