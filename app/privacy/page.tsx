import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactCard, LegalDoc, LegalSection } from "@/components/LegalDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information on nexonsgroup.com. Contact ${site.email}.`,
};

const updated = "21 September 2026";
const host = site.url.replace("https://", "");

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "scope", label: "Scope of this policy" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "sharing", label: "How we share information" },
  { id: "retention", label: "Retention" },
  { id: "security", label: "Security" },
  { id: "cookies", label: "Cookies and local storage" },
  { id: "transfers", label: "International transfers" },
  { id: "rights", label: "Your rights" },
  { id: "children", label: "Children" },
  { id: "links", label: "Third-party links" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "How to contact us" },
];

export default function PrivacyPage() {
  const { address } = site;

  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      description={`This policy explains what ${site.name} collects on ${host}, why we collect it, and the choices you have. We do not sell personal information.`}
      updated={updated}
      toc={toc}
    >
      <LegalSection id="who-we-are" title="1. Who we are">
        <p>
          This website is operated by <strong>{site.name}</strong> (“NEXONS”, “we”, “us”, “our”), a
          software company headquartered at {address.line1}, {address.city}{" "}
          {address.postal}, {address.country}.
        </p>
        <p>
          We build operational software for businesses in Pakistan and worldwide, including Nexon
          KDS, Nexon POS, Flockify, and custom software. For privacy questions, email{" "}
          <Link href={`mailto:${site.email}`}>{site.email}</Link>. We do not publish a company phone
          number.
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope of this policy">
        <p>
          This policy applies to personal information collected through this marketing website,
          including the contact form at{" "}
          <Link href="/contact">{host}/contact</Link>, and related communications we send in
          response.
        </p>
        <p>
          It does not replace a customer contract, order form, or product-specific data processing
          terms that apply when you license Nexon KDS, Nexon POS, Flockify, or commission custom
          software. Those products may process operational data under a separate agreement. If
          those terms conflict with this policy for product use, the product agreement controls for
          that use.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="3. Information we collect">
        <p>
          <strong>Information you provide.</strong> If you submit the contact form we collect your
          name, email address, company (if you enter it), product interest, and message. Those
          fields are the only enquiry fields on the form. We do not ask for a phone number on this
          website.
        </p>
        <p>
          If you email us directly at {site.email}, we collect whatever you include in that
          correspondence (typically your email address, name, and the content of your message).
        </p>
        <p>
          <strong>Technical information.</strong> Like most websites, our hosting environment may
          process standard server logs when you visit — for example IP address, browser type,
          device or operating system, referring URL, pages requested, and timestamps. We use this
          to operate, secure, and diagnose the site. We do not currently run a third-party
          advertising or analytics pixel on this marketing site.
        </p>
        <p>
          <strong>Theme preference.</strong> If you use the light/dark toggle, your choice is stored
          in your browser (via local storage) so the site can remember it on later visits. That
          value is not sent to us as a profile about you.
        </p>
      </LegalSection>

      <LegalSection id="use" title="4. How we use information">
        <p>We use the information described above to:</p>
        <ul>
          <li>respond to demos, quotes, support, and other enquiries you send;</li>
          <li>understand which products you are interested in so we can reply usefully;</li>
          <li>operate, maintain, and protect this website;</li>
          <li>remember your display theme on this device;</li>
          <li>comply with law, enforce our terms, and defend our legal rights.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not use contact-form details to run
          third-party advertising networks.
        </p>
        <p>
          Where a privacy law requires a lawful basis to process personal data, we rely on: the
          steps needed to respond to your request; our legitimate interests in running a software
          business and securing this site; and, where required, your consent or a legal obligation.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="5. How we share information">
        <p>We share personal information only as needed to run the business:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who host this website, deliver email, or otherwise
            process data on our instructions. They are required to protect it and use it only for
            the work we ask them to do.
          </li>
          <li>
            <strong>Professional advisers</strong> (for example legal or accounting) where
            reasonably necessary.
          </li>
          <li>
            <strong>Authorities</strong> if we are required by law, court order, or to protect
            people, our customers, or {site.name}.
          </li>
          <li>
            A successor in a merger, acquisition, or similar transaction, subject to this policy or
            equivalent protection.
          </li>
        </ul>
        <p>We do not sell enquiry lists or rent them to marketers.</p>
      </LegalSection>

      <LegalSection id="retention" title="6. Retention">
        <p>
          We keep contact enquiries for as long as needed to handle your request, follow up on a
          demo or quote, and keep a reasonable business record — typically up to 24 months unless
          a longer period is required for a live commercial discussion, a legal claim, or
          bookkeeping. Server logs are kept for a shorter operational period unless we need them
          for security investigation. Theme preference stays on your device until you clear site
          data.
        </p>
      </LegalSection>

      <LegalSection id="security" title="7. Security">
        <p>
          We use reasonable technical and organisational measures appropriate to a marketing site
          and email-based sales process (including HTTPS on this site and restricted access to
          enquiry records). No method of transmission or storage is completely secure. Please do
          not send passwords, payment card numbers, or other highly sensitive secrets through the
          public contact form.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="8. Cookies and local storage">
        <p>
          This marketing site is not built around advertising cookies. We use local storage in your
          browser to remember light or dark theme if you toggle it. The site may set strictly
          necessary cookies that the hosting platform needs to deliver pages securely.
        </p>
        <p>
          We do not currently place third-party analytics, advertising, or social-tracking cookies
          on this website. If that changes, we will update this policy and, where the law requires
          it, provide a further notice or choice.
        </p>
        <p>
          You can clear cookies and local storage in your browser settings. Blocking all storage
          may reset your theme preference.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="9. International transfers">
        <p>
          {site.name} is based in Pakistan and serves customers in Pakistan and worldwide. If you
          contact us from another country, your information will be processed in Pakistan and may
          also be processed in other countries where our hosting or email providers operate.
        </p>
        <p>
          Those countries may have privacy laws that differ from the laws where you live. We take
          steps we consider appropriate to protect personal information when it is processed for
          us, including contractual commitments with providers where that is standard practice.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="10. Your rights">
        <p>
          Depending on where you live, you may have rights to access, correct, update, or delete
          personal information we hold about you, to object to or restrict certain processing, or
          to lodge a complaint with a data-protection authority.
        </p>
        <p>
          That includes individuals in Pakistan under applicable Pakistani law, and individuals in
          other jurisdictions to the extent those laws apply to our processing of their
          information. We will honour requests as required by the law that applies to you.
        </p>
        <p>
          To exercise a request, email <Link href={`mailto:${site.email}`}>{site.email}</Link> from
          the address you used to contact us, and tell us what you would like us to do. We may
          need to verify your identity before acting. We do not charge a fee for reasonable
          requests.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children">
        <p>
          This website and our products are for businesses and adult operators. We do not knowingly
          collect personal information from children. If you believe a child has submitted
          information to us, contact {site.email} and we will delete it.
        </p>
      </LegalSection>

      <LegalSection id="links" title="12. Third-party links">
        <p>
          The site may link to third-party websites (including social profiles). Their privacy
          practices are their own. We are not responsible for content or data handling on sites we
          do not operate.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes">
        <p>
          We may update this policy from time to time. The “Last updated” date at the top of the
          page will change when we do. Continued use of the website after an update means the
          revised policy applies to that use. If a change is material, we will provide a more
          prominent notice on this page.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. How to contact us">
        <p>
          For this policy, or to request access to or deletion of enquiry data, write to:
        </p>
        <LegalContactCard
          name={site.name}
          lines={[
            `${address.line1}`,
            `${address.city} ${address.postal}`,
            address.country,
          ]}
          email={site.email}
        />
      </LegalSection>
    </LegalDoc>
  );
}
