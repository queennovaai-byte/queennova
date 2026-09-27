// ─────────────────────────────────────────────────────────────
//  PRIVACY POLICY — CONTENT
//  All wording for /privacy lives here so it is easy to edit.
// ─────────────────────────────────────────────────────────────
import { site } from "../config/site";
import type { LegalSection } from "./terms";

export const privacyIntro = `This Privacy Policy explains how Queen Nova ("Nova", "we", "us") handles information when you use the Queen Nova website and application (the "Service") — including when you voluntarily connect a third-party service such as TikTok. Integrations are optional, and nothing is shared with a third-party platform unless you choose to connect it.`;

export const privacySections: LegalSection[] = [
  {
    id: "overview",
    title: "1. Overview",
    blocks: [
      {
        paragraphs: [
          "Queen Nova is a personal AI agent. To do its job, the Service processes the instructions and content you give it and, where you enable them, the connections you authorize to third-party platforms. We aim to collect as little as possible: the Service is designed around least-privilege access, purpose-limited processing, and revocable connections.",
        ],
      },
    ],
  },
  {
    id: "information",
    title: "2. Information We Process",
    blocks: [
      {
        paragraphs: ["We process the following categories of information, depending on how you use the Service:"],
        bullets: [
          "Information you provide directly — the goals, instructions, files, and content you give to Nova; and, if you contact us, your email address and the contents of your message.",
          "Integration connection data — when you connect a supported third-party service (currently including TikTok) through its official authorization flow, that service provides us with OAuth access credentials/tokens and the basic identifiers permitted by the scopes you approved (for example, a platform user ID or display name). We do not receive or store your third-party password.",
          "Integration action data — content you direct the Service to process through a connected platform within your granted permissions, such as a video and caption you provide for a publishing workflow.",
          "Technical and diagnostic data — limited server-side logs needed to operate, secure, and debug the Service (such as error traces). This website does not use analytics cookies, advertising trackers, or third-party tracking scripts.",
        ],
      },
    ],
  },
  {
    id: "use",
    title: "3. How We Use Information",
    blocks: [
      {
        bullets: [
          "To provide and operate the Service, including planning, tool use, memory, and Minion delegation you have configured.",
          "To perform actions you authorize on connected third-party services — only within the permissions you granted.",
          "To maintain the security and integrity of the Service and to prevent abuse.",
          "To respond to your support, privacy, or legal requests.",
          "To comply with applicable legal obligations.",
        ],
      },
      {
        paragraphs: [
          "We do not sell your personal information. We do not use content from your connected accounts for advertising, and we do not share it with marketers or data brokers.",
        ],
      },
    ],
  },
  {
    id: "oauth",
    title: "4. How OAuth Credentials and Tokens Are Handled",
    blocks: [
      {
        paragraphs: [
          "When you authorize a third-party integration, the platform issues OAuth credentials/tokens to the Service. These credentials are used exclusively to provide the integration you authorized — for example, to let Nova's supervised content Minion carry out a publishing workflow you instructed. They are never used for unrelated purposes, never sold, and never shared except with the platform that issued them as part of the authorized request.",
          "Access is scoped by the permissions you approved on the platform's own authorization screen, and Minions receive only the capabilities required for their assigned job.",
        ],
        bullets: [
          "Revoke access at any time from within the Service, or directly in the third-party platform's settings (for TikTok: Profile → Settings and privacy → Security → Manage app permissions).",
          "When you disconnect an integration, the Service can no longer act on that platform, and stored tokens for it are deleted within a reasonable period.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Services",
    blocks: [
      {
        paragraphs: [
          "The Service interoperates with third-party platforms only at your direction. When you connect or publish through a third party, your information is handled by that platform under its own terms and privacy policy — for TikTok, see the TikTok Privacy Policy. We encourage you to review the policies of any platform you connect.",
          "The Queen Nova website is served by a static hosting provider, which processes standard connection data (such as IP addresses in server logs) in order to deliver the site.",
          "We are independent from, and not endorsed or sponsored by, the third-party platforms the Service can connect to.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    blocks: [
      {
        bullets: [
          "Integration connection data (OAuth tokens and permitted identifiers) is kept only while the integration remains connected. Disconnecting an integration ends access, and stored credentials are deleted within a reasonable period.",
          "Integration action data is kept only as long as needed to perform the actions you requested and to maintain a coherent record of what the Service did on your behalf.",
          "Support correspondence is kept as long as needed to resolve your request and maintain continuity of support.",
          "Diagnostic logs are retained for a limited period for security and debugging and then deleted.",
        ],
      },
      {
        paragraphs: [
          "You may request deletion of your information at any time; see \"Your Rights\" below.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "7. Security",
    blocks: [
      {
        paragraphs: [
          "We apply reasonable technical and organizational measures to protect the information the Service processes, including encryption in transit (HTTPS/TLS), least-privilege permission scoping, and restricting access to what is needed to operate the Service. No method of transmission or storage is completely secure, and we cannot guarantee absolute security; if an incident affects your information, we will act in accordance with applicable law.",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "8. Your Rights and Choices",
    blocks: [
      {
        paragraphs: ["Depending on your jurisdiction, you may have rights regarding your personal information. Regardless of location, we honor the following:"],
        bullets: [
          "Access — ask us what information the Service holds about you.",
          "Correction — ask us to correct inaccurate information.",
          "Deletion — ask us to delete your information, subject to limited legal-retention requirements.",
          "Revocation — disconnect any integration at any time, as described above.",
          "Portability — ask for a copy of the information you provided in a commonly used format.",
        ],
      },
      {
        paragraphs: [
          `To exercise any of these rights, contact us at ${site.contactEmail}. We may need to verify your request before acting on it.`,
        ],
      },
    ],
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    blocks: [
      {
        paragraphs: [
          "The Service is not directed to children under the age of 13 (or the equivalent minimum age in your jurisdiction), and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    blocks: [
      {
        paragraphs: [
          "We may update this Privacy Policy as the Service evolves. The current version will always be posted on this page with its \"Last updated\" date, and material changes will be highlighted with reasonable advance notice where practical. Continued use of the Service after an update takes effect constitutes acceptance of the revised policy.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    blocks: [
      {
        paragraphs: [
          `For privacy questions, requests, or concerns — including anything relating to a connected third-party integration — email us at ${site.contactEmail}.`,
        ],
      },
    ],
  },
];
