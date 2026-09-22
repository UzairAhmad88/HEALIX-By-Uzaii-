"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Building2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid mobile number"),
  city: z.string().min(2, "City is required"),
  budget: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0, "Spam detected").optional() // Honeypot field
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  initialInquiryType?: string;
}

export function ContactForm({ initialInquiryType }: ContactFormProps) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [serverState, setServerState] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const isFranchiseDefault = initialInquiryType === "Pharmacy Franchisee" || typeParam === "franchise";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      budget: "Prefer to discuss",
      inquiryType: isFranchiseDefault ? "Pharmacy Franchisee" : "General Enquiry",
      subject: isFranchiseDefault ? "Pharmacy Franchise Information Request" : "",
      message: "",
      website: ""
    }
  });

  const selectedInquiryType = watch("inquiryType");

  useEffect(() => {
    if (typeParam === "franchise") {
      setValue("inquiryType", "Pharmacy Franchisee");
      setValue("subject", "Pharmacy Franchise Information Request");
    }
  }, [typeParam, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setServerState({ type: null, message: "" });

    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormValues;
        if (path) {
          setError(path, { message: issue.message });
        }
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data)
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setServerState({
          type: "success",
          message: data.inquiryType === "Pharmacy Franchisee"
            ? "Thank you for your interest in Healix Care. Your franchise enquiry has been received. Our team will get in touch with you."
            : "Thank you — your message has been received. Our team will follow up shortly."
        });
        reset();
      } else {
        setServerState({
          type: "error",
          message: json.error || "Unable to send message. Please try again."
        });
      }
    } catch {
      setServerState({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 shadow-xl md:p-12"
      noValidate
      aria-label="Contact Form"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#10231E]">Send an Inquiry</h2>
          <p className="mt-1 text-xs text-slate-600">Provide your contact details below and our team will get back to you.</p>
        </div>
        {selectedInquiryType === "Pharmacy Franchisee" && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--healix-lime)] px-3 py-1 text-[11px] font-black uppercase text-[#10231E]">
            <Building2 size={13} /> Franchise Inquiry
          </span>
        )}
      </div>

      {/* Anti-Spam Field */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("website")}
      />

      <div className="mt-8 space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Dr. Muhammad Ali"
            className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46] ${
              errors.name ? "border-red-400 bg-red-50/20" : "border-[#D8E7E0] bg-[#F7FAF8]"
            }`}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email Address & Mobile Number */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46] ${
                errors.email ? "border-red-400 bg-red-50/20" : "border-[#D8E7E0] bg-[#F7FAF8]"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <p className="mt-1 text-xs font-medium text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+92 316 0000000"
              className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46] ${
                errors.phone ? "border-red-400 bg-red-50/20" : "border-[#D8E7E0] bg-[#F7FAF8]"
              }`}
              {...register("phone", { required: "Mobile number is required" })}
            />
            {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        {/* City & Inquiry Type */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="Which city are you interested in?"
              className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46] ${
                errors.city ? "border-red-400 bg-red-50/20" : "border-[#D8E7E0] bg-[#F7FAF8]"
              }`}
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <p className="mt-1 text-xs font-medium text-red-600">{errors.city.message}</p>}
          </div>

          <div>
            <label htmlFor="inquiryType" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              className="mt-2 w-full rounded-2xl border border-[#D8E7E0] bg-[#F7FAF8] px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46]"
              {...register("inquiryType")}
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Everyday Pharmacy">Everyday Pharmacy</option>
              <option value="Pharmacy Franchisee">Pharmacy Franchisee</option>
              <option value="Clinical Care — Coming Soon">Clinical Care — Coming Soon</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Budget Field (Shown prominently for Franchise & General inquiries) */}
        <div>
          <label htmlFor="budget" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Estimated Investment Budget <span className="text-slate-400 font-normal">(For Franchise & Business Inquiries)</span>
          </label>
          <select
            id="budget"
            className="mt-2 w-full rounded-2xl border border-[#D8E7E0] bg-[#F7FAF8] px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46]"
            {...register("budget")}
          >
            <option value="Prefer to discuss">Prefer to discuss</option>
            <option value="Under PKR 5 Million">Under PKR 5 Million</option>
            <option value="PKR 5–10 Million">PKR 5–10 Million</option>
            <option value="PKR 10–15 Million">PKR 10–15 Million</option>
            <option value="PKR 15–20 Million">PKR 15–20 Million</option>
            <option value="PKR 20 Million+">PKR 20 Million+</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder={
              selectedInquiryType === "Pharmacy Franchisee"
                ? "Please share any specific details regarding location, timeline, or franchise questions..."
                : "How can Healix Care assist you?"
            }
            className={`mt-2 w-full resize-y rounded-2xl border px-4 py-3.5 text-sm text-[#10231E] outline-none transition focus:border-[#075A46] ${
              errors.message ? "border-red-400 bg-red-50/20" : "border-[#D8E7E0] bg-[#F7FAF8]"
            }`}
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" }
            })}
          />
          {errors.message && <p className="mt-1 text-xs font-medium text-red-600">{errors.message.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075A46] py-4 text-base font-extrabold text-white transition-all hover:bg-[#0E745B] hover:shadow-lg disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>{selectedInquiryType === "Pharmacy Franchisee" ? "Submit Franchise Request" : "Send Inquiry"}</span>
            <Send size={18} />
          </>
        )}
      </button>

      {/* Status Feedback Alerts */}
      {serverState.type === "success" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900 border border-emerald-200">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
          <span>{serverState.message}</span>
        </div>
      )}

      {serverState.type === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-900 border border-red-200">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-600" />
          <span>{serverState.message}</span>
        </div>
      )}
    </form>
  );
}
