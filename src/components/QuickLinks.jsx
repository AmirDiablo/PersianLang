import React from 'react';

const QuickLinks = () => {
  const links = [
    { icon: '📋', title: 'شرایط و ضوابط', description: 'مقررات اقامت در خوابگاه' },
    { icon: '💰', title: 'هزینه و پرداخت', description: 'نحوه پرداخت هزینه خوابگاه' },
    { icon: '🖼️', title: 'گالری تصاویر', description: 'تصاویر محیط خوابگاه' },
    { icon: '❓', title: 'سوالات متداول', description: 'پاسخ به پرسش‌های متداول' },
    { icon: '📞', title: 'تماس با ما', description: 'اطلاعات تماس مسئولین' },
  ];

  return (
    <section className="py-16 bg-white mx-5 lg:mx-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          دسترسی سریع
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {links.map((link, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;