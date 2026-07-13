"use client";

import { useState } from "react";

export default function Accordian({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={item.question}
                        className={`accordion__item${isOpen ? " is-open" : ""}`}
                    >
                        <button
                            type="button"
                            className="accordion__trigger"
                            aria-expanded={isOpen}
                            onClick={() => toggle(index)}
                        >
                            <span className="accordion__question">{item.question}</span>
                            <span className="accordion__icon" aria-hidden="true" />
                        </button>

                        <div className="accordion__panel">
                            <div className="accordion__panel-inner">
                                <p className="accordion__answer">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
