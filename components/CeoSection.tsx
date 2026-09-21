"use client";

import { site } from "@/lib/site";

export function CeoSection() {
  const { name, title, bio } = site.ceo;

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
          </div>
        </div>
      </div>
    </section>
  );
}
