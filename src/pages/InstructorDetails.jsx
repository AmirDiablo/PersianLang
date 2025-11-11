import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Instructors } from "../assets/assets/dummyData";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const InstructorDetails = () => {
    const [Instructor, setInstrctor] = useState([])
    const {name} = useParams() 

    useEffect(()=> {
        const found = Instructors.filter(item=> item.name == name)
        setInstrctor(found)
    }, [])

    return ( 
        <div className="my-20 px-5 lg:px-30 transition-all duration-300">
            {Instructor.map((item, index) => (
                <div key={index} className="relative flex flex-col lg:flex-row lg:items-center gap-10 mb-20">
                
                {/* دایره پس‌زمینه */}
                <div className="bg-indigo-500 w-[60%] lg:w-[40%] aspect-square rounded-full absolute top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 z-0"></div>
                
                {/* تصویر مدرس */}
                <img
                    src={item.removedBg}
                    alt={item.name}
                    className="rounded-2xl lg:rounded-full object-cover w-[80%] lg:w-[40%] aspect-square mx-auto lg:mx-0 mb-10 lg:mb-0 z-30"
                />
                
                {/* اطلاعات مدرس */}
                <div className="z-30">
                    <p className="text-2xl lg:text-4xl font-bold">{item.name}</p>
                    <p className="text-orange-500 font-semibold mb-5">
                    Our professional {item.language} Instructor
                    </p>
                    <p className="mb-2">{item.resume}</p>
                    <p className="mb-2">{item.degree}</p>
                    <p className="mb-4 text-sm lg:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero ut corrupti eaque dolor...
                    </p>

                    {/* آیکون‌های شبکه اجتماعی */}
                    <div className="text-2xl lg:text-4xl flex items-center gap-5 mt-5 *:cursor-pointer">
                    <IoLogoInstagram className="text-purple-600" />
                    <FaTelegramPlane className="text-blue-600" />
                    <FaTwitter className="text-blue-600" />
                    <FaYoutube className="text-red-500" />
                    </div>
                </div>
                </div>
            ))}
    </div>

     );
}
 
export default InstructorDetails;

{/* <img src={item.img} className="lg:rounded-full rounded-2xl lg:aspect-square object-cover lg:w-[40%] w-[80%] max-lg:mx-auto max-lg:mb-10" /> */}