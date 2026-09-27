import LegalPage from "../components/LegalPage";
import { termsIntro, termsSections } from "../content/terms";

export default function Terms() {
  return (
    <LegalPage
      badge="// Queen Nova — Legal"
      title="Terms of Service"
      intro={termsIntro}
      sections={termsSections}
      crossLink={{ to: "/privacy", label: "Privacy Policy" }}
    />
  );
}
