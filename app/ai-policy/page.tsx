import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "AI Policy",
  description: "Catton Consulting's principles for responsible use of artificial intelligence.",
};

export default function AiPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Responsible technology"
      title="AI Policy"
      lede="Our principles for using artificial intelligence carefully, transparently and with human accountability."
      ledeWidth={650}
      current="ai"
    >
      <section>
        <h2>Our approach</h2>
        <p>
          Catton Consulting may use artificial intelligence tools to support limited administrative, research,
          drafting and quality-review tasks. AI supports our work. It does not replace professional judgment, client
          communication or human accountability.
        </p>
      </section>
      <section>
        <h2>Human oversight</h2>
        <p>
          <span className="principle">A person remains responsible.</span> AI-assisted work is reviewed by a
          qualified team member before it is relied upon or shared. We do not use AI as the sole decision-maker for
          financial, employment, credit, legal or other significant decisions.
        </p>
      </section>
      <section>
        <h2>Accuracy and verification</h2>
        <p>
          AI systems can produce incomplete or incorrect information. We verify material facts, calculations and
          recommendations against appropriate records and reliable sources before using them in client work.
        </p>
      </section>
      <section>
        <h2>Privacy and confidentiality</h2>
        <p>
          We take client confidentiality seriously. We do not intentionally enter sensitive client information into
          public AI tools. When AI is used with business information, we select appropriate tools and settings, limit
          the data provided and follow our confidentiality and security practices.
        </p>
      </section>
      <section>
        <h2>Fairness and appropriate use</h2>
        <p>
          We aim to use AI in ways that are lawful, fair and relevant to the task. We do not use AI to impersonate
          people, create deceptive content, discriminate, or make unsupported claims about clients or third parties.
        </p>
      </section>
      <section>
        <h2>Transparency</h2>
        <p>
          We will provide reasonable information about our use of AI when it materially affects a client deliverable
          or process. Clients may ask questions about how technology is used in their work.
        </p>
      </section>
      <section>
        <h2>Third-party tools</h2>
        <p>
          AI services may be provided by third parties with their own security and privacy terms. We evaluate tools
          before business use and periodically review whether they remain appropriate for the information and task
          involved.
        </p>
      </section>
      <section>
        <h2>Policy updates</h2>
        <p>
          AI technology and related standards continue to evolve. We may revise this policy as our practices, tools
          or legal obligations change. The effective date above identifies the current version.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          For questions about this policy or our use of AI, email <a href="mailto:lisa@catton.com">lisa@catton.com</a>{" "}
          or call <a href="tel:+15074983086">507-498-3086</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
