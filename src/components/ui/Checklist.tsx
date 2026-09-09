import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Checklist({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3.5 leading-relaxed text-ink-soft">
          <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
