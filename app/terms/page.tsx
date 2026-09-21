import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactCard, LegalDoc, LegalSection } from "@/components/LegalDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Website and enquiry terms for ${site.name}. Software licences and custom work are agreed separately. Governing law: Pakistan.`,
};

const updated = "21 September 2026";
const host = site.url.replace("https://", "");

const toc = [
  { id: "agreement", label: "Agreement to these terms" },
  { id: "about", label: "About us" },
  { id: "website", label: "The website" },
  { id: "services", label: "Products and services" },
  { id: "quotes", label: "Quotes, orders and payment" },
  { id: "accounts", label: "Accounts and access" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "termination", label: "Suspension and termination" },
  { id: "law", label: "Governing law and disputes" },
  { id: "general", label: "General" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  const { address } = site;

  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Service"
      description={`These terms govern your use of ${host} and enquiries you send to ${site.name}. Paid software and custom work are covered by a separate written agreement.`}
      updated={updated}
      toc={toc}
    >
      <LegalSection id="agreement" title="1. Agreement to these terms">
        <p>
          By accessing this website, submitting the contact form, or otherwise using {host}, you
          agree to these Terms of Service (“Terms”) and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the site.
        </p>
        <p>
          If you use the site on behalf of a company, you confirm you have authority to bind that
          company, and “you” includes that company.
        </p>
      </LegalSection>

      <LegalSection id="about" title="2. About us">
        <p>
          This website is operated by <strong>{site.name}</strong> (“NEXONS”, “we”, “us”, “our”),
          based at {address.name}, {address.line1}, {address.city} {address.postal},{" "}
          {address.country}. We serve customers in Pakistan and worldwide.
        </p>
        <p>
          Contact: <Link href={`mailto:${site.email}`}>{site.email}</Link>. We do not publish a
          company telephone number on this site.
        </p>
      </LegalSection>

      <LegalSection id="website" title="3. The website">
        <p>
          {host} is a marketing and information site. Content is provided so you can learn about{" "}
          {site.name}, our products, and how to contact us. Descriptions, screenshots, mock
          interfaces, case-style quotes, and feature lists are illustrative. They are not a
          warranty that any product will operate in a particular environment without a scoped
          agreement.
        </p>
        <p>
          We may change, suspend, or discontinue any part of the website at any time, including
          product copy and availability of the contact form.
        </p>
      </LegalSection>

      <LegalSection id="services" title="4. Products and services">
        <p>Our commercial offerings include:</p>
        <ul>
          <li>
            <strong>Nexon KDS</strong> — kitchen display software for hospitality operations;
          </li>
          <li>
            <strong>Nexon POS</strong> — point-of-sale software for food service and related
            operations;
          </li>
          <li>
            <strong>Flockify</strong> — poultry farm management software;
          </li>
          <li>
            <strong>Custom software</strong> — bespoke systems designed around a customer’s
            workflow.
          </li>
        </ul>
        <p>
          Use of those products — including licences, hosting, support, service levels, and data
          processing — is governed by a separate proposal, order, statement of work, or licence
          (the “Customer Agreement”). These website Terms do not grant you a licence to any
          product, API, or hosted environment.
        </p>
        <p>
          Support coverage is described on our <Link href="/support">Support</Link> page for
          information. Contracted support commitments apply only if they are written into a
          Customer Agreement.
        </p>
      </LegalSection>

      <LegalSection id="quotes" title="5. Quotes, orders and payment">
        <p>
          We do not publish plan prices on this website. Rates, packages, implementation fees, and
          payment terms are provided on request through a demo or quote. Submitting the contact
          form or booking a demo is a request for information, not an order and not an obligation
          to buy.
        </p>
        <p>
          A paid engagement starts only when both parties accept a Customer Agreement (or you pay
          an invoice we issue under that agreement). Unless that document says otherwise, quotes
          are valid for the period stated on them, fees are exclusive of applicable taxes, and
          unpaid invoices may result in suspension of work or access.
        </p>
        <p>
          Refunds, if any, are as set out in the Customer Agreement. Website use itself is free of
          charge.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="6. Accounts and access">
        <p>
          This marketing website does not provide customer login accounts. If we later issue you
          credentials for a product, staging environment, or support portal, those credentials are
          personal to your organisation. You must keep them confidential, use them only as
          authorised, and tell us promptly if you believe they have been compromised.
        </p>
        <p>
          You are responsible for activity under accounts we issue to you under a Customer
          Agreement.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="7. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>use the site in any way that is unlawful, fraudulent, or harmful;</li>
          <li>
            attempt to gain unauthorised access to the site, our systems, or other customers’
            data;
          </li>
          <li>probe, scan, or load-test the site except with our prior written consent;</li>
          <li>
            submit malware, spam, or content that is defamatory, infringing, or otherwise
            objectionable through the contact form;
          </li>
          <li>
            scrape, harvest, or commercially republish site content except as allowed by ordinary
            browser use or search indexing;
          </li>
          <li>impersonate {site.name} or misrepresent your affiliation with us.</li>
        </ul>
        <p>
          We may refuse, block, or delete submissions and restrict access where we reasonably
          believe these rules have been broken.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="8. Intellectual property">
        <p>
          The website, its design, text, graphics, logos, product names (including NEXONS GROUP,
          Nexon KDS, Nexon POS, and Flockify), and software mocks are owned by {site.name} or our
          licensors. All rights not expressly granted are reserved.
        </p>
        <p>
          You may view and print pages for your internal evaluation of our products. You may not
          copy, modify, distribute, sell, or create derivative works from the site or our brands
          without our prior written permission, except for brief quotation with attribution in
          ordinary business correspondence.
        </p>
        <p>
          Feedback you send (ideas, suggestions, error reports) may be used by us without
          obligation to you.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="9. Disclaimers">
        <p>
          The website is provided “as is” and “as available.” To the fullest extent permitted by
          law, we disclaim all warranties, express or implied, including merchantability, fitness
          for a particular purpose, and non-infringement in relation to this website.
        </p>
        <p>
          We do not warrant that the site will be uninterrupted, error-free, or free of harmful
          components, or that product descriptions are complete for your specific operation.
          Operational software is sold and supported only under a Customer Agreement.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, {site.name} is not liable for
          indirect, incidental, special, consequential, or punitive loss, or for lost profits,
          lost revenue, lost data, or business interruption, arising from your use of this website
          or reliance on its content, even if we have been advised of the possibility of such
          loss.
        </p>
        <p>
          Our total liability arising out of or relating to the website and these Terms is limited
          to PKR 10,000 (or the equivalent in the currency of the claim). This cap does not apply
          to liability that cannot legally be limited, including liability for death or personal
          injury caused by negligence, or for fraud.
        </p>
        <p>
          Liability for paid products and custom software is defined solely in the relevant
          Customer Agreement — not by this website cap.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="11. Indemnity">
        <p>
          You will defend and indemnify {site.name} and our officers, employees, and agents against
          claims, damages, and reasonable costs arising from your misuse of the site, your
          violation of these Terms, or content you submit through the contact form, except to the
          extent caused by our wilful misconduct.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="12. Suspension and termination">
        <p>
          We may suspend or terminate access to the website at any time, including if you breach
          these Terms. You may stop using the site at any time. Sections that by nature should
          survive (including intellectual property, disclaimers, liability, indemnity, and
          governing law) remain in effect.
        </p>
        <p>
          Ending website use does not cancel a Customer Agreement. Product subscriptions and
          custom-work engagements end only as that agreement provides.
        </p>
      </LegalSection>

      <LegalSection id="law" title="13. Governing law and disputes">
        <p>
          These Terms and any dispute arising out of the website or an enquiry you send through it
          are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict
          of law rules.
        </p>
        <p>
          The courts at Islamabad, Pakistan have exclusive jurisdiction, except that we may seek
          injunctive or equivalent relief in any forum to protect our intellectual property or
          confidential information.
        </p>
        <p>
          Customer Agreements may specify a different dispute process for paid work. That process
          applies to those contracts.
        </p>
      </LegalSection>

      <LegalSection id="general" title="14. General">
        <p>
          If a provision of these Terms is held unenforceable, the rest remains in effect. We may
          update these Terms by posting a new version on this page; the “Last updated” date will
          change. Continued use of the site after a change constitutes acceptance. These Terms are
          the entire agreement between you and us regarding the website. They do not create a
          partnership, employment, or agency relationship. You may not assign these Terms without
          our consent; we may assign them in connection with a reorganisation or sale of assets.
        </p>
        <p>
          These Terms are in English. If we provide a translation, the English version controls
          unless mandatory local law says otherwise.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact">
        <p>Questions about these Terms:</p>
        <LegalContactCard
          name={site.name}
          lines={[
            `${address.name}, ${address.line1}`,
            `${address.city} ${address.postal}`,
            address.country,
          ]}
          email={site.email}
        />
      </LegalSection>
    </LegalDoc>
  );
}
