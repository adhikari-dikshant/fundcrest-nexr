"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset } from "../lib/asset";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Governance",
        href: "/governance",
        children: [
            { label: "AML Policy", href: "/governance/aml-policy" },
            { label: "Customer Grievance Redressal", href: "/governance/customer-grievance-redressal" },
        ],
    },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
];

function isLinkActive(pathname, href) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpenDesktopDropdown(null);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    const closeDesktopDropdown = () => {
        setOpenDesktopDropdown(null);
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    const toggleMobileDropdown = (label) => {
        setOpenMobileDropdown((current) => (current === label ? null : label));
    };

    const renderDesktopItem = (link) => {
        const isActive = isLinkActive(pathname, link.href);

        if (!link.children) {
            return (
                <li key={link.label} className={isActive ? "is-active" : ""}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            );
        }

        const isChildActive = link.children.some((child) => isLinkActive(pathname, child.href));

        return (
            <li
                key={link.label}
                className={`site-navbar__item--dropdown${isChildActive || isActive ? " is-active" : ""}${openDesktopDropdown === link.label ? " is-open" : ""}`}
                onMouseEnter={() => setOpenDesktopDropdown(link.label)}
                onMouseLeave={closeDesktopDropdown}
            >
                <Link
                    href={link.href}
                    className="site-navbar__dropdown-trigger"
                    onClick={closeDesktopDropdown}
                >
                    {link.label}
                    <span className="site-navbar__chevron" aria-hidden="true" />
                </Link>

                <ul className="site-navbar__dropdown">
                    {link.children.map((child) => (
                        <li key={child.label}>
                            <Link href={child.href} onClick={closeDesktopDropdown}>
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        );
    };

    const renderMobileItem = (link) => {
        if (!link.children) {
            return (
                <li key={link.label}>
                    <Link href={link.href} onClick={closeMenu}>
                        {link.label}
                    </Link>
                </li>
            );
        }

        const isOpen = openMobileDropdown === link.label;

        return (
            <li key={link.label} className={`site-navbar__mobile-dropdown${isOpen ? " is-open" : ""}`}>
                <button
                    type="button"
                    className="site-navbar__mobile-dropdown-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleMobileDropdown(link.label)}
                >
                    <span>{link.label}</span>
                    <span className="site-navbar__chevron" aria-hidden="true" />
                </button>

                <ul className="site-navbar__mobile-submenu">
                    <li>
                        <Link href={link.href} onClick={closeMenu}>
                            View all {link.label}
                        </Link>
                    </li>
                    {link.children.map((child) => (
                        <li key={child.label}>
                            <Link href={child.href} onClick={closeMenu}>
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        );
    };

    return (
        <header
            className={`site-navbar${isHome ? " site-navbar--home" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}
        >
            <div className="container-fluid">
                <div className="site-navbar__inner">
                    <Link href="/" className="site-navbar__logo" aria-label="Fundcrest Capital home">
                        <img src={asset("/logo.svg")} width={200} height={100} alt="Fundcrest Capital" />
                    </Link>

                    <nav className="site-navbar__nav" aria-label="Main navigation">
                        <ul className="site-navbar__list">
                            {navLinks.map((link) => renderDesktopItem(link))}
                        </ul>
                    </nav>

                    <a href="tel:+918118845455" className="site-navbar__cta">
                        <img src={asset("/icons/call.svg")} alt="" />
                        <span>Call Us: +91 81188 45455</span>
                    </a>

                    <button
                        type="button"
                        className="site-navbar__toggle"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className="site-navbar__offcanvas" aria-hidden={!menuOpen}>
                <button
                    type="button"
                    className="site-navbar__backdrop"
                    aria-label="Close menu"
                    onClick={closeMenu}
                />
                <div className="site-navbar__panel">
                    <div className="site-navbar__panel-head">
                        <Link href="/" className="site-navbar__logo" onClick={closeMenu}>
                            <img src={asset("/logo.svg")} width={200} height={100} alt="Fundcrest Capital" />
                        </Link>
                        <button
                            type="button"
                            className="site-navbar__close"
                            aria-label="Close menu"
                            onClick={closeMenu}
                        >
                            <img src={asset("/icons/close.svg")} alt="" />
                        </button>
                    </div>

                    <ul className="site-navbar__mobile-list">
                        {navLinks.map((link) => renderMobileItem(link))}
                    </ul>

                    <a href="tel:+918118845455" className="site-navbar__cta site-navbar__cta--mobile" onClick={closeMenu}>
                        <img src={asset("/icons/call.svg")} alt="" />
                        <span>Call Us: +91 81188 45455</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
