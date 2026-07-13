import PolicyDocument from "../components/policy-document";
import { privacyPolicy } from "../content/policies";
import "../scss/pages/policy.scss";

export default function PrivacyPolicyPage() {
    return (
        <PolicyDocument
            pill={privacyPolicy.pill}
            title={privacyPolicy.title}
            sections={privacyPolicy.sections}
        />
    );
}
