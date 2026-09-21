"use client";

import { Mail } from "lucide-react";
import { site } from "@/lib/site";

export function CeoSection() {
  const { name, title, email, bio } = site.ceo;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-line bg-surface p-8 sm:p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {title}
              </h2>
              <p className="text-lg text-signal font-medium">{name}</p>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {bio}
            </p>

            <div className="pt-4 border-t border-line">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-signal hover:text-glow transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
