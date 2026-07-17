import { notFound } from "next/navigation";
import PolicyDocument from "../../components/policy-document";
import { governancePages } from "../../content/policies";
import { createPageMetadata } from "../../lib/site";
import "../../scss/pages/policy.scss";

export function generateStaticParams() {
    return [
        { slug: "aml-policy" },
        { slug: "customer-grievance-redressal" },
    ];
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = governancePages[slug];

    if (!page) {
        return {};
    }

    const descriptions = {
        "aml-policy":
            "Anti-Money Laundering (AML) and Know Your Customer (KYC) policy of Fundcrest Capital Private Limited.",
        "customer-grievance-redressal":
            "Customer grievance redressal mechanism, escalation levels, and timelines at Fundcrest Capital.",
    };

    return createPageMetadata({
        title: page.title,
        description: descriptions[slug] || page.title,
        path: `/governance/${slug}`,
    });
}

export default async function GovernancePage({ params }) {
    const { slug } = await params;
    const page = governancePages[slug];

    if (!page) {
        notFound();
    }

    return <PolicyDocument pill={page.pill} title={page.title} sections={page.sections} />;
}
