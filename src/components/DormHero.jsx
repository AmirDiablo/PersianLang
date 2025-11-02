import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pt-30 h-screen lg:px-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              زندگی دانشجویی در 
              <span className="text-yellow-300"> خوابگاه دانشگاه</span>
            </h1>
            <p className="text-xl text-blue-100">
              خانه دوم شما در دوران تحصیل - محیطی امن، پویا و به‌یادماندنی
            </p>
            <div className="flex flex-wrap gap-4 *:cursor-pointer">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg">
                درخواست ثبت‌نام
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                گالری تصاویر
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <img 
                src="./uni.jpg" 
                alt="خوابگاه دانشگاه" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;