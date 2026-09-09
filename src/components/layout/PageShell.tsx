import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useReveal } from '@/lib/useReveal';
import type { Brand } from '@/lib/seo';
import { COMPANY_NAV, PRODUCT_NAV, type NavLink } from '@/lib/site';

const DEFAULT_CTA: Record<Brand, NavLink> = {
  kuberwise: { label: 'Talk to us', href: 'contact.html' },
  stockraze: { label: 'Request a walkthrough', href: 'contact.html' },
};

/** Skip link, header, main, footer — the frame every page renders inside. */
export function PageShell({
  brand,
  cta,
  children,
}: {
  brand: Brand;
  cta?: NavLink;
  children: ReactNode;
}) {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        brand={brand}
        links={brand === 'stockraze' ? PRODUCT_NAV : COMPANY_NAV}
        cta={cta ?? DEFAULT_CTA[brand]}
      />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
