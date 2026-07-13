"use client";

import { useEffect } from "react";

export default function Modal({ modal, onClose }) {
    useEffect(() => {
        if (!modal) return;

        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [modal, onClose]);

    if (!modal) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-box modal-box--${modal.type}`}
                role={modal.type === "error" ? "alertdialog" : "dialog"}
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal-box__close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <span className="modal-box__icon" aria-hidden="true">
                    {modal.type === "success" ? "✓" : "!"}
                </span>

                <p className="modal-box__message">{modal.message}</p>

                <button type="button" className="btn-main modal-box__ok" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
}
