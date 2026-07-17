import { asset } from "../lib/asset";
import { createPageMetadata } from "../lib/site";
import "../scss/pages/about.scss";

export const metadata = createPageMetadata({
    title: "About Us",
    description:
        "Learn about Fundcrest Capital Private Limited — our vision, mission, board of directors, and customer grievance redressal mechanism.",
    path: "/about",
});

const philosophyItems = [
    {
        icon: asset("/icons/vm1.svg"),
        title: "Create Possibilities",
        description:
            "By enabling businesses and individuals to pursue opportunities they might otherwise postpone.",
    },
    {
        icon: asset("/icons/vm2.svg"),
        title: "Inspire Confidence",
        description:
            "By providing transparent, ethical, and dependable financial solutions.",
    },
    {
        icon: asset("/icons/vm3.svg"),
        title: "Support Sustainable Growth",
        description:
            "By building relationships focused on long-term success rather than short-term transactions.",
    },
];

const boardPlaceholderImage = "https://placehold.net/400x400.webp";

const boardMembers = [
    {
        name: "Mr. Deependra Singh",
        description:
            "Promoter Director responsible for business development, operational management, and long-term strategic initiatives.",
    },
    {
        name: "Mr. Parakram Singh Rathore",
        description:
            "Promoter Director actively involved in corporate growth planning, financial oversight, and stakeholder engagement.",
    },
    {
        name: "Mrs. Vijay Laxmi Shekhawat",
        description:
            "Promoter Director contributing towards organizational development, governance, and business expansion strategies.",
    },
    {
        name: "Ms. Kanika Tanwar",
        description:
            "Promoter Director involved in corporate administration, compliance oversight, and strategic decision-making.",
    },
    {
        name: "Mr. Bhag Chand Jain",
        description:
            "Professional Director with extensive experience in business strategy, financial management, and corporate governance.",
    },
];

const visionMission = [
    {
        icon: asset("/icons/vm1.svg"),
        title: "Our Vision",
        description:
            "To be a leading financial institution that empowers individuals and businesses to achieve their financial goals through innovative and responsible lending solutions.",
    },
    {
        icon: asset("/icons/vm2.svg"),
        title: "Our Mission",
        description:
            "To deliver responsible lending services that support financial growth, encourage entrepreneurship, and contribute toward economic development.",
    },
];

const grievanceSteps = [
    {
        step: "01",
        title: "Customer Care",
        name: "Mr. Jitendra Singh",
        email: "customergrievance@fundcrest.com",
        phone: "8118845455",
        tat: "Within 15 days",
    },
    {
        step: "02",
        title: "Escalation to Chief Grievance Officer",
        name: "Mr. Vinit Jain",
        email: "grievance.escalation@gmail.com",
        phone: "9351439082",
        tat: "Within 15 days",
    },
    {
        step: "03",
        title: "RBI Procedure",
        note: "If the issue still remains unresolved, customers may approach the RBI Ombudsman / Regional Office of DNBS of RBI.",
        email: "crpc@rbi.org.in",
        tat: "Within 30 days",
    },
];

