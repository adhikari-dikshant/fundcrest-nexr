import Link from "next/link";
import Accordian from "../components/accordian";
import JsonLd from "../components/json-ld";
import TestimonialCarousel from "../components/testimonial-carousel";
import { asset } from "../lib/asset";
import { createPageMetadata, getFaqJsonLd } from "../lib/site";
import "../scss/pages/home.scss";

export const metadata = createPageMetadata({
    path: "/",
    description:
        "Fundcrest Capital Private Limited offers secured, MSME, business, and personal loans with transparent, customer-focused lending for individuals and growing businesses.",
});

const testimonials = [
    {
        quote:
            "Overall, taking loan has been a life-changer for me. It has revolutionized the way I approach my finances, providing me with the tools, insights, and security I need to unlock my financial freedom.",
        name: "Samruddhi Bhosale",
    },
    {
        quote:
            "Fundcrest made our MSME loan process smooth and transparent. The team was responsive at every step and we got approval faster than we expected.",
        name: "Rahul Mehta",
    },
    {
        quote:
            "Professional, reliable, and customer-focused. Their personal loan helped us during a medical emergency without unnecessary paperwork delays.",
        name: "Priya Sharma",
    },
    {
        quote:
            "As a small business owner, I needed working capital quickly. Fundcrest understood our needs and offered a flexible repayment plan that actually worked for us.",
        name: "Amit Desai",
    },
];

const faqItems = [
    {
        question: "What should a financial plan include?",
        answer:
            "A solid financial plan should cover your income, expenses, savings goals, emergency fund, loan obligations, insurance needs, and long-term objectives such as business growth or major purchases. At Fundcrest, we help you align borrowing decisions with your overall financial picture.",
    },
    {
        question: "Can you help me plan for retirement?",
        answer:
            "While our core focus is lending, we guide customers on structuring loans and repayments so they do not strain long-term savings. We can also connect you with resources to balance debt management and retirement planning based on your cash flow and goals.",
    },
    {
        question: "What is your investment philosophy?",
        answer:
            "We believe in responsible, transparent finance. Our approach prioritizes clear terms, ethical lending practices, and solutions tailored to your risk profile and repayment capacity — whether you are an individual borrower or a growing business.",
    },
    {
        question: "Will I have a dedicated advisor?",
        answer:
            "Yes. Every customer is supported by a dedicated relationship manager who guides you through application, documentation, approval, and disbursement — with ongoing assistance for queries throughout your loan tenure.",
    },
];

