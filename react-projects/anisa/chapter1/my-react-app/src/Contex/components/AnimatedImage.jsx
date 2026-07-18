import { useEffect, useRef, useState } from "react";
import '../assets/styles/Imagean.css' // فایل استایل جدا برای انیمیشن‌ها

function AnimatedImage({ src, alt }) {
    const imgRef = useRef(null); // ارجاع به المنت عکس
    const [isVisible, setIsVisible] = useState(false); // وضعیت دید بودن

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]; // فقط یه المنت داریم
            if (entry.isIntersecting) {
                setIsVisible(true); // وقتی عکس دیده شد
                observer.unobserve(entry.target); // دیگه لازم نیست دوباره چک کنه
            }
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
    }, []);

    return (
        <img
            // style={{borderRadius:'15px'}}
            ref={imgRef}
            src={src}
            alt={alt}
            className={`animated-image ${isVisible ? "visible" : ""}`}
        />
    );
}

export default AnimatedImage;
