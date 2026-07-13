import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.scss";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Fundcrest Capital Private Limited",
    description: "Fundcrest Capital Private Limited is a financial services company that provides financial solutions to individuals and businesses.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${plusJakartaSans.variable} h-full antialiased`}
        >
            <body
                cz-shortcut-listen="true"
                className="min-h-full flex flex-col"
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
