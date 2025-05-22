import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-blue-700 text-white text-center py-4 mt-12 rounded-t-2xl shadow-inner">
    <span className="text-sm">
      &copy; {new Date().getFullYear()} DriveSafe Academy. All rights reserved.
    </span>
  </footer>
);

export default Footer;
