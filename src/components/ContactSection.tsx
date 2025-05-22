import React from "react";

const branches = [
  {
    name: "Head Office",
    address: "123 Main St, Hometown, USA",
    phone: "+1 (234) 567-890",
    email: "info@drivesafeacademy.com",
    reg: "Reg.No: DS 101",
    map: "https://www.google.com/maps?q=123+Main+St,+Hometown,+USA&output=embed",
  },
  {
    name: "Eastside Branch",
    address: "456 East Ave, Hometown, USA",
    phone: "+1 (234) 555-1234",
    reg: "Reg.No: DS 102",
    map: "https://www.google.com/maps?q=456+East+Ave,+Hometown,+USA&output=embed",
  },
  {
    name: "Westside Branch",
    address: "789 West Blvd, Hometown, USA",
    phone: "+1 (234) 555-5678",
    reg: "Reg.No: DS 103",
    map: "https://www.google.com/maps?q=789+West+Blvd,+Hometown,+USA&output=embed",
  },
];

const ContactSection: React.FC = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto" id="contact">
    <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
      Contact Us
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Head Office */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          {branches[0].name}
        </h3>
        <div className="flex items-center gap-3">
          <span
            role="img"
            aria-label="Location"
            className="text-blue-600 text-xl"
          >
            📍
          </span>
          <span className="text-gray-800">{branches[0].address}</span>
        </div>
        <div className="flex items-center gap-3">
          <span role="img" aria-label="Phone" className="text-blue-600 text-xl">
            📞
          </span>
          <a
            href={`tel:${branches[0].phone.replace(/[^\d+]/g, "")}`}
            className="text-gray-800 hover:text-blue-700 focus:underline"
            tabIndex={0}
          >
            {branches[0].phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span role="img" aria-label="Email" className="text-blue-600 text-xl">
            ✉️
          </span>
          <a
            href={`mailto:${branches[0].email}`}
            className="text-gray-800 hover:text-blue-700 focus:underline"
            tabIndex={0}
          >
            {branches[0].email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span role="img" aria-label="Reg" className="text-blue-600 text-xl">
            🆔
          </span>
          <span className="text-gray-800">{branches[0].reg}</span>
        </div>
        <div className="mt-4 rounded-lg overflow-hidden border-2 border-blue-100 shadow">
          <iframe
            src={branches[0].map}
            title="Head Office Map"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Branches */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Our Branches
        </h3>
        {branches.slice(1).map((branch, idx) => (
          <div key={branch.name} className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span
                role="img"
                aria-label="Location"
                className="text-blue-600 text-lg"
              >
                📍
              </span>
              <span className="font-semibold text-gray-800">{branch.name}</span>
            </div>
            <div className="ml-6 text-gray-700 text-sm">{branch.address}</div>
            <div className="ml-6 flex items-center gap-2 text-sm">
              <span role="img" aria-label="Phone" className="text-blue-600">
                📞
              </span>
              <a
                href={`tel:${branch.phone.replace(/[^\d+]/g, "")}`}
                className="hover:text-blue-700 focus:underline"
                tabIndex={0}
              >
                {branch.phone}
              </a>
            </div>
            <div className="ml-6 flex items-center gap-2 text-sm">
              <span role="img" aria-label="Reg" className="text-blue-600">
                🆔
              </span>
              <span>{branch.reg}</span>
            </div>
            <div className="ml-6 mt-2 rounded-lg overflow-hidden border border-blue-100 shadow">
              <iframe
                src={branch.map}
                title={`${branch.name} Map`}
                width="100%"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
