import ConnectForm from "./form";
import { asset } from "../lib/asset";

export default function ConnectFormSection() {
    return (
        <section className="form-section form-section--merged">
            <div className="container">
                <div className="form-section__inner">
                    <div className="form-section__form-col">
                        <ConnectForm />
                    </div>

                    <div className="form-section__media-col">
                        <div className="form-media">
                            <img
                                src={asset("/form-side.webp")}
                                alt="Consultation with a Fundcrest expert"
                                className="form-media__img"
                            />

                            <div className="form-media__bar">
                                <span className="form-media__icon" aria-hidden="true">
                                    <img src={asset("/icons/call.svg")} alt="" />
                                </span>
                                <p className="form-media__text">
                                    Call us at +91 81188 45455 or fill out our form, and we&apos;ll contact you within one business day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
