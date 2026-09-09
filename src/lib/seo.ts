import { SITE_URL } from './site';

export type Brand = 'kuberwise' | 'stockraze';

export interface PageMeta {
  /** Filename served at the site root, e.g. `about.html`. */
  path: string;
  title: string;
  description: string;
  brand: Brand;
}

/**
 * Every page's metadata, in one place.
 *
 * The static `<head>` in each HTML file is what crawlers actually read — this
 * map is the source those tags are copied from, and `applySeo` re-asserts it at
 * runtime so a page cannot silently drift after an edit. In development the
 * mismatch is logged rather than fixed quietly.
 */
export const PAGES = {
  index: {
    path: 'index.html',
    title: 'Kuberwise — The Intelligent Path to Value',
    description:
      'Kuberwise builds operational software that finds the value already sitting inside your business and turns it into decisions your team can act on. Flagship product: Stockraze.',
    brand: 'kuberwise',
  },
  about: {
    path: 'about.html',
    title: 'About — Kuberwise',
    description:
      'Why Kuberwise exists, what we believe about operational software, and how we work with the teams who run the floor.',
    brand: 'kuberwise',
  },
  pricing: {
    path: 'pricing.html',
    title: 'Pricing — Kuberwise',
    description:
      'How Kuberwise engagements are structured: a paid pilot on one site, then per-site subscription. Talk to us for figures.',
    brand: 'kuberwise',
  },
  contact: {
    path: 'contact.html',
    title: 'Contact — Kuberwise',
    description:
      'Send us one export from one site and we will show you what Stockraze would have flagged, and what it was worth.',
    brand: 'kuberwise',
  },
  privacy: {
    path: 'privacy.html',
    title: 'Privacy — Kuberwise',
    description: 'How Kuberwise handles personal data collected through this website.',
    brand: 'kuberwise',
  },
  terms: {
    path: 'terms.html',
    title: 'Terms — Kuberwise',
    description: 'The terms that govern use of the Kuberwise website.',
    brand: 'kuberwise',
  },
} satisfies Record<string, PageMeta>;

export type PageId = keyof typeof PAGES;

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attr, value);
    return true;
  }
  return false;
}

/**
 * Re-asserts the page's title, description, canonical and Open Graph tags from
 * `PAGES`. The static markup should already match; this is a safety net for
 * hand-edited HTML, and it warns in development when the two disagree.
 */
export function applySeo(id: PageId) {
  const meta = PAGES[id];
  const url = `${SITE_URL}/${meta.path}`;

  if (import.meta.env.DEV && document.title !== meta.title) {
    // eslint-disable-next-line no-console
    console.warn(
      `[seo] ${meta.path}: static <title> is "${document.title}" but PAGES says "${meta.title}". Update the HTML.`,
    );
  }

  document.title = meta.title;
  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', url);

  if (!setMeta('link[rel="canonical"]', 'href', url)) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
}
