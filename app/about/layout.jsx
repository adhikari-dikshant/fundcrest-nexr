import ConnectFormSection from "../components/connect-form-section";
import Footer from "../components/footer";

export default function SiteLayout({ children }) {
    return (
        <>
            {children}
            <ConnectFormSection />
            <Footer variant="merged" />
        </>
    );
}
