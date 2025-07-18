"use client";
import React, { useState } from "react";
import { X, Phone, Mail, Facebook, Github, Linkedin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    onClose();
    setEmail("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-xl w-full max-w-lg p-6 relative shadow-xl space-y-6">
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
            Reach out directly or drop your email below.
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

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full flex-1 rounded-full border border-gray-300 py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black border border-black transition-colors whitespace-nowrap"
          >
            Let’s Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
