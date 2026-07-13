import { asset } from "../lib/asset";

function PolicySection({ section }) {
    switch (section.type) {
        case "heading":
            return <h2 className="policy-doc__heading">{section.text}</h2>;
        case "subheading":
            return <h3 className="policy-doc__subheading">{section.text}</h3>;
        case "paragraph":
            return <p className="policy-doc__paragraph">{section.text}</p>;
        case "list":
            return (
                <ul className="policy-doc__list">
                    {section.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        case "table":
            return (
                <div className="policy-doc__table-wrap">
                    <table className="policy-doc__table">
                        <thead>
                            <tr>
                                {section.headers.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {section.rows.map((row) => (
                                <tr key={row.join("-")}>
                                    {row.map((cell) => (
                                        <td key={cell}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        case "flow":
            return (
                <div className="grievance-flow">
                    {section.steps.map((step, index) => (
                        <div key={step.step} className="grievance-flow__step">
                            <div className="grievance-flow__rail">
                                <div className="grievance-flow__node">{step.step}</div>
                                {index < section.steps.length - 1 ? (
                                    <span className="grievance-flow__line" aria-hidden="true" />
                                ) : null}
                            </div>

                            <div className="grievance-flow__card">
                                <div className="grievance-flow__card-head">
                                    <div>
                                        <span className="grievance-flow__label">Step {step.step}</span>
                                        <h3 className="grievance-flow__title">{step.title}</h3>
                                    </div>
                                    {step.tat ? (
                                        <span className="grievance-flow__tat">
                                            <span>TAT</span>
                                            {step.tat}
                                        </span>
                                    ) : null}
                                </div>

                                {step.name ? (
                                    <p className="grievance-flow__name">{step.name}</p>
                                ) : null}
                                {step.note ? (
                                    <p className="grievance-flow__note">{step.note}</p>
                                ) : null}

                                {step.email || step.phone ? (
                                    <div className="grievance-flow__contacts">
                                        {step.email ? (
                                            <a className="grievance-flow__contact" href={`mailto:${step.email}`}>
                                                <img src={asset("/icons/mail2.svg")} alt="" />
                                                <span>{step.email}</span>
                                            </a>
                                        ) : null}
                                        {step.phone ? (
                                            <a className="grievance-flow__contact" href={`tel:+91${step.phone}`}>
                                                <img src={asset("/icons/call.svg")} alt="" />
                                                <span>+91 {step.phone}</span>
                                            </a>
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "link":
            return (
                <p className="policy-doc__paragraph">
                    {section.prefix}{" "}
                    <a href={section.href} target="_blank" rel="noopener noreferrer">
                        {section.text}
                    </a>
                </p>
            );
        default:
            return null;
    }
}

export default function PolicyDocument({ pill, title, sections }) {
    return (
        <section className="policy-doc">
            <div className="container">
                <div className="row justify-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        {pill && <p className="pill mb-3">{pill}</p>}
                        <h1 className="policy-doc__title mb-8">{title}</h1>
                        <div className="policy-doc__body">
                            {sections.map((section, index) => (
                                <PolicySection key={`${section.type}-${index}`} section={section} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
