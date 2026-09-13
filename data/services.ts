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
    title: "Pharmacy & Authentic Medicines",
    tagline: "100% verified medications, everyday healthcare essentials, and certified advisory.",
    description:
      "HEALIX Pharmacy redefines how communities access essential pharmaceuticals and health supplies. We combine certified pharmacist advice, transparent guidance, and rigorous medication verification to make health management reliable.",
    category: "Pharmacy",
    href: "/pharmacy",
    iconName: "Pill",
    features: [
      "Certified pharmacist consultation & guidance",
      "100% authentic prescription medicines & OTC products",
      "Temperature-controlled storage & safety standards",
      "Comprehensive prescription verification",
      "Everyday wellness, vitamins & chronic care supplies"
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
        title: "Authentic OTC & Chronic Care",
        desc: "Verified prescription medications and chronic disease management supplies."
      },
      {
        title: "Health & Wellness Essentials",
        desc: "Curated range of vitamins, minerals, clinical skincare, and daily hygiene products."
      },
      {
        title: "Digital Prescription Verification",
        desc: "Fast, accurate verification process for prescription safety and peace of mind."
      }
    ]
  },
  {
    id: "laboratory",
    title: "Diagnostic Labs & Testing",
    tagline: "Certified laboratory diagnostics, sample processing, and readable digital reports.",
    description:
      "HEALIX Diagnostics brings clarity to healthcare through modern laboratory science, rigorous quality standards, and patient-first report design. Accurate diagnostic insights pave the way for confident medical care.",
    category: "Laboratory",
    href: "/laboratory",
    iconName: "FlaskConical",
    features: [
      "Comprehensive blood & metabolic health packages",
      "Home sample collection guidance & safety",
      "Rapid turnaround time for diagnostic reports",
      "ISO-aligned automated diagnostic equipment",
      "Clear, easy-to-read digital patient report formats"
    ],
    stats: [
      { label: "Testing Standards", value: "ISO Aligned" },
      { label: "Diagnostic Accuracy", value: "High Precision" },
      { label: "Sample Processing", value: "Streamlined" }
    ],
    visualAccent: "from-[#0E745B] to-[#075A46]",
    capabilities: [
      {
        title: "Preventive Health Panels",
        desc: "Routine blood work, lipid profiles, liver function, and metabolic checkup suites."
      },
      {
        title: "Specialized Biomarker Testing",
        desc: "Hormonal assays, thyroid panels, and targeted diagnostic screenings."
      },
      {
        title: "Digital Result Delivery",
        desc: "Accessible digital reports designed for doctors and patients to review with total clarity."
      },
      {
        title: "Quality Assurance Protocols",
        desc: "Verified testing protocols adhering to strict international laboratory benchmarks."
      }
    ]
  },
  {
    id: "clinics",
    title: "Doctor Consultations & Clinics",
    tagline: "Expert general practitioners and specialist doctors in modern healthcare facilities.",
    description:
      "HEALIX Clinics connect individuals and families with experienced doctors and healthcare professionals across multiple specialties. Designed for patient comfort and thorough listening, our facilities prioritize quality care.",
    category: "Clinics",
    href: "/clinics",
    iconName: "Stethoscope",
    features: [
      "General practitioner & specialist doctor consultations",
      "Multi-specialty coverage (Cardiology, Dermatology, Pediatrics, Orthopedics)",
      "Preventive health assessments & routine OPD care",
      "Patient-first unhurried consultation sessions",
      "Clean, modern, and welcoming clinical environments"
    ],
    stats: [
      { label: "Care Philosophy", value: "Patient-First" },
      { label: "Specialty Coverage", value: "Multi-Discipline" },
      { label: "Consultation Quality", value: "Unhurried" }
    ],
    visualAccent: "from-[#075A46] to-[#94D126]/40",
    capabilities: [
      {
        title: "Primary Care & General Medicine",
        desc: "Comprehensive checkups, OPD visits, and routine health assessments for all ages."
      },
      {
        title: "Specialist Medical Care",
        desc: "Expert consultations across cardiology, neurology, pediatrics, gynecology, and orthopedics."
      },
      {
        title: "Preventive Wellness Consults",
        desc: "Personalized lifestyle advice, risk factor screening, and long-term health planning."
      },
      {
        title: "Connected Care Network",
        desc: "Seamless link between consulting doctors, diagnostic lab testing, and pharmacy fulfillment."
      }
    ]
  }
];
