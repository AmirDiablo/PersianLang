import React from "react";
import DoormSlider from "../components/DoormSlider"; // اسلایدر جدیدت
import dorm from "../assets/assets/dorm.jpg"
import dorm2 from "../assets/assets/dorm2.png"
import dorm3 from "../assets/assets/dorm3.jpg"

const DormPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 mt-40" dir="rtl">
      

      {/* Info Section */}
      <section id="info" className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-600 pb-2 mb-6">
          اطلاعات پایه
        </h2>
        <div className="bg-white rounded-lg shadow p-6 space-y-2">
          <p><strong>نام خوابگاه:</strong> خوابگاه پسران شماره ۱</p>
          <p><strong>موقعیت:</strong> خیابان دانشگاه، روبروی دانشکده علوم</p>
          <p><strong>ظرفیت:</strong> ۲۰۰ نفر (اتاق‌های ۲ و ۴ نفره)</p>
        </div>
      </section>

      {/* Services Section → جایگزین با اسلایدر */}
      <section id="services" className="w-full py-12 bg-gray-100" dir="ltr">
        <h2 className="text-2xl font-bold text-blue-800 text-center -mb-30">
          امکانات و خدمات
        </h2>
        <DoormSlider />
      </section>

      {/* {[
            { title: "اینترنت پرسرعت", icon: "🌐" },
            { title: "سالن مطالعه", icon: "📖" },
            { title: "سالن غذاخوری", icon: "🍽️" },
            { title: "خشکشویی", icon: "🧺" },
            { title: "امنیت ۲۴ ساعته", icon: "🛡️" },
            { title: "سالن ورزشی", icon: "🏋️" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))} */}


      {/* Gallery Section */}
      <section id="gallery" className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-600 pb-2 mb-6">
          گالری تصاویر
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[dorm, dorm2, dorm3].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow">
              <img
                src={img}
                alt="خوابگاه"
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-600 pb-2 mb-6">
          قوانین و مقررات
        </h2>
        <div className="space-y-4">
          <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded">
            ساعت ورود و خروج: ۶ صبح تا ۱۱ شب
          </div>
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded">
            رعایت سکوت در سالن مطالعه
          </div>
          <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded">
            ممنوعیت نگهداری وسایل برقی پرمصرف
          </div>
        </div>
      </section>

    </div>
  );
};

export default DormPage;
