"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0, "Spam detected").optional() // Honeypot field
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [serverState, setServerState] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerState({ type: null, message: "" });

    // Client-side Zod validation pass
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
          message: "Thank you — your message has been received. Our team will follow up shortly."
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
      className="rounded-[2.5rem] border border-[var(--healix-border)] bg-white p-8 shadow-xl md:p-12"
      noValidate
      aria-label="Contact Form"
    >
      <h2 className="text-2xl font-extrabold text-[var(--healix-text)]">Send an Inquiry</h2>
      <p className="mt-2 text-sm text-slate-600">Fill out the details below and the Healix team will respond.</p>

      {/* Honeypot Anti-Spam Field */}
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
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Dr. Sarah Jenkins"
            className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[var(--healix-text)] outline-none transition focus:border-[var(--healix-green)] ${
              errors.name ? "border-red-400 bg-red-50/20" : "border-[var(--healix-border)] bg-[var(--healix-soft)]"
            }`}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="sarah@example.com"
              className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[var(--healix-text)] outline-none transition focus:border-[var(--healix-green)] ${
                errors.email ? "border-red-400 bg-red-50/20" : "border-[var(--healix-border)] bg-[var(--healix-soft)]"
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
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-2 w-full rounded-2xl border border-[var(--healix-border)] bg-[var(--healix-soft)] px-4 py-3.5 text-sm text-[var(--healix-text)] outline-none transition focus:border-[var(--healix-green)]"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Ecosystem Partnership Inquiry"
            className={`mt-2 w-full rounded-2xl border px-4 py-3.5 text-sm text-[var(--healix-text)] outline-none transition focus:border-[var(--healix-green)] ${
              errors.subject ? "border-red-400 bg-red-50/20" : "border-[var(--healix-border)] bg-[var(--healix-soft)]"
            }`}
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && <p className="mt-1 text-xs font-medium text-red-600">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your healthcare project, inquiry, or partnership vision..."
            className={`mt-2 w-full resize-y rounded-2xl border px-4 py-3.5 text-sm text-[var(--healix-text)] outline-none transition focus:border-[var(--healix-green)] ${
              errors.message ? "border-red-400 bg-red-50/20" : "border-[var(--healix-border)] bg-[var(--healix-soft)]"
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
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--healix-green)] py-4 text-base font-extrabold text-white transition-all hover:bg-[var(--healix-green-2)] hover:shadow-lg disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Start Conversation</span>
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
