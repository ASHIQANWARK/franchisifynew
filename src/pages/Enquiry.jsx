import React, { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    investment: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Franchisify,%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Mobile:* ${formData.mobile}%0A
*State:* ${formData.state}%0A
*Investment Range:* ${formData.investment}%0A
*Query:* ${formData.query || "N/A"}`;

    const whatsappURL = `https://wa.me/919035219637?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-16 px-4" id="enquire">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Enquire Now</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full mx-auto mb-10" />
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact + Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              Door No:84, Industrial Layout, 5TH Block, 3RD Cross, Near Jyothi Nivas College,
              Koramangala, Bengaluru, Karnataka 560095
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.118313820758!2d77.61178277508864!3d12.934451387383963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1467d376b9d3%3A0x30c240d84dcb76fc!2sJyoti%20Nivas%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1719724986017!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
              title="Koramangala Location"
            ></iframe>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-3"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-3"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-3"
            >
              <option value="">Select State</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-3"
            >
              <option value="">Select Investment Range</option>
              <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
              <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
              <option value="₹10-25 Lakhs">₹10-25 Lakhs</option>
              <option value="₹25-50 Lakhs">₹25-50 Lakhs</option>
              <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
            </select>
            <textarea
              name="query"
              placeholder="Query (Optional)"
              value={formData.query}
              onChange={handleChange}
              className="w-full border rounded px-4 py-3"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold py-3 rounded"
            >
              Book Your Slot!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
