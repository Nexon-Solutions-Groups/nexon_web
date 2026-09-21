import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CeoSection } from "@/components/CeoSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a demo or scoping call with NEXONS GROUP. Email ${site.email}. Serving Pakistan and worldwide from Islamabad.`,
};

export default function ContactPage() {
  const { address } = site;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the operation."
        description="A kitchen, a farm, a group, or a custom system — in Pakistan or anywhere else in the world. Send the context. We will come back with a walkthrough in your timezone, not a generic pitch."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-signal" />
                  <a href={`mailto:${site.email}`} className="hover:text-signal">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-signal" />
                  <span>
                    
                    <br />
                    {address.line1}
                    <br />
                    {address.city} {address.postal}
                    <br />
                    {address.country}
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-[28px] border border-line bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      <CeoSection />
    </>
  );
}
