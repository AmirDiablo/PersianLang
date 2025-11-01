import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/UniLogo.png"



const IranianNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["خانه", "درباره ما", "تماس با ما", "خدمات"];

  return (
    <nav className="bg-linear-to-r z-50 from-blue-900 to-blue-700 text-white border-b-4 border-yellow-400 font-vazir bg-repeat px-10 py-4 fixed top-0 left-0 right-0 " style={{backgroundImage: 'url("/blue.jpg")'}}>
      <div className="flex justify-between items-center">
        {/* لوگو */}
        <div className="text-3xl font-bold drop-shadow-md"><img src={Logo} className="w-10" /></div>

        {/* دکمه موبایل */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* لینک‌ها */}
        <div className="hidden md:flex gap-6 text-lg">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-yellow-400 relative before:content-['✦'] before:absolute before:-right-4 before:text-yellow-400"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden text-lg">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-yellow-400 relative before:content-['✦'] before:absolute before:-right-4 before:text-yellow-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default IranianNavbar;