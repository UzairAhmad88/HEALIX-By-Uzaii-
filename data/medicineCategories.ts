import { Pill, HeartPulse, ShieldCheck, Thermometer, Stethoscope, Sparkles, Activity, Baby, RefreshCw, Package } from "lucide-react";

export type MedicineCategory = {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
};

export const medicineCategories: MedicineCategory[] = [
  {
    id: "prescription",
    title: "Prescription Medicines",
    description: "Verified prescription medications with pharmacist dosage advisory and authenticity checks.",
    tag: "Rx Verification",
    iconName: "Pill"
  },
  {
    id: "otc",
    title: "Over-the-Counter",
    description: "Everyday non-prescription solutions for routine health maintenance and minor ailments.",
    tag: "Everyday Care",
    iconName: "HeartPulse"
  },
  {
    id: "pain-fever",
    title: "Pain & Fever",
    description: "Targeted analgesics, antipyretics, and inflammation relief products.",
    tag: "Symptom Relief",
    iconName: "Thermometer"
  },
  {
    id: "cold-flu",
    title: "Cold & Flu",
    description: "Decongestants, cough formulations, throat lozenges, and immune support.",
    tag: "Seasonal Support",
    iconName: "Activity"
  },
  {
    id: "digestive",
    title: "Digestive Health",
    description: "Antacids, probiotics, digestive enzymes, and stomach wellness essentials.",
    tag: "Gut Health",
    iconName: "RefreshCw"
  },
  {
    id: "vitamins",
    title: "Vitamins & Supplements",
    description: "Essential vitamins, dietary minerals, and wellness supplements for daily health.",
    tag: "Nutrition",
    iconName: "ShieldCheck"
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Clinical skincare, dermatological products, and personal hygiene supplies.",
    tag: "Skincare & Hygiene",
    iconName: "Sparkles"
  },
  {
    id: "baby-family",
    title: "Baby & Family Care",
    description: "Gentle baby health essentials, pediatric care items, and family wellness products.",
    tag: "Family Care",
    iconName: "Baby"
  },
  {
    id: "wellness",
    title: "Wellness & Lifestyle",
    description: "Preventive health supplies, hydration solutions, and daily vitality essentials.",
    tag: "Vitality",
    iconName: "Stethoscope"
  },
  {
    id: "essentials",
    title: "Healthcare Essentials",
    description: "First-aid kits, diagnostic monitors, bandages, and routine health accessories.",
    tag: "Health Supplies",
    iconName: "Package"
  }
];
