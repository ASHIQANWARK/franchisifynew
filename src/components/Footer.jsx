import React from "react";
import { Link } from "react-router-dom";
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, 
  FaFacebook, FaYoutube, FaInstagram, FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../assets/images/Franchisify.in 2 (3).jpg";  // Make sure your path is correct

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Franchisify Logo" className="w-32 mb-3" />
          <h2 className="text-2xl font-bold">Franchisify</h2>
          <p className="mt-2">Scaling Your Business with Confidence</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/contact" className="text-white hover:text-white transition">
                Help & Support
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-white hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-white hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-2xl">
            <a href="https://www.instagram.com/franchisify.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573137707448" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="https://x.com/Franchisify_in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaX />
            </a>
            <a href="https://www.youtube.com/@Franchisify-r1m" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/franchisify-in/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p className="mt-3 flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            Door No:84, Industrial Layout, 5TH Block, 3RD Cross, 
            Near Jyothi Nivas College, Koramangala, Bengaluru, Karnataka 560095
          </p>
          <p className="mt-3 flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2 text-lg" />
            +91 9035219637
          </p>
          <p className="mt-3 flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2 text-lg" />
            enquiry@franchisify.in
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-gray-500 pt-5">
        © {new Date().getFullYear()} Ique Ventures. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
