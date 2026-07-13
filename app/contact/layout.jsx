import Footer from "../components/footer";

export default function ContactLayout({ children }) {
    return (
        <>
            {children}
            <Footer variant="default" />
        </>
    );
}
