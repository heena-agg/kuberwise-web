import { Clause, LegalLayout, Todo } from './LegalLayout';
import { EMAIL } from '@/lib/site';

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms"
      intro="The terms on which this website is made available. Use of the Stockraze product itself is governed by a separate written agreement."
    >
      <Clause heading="Scope">
        <p>
          These terms cover this website only. Access to the Stockraze product,
          including any pilot or proof engagement, is governed by a separate
          signed agreement and nothing on this page varies it.{' '}
          <Todo>link to the customer agreement once it exists</Todo>.
        </p>
      </Clause>

      <Clause heading="Who you are contracting with">
        <p>
          <Todo>registered entity name, company number, and registered address
          once incorporation completes. These terms cannot be relied on until the
          contracting party is named</Todo>.
        </p>
      </Clause>

      <Clause heading="Use of this site">
        <p>
          You may read this site and get in touch through it. You may not attempt
          to interfere with its operation, gain unauthorised access to any part of
          it, or use it to send unlawful or abusive material.
        </p>
        <p>
          <Todo>decide whether automated scraping needs an explicit prohibition,
          and whether that is worth enforcing</Todo>.
        </p>
      </Clause>

      <Clause heading="Intellectual property">
        <p>
          The Kuberwise and Stockraze names, logos, copy and design on this site
          belong to Kuberwise unless stated otherwise.
        </p>
        <p>
          <Todo>confirm trade mark status for both names before asserting rights
          in them, and record the position on the fonts and any third-party
          assets used in the build</Todo>.
        </p>
      </Clause>

      <Clause heading="Accuracy of what is described here">
        <p>
          Product descriptions on this site explain how Stockraze is designed to
          work. They are not a specification, a warranty, or a commitment to
          particular results in your environment.
        </p>
        <p>
          <Todo>have this clause reviewed against the claims actually made on the
          product page — in particular the figures in the stat band and the
          security assertions — so the two cannot contradict each other</Todo>.
        </p>
      </Clause>

      <Clause heading="No warranty">
        <p>
          <Todo>standard disclaimer for site availability and content, in the
          wording your jurisdiction requires for it to be effective</Todo>.
        </p>
      </Clause>

      <Clause heading="Limitation of liability">
        <p>
          <Todo>this clause needs drafting by a lawyer. Liability caps and
          carve-outs vary by jurisdiction and an unenforceable clause is worse
          than none. Do not fill this in from a template found online</Todo>.
        </p>
      </Clause>

      <Clause heading="Links to other sites">
        <p>
          This site links to third parties, including Formspree for form
          submissions and Google Fonts for typefaces. We are not responsible for
          their content or their practices, and their own terms apply when you
          reach them.
        </p>
      </Clause>

      <Clause heading="Governing law">
        <p>
          <Todo>state the governing law and the courts with jurisdiction. This
          follows from where the entity is registered, so it cannot be settled
          before that is</Todo>.
        </p>
      </Clause>

      <Clause heading="Changes">
        <p>
          <Todo>state how changes take effect and keep the last-updated date below
          accurate</Todo>.
        </p>
      </Clause>

      <Clause heading="Contact">
        <p>
          Questions about these terms go to{' '}
          <a href={`mailto:${EMAIL.general}`} className="link-underline text-ink">
            {EMAIL.general}
          </a>
          .
        </p>
      </Clause>
    </LegalLayout>
  );
}
