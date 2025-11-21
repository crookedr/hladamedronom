"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";

const URGENT_PHONE = "+421 911 919 140";
const PhoneRegex = /^\+?[0-9\s]{7,20}$/;

const Schema = z.object({
  firstName: z.string().min(2, "Zadaj aspoň 2 znaky"),
  lastName: z.string().min(2, "Zadaj aspoň 2 znaky"),
  phone: z
    .string()
    .min(7, "Zadaj telefónne číslo")
    .regex(PhoneRegex, "Len čísla, medzery a „+“, min. 7 znakov"),
  email: z.string().email("Zadaj platný email"),
  message: z.string().min(10, "Napíš aspoň 10 znakov"),
});
type FormData = z.infer<typeof Schema>;

type W3FResp =
  | { success: true; message: string }
  | { success: false; message: string; code?: number; errors?: unknown };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(Schema) });

  const [result, setResult] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!showThanks) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showThanks]);

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
    ];
    if (allowedKeys.includes(e.key)) return;

    const isDigit = e.key >= "0" && e.key <= "9";
    const isPlus = e.key === "+";
    const isSpace = e.key === " ";

    if (!isDigit && !isPlus && !isSpace) e.preventDefault();
  };
  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const raw = (e.target as HTMLInputElement).value;
    const cleaned = raw.replace(/[^\d+\s]/g, "");
    if (cleaned !== raw) setValue("phone", cleaned, { shouldValidate: true });
  };

  const onSubmit = async (values: FormData) => {
    setResult("");

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setResult("❌ Chýba NEXT_PUBLIC_WEB3FORMS_KEY v .env.local");
      return;
    }

    const fullName = `${values.firstName} ${values.lastName}`.trim();

    const fd = new FormData();
    fd.append("access_key", key);
    fd.append("name", fullName);
    fd.append("email", values.email);
    fd.append("phone", values.phone);
    fd.append("message", values.message);
    fd.append("from_name", fullName);
    fd.append("from_email", values.email);
    fd.append("replyto", values.email);
    fd.append("subject", "Nová správa z kontaktného formulára");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const raw = await res.text();
      let data: W3FResp | null = null;
      try {
        data = JSON.parse(raw) as W3FResp;
      } catch {
      }

      if (!res.ok) {
        setResult(`❌ HTTP ${res.status}${data?.message ? ` – ${data.message}` : ""}`);
        return;
      }

      if (data && data.success) {
        setShowThanks(true);
        reset();
        setResult("");
      } else {
        setResult(`❌ ${data?.message || "Neznáma chyba servera"}`);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setResult(`❌ Nepodarilo sa odoslať (${msg})`);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-white/20 py-3 outline-none text-white " +
    "placeholder-white/40 focus:border-emerald-500 transition";
  const labelBase = "block text-sm mb-1 text-white/70";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label className={labelBase}>Meno *</label>
            <input
              {...register("firstName")}
              placeholder="Meno"
              className={inputBase}
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className={labelBase}>Priezvisko *</label>
            <input
              {...register("lastName")}
              placeholder="Priezvisko"
              className={inputBase}
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label className={labelBase}>Telefón *</label>
            <input
              {...register("phone")}
              type="tel"
              inputMode="tel"
              placeholder="+421 911 111 111"
              className={inputBase}
              onKeyDown={handlePhoneKeyDown}
              onInput={handlePhoneInput}
              aria-invalid={!!errors.phone}
              maxLength={20}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className={labelBase}>Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="email@gmail.com"
              className={inputBase}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelBase}>Správa *</label>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Sem napíšte viac detailov o situácii…"
            className={inputBase + " resize-none"}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-2 flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer rounded-full px-8 py-3 text-sm font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-all disabled:opacity-60"
          >
            {isSubmitting ? "Odosielam…" : "✉️ Odoslať"}
          </button>

          {result && (
            <p
              className={`text-sm ${
                result.includes("❌") ? "text-red-400" : "text-emerald-400"
              }`}
              role="status"
              aria-live="polite"
            >
              {result}
            </p>
          )}
        </div>
      </form>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {showThanks && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6 z-[2147483647]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowThanks(false)}
              >
                <motion.div
                  className="max-w-md w-full text-center"
                  initial={{ y: 20, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 10, opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.svg viewBox="0 0 120 120" className="mx-auto mb-6" width={90} height={90}>
                    <motion.circle
                      cx="60" cy="60" r="50"
                      fill="none"
                      stroke="rgb(16 185 129)"
                      strokeWidth="8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M38 62 L54 78 L84 46"
                      fill="none"
                      stroke="rgb(16 185 129)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.35, ease: "easeInOut" }}
                    />
                  </motion.svg>

                  <h3 className="text-2xl font-semibold mb-2">Ďakujeme za správu!</h3>
                  <p className="text-white/80">
                    Ozveme sa čo najskôr. Pre urgentné prípady, prosím, volajte{" "}
                    <span className="font-semibold text-white">{URGENT_PHONE}</span>.
                  </p>

                  <button
                    onClick={() => setShowThanks(false)}
                    className="mt-8 rounded-full px-6 py-3 text-sm font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition"
                  >
                    Pokračovať
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
