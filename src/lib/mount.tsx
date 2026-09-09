import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { applySeo, PAGES, type PageId } from './seo';
import '../styles.css';

/**
 * Bootstrap shared by every page entry. Each entry is three lines: import the
 * page component, import this, call it.
 *
 * The theme class is also written statically on <html> in each HTML file so the
 * first paint is already themed; setting it here keeps the two in step if a
 * file is missed.
 */
export function mount(id: PageId, page: ReactNode) {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error(`mount(${id}): no #root element in ${PAGES[id].path}`);
  }

  document.documentElement.classList.add(`theme-${PAGES[id].brand}`, 'js-reveal');
  applySeo(id);

  createRoot(container).render(<StrictMode>{page}</StrictMode>);
}
