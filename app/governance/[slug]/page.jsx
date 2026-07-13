import { notFound } from "next/navigation";
import PolicyDocument from "../../components/policy-document";
import { governancePages } from "../../content/policies";
import "../../scss/pages/policy.scss";

export function generateStaticParams() {
    return [
        { slug: "aml-policy" },
        { slug: "customer-grievance-redressal" },
    ];
}

export default async function GovernancePage({ params }) {
    const { slug } = await params;
    const page = governancePages[slug];

    if (!page) {
        notFound();
    }

    return <PolicyDocument pill={page.pill} title={page.title} sections={page.sections} />;
}
