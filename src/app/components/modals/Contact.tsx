"use client";
import React, { useState } from "react";
import { X, Phone, Mail, Facebook, Github, Linkedin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
    setFormData({ fullName: "", email: "", comment: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-xl w-full max-w-xl p-6 relative shadow-xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>
   
        <div className="text-center">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-sm text-gray-600 mt-1">
            Reach out directly or send us a message below.
          </p>
        </div>
        
        <div className="flex justify-center gap-5">
          <a href="#" className="hover:opacity-70" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:opacity-70" aria-label="Github">
            <Github size={20} />
          </a>
          <a href="#" className="hover:opacity-70" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:4352221482"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
          >
            <Phone size={16} />
            <span>435-222-1482</span>
          </a>
          <a
            href="mailto:info@saulrhandarchitecture.com"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
          >
            <Mail size={16} />
            <span>info@saulrhandarchitecture.com</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500 text-sm"
            />
          </div>
          <textarea
            name="comment"
            placeholder="Your message (optional)"
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500 text-sm resize-none"
          />

          <div className="text-right">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black border border-black transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;