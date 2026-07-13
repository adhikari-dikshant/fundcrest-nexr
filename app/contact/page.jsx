import ConnectForm from "../components/form";
import { asset } from "../lib/asset";
import "../scss/pages/contact.scss";

const contactDetails = [
    {
        icon: asset("/icons/location2.svg"),
        label: "Office Address",
        value: "P.NO.SB-113,114, 10th Floor, Galaxy Avenue, Siwad Area Tonk Road, Bapu Nagar, Jaipur, Rajasthan, India (302015)",
    },
    {
        icon: asset("/icons/call.svg"),
        label: "Phone",
        value: "+91 81188 45455",
        href: "tel:+918118845455",
    },
    {
        icon: asset("/icons/mail2.svg"),
        label: "Email",
        value: "info@fundcrestcapital.com",
        href: "mailto:info@fundcrestcapital.com",
    },
];

export default function ContactPage() {
    return (
        <>
            <section className="contact-hero">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center">
                            <p className="pill text-body-big mb-3 mx-auto">Contact Us</p>
                            <h1 className="mb-5">We&apos;re here to help with <br className="hidden md:block" /> your financial goals.</h1>
                            <p className="text-body-big text-muted md:px-20">
                                Reach out to our team for loan enquiries, consultations, or support. <br className="hidden md:block" /> We&apos;ll get back to you within one business day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="contact-page__details">
                            <h2>Get in touch</h2>
                            <p>
                                Call us, email us, or fill out the form and our team will connect with you shortly.
                            </p>

                            <ul className="contact-page__list">
                                {contactDetails.map((item) => (
                                    <li key={item.label}>
                                        <span className="contact-page__icon" aria-hidden="true">
                                            <img src={item.icon} alt="" />
                                        </span>
                                        <div>
                                            <strong>{item.label}</strong>
                                            {item.href ? (
                                                <a href={item.href}>{item.value}</a>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="contact-page__form">
                            <ConnectForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
