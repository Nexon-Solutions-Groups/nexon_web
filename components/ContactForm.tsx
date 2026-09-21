"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
          interest: String(data.get("interest") ?? ""),
          message: String(data.get("message") ?? ""),
          _subject: `NEXONS enquiry — ${String(data.get("name") ?? "")}`,
          _replyto: String(data.get("email") ?? ""),
          _template: "table",
          _captcha: "false",
        }),
      });

      const payload = (await response.json()) as { success?: string | boolean };
      if (!response.ok || payload.success === "false" || payload.success === false) {
        throw new Error("Could not send");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError("Could not send message. Email support.nexons@gmail.com.");
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
        <p className="text-sm text-glow">Thank you. We have received your message and will reply shortly.</p>
      )}
      {status === "error" && <p className="text-sm text-red-300">{error}</p>}
    </form>
  );
}
