"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

type Status = "idle" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`NEXONS enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    form.reset();
    setStatus("sent");
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
      <Button type="submit" className="w-full sm:w-auto">
        {status === "sent" ? "Email app opened" : "Send message"}
      </Button>
      {status === "sent" && (
        <p className="text-sm text-glow">Your email app should open with the message ready to send.</p>
      )}
    </form>
  );
}
