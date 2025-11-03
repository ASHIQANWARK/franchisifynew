import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGlobe, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaUser,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
    const whatsappURL = `https://wa.me/9035854093?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  const contactInfo = [
    { 
      icon: <FaGlobe className="text-2xl" />, 
      title: "Visit Us", 
      text: "www.franchisify.in",
      subtext: "Explore our services"
    },
    { 
      icon: <FaPhoneAlt className="text-2xl" />, 
      title: "Call Us", 
      text: "+91 9035854093",
      subtext: "Mon-Fri from 9am to 6pm"
    },
    { 
      icon: <FaEnvelope className="text-2xl" />, 
      title: "Email Us", 
      text: "info@franchisify.in",
      subtext: "We reply within 24 hours"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Franchise Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our experts for personalized franchise solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team is here to help you navigate the franchise landscape with expert guidance and tailored solutions.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white p-3 rounded-xl group-hover:bg-gray-800 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 font-medium text-base">
                        {item.text}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-3 mb-3">
                <FaMapMarkerAlt className="text-xl" />
                <h3 className="text-lg font-semibold">Service Areas</h3>
              </div>
              <p className="text-gray-300">
                Serving clients across India with franchise development, legal documentation, and business expansion strategies.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-white text-gray-900 p-2 rounded-lg">
                <FaUser className="text-xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Start Your Journey</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-300 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="+91 xxxxxxxxxx"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-gray-300 font-medium mb-2">
                  Location (City, State) *
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Bangalore, Karnataka"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Investment Budget *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="" className="text-gray-400">Select Budget</option>
                    <option value="₹5-10 Lakhs" className="text-gray-900">₹5-10 Lakhs</option>
                    <option value="₹10-20 Lakhs" className="text-gray-900">₹10-20 Lakhs</option>
                    <option value="₹20-50 Lakhs" className="text-gray-900">₹20-50 Lakhs</option>
                    <option value="₹50 Lakhs & above" className="text-gray-900">₹50 Lakhs & above</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="" className="text-gray-400">Select Type</option>
                    <option value="Retail" className="text-gray-900">Retail</option>
                    <option value="Food & Beverage" className="text-gray-900">Food & Beverage</option>
                    <option value="Education" className="text-gray-900">Education</option>
                    <option value="Other" className="text-gray-900">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                  rows="4"
                  placeholder="Tell us about your business goals and requirements..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-xl" />
                    <span>Submit via WhatsApp</span>
                    <FaArrowRight className="text-lg" />
                  </>
                )}
              </motion.button>

              <p className="text-gray-400 text-sm text-center">
                By submitting, you agree to our privacy policy and consent to contact via WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;