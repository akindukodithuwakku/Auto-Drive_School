import React, { useState } from "react";

const lessonPrices = [
  { lesson: "Prime mover", price: "20,000" },
  { lesson: "Heavy vehicle", price: "13,000" },
  { lesson: "Car/van manual", price: "11,000" },
  { lesson: "Car (auto)", price: "13,000" },
  { lesson: "Three wheel", price: "6,500" },
  { lesson: "Motorcycle", price: "5,500" },
];
const comboPrices = [
  { combo: "Heavy vehicle + motorcycle", price: "17,000" },
  { combo: "Car + Three wheeler + motorcycle", price: "20,000" },
  { combo: "Car + motorcycle", price: "15,000" },
  { combo: "Car + Three wheeler", price: "16,000" },
  { combo: "Three wheeler + motorcycle", price: "10,500" },
];
const practicePrices = [
  { lesson: "Heavy vehicle (Half an hour)", price: "700" },
  { lesson: "Car / van manual (Half an hour)", price: "600" },
  { lesson: "Car (auto) (Half an hour)", price: "800" },
  { lesson: "Three wheel (Half an hour)", price: "400" },
  { lesson: "Motorcycle (Half an hour)", price: "300" },
];
const medicalPrices = [
  { type: "Car / van / threewheel / motorcycle", price: "750" },
  { type: "Heavy vehicle", price: "1,250" },
];
const govPrices = [
  { type: "Heavy vehicle", price: "2,000" },
  { type: "Car / Van", price: "2,000" },
  { type: "Three wheel", price: "2,000" },
  { type: "Motorcycle", price: "1,850" },
  { type: "Heavy vehicle + Motorcycle", price: "2,450" },
  { type: "Car + Threewheel + Motorcycle", price: "2,700" },
  { type: "Car + Threewheel", price: "2,300" },
  { type: "Car + Motorcycle", price: "2,450" },
];
const documents = [
  "Original Birth certificate",
  "Original National Identity Card",
  "Medical",
];

const PricesSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the inquiry to your backend or email service
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="prices">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
        Prices & Inquiries
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Lesson Prices
          </h3>
          <table className="w-full mb-6 text-sm border rounded-xl overflow-hidden">
            <tbody>
              {lessonPrices.map((row) => (
                <tr key={row.lesson} className="even:bg-blue-50">
                  <td className="py-2 px-3 font-medium">{row.lesson}</td>
                  <td className="py-2 px-3 text-right">Rs {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Combo Packages
          </h3>
          <table className="w-full mb-6 text-sm border rounded-xl overflow-hidden">
            <tbody>
              {comboPrices.map((row) => (
                <tr key={row.combo} className="even:bg-blue-50">
                  <td className="py-2 px-3 font-medium">{row.combo}</td>
                  <td className="py-2 px-3 text-right">Rs {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Practice Lessons
          </h3>
          <table className="w-full mb-6 text-sm border rounded-xl overflow-hidden">
            <tbody>
              {practicePrices.map((row) => (
                <tr key={row.lesson} className="even:bg-blue-50">
                  <td className="py-2 px-3 font-medium">{row.lesson}</td>
                  <td className="py-2 px-3 text-right">Rs {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Medical Charges
          </h3>
          <table className="w-full mb-6 text-sm border rounded-xl overflow-hidden">
            <tbody>
              {medicalPrices.map((row) => (
                <tr key={row.type} className="even:bg-blue-50">
                  <td className="py-2 px-3 font-medium">{row.type}</td>
                  <td className="py-2 px-3 text-right">Rs {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Government Charges
          </h3>
          <table className="w-full mb-6 text-sm border rounded-xl overflow-hidden">
            <tbody>
              {govPrices.map((row) => (
                <tr key={row.type} className="even:bg-blue-50">
                  <td className="py-2 px-3 font-medium">{row.type}</td>
                  <td className="py-2 px-3 text-right">Rs {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Essential Documents
        </h3>
        <ul className="list-disc list-inside bg-blue-50 rounded-xl p-4 text-gray-700">
          {documents.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-8">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Send an Inquiry
        </h3>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center py-4">
            Thank you! We have received your inquiry.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Phone or Email"
              value={form.contact}
              onChange={handleChange}
              className="border rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PricesSection;
