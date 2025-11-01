import HeroSection from "../components/HeroSection";
import Locations from "../components/Locations";
import Slider from "../components/Slider";
import support from "../assets/support.png"
import { PiStudentBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaChartLine } from 'react-icons/fa'
import { BsHouses } from "react-icons/bs";
import { Instructors } from "../assets/assets/dummyData";
import InstructorCards from "../components/InstructorCards";
import InstructorCard2 from "../components/InstructorCard2";
import InstructorCard3 from "../components/InstructorCard3";




const Home = () => {

    window.addEventListener("scroll", ()=> {
        const elem = document.querySelectorAll(".blocks")
        const triggerBottom = window.innerHeight / 5*4 /* animation starting point */

        elem.forEach(el=> {
            const elemTop = el.getBoundingClientRect().top

            if(elemTop < triggerBottom) {
                el.style.opacity = 1;
                el.style.transform = "translateY(30px)"
            }else{
                el.style.opacity = 0;
                el.style.transform = "translateY(0px)"
            }
        })
    })

    const Features = [
        {icon: <PiStudentBold />, text: "Obtaining a degree in 50 days"},
        {icon: <GoBook />, text: "The best teaching methods"},
        {icon: <FaChalkboardTeacher />, text: "Teaching by experienced instructors"},
        {icon: <FaChartLine />, text: "Starting from zero to advanced"},
        {icon: <BsHouses />, text: "Has a student dormitory"},
        {icon: <PiStudentBold />, text: "Obtaining a degree in 50 days"},
    ]

    return ( 
        <div className="mb-10">
            <HeroSection />
            <div className="blocks mb-20">
                <Locations />
            </div>

            {/* <div className="flex gap-2 px-5 overflow-x-auto mb-20 lg:justify-center">
                {Instructors.map((item, index)=> (
                    <InstructorCards Instructor={item} index={index} />
                ))}
            </div> */}

            {/* <InstructorCard2 /> */}

            <InstructorCard3 />

            <Slider />

            <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-5 px-6 lg:px-30 py-20">
                <img src={support} className="rounded-2xl w-full max-w-md" />
    
                <div dir="rtl" className="text-right mt-5">
                    <p className="font-bold text-2xl border-r-7 border-indigo-500 pr-5 py-2">
                    Goals of Garmsar Azad university courses
                    </p>
                    <ul className="introduceList space-y-5 mt-5">
                    <li>شروع مکالمه از همان جلسات اول</li>
                    <li>مکالمه روان در موقعیت‌های روزمره (مثل خرید، سفارش غذا و...)</li>
                    <li>پایه‌ای قوی برای آزمون‌های بین‌المللی زبان فارسی</li>
                    <li>تقویت هر چهار مهارت با تمرکز بر مکالمه</li>
                    <li>یادگیری اصطلاحات کاربردی و عامیانه</li>
                    <li>تسلط کامل بر گرامر و استفاده صحیح در مکالمات</li>
                    <li>توانایی مکالمات طولانی و آکادمیک</li>
                    </ul>
                </div>
            </div>


            <div dir="rtl" className="px-5 md:px-20">
                <p className="border-r-7 border-indigo-500 py-2 pr-5 font-bold text-2xl">Features of classes at Garmsar Language courses</p>
                <div className="columns-1 md:columns-3 gap-5 mt-5">
                {Features.map((item, i) => (
                    <div key={i} className="break-inside-avoid border-2 border-black/10 p-3 rounded-2xl mb-5">
                    <p className="text-3xl text-indigo-500 mb-5">{item.icon}</p>
                    {item.text}
                    </div>
                ))}
            </div>

            </div>
            
        </div>
     );
}
 
export default Home;