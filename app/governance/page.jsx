import Link from "next/link";
import "../scss/pages/policy.scss";

const governanceLinks = [
    {
        title: "AML Policy",
        description: "Anti-Money Laundering and Know Your Customer (KYC) framework.",
        href: "/governance/aml-policy",
    },
    {
        title: "Customer Grievance Redressal",
        description: "Escalation levels, timelines, and RBI complaint resolution process.",
        href: "/governance/customer-grievance-redressal",
    },
];

export default function GovernanceIndexPage() {
    return (
        <section className="policy-doc policy-doc--index">
            <div className="container">
                <div className="row justify-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <p className="pill mb-3">Governance</p>
                        <h1 className="policy-doc__title mb-4">Governance</h1>
                        <p className="policy-doc__paragraph mb-10">
                            Explore our governance framework, policies, and compliance standards.
                        </p>

                        <div className="policy-doc__cards">
                            {governanceLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="policy-doc__card">
                                    <h2>{link.title}</h2>
                                    <p>{link.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