export default function Home() {
    return (
        <>
            <JsonLd data={getFaqJsonLd(faqItems)} />
            <section className="hero">
                <div className="container-fluid hero__container">
                    <div className="row items-end hero__row">
                        <div className="col-12 col-md-8 hero__content">
                            <h1 className="mb-5">
                                All Your Financial & Banking Needs. One Trusted Partner.
                            </h1>

                            <p className="text-body-big text-white mb-6">
                                At FUNDCREST CAPITAL PRIVATE LIMITED, we provide smart, secure, and customer-focused financial solutions designed for individuals, entrepreneurs, and growing businesses.
                            </p>

                            <ul className="hero__features">
                                <li>Fast &amp; Transparent</li>
                                <li>Customized Lending</li>
                                <li>Secure &amp; Responsible</li>
                            </ul>

                            <div className="hero__actions mt-8">
                                <div className="hero__avatars hidden md:block">
                                    <img src={asset("/avatar.webp")} alt="Fundcrest customers" className="hero__avatar-group" />
                                    <p className="hero__avatar-text">Let&apos;s Build Your Financial Future</p>
                                </div>
                                <a href="#footer" className="btn-main">Apply for Loan</a>
                                <a href="https://wa.me/918118845455" className="btn-outline">Whatsapp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="about pt-20 md:mt-10 pb-10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-7 md:pr-15 mb-5 md:mb-0">
                            <h2 className="mb-4">
                                Building Financial Confidence for Individuals & Businesses
                            </h2>

                            <p className="text-body mb-5">
                                Formerly known as H.K. Financiers Private Limited, the Company has evolved with a renewed vision to serve the changing financial needs of modern businesses and individuals. As a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India, we combine financial discipline with a customer-first approach to deliver solutions that are practical, transparent, and responsive.
                            </p>

                            <Link href="/about" className="btn-main mb-12">Learn More About Us</Link>

                            <div className="row">
                                <div className="col-12 col-md-6 mb-5 md:mb-0">
                                    <div className="card card-about shadow-none border-none mb-5">
                                        <div className="card-body px-5 py-4">
                                            <img src={asset("/icons/ab1.svg")} alt="" className="mb-8" />

                                            <div className="row items-center">
                                                <div className="col-6">
                                                    <p className="num">
                                                        99%
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-body-big text-muted text-end">
                                                        People <br />
                                                        Satisfaction
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={asset("/ab-sm1.webp")} alt="Fundcrest lending consultation" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <img src={asset("/ab-sm2.webp")} alt="Business growth with Fundcrest" className="mb-5 hidden md:block" />

                                    <div className="card card-about shadow-none border-none mb-5">
                                        <div className="card-body px-5 py-4">
                                            <img src={asset("/icons/ab2.svg")} alt="" className="mb-8" />

                                            <div className="row items-center">
                                                <div className="col-6">
                                                    <p className="num">
                                                        150+
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-body-big text-muted text-end">
                                                        Dreams Fulfilled
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={asset("/ab-sm2.webp")} alt="Business growth with Fundcrest" className="mb-5 block md:hidden" />

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 md:pl-0">
                            <img src={asset("/about.webp")} alt="Fundcrest Capital financial advisory team" className="shadow-md rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="products py-10">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-4 md:px-0 text-center mb-5">
                            <p className="pill text-body-big mb-3 mx-auto">
                                Our Services
                            </p>

                            <h2 className="head mb-5">
                                Financial <span>Solutions</span> <br />
                                Built for your Goals
                            </h2>

                            <p className="text-body-big font-medium mb-10">
                                Flexible, transparent and reliable loan <br />
                                solutions for individuals and businesses.
                            </p>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 mb-5 md:mb-0">
                            <img src={asset("/icons/p1.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Secured/Unsecured Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Flexible secured and unsecured loan solutions tailored to help individuals and businesses achieve financial goals with confidence.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:inline-flex">
                                Learn More About Secured Loans
                            </a>
                        </div>

                        <div className="col-12 col-md-6 offset-md-1">
                            <img src={asset("/p1.webp")} alt="Secured and unsecured loan solutions" className="mb-8 md:mb-0" />

                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Secured Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 order-md-2 offset-md-1 mb-5 md:mb-0">
                            <img src={asset("/icons/p2.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                MSME Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Elevating small and medium enterprises with customized funding for working capital, expansion, and business growth.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:inline-flex">
                                Learn More About MSME Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <img src={asset("/p2.webp")} alt="MSME loan for small and medium enterprises" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About MSME Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 mb-5 md:mb-0">
                            <img src={asset("/icons/p3.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Business Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Get the right funding for your business needs.
                                From startups to established businesses, we&apos;ve got you covered.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:inline-flex">
                                Learn More About Business Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 offset-md-1">
                            <img src={asset("/p3.webp")} alt="Business loan funding for enterprises" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Business Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 order-md-2 offset-md-1 mb-5 md:mb-0">
                            <img src={asset("/icons/p4.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Personal Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Quick and easy personal loans for medical emergencies, travel, education, home needs and more.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:inline-flex">
                                Learn More About Personal Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <img src={asset("/p4.webp")} alt="Personal loan for individual financial needs" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Personal Loans
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vission-mission py-10 md:mb-20">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 px-0 text-center mb-5">
                            <p className="pill text-body-big mb-3 mx-auto">
                                OUR VISION & MISSION
                            </p>

                            <h2 className="head mb-5">
                                Empowering <span>Financial Growth,</span> Creating Opportunities & Building Lasting Trust
                            </h2>
                        </div>

                        <div className="col-12 col-md-3 mb-5 md:mb-0">
                            <div className="card vm-card shadow-none">
                                <div className="card-body p-3">
                                    <img src={asset("/icons/vm1.svg")} alt="" className="mb-20 mt-8" />

                                    <div className="card int-card shadow-none border-none">
                                        <div className="card-body p-0">
                                            <h3 className="mb-7">
                                                Our Vision
                                            </h3>

                                            <p className="text-card">
                                                To be a leading financial institution that empowers individuals and businesses to achieve their financial goals through innovative and responsible lending solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 mb-5 md:mb-0">
                            <div className="card vm-card shadow-none">
                                <div className="card-body p-3">
                                    <img src={asset("/icons/vm2.svg")} alt="" className="mb-20 mt-8" />

                                    <div className="card int-card shadow-none border-none">
                                        <div className="card-body p-0">
                                            <h3 className="mb-7">
                                                Our Mission
                                            </h3>

                                            <p className="text-card">
                                                To deliver responsible lending services that support financial growth, encourage entrepreneurship, and contribute toward economic development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 mb-5 md:mb-0">
                            <div className="card vm-card shadow-none">
                                <div className="card-body p-3">
                                    <img src={asset("/icons/vm3.svg")} alt="" className="mb-20 mt-8" />

                                    <div className="card int-card shadow-none border-none">
                                        <div className="card-body p-0">
                                            <h3 className="mb-7">
                                                Our Commitment
                                            </h3>

                                            <p className="text-card">
                                                To maintain strong governance, ethical financial practices, and technology-driven operations that ensure reliability, security, and long-term customer relationships.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 mb-5 md:mb-0">
                            <div className="card vm-card shadow-none">
                                <div className="card-body p-3">
                                    <img src={asset("/icons/vm4.svg")} alt="" className="mb-20 mt-8" />

                                    <div className="card int-card shadow-none border-none">
                                        <div className="card-body p-0">
                                            <h3 className="mb-7">
                                                Our Promise
                                            </h3>

                                            <p className="text-card">
                                                To simplify access to finance with speed, transparency, and personalized support while becoming a dependable financial partner at every stage of growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyus mx-1 md:mx-3 pt-5 pb-2 md:py-24">
                <div className="container">
                    <div className="row mb-10">
                        <div className="col-12 col-md-8">
                            <p className="pill mb-3 text-white border-white"
                                style={{
                                    color: 'white',
                                    borderColor: 'white'
                                }}
                            >
                                Why Choose Us
                            </p>
                            <h2 className="head font-normal text-white mb-4">
                                Financial Solutions Built on Trust, Speed & Trajectory
                            </h2>
                        </div>
                    </div>

                    <div className="row items-center">
                        <div className="col-12 col-md-3 md:mb-0 mb-5 ">
                            <div className="card glass-card">
                                <div className="card-body">
                                    <img src={asset("/icons/why1.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7">
                                        Customer-Centric Approach
                                    </h3>

                                    <p className="text-body text-white">
                                        We focus on building long-term relationships through dedicated support and personalized service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 md:mb-0 mb-5">
                            <div className="card glass-card mb-5">
                                <div className="card-body">
                                    <img src={asset("/icons/why2.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7">
                                        Fast Approvals
                                    </h3>

                                    <p className="text-body text-white">
                                        Quick verification and efficient loan processing designed to save your valuable time.
                                    </p>
                                </div>
                            </div>

                            <div className="card glass-card">
                                <div className="card-body">
                                    <img src={asset("/icons/why3.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7">
                                        Transparent Lending
                                    </h3>

                                    <p className="text-body text-white">
                                        Simple, honest, and customer-focused financial processes with complete clarity at every stage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 md:mb-0 mb-5">
                            <div className="card glass-card mb-5">
                                <div className="card-body">
                                    <img src={asset("/icons/why1.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7">
                                        Responsible & Secure
                                    </h3>

                                    <p className="text-body text-white">
                                        Strong compliance, ethical lending practices, and secure financial operations you can rely.
                                    </p>
                                </div>
                            </div>

                            <div className="card glass-card">
                                <div className="card-body">
                                    <img src={asset("/icons/why1.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7">
                                        Growth-Driven Vision
                                    </h3>

                                    <p className="text-body text-white">
                                        Emphasising businesses and individuals with financial solutions that support sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="card glass-card">
                                <div className="card-body">
                                    <img src={asset("/icons/why6.svg")} alt="" className="mb-5" />

                                    <h3 className="text-body-big font-medium text-white mb-7 md:pr-5">
                                        Tailored Financial Support
                                    </h3>

                                    <p className="text-body text-white">
                                        Flexible loan solutions customized for salaried individuals, entrepreneurs, and growing businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* <section className="testimonial py-10 mt-20">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-7 offset-md-5 md:px-0 mb-5">
                            <p className="pill text-body-big mb-3">
                                Testimonials
                            </p>

                            <h2 className="head mb-5">
                                Join 15+ million people who already trust us with their future
                            </h2>
                        </div>
                    </div>

                    <div className="row test-row">
                        <div className="col-12 col-md-7 offset-md-5">
                            <TestimonialCarousel items={testimonials} />
                        </div>
                    </div>
                </div>
            </section> */}

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

            <section className="faq py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 md:px-0">
                            <p className="pill mb-3">
                                FAQ’s
                            </p>
                            <h2 className="head mb-3">
                                Financial Planing FAQ’s
                            </h2>

                            <p className="text-body mb-10">
                                Common questions on financial planning and investing
                            </p>

                            <Link href="/about" className="btn-main hidden md:inline-flex">Know More About Fundcrest</Link>
                        </div>

                        <div className="col-12 col-md-6 offset-md-1">
                            <Accordian items={faqItems} />

                            <Link href="/about" className="btn-main inline-block md:hidden mt-5">Know More About Fundcrest</Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
