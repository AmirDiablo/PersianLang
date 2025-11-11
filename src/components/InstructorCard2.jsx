// src/components/TeamSection.jsx
import React from 'react';
import { Instructors } from '../assets/assets/dummyData';

const teamMembers = Instructors

// آرایه‌ای از شکل‌های موج‌دار (هر کدوم یه border-radius متفاوت)
const blobShapes = [
  "60% 40% 70% 30% / 50% 60% 40% 50%",
  "70% 30% 60% 40% / 45% 55% 45% 55%",
  "55% 45% 65% 35% / 60% 40% 60% 40%",
  "65% 35% 55% 45% / 50% 50% 50% 50%",
  "50% 50% 70% 30% / 40% 60% 40% 60%",
  "40% 60% 50% 50% / 55% 45% 55% 45%",
  "75% 25% 60% 40% / 50% 50% 50% 50%",
  "30% 70% 40% 60% / 45% 55% 45% 55%",
];

export default function InstructorCard2() {
  return (
    <section className="py-16 bg-white my-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-16">
          ما چند نفر هستیم
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* شکل موج‌دار بنفش */}
              <div
                className="relative w-48 h-48 mx-auto mb-6 blob-bg"
                style={{
                  background: "linear-gradient(135deg, #8e44ad, #9b59b6, #6b2dd0)",
                  borderRadius: blobShapes[index % blobShapes.length],
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* عکس گرد */}
                <div className="absolute inset-4 md:inset-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 md:border-6 border-white shadow-xl"
                  />
                </div>
              </div>

              {/* اطلاعات */}
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-purple-600 text-sm font-medium hover:underline mt-2 inline-block"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}