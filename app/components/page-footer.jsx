"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import FormSection from "./form-section";

export default function PageFooter() {
    const pathname = usePathname();
    const isContact = pathname === "/contact";

    return (
        <div className="page-footer mt-auto">
            {!isContact && <FormSection />}
            <Footer merged={!isContact} />
        </div>
    );
}
