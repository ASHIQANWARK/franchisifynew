import React from "react";
import { Link } from "react-router-dom";
import { 
  FaPhone, FaEnvelope, 
  FaFacebook, FaYoutube, FaInstagram, FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../assets/images/Franchisify.in 2 (3).jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src={logo} 
                alt="Franchisify Logo" 
                className="w-40 h-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-white mb-2">Franchisify</h2>
              <p className="text-gray-300 text-center md:text-left leading-relaxed">
                Transforming businesses into successful franchises with expert guidance and comprehensive solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 w-full text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/deservices" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 w-full text-center md:text-left">
              Legal
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 w-full text-center md:text-left">
              Connect With Us
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FaPhone className="text-gray-400 text-sm" />
                <span className="text-gray-300 text-sm">+91 9035854093</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FaEnvelope className="text-gray-400 text-sm" />
                <span className="text-gray-300 text-sm">info@franchisify.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/franchisify.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61573137707448" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebook className="text-white text-lg" />
                </a>
                <a 
                  href="https://x.com/Franchisify_in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FaX className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.youtube.com/@Franchisify-r1m" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FaYoutube className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/franchisify-in/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ique Ventures. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Transforming Businesses, Building Futures
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;