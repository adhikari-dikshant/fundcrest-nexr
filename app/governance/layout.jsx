import ConnectFormSection from "../components/connect-form-section";
import Footer from "../components/footer";

export default function GovernanceLayout({ children }) {
    return (
        <>
            {children}
            <ConnectFormSection />
            <Footer variant="merged" />
        </>
    );
}
