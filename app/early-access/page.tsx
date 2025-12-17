"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Form validation schema
const earlyAccessSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid work email"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  role: z
    .enum([
      "Odoo Consultant",
      "ERP Implementer",
      "Agency Owner",
      "Freelancer",
      "Other",
    ])
    .refine((val) => val !== undefined, {
      message: "Please select your role",
    }),
  instanceCount: z
    .enum(["1-3", "4-10", "11-25", "25+"])
    .refine((val) => val !== undefined, {
      message: "Please select instance count",
    }),
});

type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>;

export default function EarlyAccessPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [declinedCall, setDeclinedCall] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
  });

  const onSubmit = async (data: EarlyAccessFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setErrorMessage(
            "This email has already been registered. You're already on the list!"
          );
        } else {
          setErrorMessage(
            result.error || "Failed to submit form. Please try again."
          );
        }
        return;
      }

      console.log("Submission successful:", result);

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Main Content */}
      <section className="relative py-16  overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {!isSubmitted && (
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-muted/50 border border-gray-200 mb-6">
                <span className="text-xs font-medium uppercase tracking-wide text-base-content/70">
                  Early Access Program
                </span>
              </div>
              <h1 className="text-3xl font-display md:text-5xl font-bold text-base-content/80 leading-tight mb-4">
                Join the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Siona
                </span>{" "}
                early access program
              </h1>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Be among the first to transform your Odoo consulting business
                into a scalable SaaS offering
              </p>
            </motion.div>
          )}

          {/* Form Card */}
          <motion.div
            className="relative bg-base-100 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Error Message */}
                {errorMessage && (
                  <div className="alert bg-error/10 shadow-none! text-error">
                    <X />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-base-content/80 mb-2"
                  >
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    id="fullName"
                    className={`input input-bordered w-full bg-base-100 ${
                      errors.fullName ? "input-error" : ""
                    }`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-error">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-sm font-medium text-base-content/80 mb-2"
                  >
                    Work Email <span className="text-error">*</span>
                  </label>
                  <input
                    {...register("workEmail")}
                    type="email"
                    id="workEmail"
                    className={`input input-bordered w-full bg-base-100 ${
                      errors.workEmail ? "input-error" : ""
                    }`}
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.workEmail && (
                    <p className="mt-1 text-sm text-error">
                      {errors.workEmail.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-base-content/80 mb-2"
                  >
                    Company/Consulting Firm Name{" "}
                    <span className="text-error">*</span>
                  </label>
                  <input
                    {...register("companyName")}
                    type="text"
                    id="companyName"
                    className={`input input-bordered w-full bg-base-100 ${
                      errors.companyName ? "input-error" : ""
                    }`}
                    placeholder="Acme Consulting"
                    disabled={isSubmitting}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-error">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-base-content/80 mb-2"
                  >
                    Role <span className="text-error">*</span>
                  </label>
                  <select
                    {...register("role")}
                    id="role"
                    className={`select select-bordered w-full bg-base-100 ${
                      errors.role ? "select-error" : ""
                    }`}
                    disabled={isSubmitting}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="Odoo Consultant">Odoo Consultant</option>
                    <option value="ERP Implementer">ERP Implementer</option>
                    <option value="Agency Owner">Agency Owner</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-error">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {/* Instance Count */}
                <div>
                  <label
                    htmlFor="instanceCount"
                    className="block text-sm font-medium text-base-content/80 mb-2"
                  >
                    How many Odoo instances do you currently manage?{" "}
                    <span className="text-error">*</span>
                  </label>
                  <select
                    {...register("instanceCount")}
                    id="instanceCount"
                    className={`select select-bordered w-full bg-base-100 ${
                      errors.instanceCount ? "select-error" : ""
                    }`}
                    disabled={isSubmitting}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select instance count
                    </option>
                    <option value="1-3">1-3 instances</option>
                    <option value="4-10">4-10 instances</option>
                    <option value="11-25">11-25 instances</option>
                    <option value="25+">25+ instances</option>
                  </select>
                  {errors.instanceCount && (
                    <p className="mt-1 text-sm text-error">
                      {errors.instanceCount.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Early Access
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-base-content/70 text-center pt-2">
                  By submitting this form, you agree to receive product updates
                  and early access information from Siona.
                </p>
              </form>
            ) : (
              // Success State
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Thanks for joining the Siona early access program 👋
                </h2>
                <p className=" text-base-content/70 leading-relaxed mb-8 max-w-xl mx-auto">
                  We&apos;re building Siona closely with Odoo consultants to
                  make sure it solves real, day-to-day problems, not theoretical
                  ones.
                  <br />
                  <br />
                  Your interest means a lot.
                </p>

                {/* Call to Action for Interview */}
                {!declinedCall ? (
                  <div className="bg-muted/30 rounded-xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-gray-200">
                    <h3 className="text-lg text-left font-display font-semibold mb-4">
                      Would you be open to a short 10–15 minute call to share
                      how you currently deploy and manage Odoo for your clients?
                    </h3>
                    <div className="flex flex-col text-sm gap-2 text-base-content/70 mb-6">
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span> No sales
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span> No demo
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Just learning
                        from your experience
                      </p>
                    </div>
                    <div className="flex items-center mr-auto gap-3">
                      <Link
                        href="https://calendly.com/your-calendar-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm w-full sm:w-auto"
                      >
                        Yes, Happy to help
                      </Link>
                      <button
                        onClick={() => setDeclinedCall(true)}
                        className="btn btn-ghost btn-sm"
                      >
                        No, not right now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-base-300/30 rounded-xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-gray-200 text-center">
                    <p className="text-base text-base-content/70 leading-relaxed">
                      No problem at all. Thanks again for joining early access.
                      <br />
                      We&apos;ll keep you updated as Siona evolves.
                    </p>
                  </div>
                )}
                <div className="text-left! mt-10">
                  <Link href="/" className="btn">
                    <ArrowLeft />
                    Back to Home
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-base-content/70">
              Have questions?{" "}
              <Link href="/" className="text-primary hover:underline">
                Learn more about Siona
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
