import React from "react";

const features = [
  "“A” Grade, Reputed Driving School",
  "Learn to Drive from Professional Instructors",
  "Flexible Training Hours",
  "Refresher & VIP Courses",
  "High First-Time Pass Rate",
  "Theory Test Lessons",
  "Modern, Well-Maintained Vehicles",
];

const HeroSection: React.FC = () => (
  <section
    className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden rounded-b-3xl shadow-lg mb-8"
    style={{ minHeight: "500px" }}
    id="home"
  >
    <img
      src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
      alt="Driving lesson"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-800/80 to-blue-500/70 z-10" />
    <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-2">
        DriveSafe Academy
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-100 font-semibold mb-6 drop-shadow">
        Trusted Driving School with Professional Instructors
      </h2>
      <ul className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl">
        {features.map((feature, idx) => (
          <li
            key={feature}
            className="bg-white/80 text-blue-800 rounded-full px-4 py-2 text-sm md:text-base font-medium shadow hover:bg-blue-100 transition"
          >
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-lg"
        tabIndex={0}
        aria-label="Enroll now at DriveSafe Academy"
        onKeyDown={(e) => {
          if (e.key === "Enter") (e.target as HTMLElement).click();
        }}
      >
        Start Your Lessons Today
      </a>
    </div>
  </section>
);

export default HeroSection;
