import Link from "next/link";
import { asset } from "../lib/asset";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
];

const loanLinks = [
    { label: "Secured Loan", href: "/services" },
    { label: "MSME Loan", href: "/services" },
    { label: "Business Loan", href: "/services" },
    { label: "Personal Loan", href: "/services" },
];

const socialLinks = [
    { label: "X", href: "#", icon: asset("/icons/x.svg") },
    { label: "LinkedIn", href: "#", icon: asset("/icons/linkedin.svg") },
    { label: "Facebook", href: "#", icon: asset("/icons/facebook.svg") },
];

export default function Footer({ variant = "merged" }) {
    return (
        <footer className={`site-footer site-footer--${variant}`}>
            <div className="container">
                <div className="row site-footer__main">
                    <div className="col-12 col-md-4 mb-8 md:mb-0">
                        <img src={asset("/logo.svg")} alt="Fundcrest Capital Private Limited" className="site-footer__logo" />

                        <p className="site-footer__tagline">
                            Let&apos;s Build Your Financial Future Together at FUNDCREST CAPITAL PRIVATE LIMITED
                        </p>
                    </div>

                    <div className="col-6 col-md-2 mb-8 md:mb-0">
                        <h3 className="site-footer__heading">Quick Links</h3>
                        <ul className="site-footer__list">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-8 md:mb-0">
                        <h3 className="site-footer__heading">Loans</h3>
                        <ul className="site-footer__list">
                            {loanLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 col-md-3 offset-md-1">
                        <h3 className="site-footer__heading">Contact</h3>
                        <ul className="site-footer__contact-list">
                            <li>
                                <img src={asset("/icons/location.svg")} alt="" />
                                <span>
                                    P.NO.SB-113,114, 10th Floor, Galaxy Avenue, Siwad Area Tonk Road, Bapu Nagar, Jaipur, Rajasthan, India (302015)
                                </span>
                            </li>
                            <li>
                                <img src={asset("/icons/call-white.svg")} alt="" />
                                <a href="tel:+918118845455">+91 81188 45455</a>
                            </li>
                            <li>
                                <img src={asset("/icons/mail.svg")} alt="" />
                                <a href="mailto:info@fundcrestcapital.com">info@fundcrestcapital.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="site-footer__divider" />

                <div className="row site-footer__bottom items-center">
                    <div className="col-12 col-md-4">
                        <p className="site-footer__copy">© 2026. ALL RIGHTS RESERVED.</p>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="site-footer__legal">
                            <Link href="#">Terms</Link>
                            <Link href="/privacy-policy">Privacy</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="site-footer__social">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                >
                                    <img src={link.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