export default function About() {
    return (
        <>
            <section className="about-hero">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center">
                            <p className="pill text-body-big mb-3 mx-auto">
                                ABOUT US
                            </p>
                            <h1 className="mb-5">
                                Our mission is to turn financial support into life-changing opportunity.
                            </h1>

                            <p className="text-body-big text-muted md:px-20">
                                At Fundcrest Capital Private Limited, finance is more than lending; It is about enabling aspirations, supporting enterprise, and creating opportunities for sustainable growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <img src={asset("/ab-hero.webp")} alt="Fundcrest Capital office and team" className="my-10 md:my-16" />

            <section className="about-content pb-10 md:pb-16">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-2 mb-5 md:mb-0">
                            <p className="heading text-center">
                                Our Story
                            </p>
                        </div>

                        <div className="col-12 col-md-9 offset-md-1">
                            <p className="text-body mb-5">
                                Previously operating as H.K. Financiers Private Limited, our company has transformed with a renewed commitment to meeting the evolving financial needs of today’s businesses and individuals. As an NBFC registered with the Reserve Bank of India, we blend financial prudence with a strong focus on our customers, offering solutions that are transparent, responsive, and practical.
                            </p>
                            <p className="text-body mb-5">
                                Our mission is to close the gap between funding needs and accessible finance by providing efficient, transparent, and customer-focused financial services. We dedicate ourselves to building lasting relationships with our clients, upholding trust, integrity, and excellence in all our services.
                            </p>
                            <p className="text-body mb-5">
                                At Fundcrest Capital, we recognize that growth is seldom straightforward. It is guided by ambition, persistence, and courage. We aim to support every step of this journey by extending responsible financial backing that transforms opportunities into achievements.
                            </p>
                            <p className="text-body">
                                We are more than just a lender. We are collaborators in advancement, advocates for enterprise, and champions of those who innovate, create, and grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-philosophy py-10 md:py-16">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center mb-8 md:mb-10">
                            <p className="pill text-body-big mb-3 mx-auto">Our Philosophy</p>
                            <h2 className="about-section-title mb-4">The Fundcrest Philosophy</h2>
                            <p className="text-body-big text-muted">
                                We believe finance should do three things:
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {philosophyItems.map((item) => (
                            <div key={item.title} className="col-12 col-md-4 mb-5 md:mb-0">
                                <div className="card about-card shadow-none h-full">
                                    <div className="card-body p-4 md:p-5">
                                        <img src={item.icon} alt="" className="about-card__icon mb-5" />
                                        <h3 className="about-card__title mb-4">{item.title}</h3>
                                        <p className="text-body mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-board py-10 md:py-16">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center mb-8 md:mb-10">
                            <p className="pill text-body-big mb-3 mx-auto">Leadership</p>
                            <h2 className="about-section-title mb-0">Board of Directors</h2>
                        </div>
                    </div>

                    <div className="row justify-center">
                        {boardMembers.map((member) => (
                            <div key={member.name} className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card about-card about-card--board shadow-none h-full">
                                    <div className="card-body p-4 md:p-5">
                                        <img
                                            src={boardPlaceholderImage}
                                            alt=""
                                            className="about-card__photo mb-4"
                                        />
                                        <h3 className="about-card__title mb-4">{member.name}</h3>
                                        <p className="text-body mb-0">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-message py-10 md:py-16">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10">
                            <div className="about-message__card">
                                <span className="about-message__eyebrow">A Thought from Our Leadership</span>
                                <blockquote className="about-message__quote">
                                    <p className="mb-5">
                                        &ldquo;Finance should do more than fund a transaction—it should unlock potential.
                                    </p>
                                    <p className="mb-5">
                                        At Fundcrest Capital, every financing decision is viewed through a simple lens: How can we help our customers grow responsibly and sustainably?
                                    </p>
                                    <p className="mb-0">
                                        Our success will always be measured not merely by numbers, but by the businesses strengthened, opportunities created, and trust earned along the way.&rdquo;
                                    </p>
                                </blockquote>
                                <p className="about-message__author">— Director, Fundcrest Capital Private Limited</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-vm py-10 md:py-16">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center mb-8 md:mb-10">
                            <p className="pill text-body-big mb-3 mx-auto">Our Vision &amp; Mission</p>
                            <h2 className="about-section-title mb-0">Purpose that guides every decision</h2>
                        </div>
                    </div>

                    <div className="row justify-center">
                        {visionMission.map((item) => (
                            <div key={item.title} className="col-12 col-md-6 mb-5 md:mb-0">
                                <div className="about-vm__card h-full">
                                    <img src={item.icon} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-grievance py-10 md:py-16">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center mb-8 md:mb-10">
                            <p className="pill text-body-big mb-3 mx-auto">Customer Grievance</p>
                            <h2 className="about-section-title mb-4">Grievance Redressal Mechanism</h2>
                            <p className="text-body-big text-muted">
                                In case a customer has any grievance, he/she may lodge a complaint with the Company, which will be addressed in the following manner.
                            </p>
                        </div>
                    </div>

                    <div className="grievance-flow">
                        {grievanceSteps.map((step, index) => (
                            <div key={step.step} className="grievance-flow__step">
                                <div className="grievance-flow__rail">
                                    <div className="grievance-flow__node">{step.step}</div>
                                    {index < grievanceSteps.length - 1 ? (
                                        <span className="grievance-flow__line" aria-hidden="true" />
                                    ) : null}
                                </div>

                                <div className="grievance-flow__card">
                                    <div className="grievance-flow__card-head">
                                        <div>
                                            <span className="grievance-flow__label">Step {step.step}</span>
                                            <h3 className="grievance-flow__title">{step.title}</h3>
                                        </div>
                                        {step.tat ? (
                                            <span className="grievance-flow__tat">
                                                <span>TAT</span>
                                                {step.tat}
                                            </span>
                                        ) : null}
                                    </div>

                                    {step.name ? (
                                        <p className="grievance-flow__name">{step.name}</p>
                                    ) : null}
                                    {step.note ? (
                                        <p className="grievance-flow__note">{step.note}</p>
                                    ) : null}

                                    {step.email || step.phone ? (
                                        <div className="grievance-flow__contacts">
                                            {step.email ? (
                                                <a className="grievance-flow__contact" href={`mailto:${step.email}`}>
                                                    <img src={asset("/icons/mail2.svg")} alt="" />
                                                    <span>{step.email}</span>
                                                </a>
                                            ) : null}
                                            {step.phone ? (
                                                <a className="grievance-flow__contact" href={`tel:+91${step.phone}`}>
                                                    <img src={asset("/icons/call.svg")} alt="" />
                                                    <span>+91 {step.phone}</span>
                                                </a>
                                            ) : null}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}