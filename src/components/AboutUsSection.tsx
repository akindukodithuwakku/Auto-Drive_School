import React from "react";

const AboutUsSection: React.FC = () => (
  <section className="py-16 px-4 bg-white rounded-3xl shadow max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 my-8">
    <img
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
      alt="Driving instructor with student"
      className="w-full md:w-1/3 rounded-2xl shadow-lg object-cover h-64 md:h-80 mb-6 md:mb-0"
    />
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About Us</h2>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Who We Are</h3>
      <p className="text-lg mb-4 text-gray-700">
        Founded in 2010, DriveSafe Academy has quickly become one of the most
        trusted and respected driving schools in the region. Our
        government-certified instructors are dedicated to helping every student
        become a safe, confident, and responsible driver for life.
      </p>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">
        Why Choose Us?
      </h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-1">
        <li>Flexible training hours to fit your busy schedule</li>
        <li>Modern, comfortable, and well-maintained vehicles</li>
        <li>Personalized instruction for all ages and skill levels</li>
        <li>Real-world training on public roads, not just closed courses</li>
        <li>High first-time pass rate and excellent student support</li>
      </ul>
      <p className="text-lg text-gray-700 mb-4">
        Whether you're just turning 18 or looking to refresh your skills, our
        team is here to guide you every step of the way. Join hundreds of
        successful graduates who now drive with confidence everywhere!
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        tabIndex={0}
        aria-label="Start your driving lessons with DriveSafe Academy"
        onKeyDown={(e) => {
          if (e.key === "Enter") (e.target as HTMLElement).click();
        }}
      >
        Start Your Lessons Today
      </a>
    </div>
  </section>
);

export default AboutUsSection;
