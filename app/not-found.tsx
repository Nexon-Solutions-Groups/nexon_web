import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-signal">404</p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
          This page is not in the catalogue.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-mist">
          The URL does not match a product we ship — or anything else on this site.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/products" variant="outline">
            Products
          </Button>
        </div>
        <p className="mt-8 text-sm text-mist">
          Or go to{" "}
          <Link href="/nexon-kds" className="text-paper underline-offset-4 hover:underline">
            Nexon KDS
          </Link>
          ,{" "}
          <Link href="/nexon-pos" className="text-paper underline-offset-4 hover:underline">
            Nexon POS
          </Link>
          ,{" "}
          <Link href="/flockify" className="text-paper underline-offset-4 hover:underline">
            Flockify
          </Link>
          {" "}
          or{" "}
          <Link href="/custom-software" className="text-paper underline-offset-4 hover:underline">
            custom software
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
