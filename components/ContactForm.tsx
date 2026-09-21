"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Something went wrong");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send message");
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-2xl border border-line bg-fill px-4 py-3 text-sm text-paper outline-none transition placeholder:text-mist/70 focus:border-signal/60";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-mist">Name</span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-mist">Email</span>
          <input name="email" type="email" required className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-mist">Company</span>
        <input name="company" className={field} placeholder="Your company" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-mist">Interest</span>
        <select name="interest" className={`${field} appearance-none bg-surface`}>
          <option value="nexon-kds">Nexon KDS</option>
          <option value="nexon-pos">Nexon POS</option>
          <option value="flockify">Flockify</option>
          <option value="custom-software">Custom software</option>
          <option value="several">Several products</option>
          <option value="other">Not sure yet</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-mist">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Tell us about the operation — sites, systems, timeline."
        />
      </label>
      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
      </Button>
      {status === "sent" && (
        <p className="text-sm text-glow">Thanks — we will come back to you shortly.</p>
      )}
      {status === "error" && <p className="text-sm text-red-300">{error}</p>}
    </form>
  );
}
