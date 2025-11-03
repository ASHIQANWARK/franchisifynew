import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setTimeout(() => {
        setMessages(["Hello! 👋 How can I assist you today?"]);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="z-[100]">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-28 right-4 sm:right-6 bg-[#1d375f] text-white p-3 rounded-full shadow-md transition duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } hover:bg-white hover:text-[#1d375f] hover:shadow-lg`}
      >
        <FaArrowUp className="text-xl" />
      </button>

      {/* Chatbot / WhatsApp Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 flex flex-col items-end space-y-4 z-50">
        {/* ChatBox Window */}
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-72 sm:w-80 bg-white shadow-xl rounded-xl border border-gray-200 p-4"
          >
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">Chat Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.5 }}
                  className="bg-green-100 text-gray-700 p-2 rounded-md text-sm"
                >
                  {msg}
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/9035854093"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600 transition duration-300 text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}

        {/* WhatsApp Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={24} className="sm:size-7" />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;
   