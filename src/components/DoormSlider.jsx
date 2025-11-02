import { HiMiniUserGroup } from "react-icons/hi2";
import { PiParkFill } from "react-icons/pi";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const DoormSlider = () => {
  const slides = [
    {
      icon: <HiMiniUserGroup className="text-white text-6xl z-20" />,
      text: "20 people capacity",
    },
    {
      icon: <PiParkFill className="text-white text-6xl z-20" />,
      text: "More than 6 hectares of green space",
    },
    {
        icon: <FaHouseChimney className="text-white text-6xl z-20" />,
        text: "More than 70 Room"
    },
    {
        icon: <MdOutlineSportsBasketball className="text-white text-6xl z-20" />,
        text: "Includes sport club and gym"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Slide effect
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="mt-40">
      <div className="flex flex-col items-center px-5">
        <div
          className="w-full max-w-3xl aspect-video rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: 'url("/uni.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-indigo-500/80 rounded-2xl" />

          {/* viewport */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl flex items-center justify-center">
            {/* sliding track */}
            <div
              ref={trackRef}
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center"
                >
                  {slide.icon}
                  <p className="text-white text-2xl md:text-4xl mt-2 text-center">{slide.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="flex items-center mt-5 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-black/80" : "bg-black/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoormSlider;
