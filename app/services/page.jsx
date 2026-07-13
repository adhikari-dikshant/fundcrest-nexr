import { asset } from "../lib/asset";
import "../scss/pages/services.scss";

export default function ServicesPage() {
    return (
        <>
            <section className="services-hero">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12 col-md-10 text-center">
                            <p className="pill text-body-big mb-3 mx-auto">Our Services</p>
                            <h1 className="mb-5">
                                Financial <span>Solutions</span> Built for your Goals
                            </h1>
                            <p className="text-body-big text-muted md:px-20">
                                Flexible, transparent and reliable loan solutions for individuals and businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products py-10">
                <div className="container">
                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 mb-5 md:mb-0">
                            <img src={asset("/icons/p1.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Secured/Unsecured Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Flexible secured and unsecured loan solutions tailored to help individuals and businesses achieve financial goals with confidence.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:block">
                                Learn More About Secured Loans
                            </a>
                        </div>

                        <div className="col-12 col-md-6 offset-md-1">
                            <img src={asset("/p1.webp")} alt="" className="mb-8 md:mb-0" />

                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Secured Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 order-md-2 offset-md-1 mb-5 md:mb-0">
                            <img src={asset("/icons/p2.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                MSME Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Elevating small and medium enterprises with customized funding for working capital, expansion, and business growth.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:block">
                                Learn More About MSME Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <img src={asset("/p2.webp")} alt="" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About MSME Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 mb-5 md:mb-0">
                            <img src={asset("/icons/p3.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Business Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Get the right funding for your business needs.
                                From startups to established businesses, we&apos;ve got you covered.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:block">
                                Learn More About Business Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 offset-md-1">
                            <img src={asset("/p3.webp")} alt="" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Business Loans
                            </a>
                        </div>
                    </div>

                    <div className="row items-center mb-10 md:mb-12">
                        <div className="col-12 col-md-5 order-md-2 offset-md-1 mb-5 md:mb-0">
                            <img src={asset("/icons/p4.svg")} alt="" className="mb-5" />

                            <h3 className="mb-4">
                                Personal Loan
                            </h3>

                            <p className="text-prod md:mb-18">
                                Quick and easy personal loans for medical emergencies, travel, education, home needs and more.
                            </p>

                            <a href="#" className="btn-main w-full hidden md:block">
                                Learn More About Personal Loans
                            </a>
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <img src={asset("/p4.webp")} alt="" className="mb-8 md:mb-0" />
                            <a href="#" className="btn-main w-full iniline-block md:hidden">
                                Learn More About Personal Loans
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
