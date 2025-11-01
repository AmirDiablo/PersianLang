import { SlCalender } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import HeroBackground from '../assets/assets/garmsar2.jfif';

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate()

    return ( 
        <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen' style={{background: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* <img src={marvelLogo} className="max-h-11 lg:h-11 mt-20" alt="Marvel Logo" /> */}

            <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110 text-white landText">Welcome to Garmsar</h1>

            <div className="flex items-center gap-4 text-gray-300 landText">
                <span>picture of Gragon Mountain</span>
                
            </div>

            <p className="max-w-md text-gray-300 landText">
                Garmsar is a city in the Central District of Garmsar County, 
                Semnan province, Iran, serving as capital of both the county and the district. 
                Garmsar is about 95 kilometres southeast of Tehran. It lies on the edge of Dasht-e Kavir, 
                Iran's largest desert. Many people in the city commute to Tehran due to its proximity.
            </p>
            <div class="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                <button class="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-blue-600 backdrop-blur">
                    <p className="flex items-center gap-2">Explore More <FaArrowRight className="w-5 h-5" /></p>
                </button>
            </div>

        </div>
     );
}
 
export default HeroSection;