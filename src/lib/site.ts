/**
 * Single source of truth for anything that appears on more than one page:
 * addresses, taglines, and navigation. Changing a link here changes it in the
 * header, the footer, and every page that references it.
 */

/**
 * TODO — replace once the real domain is registered. Used for canonical and
 * `og:url` tags, so it must be the live origin before launch.
 */
export const SITE_URL = 'https://kuberwise.com';

export const EMAIL = {
  general: 'hello@kuberwise.com',
  product: 'hello@stockraze.com',
  partnerships: 'partners@kuberwise.com',
} as const;

export const COMPANY = {
  name: 'Kuberwise',
  tagline: 'The Intelligent Path to Value',
  blurb:
    'We build operational software that finds the value already inside your business and turns it into decisions your team can act on.',
} as const;

export const PRODUCT = {
  name: 'Stockraze',
  tagline: 'Clear the dead weight. Accelerate your flow.',
  blurb:
    'Nightly dead-stock detection for retail and distribution. Connect, map, sync, detect, decide, digest.',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** Header nav on the Kuberwise-themed pages. */
export const COMPANY_NAV: NavLink[] = [
  { label: 'What we build', href: 'index.html#what-we-build' },
  { label: 'Approach', href: 'index.html#approach' },
  { label: 'Stockraze', href: 'stockraze.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Pricing', href: 'pricing.html' },
];

/** Header nav on the Stockraze product page. */
export const PRODUCT_NAV: NavLink[] = [
  { label: 'The problem', href: 'stockraze.html#problem' },
  { label: 'How it works', href: 'stockraze.html#how' },
  { label: 'Detection', href: 'stockraze.html#detection' },
  { label: 'For operators', href: 'stockraze.html#operators' },
  { label: 'Security', href: 'stockraze.html#security' },
  { label: 'Kuberwise', href: 'index.html' },
];

export const FOOTER_COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Stockraze', href: 'stockraze.html' },
      { label: 'How it works', href: 'stockraze.html#how' },
      { label: 'Detection', href: 'stockraze.html#detection' },
      { label: 'Security', href: 'stockraze.html#security' },
      { label: 'Pricing', href: 'pricing.html' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'What we build', href: 'index.html#what-we-build' },
      { label: 'Approach', href: 'index.html#approach' },
      { label: 'About', href: 'about.html' },
      { label: 'Contact', href: 'contact.html' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Terms', href: 'terms.html' },
    ],
  },
];
