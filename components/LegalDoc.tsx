import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export function LegalDoc({
  eyebrow,
  title,
  description,
  updated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  toc: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <p className="text-sm text-mist">Last updated {updated}</p>
      </PageHero>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Contents</p>
              <nav className="mt-4 flex flex-col gap-1 border-l border-line pl-4">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="py-1 text-sm text-mist transition hover:text-paper"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="space-y-14">{children}</div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="legal-copy mt-5 space-y-4 text-[15px] leading-relaxed text-mist [&_a]:text-paper [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-signal [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-paper [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function LegalContactCard({
  name,
  lines,
  email,
}: {
  name: string;
  lines: string[];
  email: string;
}) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <p className="font-medium text-paper">{name}</p>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        <Link href={`mailto:${email}`}>{email}</Link>
      </p>
    </div>
  );
}
