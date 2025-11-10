import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-400">Mahesh Medical</h3>
          <p className="text-sm">
            Providing quality medical services and products for your health needs.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-400">Contact</h3>
          <p className="text-sm">Address: Vellappalam Main Road, Nagapattinam-611112</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Email: maheshmedical@example.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-400">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            <li><a href="/services" className="hover:text-green-400 transition-colors">Services</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Mahesh Medical. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
