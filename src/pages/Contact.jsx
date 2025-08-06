import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    businessType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `Hello, I am interested in franchising.\n\n
    *Full Name:* ${formData.fullName}
    *Email:* ${formData.email}
    *Phone:* ${formData.phone}
    *Location:* ${formData.location}
    *Investment Budget:* ${formData.budget}
    *Business Type:* ${formData.businessType}
    *Message:* ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API link
    const whatsappURL = `https://wa.me/9035219637?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-x-hidden">
      <div className="container mx-auto px-6 pt-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Contact Us</h2>
        <p className="text-center text-xl text-gray-300 mb-12">
          Have questions or need assistance? We are just a message away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-6">
            {[
              { icon: "fas fa-globe", title: "Visit Us", text: "www.franchisify.in" },
              { icon: "fas fa-phone-alt", title: "Call Us", text: "+91 9035219637" },
              { icon: "fas fa-envelope-open-text", title: "Email Us", text: "enquiry@franchisify.in" },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-5 rounded-xl shadow-lg bg-white bg-opacity-40 backdrop-blur-md">
                <div className="text-3xl text-[#1d375f] mr-4">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">{item.title}</h5>
                  <p className="text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white  bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-black mb-6">Get in Touch</h2>
            <p className="text-black text-center mb-4">
              Fill in your details and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-black font-medium">Full Name</label>
                <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-black font-medium">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black font-medium">Phone</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 xxxxxxxxxx" required />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-black font-medium">Location (City, State)</label>
                <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Bangalore, India" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-medium">Investment Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Budget</option>
                    <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                    <option value="₹10-20 Lakhs">₹10-20 Lakhs</option>
                    <option value="₹20-50 Lakhs">₹20-50 Lakhs</option>
                    <option value="₹50 Lakhs & above">₹50 Lakhs & above</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black font-medium">Business Type</label>
                  <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Type</option>
                    <option value="Retail">Retail</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-black font-medium">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Tell us about your business interest..." required></textarea>
              </div>

              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-blue-700 transition">
                Submit Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

