import { useState, useEffect, useRef } from "react"
import photo1 from "../assets/IMG_20251030_122813_808.jpg"
import photo2 from "../assets/IMG_20251030_123015_477.jpg"
import photo3 from "../assets/IMG_20251030_123050_626.jpg"


const Slider = () => {
    const [index, setIndex] = useState(0)

    const slides = [
        {img: photo1, description: "دوره های آموزش زبان فارسی در این موسسه به صورت حضوری و آنلاین در بهترین پلتفرم آموزشی آنلاین با قابلیت ارتباط دو جانبه و گروهی به صورت صوتی و تصویری برای افراد در سراسر کشور و حتی خارج از کشور برگزار می شود. کلاس های زبان فارسی این آموزشگاه توسط سوپروایزرهای دپارتمان فارسی به صورت مستمر مورد ارزیابی و نظارت بوده و اساتید در هر جلسه به ارائه گزارش از جلسات برگزار شده می پردازند"},
        {img: photo2, description: "دوره های آموزش زبان فارسی در این موسسه به صورت حضوری و آنلاین در بهترین پلتفرم آموزشی آنلاین با قابلیت ارتباط دو جانبه و گروهی به صورت صوتی و تصویری برای افراد در سراسر کشور و حتی خارج از کشور برگزار می شود. کلاس های زبان فارسی این آموزشگاه توسط سوپروایزرهای دپارتمان فارسی به صورت مستمر مورد ارزیابی و نظارت بوده و اساتید در هر جلسه به ارائه گزارش از جلسات برگزار شده می پردازند"},
        {img: photo3, description: "دوره های آموزش زبان فارسی در این موسسه به صورت حضوری و آنلاین در بهترین پلتفرم آموزشی آنلاین با قابلیت ارتباط دو جانبه و گروهی به صورت صوتی و تصویری برای افراد در سراسر کشور و حتی خارج از کشور برگزار می شود. کلاس های زبان فارسی این آموزشگاه توسط سوپروایزرهای دپارتمان فارسی به صورت مستمر مورد ارزیابی و نظارت بوده و اساتید در هر جلسه به ارائه گزارش از جلسات برگزار شده می پردازند"}
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Slide effect
    useEffect(() => {
        if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return ( 
        <div className="flex flex-col items-center px-5">
            <div className="w-full max-w-3xl overflow-hidden relative rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    ref={sliderRef}
                    >
                    {slides.map((item, index) => (
                        <img
                        key={index}
                        src={item.img}
                        alt={`Slide ${index + 1}`}
                        className="w-full shrink-0 object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center mt-5 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-black/80" : "bg-black/20"
                        }`}
                    />
                ))}
            </div>
    </div>
     );
}
 
export default Slider;