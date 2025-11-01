import { Link } from "react-router-dom";
import Logo from "../assets/UniLogo.png"
import Patern from "../assets/patern2.png"

import { FiSearch } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavPaths = [
        {name: "Home", path: "/"},
        {name: "Contact Us", path: "/contact"},
        {name: "Courses", path: "/courses"}
    ]


    return ( 
        <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-6 h-16 md:px-16 lg:px-36 py-5">
            <Link to="/" className="max-md:flex-1">
                <img src={Logo} alt="logo" className="w-15 mt-10 h-auto"/>
            </Link>

            <div className={`max-md:absolute mt-10 text-white max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
                <RxCross1 onClick={()=> setIsOpen(false)} className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" />


                <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to="/">Home</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to="/movies" className="ml-8">Contact Us</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to="/theaters" className="ml-8">Courses</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to="/releases" className="ml-8">Places</Link>
            </div>

            <CiMenuFries onClick={()=> setIsOpen(!isOpen)} className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer mt-10 text-white" />

        </div>
     );
}
 
export default NavBar;