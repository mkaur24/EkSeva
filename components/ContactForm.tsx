"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const enquiryOptions = [
  "Volunteering opportunities",
  "Partnership and sponsorship",
  "Donation enquiries",
  "General questions"
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      subject: String(form.get("subject") || "").trim(),
      message: String(form.get("message") || "").trim(),
      interests: form.getAll("interests").map((value) => String(value))
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Unable to send your message right now.");
      }

      setStatus("sent");
      formElement.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send your message right now.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface-card rounded-[1.5rem] p-5 md:p-6">
      <p className="text-xs uppercase tracking-[0.12em] text-mute">What can we help with?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {enquiryOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 rounded-xl border border-line bg-white/70 px-3 py-2 text-sm text-ink">
            <input name="interests" type="checkbox" value={option} className="h-4 w-4 accent-black" />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="mb-1 block text-sm font-medium text-ink">Name</span>
        <input
          name="name"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1 block text-sm font-medium text-ink">Email</span>
        <input
          name="email"
          type="email"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink"
          placeholder="you@example.com"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1 block text-sm font-medium text-ink">Subject</span>
        <input
          name="subject"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1 block text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="focus-ring w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl border border-[rgba(18,18,18,0.12)] bg-[linear-gradient(180deg,#4f6c5a_0%,#3f5a4a_100%)] px-6 py-3 text-sm font-semibold text-[#f5f8f5] shadow-[0_10px_24px_rgba(63,90,74,0.22),inset_0_1px_0_rgba(255,255,255,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(63,90,74,0.26),inset_0_1px_0_rgba(255,255,255,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "sent" ? (
        <p className="mt-3 text-sm text-[color:#2f6b4f]">Message sent. Thank you for getting in touch.</p>
      ) : null}
      {status === "error" ? <p className="mt-3 text-sm text-[color:#8a2f2f]">{error}</p> : null}
    </form>
  );
}
