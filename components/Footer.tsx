import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks, products, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Operational software, catalogue products and custom builds — based in Islamabad, with
              24/7 support across Pakistan, the Americas, EMEA and Asia-Pacific.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Products</h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/products" className="text-sm text-paper/80 transition hover:text-paper">
                    All products
                  </Link>
                </li>
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link href={product.href} className="text-sm text-paper/80 transition hover:text-paper">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Company</h4>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-paper/80 transition hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Legal</h4>
              <ul className="mt-4 space-y-2.5">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-paper/80 transition hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            {site.address.city}, {site.address.country} · {site.email}
          </p>
        </div>
      </Container>
    </footer>
  );
}
