import PolicyDocument from "../components/policy-document";
import { privacyPolicy } from "../content/policies";
import { createPageMetadata } from "../lib/site";
import "../scss/pages/policy.scss";

export const metadata = createPageMetadata({
    title: "Privacy Policy",
    description:
        "Read how Fundcrest Capital Private Limited collects, uses, and protects your personal information.",
    path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return (
        <PolicyDocument
            pill={privacyPolicy.pill}
            title={privacyPolicy.title}
            sections={privacyPolicy.sections}
        />
    );
}
