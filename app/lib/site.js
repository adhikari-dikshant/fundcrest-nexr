import { BASE_PATH } from "./asset";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://fundcrestcapital.com";

export const siteConfig = {
    name: "Fundcrest Capital Private Limited",
    shortName: "Fundcrest Capital",
    tagline: "Smart, secure, and customer-focused financial solutions",
    description:
        "Fundcrest Capital Private Limited is an RBI-registered NBFC offering secured, MSME, business, and personal loans with transparent terms for individuals and growing businesses.",
    locale: "en_IN",
    language: "en",
    email: "info@fundcrestcapital.com",
    phone: "+918118845455",
    phoneDisplay: "+91 81188 45455",
    address: {
        streetAddress:
            "P.NO.SB-113,114, 10th Floor, Galaxy Avenue, Siwad Area Tonk Road, Bapu Nagar",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302015",
        addressCountry: "IN",
    },
    keywords: [
        "Fundcrest Capital",
        "NBFC",
        "personal loan",
        "business loan",
        "MSME loan",
        "secured loan",
        "unsecured loan",
        "loan Jaipur",
        "financial services India",
    ],
    ogImage: "/about.webp",
};

export const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/governance", changeFrequency: "monthly", priority: 0.6 },
    {
        path: "/governance/aml-policy",
        changeFrequency: "yearly",
        priority: 0.5,
    },
    {
        path: "/governance/customer-grievance-redressal",
        changeFrequency: "yearly",
        priority: 0.5,
    },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
];

/** Absolute URL including optional basePath (for subdirectory deploys). */
export function absoluteUrl(path = "/") {
    const normalized = path.startsWith("/") ? path : `/${path}`;

    if (normalized === "/") {
        return BASE_PATH ? `${SITE_URL}${BASE_PATH}` : SITE_URL;
    }

    return `${SITE_URL}${BASE_PATH}${normalized}`;
}

export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    noIndex = false,
}) {
    const url = absoluteUrl(path);
    const pageTitle = title
        ? `${title} | ${siteConfig.shortName}`
        : `${siteConfig.name} | Loans & Financial Solutions`;

    return {
        ...(title ? { title } : {}),
        description,
        keywords: keywords ?? siteConfig.keywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: pageTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website",
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            images: [siteConfig.ogImage],
        },
        ...(noIndex
            ? {
                  robots: {
                      index: false,
                      follow: false,
                  },
              }
            : {}),
    };
}

export function getOrganizationJsonLd() {
    const { address } = siteConfig;

    return {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo.webp"),
        image: absoluteUrl(siteConfig.ogImage),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                contactType: "customer service",
                email: siteConfig.email,
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
            },
        ],
    };
}

export function getFaqJsonLd(items) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}
