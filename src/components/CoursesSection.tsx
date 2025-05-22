import React from "react";
import { courses } from "../data/courses";

const CoursesSection: React.FC = () => (
  <section className="py-12 px-4 max-w-6xl mx-auto" id="courses">
    <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
      Our Courses
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-blue-50/60 rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-100 transition-all duration-300 ease-in-out group"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-200 group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {course.title}
          </h3>
          <p className="text-gray-600 text-center">{course.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CoursesSection;
