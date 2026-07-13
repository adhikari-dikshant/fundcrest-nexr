"use client";

import { useRef, useState } from "react";
import { asset } from "../lib/asset";

const SWIPE_THRESHOLD = 50;

export default function TestimonialCarousel({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(null);

    const goTo = (index) => {
        setActiveIndex((index + items.length) % items.length);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const diff = touchStartX.current - event.changedTouches[0].clientX;

        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
        }

        touchStartX.current = null;
    };

    return (
        <div
            className="testimonial-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="testimonial-carousel__track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div key={item.name} className="testimonial-carousel__slide">
                        <div className="testimonial-content">
                            <p className="text-test mb-6">{item.quote}</p>
                            <div className="name">{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="testimonial-carousel__nav">
                <button
                    type="button"
                    className="testimonial-carousel__btn"
                    aria-label="Previous testimonial"
                    onClick={() => goTo(activeIndex - 1)}
                >
                    <img src={asset("/icons/prev.svg")} alt="" />
                </button>
                <button
                    type="button"
                    className="testimonial-carousel__btn"
                    aria-label="Next testimonial"
                    onClick={() => goTo(activeIndex + 1)}
                >
                    <img src={asset("/icons/next.svg")} alt="" />
                </button>
            </div>
        </div>
    );
}
