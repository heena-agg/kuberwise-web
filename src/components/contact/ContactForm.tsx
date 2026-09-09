import { useId, useRef, useState, type FormEvent } from 'react';
import { AlertCircle, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';
import { EMAIL } from '@/lib/site';

/**
 * Formspree-backed contact form.
 *
 * Provenance worth stating plainly: submissions go to Formspree, a third party,
 * which therefore receives the name, email address and message of everyone who
 * writes in. Nothing is persisted or logged on our side — the payload is built,
 * posted, and discarded.
 *
 * The endpoint id is public by design (it is the visible half of a Formspree
 * URL). It is read from VITE_FORMSPREE_ID, which Vite inlines into the bundle,
 * so it must never be used for anything that is actually secret.
 */
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Values {
  name: string;
  email: string;
  company: string;
  sites: string;
  message: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: '', email: '', company: '', sites: '', message: '' };

// Deliberately permissive. The address is confirmed by whether the reply
// arrives, not by how clever the pattern is.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please give us an email address to reply to.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That does not look like an email address.';
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = 'Please tell us what you are trying to solve.';
  } else if (message.length < 20) {
    errors.message = 'A little more detail will get you a better first reply.';
  }

  return errors;
}

const fieldClasses = (invalid: boolean) =>
  cn(
    'w-full rounded-xl border bg-surface px-4 py-3 text-[0.9375rem] text-ink',
    'placeholder:text-ink-faint transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper',
    invalid ? 'border-red-500' : 'border-line-strong hover:border-ink/40',
  );

export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [failureMessage, setFailureMessage] = useState('');

  const set = (key: keyof Values) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    // Clear the error as soon as the field is touched, so the form stops
    // shouting while someone is fixing it.
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
  };

  const describedBy = (key: keyof Values) => (errors[key] ? `${formId}-${key}-error` : undefined);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as (keyof Values)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Honeypot: a real person never sees this field, so anything in it is a bot.
    // Report success without sending, rather than telling the bot it was caught.
    const honeypot = new FormData(event.currentTarget).get('_gotcha');
    if (typeof honeypot === 'string' && honeypot.length > 0) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setFailureMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          sites: values.sites,
          message: values.message.trim(),
          _subject: `Kuberwise enquiry — ${values.name.trim()}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree responded ${response.status}`);
      }

      setStatus('success');
      setValues(EMPTY);
    } catch {
      // The caught error is not logged: it can contain the request body, and
      // that body is somebody's contact details.
      setStatus('error');
      setFailureMessage(
        'We could not send that just now. Please try again, or email us directly.',
      );
    }
  }

  if (!FORMSPREE_ID) {
    return (
      <div className="rounded-2xl border border-dashed border-line-strong p-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Form not configured
        </p>
        <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
          The form is built and ready, but no Formspree endpoint is set. Create a
          form at formspree.io, put its id in <code className="font-mono text-ink">VITE_FORMSPREE_ID</code>{' '}
          in <code className="font-mono text-ink">.env</code>, and rebuild. Until then, email
          works fine.
        </p>
        <a
          href={`mailto:${EMAIL.general}`}
          className="link-underline mt-6 inline-block text-ink"
        >
          {EMAIL.general}
        </a>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-surface p-10 text-center"
      >
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="h3 mt-6 text-xl">That's with us.</h2>
        <p className="mx-auto mt-3 max-w-prose leading-relaxed text-ink-soft">
          We read every message ourselves and normally reply within one working
          day. If it is urgent, {EMAIL.general} reaches the same inbox.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      {status === 'error' ? (
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-ink"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
          <span>
            {failureMessage}{' '}
            <a href={`mailto:${EMAIL.general}`} className="link-underline">
              {EMAIL.general}
            </a>
          </span>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={fieldClasses(Boolean(errors.name))}
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className={fieldClasses(Boolean(errors.email))}
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-company`} className="mb-2 block text-sm font-medium text-ink">
            Company <span className="font-normal text-ink-faint">(optional)</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set('company')}
            className={fieldClasses(false)}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-sites`} className="mb-2 block text-sm font-medium text-ink">
            Sites <span className="font-normal text-ink-faint">(optional)</span>
          </label>
          <select
            id={`${formId}-sites`}
            name="sites"
            value={values.sites}
            onChange={set('sites')}
            className={cn(fieldClasses(false), 'appearance-none')}
          >
            <option value="">Prefer not to say</option>
            <option value="1">1 site</option>
            <option value="2-10">2–10 sites</option>
            <option value="11-50">11–50 sites</option>
            <option value="50+">More than 50</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-sm font-medium text-ink">
          What are you trying to solve?
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={set('message')}
          placeholder="What your systems produce today, and what you suspect is quietly costing you."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={cn(fieldClasses(Boolean(errors.message)), 'resize-y')}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot. Hidden from sight and from assistive technology alike. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-gotcha`}>Leave this field empty</label>
        <input id={`${formId}-gotcha`} name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            'Send message'
          )}
        </Button>
        <p aria-live="polite" className="text-sm text-ink-faint">
          {status === 'submitting' ? 'Sending your message…' : 'We reply within one working day.'}
        </p>
      </div>

      <p className="max-w-prose text-xs leading-relaxed text-ink-faint">
        Submissions are delivered through Formspree, which processes the details
        you enter here in order to pass them to us. We use them only to reply.
      </p>
    </form>
  );
}
