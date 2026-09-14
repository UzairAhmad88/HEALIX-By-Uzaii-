export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Preventive Care" | "Health" | "Pharmacy" | "Wellness";
  date: string;
  readTime: string;
  author: { name: string; title: string };
  excerpt: string;
  keyTakeaways: string[];
  content: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
};

export const articles: Article[] = [
  {
    slug: "understanding-preventive-healthcare",
    title: "Understanding Everyday Healthcare: Moving from Reaction to Prevention",
    subtitle: "Why proactive wellness and health management are the bedrock of long-term vitality",
    category: "Preventive Care",
    date: "September 10, 2026",
    readTime: "5 min read",
    author: { name: "Healix Care Editorial Team", title: "Health & Wellness Advisory" },
    excerpt:
      "Everyday health is not just about reacting when you feel unwell; it's about actively managing wellness through thoughtful pharmacy care and daily health habits.",
    keyTakeaways: [
      "Everyday health management reduces long-term health risks.",
      "Routine consultations with certified pharmacists provide clarity on wellness and dosage.",
      "Preventive daily habits support lifelong vitality."
    ],
    content: [
      {
        sectionTitle: "The Power of Everyday Health Management",
        paragraphs: [
          "In modern healthcare, the most effective routine is often the one established before symptoms ever manifest. Everyday health support, nutrition guidance, and reliable pharmacy access form a strong foundation.",
          "When patients understand how everyday medications and wellness habits interact, they gain clarity and confidence in managing their health."
        ]
      },
      {
        sectionTitle: "Connecting Pharmacy Support to Daily Wellness",
        paragraphs: [
          "Everyday wellness products work best when guided by clear advice. A vitamin regimen or OTC care plan is an opportunity to evaluate health habits alongside certified pharmacy support."
        ]
      }
    ]
  },
  {
    slug: "making-healthcare-easier-to-understand",
    title: "Making Pharmacy Care Easier to Understand: The Role of Clear Communication",
    subtitle: "Demystifying prescription instructions to empower patients in their care decisions",
    category: "Health",
    date: "August 28, 2026",
    readTime: "4 min read",
    author: { name: "Healix Care Editorial Team", title: "Patient Care Experience" },
    excerpt:
      "Health literacy directly impacts prescription safety. When medication guidelines and dosage instructions are written clearly, patients feel confident and empowered.",
    keyTakeaways: [
      "Complex jargon creates unnecessary confusion during prescription usage.",
      "Clear visual dosage labels dramatically improve patient comprehension.",
      "Empowered patients follow care plans more consistently and safely."
    ],
    content: [
      {
        sectionTitle: "Why Clear Medication Guidance Matters",
        paragraphs: [
          "For decades, pharmacy communication often favored technical language over patient clarity. Receiving prescription bottles with ambiguous directions leads to uncertainty.",
          "At Healix Care, true pharmacy excellence is demonstrated through human clarity. Explaining dosage schedules in plain language enables patients to manage their care safely."
        ]
      }
    ]
  },
  {
    slug: "pharmacy-care-beyond-medication",
    title: "Pharmacy Care Beyond Medication: The Pharmacist as a Health Partner",
    subtitle: "Exploring the evolving role of pharmacists in modern community healthcare",
    category: "Pharmacy",
    date: "July 30, 2026",
    readTime: "5 min read",
    author: { name: "Healix Care Editorial Team", title: "Pharmacy Advisory" },
    excerpt:
      "Pharmacists are often the most accessible healthcare professionals in the community. Discover how consultation-focused pharmacy care elevates overall patient health.",
    keyTakeaways: [
      "Pharmacists review medication interactions, dosages, and administration protocols for safety.",
      "Dedicated pharmacy consultations help manage chronic condition regimens effectively.",
      "Accessibility makes community pharmacies an essential first line of preventive advice."
    ],
    content: [
      {
        sectionTitle: "The Accessible Healthcare Provider",
        paragraphs: [
          "Unlike clinical visits that often require advance scheduling, community pharmacists are uniquely accessible for quick, professional healthcare advice. They serve as a critical safety barrier, reviewing prescriptions for adverse drug interactions and contraindications.",
          "When pharmacy design prioritizes private consultation spaces, patients feel comfortable asking questions about new medications, potential side effects, and proper storage protocols."
        ]
      }
    ]
  }
];
