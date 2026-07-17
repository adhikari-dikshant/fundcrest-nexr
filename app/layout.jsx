import { Plus_Jakarta_Sans } from "next/font/google";
import JsonLd from "./components/json-ld";
import Navbar from "./components/navbar";
import {
    absoluteUrl,
    getOrganizationJsonLd,
    siteConfig,
} from "./lib/site";
import "./globals.scss";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(absoluteUrl("/")),
    title: {
        default: `${siteConfig.name} | Loans & Financial Solutions`,
        template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    applicationName: siteConfig.shortName,
    authors: [{ name: siteConfig.name, url: absoluteUrl("/") }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "finance",
    alternates: {
        canonical: absoluteUrl("/"),
    },
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: absoluteUrl("/"),
        siteName: siteConfig.name,
        title: `${siteConfig.name} | Loans & Financial Solutions`,
        description: siteConfig.description,
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
        title: `${siteConfig.name} | Loans & Financial Solutions`,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang={siteConfig.language}
            className={`${plusJakartaSans.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <JsonLd data={getOrganizationJsonLd()} />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
