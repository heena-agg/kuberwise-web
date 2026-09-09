import { Clause, LegalLayout, Todo } from './LegalLayout';
import { EMAIL } from '@/lib/site';

export function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy"
      intro="How personal data submitted through this website is handled, who else sees it, and how to ask us to delete it."
    >
      <Clause heading="Who we are">
        <p>
          This site is operated by Kuberwise. <Todo>registered entity name, company
          number, and registered address once incorporation completes</Todo>.
        </p>
        <p>
          <Todo>whether a data protection officer or named privacy contact is
          required, and who that is</Todo>.
        </p>
      </Clause>

      <Clause heading="What this notice covers">
        <p>
          This notice covers the Kuberwise marketing website only. Data processed
          inside a customer's Stockraze deployment is governed by the contract
          with that customer, not by this page. <Todo>link to the customer-facing
          data processing agreement once it exists</Todo>.
        </p>
      </Clause>

      <Clause heading="What we collect">
        <p>
          When you use the contact form we collect the name, email address,
          optional company name, optional site-count band, and message you enter.
          We do not ask for anything else and the form stores nothing in your
          browser.
        </p>
        <p>
          <Todo>confirm whether any analytics or tag manager is added before
          launch. As built, this site loads no analytics, sets no cookies of its
          own, and does no tracking. If that changes, this clause and the cookies
          clause below both have to change with it</Todo>.
        </p>
        <p>
          Web fonts are loaded from Google Fonts, which means Google receives the
          IP address of visitors as part of serving those files.{' '}
          <Todo>decide whether to self-host the fonts to avoid this, which is a
          small build change and removes the disclosure entirely</Todo>.
        </p>
      </Clause>

      <Clause heading="Why we use it, and on what basis">
        <p>
          We use what you send solely to reply to you and to carry on the
          resulting conversation. We do not add contact-form submissions to a
          marketing list.
        </p>
        <p>
          <Todo>state the lawful basis in the wording your jurisdiction expects —
          consent, or legitimate interests with the balancing test recorded</Todo>.
        </p>
      </Clause>

      <Clause heading="Who else sees it">
        <p>
          Contact form submissions are delivered by Formspree, a third-party form
          service, which therefore receives and stores the contents of your
          message in order to pass it to us.
        </p>
        <p>
          <Todo>confirm Formspree's processing location and retention period from
          their current data processing addendum, sign it, and state both here.
          If cross-border transfer applies, name the transfer mechanism</Todo>.
        </p>
        <p>
          <Todo>list any other processor added later — email host, CRM, hosting
          provider — with the same detail</Todo>.
        </p>
      </Clause>

      <Clause heading="How long we keep it">
        <p>
          <Todo>set a concrete retention period for enquiries that do not become
          customers, and a separate one for those that do. A period stated here
          has to match what actually happens in the inbox</Todo>.
        </p>
      </Clause>

      <Clause heading="Cookies">
        <p>
          As built, this website sets no cookies and uses no local storage.
          Nothing here requires a consent banner.
        </p>
        <p>
          <Todo>revisit if analytics, embedded video, or a chat widget is ever
          added — any of those will change this answer</Todo>.
        </p>
      </Clause>

      <Clause heading="Your rights">
        <p>
          <Todo>enumerate the rights that apply — typically access, correction,
          erasure, objection, portability and complaint to a supervisory
          authority — in the terms of the governing regime, and state the
          response window you commit to</Todo>.
        </p>
        <p>
          To exercise any of them, or to have your enquiry deleted, write to{' '}
          <a href={`mailto:${EMAIL.general}`} className="link-underline text-ink">
            {EMAIL.general}
          </a>
          .
        </p>
      </Clause>

      <Clause heading="Security">
        <p>
          The site is served over HTTPS and form submissions are posted over
          HTTPS. <Todo>describe the organisational measures — who has access to
          the enquiry inbox, and how that access is secured</Todo>.
        </p>
      </Clause>

      <Clause heading="Changes to this notice">
        <p>
          <Todo>state how changes are communicated and keep the last-updated date
          below accurate from the first publication onward</Todo>.
        </p>
      </Clause>
    </LegalLayout>
  );
}
