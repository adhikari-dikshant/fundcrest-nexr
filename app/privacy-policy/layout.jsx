import ConnectFormSection from "../components/connect-form-section";
import Footer from "../components/footer";

export default function PrivacyLayout({ children }) {
    return (
        <>
            {children}
            <ConnectFormSection />
            <Footer variant="merged" />
        </>
    );
}
