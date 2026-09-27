import LegalPage from "../components/LegalPage";
import { privacyIntro, privacySections } from "../content/privacy";

export default function Privacy() {
  return (
    <LegalPage
      badge="// Queen Nova — Legal"
      title="Privacy Policy"
      intro={privacyIntro}
      sections={privacySections}
      crossLink={{ to: "/terms", label: "Terms of Service" }}
    />
  );
}
