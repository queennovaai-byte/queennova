// ─────────────────────────────────────────────────────────────
//  TERMS OF SERVICE — CONTENT
//  All wording for /terms lives here so it is easy to edit.
//  - id       : anchor link target
//  - title    : section heading
//  - paragraphs/bullets : rendered in order listed within each block
// ─────────────────────────────────────────────────────────────
import { site } from "../config/site";

export type LegalSection = {
  id: string;
  title: string;
  blocks: Array<{ paragraphs?: string[]; bullets?: string[] }>;
};

export const termsIntro = `These Terms of Service (the "Terms") form a binding agreement between you and the operator of Queen Nova ("Queen Nova", "Nova", "we", "us"). They govern your access to and use of the Queen Nova website, application, and any related services (collectively, the "Service").`;

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of These Terms",
    blocks: [
      {
        paragraphs: [
          "By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and by our Privacy Policy. If you do not agree with any part of these Terms, do not access or use the Service.",
          "You must be at least the age of majority in your jurisdiction (or have the consent and supervision of a parent or legal guardian) to use the Service.",
        ],
      },
    ],
  },
  {
    id: "description",
    title: "2. Description of the Service",
    blocks: [
      {
        paragraphs: [
          "Queen Nova is a personal AI agent designed for personal productivity, study, and online business workflows. Depending on how you configure it, the Service can help you organize tasks, assist with study and research, use tools to work with your computer and files, retain useful information, and delegate specialized jobs to scoped sub-agents called Minions, which return structured results to Nova.",
          "When you choose to connect a supported third-party service, the Service can perform actions on that service on your behalf — for example, content publishing workflows handled by Nova's supervised content Minion (M1). Connecting third-party services is always optional and always requires your explicit authorization.",
          "The Service is actively developed. Features may be added, changed, or removed over time, and some capabilities may be offered in early or limited form.",
        ],
      },
    ],
  },
  {
    id: "responsibilities",
    title: "3. Your Account and Responsibilities",
    blocks: [
      {
        bullets: [
          "You are responsible for the accuracy of the information you provide to the Service.",
          "You are responsible for maintaining the security of your devices and for any activity carried out through your authorized connections.",
          "You are responsible for reviewing and approving content or actions that the Service prepares for you, including anything published through your connected accounts.",
          "You agree to use the Service in compliance with all applicable laws and regulations.",
        ],
      },
    ],
  },
  {
    id: "integrations",
    title: "4. Authorized Third-Party Integrations",
    blocks: [
      {
        paragraphs: [
          "The Service can connect to supported third-party platforms — currently including TikTok — only when you choose to sign in and grant access through that platform's official authorization (OAuth) flow. During this process you approve, on the third party's own page, the exact permissions the Service may use.",
          "Queen Nova acts on a connected service only within the scope of the permissions you granted, and only on your behalf and at your direction (including automated runs you have configured).",
        ],
        bullets: [
          "Your use of any third-party service remains subject to that service's own terms and policies — including, for TikTok, the TikTok Terms of Service and Community Guidelines.",
          "You can revoke the Service's access at any time, either from within the Service or directly in the third-party platform's settings (for TikTok: Profile → Settings and privacy → Security → Manage app permissions). Revoking access ends the Service's ability to act on that platform.",
          "Access credentials and tokens received through OAuth are used solely to provide the integration you authorized, as described in our Privacy Policy.",
          "We are not responsible for the availability, content, or practices of third-party services.",
        ],
      },
    ],
  },
  {
    id: "minions",
    title: "5. Minions and Automated Actions",
    blocks: [
      {
        paragraphs: [
          "Minions are specialized sub-agents that Nova supervises. A Minion receives only the capabilities and permissions needed for its assigned job and returns a structured result to Nova. You remain responsible for actions taken through your accounts, so you should configure delegation and automation thoughtfully.",
          "Content publishing features are operated at your instruction and within permissions you have granted. Do not configure the Service to publish content you have not reviewed or do not have the right to use.",
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use",
    blocks: [
      {
        paragraphs: ["You agree not to use the Service to:"],
        bullets: [
          "Break any law, or to create, process, or publish illegal, harmful, deceptive, defamatory, or infringing content.",
          "Send spam, manipulate platform metrics, generate fake engagement, or otherwise abuse third-party platforms.",
          "Infringe intellectual-property or privacy rights of any person.",
          "Attempt to reverse engineer, disrupt, overload, or gain unauthorized access to the Service or its systems.",
          "Circumvent, remove, or bypass security controls, permission scopes, or rate limits of the Service or any connected platform.",
          "Use the Service to violate the terms of any third-party service.",
        ],
      },
      {
        paragraphs: [
          "We may suspend or restrict access where we reasonably believe this policy has been violated.",
        ],
      },
    ],
  },
  {
    id: "your-content",
    title: "7. Your Content",
    blocks: [
      {
        paragraphs: [
          "You retain all ownership rights in the content, files, goals, and instructions you provide to the Service. You grant us a limited license to process that content solely as needed to operate the Service for you — for example, to prepare or publish a video you have provided through an integration you authorized.",
          "You represent that you own or have the necessary rights to any content you direct the Service to use, adapt, or publish, and that such use does not violate any law or third-party right.",
        ],
      },
    ],
  },
  {
    id: "ip",
    title: "8. Intellectual Property",
    blocks: [
      {
        paragraphs: [
          "The Queen Nova name, logo, software, design, and documentation are the intellectual property of the operator of the Service. These Terms grant you a limited, non-exclusive, non-transferable right to access and use the Service for its intended purpose; no other rights are granted.",
          "If you send feedback or suggestions, you agree we may use them to improve the Service without obligation to you.",
          "Third-party marks — including TikTok and YouTube — belong to their respective owners. Queen Nova is an independent product and is not affiliated with, sponsored, or endorsed by those companies.",
        ],
      },
    ],
  },
  {
    id: "disclaimers",
    title: "9. Disclaimers",
    blocks: [
      {
        paragraphs: [
          "The Service is provided on an \"as is\" and \"as available\" basis, without warranties of any kind, whether express, implied, or statutory — including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
          "AI-generated output can be incomplete, delayed, or inaccurate. The Service is an assistant, not a professional advisor: verify important outputs (academic, legal, financial, medical, or business-critical) before relying on them.",
          "We do not warrant that the Service will be uninterrupted, error-free, or compatible with every third-party platform at all times.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    blocks: [
      {
        paragraphs: [
          "To the maximum extent permitted by applicable law, in no event will the operator of the Service be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, lost data, lost opportunities, or reputational harm — arising out of or related to your use of the Service or any connected third-party service.",
          "To the maximum extent permitted by law, our aggregate liability for all claims relating to the Service will not exceed the greater of the amount you paid us for the Service in the twelve months before the claim arose or one hundred US dollars (US $100).",
          "Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.",
        ],
      },
    ],
  },
  {
    id: "changes-service",
    title: "11. Changes to the Service",
    blocks: [
      {
        paragraphs: [
          "We may add, modify, suspend, or discontinue features of the Service at any time, including integrations that depend on third-party platforms whose APIs or policies may change. Where a change materially reduces functionality you rely on, we will make reasonable efforts to provide notice.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    blocks: [
      {
        paragraphs: [
          "You may stop using the Service at any time. To fully end the relationship, also disconnect any authorized integrations from within the Service or the third-party platform's settings, and request deletion of associated data as described in the Privacy Policy.",
          "We may suspend or terminate your access if you breach these Terms, if we are required to do so by law, or if a third-party platform requires it as a condition of its integration program. Upon termination, your right to use the Service ends immediately, and stored authorization tokens are handled as described in the Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "changes-terms",
    title: "13. Changes to These Terms",
    blocks: [
      {
        paragraphs: [
          "We may update these Terms from time to time. The current version will always be posted on this page with its \"Last updated\" date. For material changes, we will make reasonable efforts to provide advance notice. By continuing to use the Service after changes take effect, you accept the revised Terms.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing Law",
    blocks: [
      {
        paragraphs: [
          "These Terms are governed by and construed in accordance with the laws of the jurisdiction in which the operator of the Service is established, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Service will be brought in the courts of that jurisdiction, unless applicable consumer law gives you the right to bring claims elsewhere.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "15. Contact",
    blocks: [
      {
        paragraphs: [
          `Questions about these Terms, the Service, or any integration can be sent to ${site.contactEmail}.`,
        ],
      },
    ],
  },
];
