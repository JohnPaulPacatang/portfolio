"use client";
import React, { useState } from "react";
import { X, Phone, Mail, Facebook, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    const emailPromise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        to_email: email,
        from_name: "John Paul Pacatang",
        reply_to: "johnpaulpacatang1@gmail.com",
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.promise(emailPromise, {
      loading: "Sending welcome email...",
      success: "Thanks for connecting! Check your email for a welcome message.",
      error: "Failed to send email. Please try again or contact me directly.",
    });

    try {
      await emailPromise;
      setEmail("");
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleConnect();
    }
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
            href="mailto:johnpaulpacatang1@gmail.com"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
          >
            <Mail size={16} />
            <span>johnpaulpacatang1@gmail.com</span>
          </a>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Your email address"
            disabled={isLoading}
            autoComplete="email"
            className="w-full flex-1 rounded-full border border-gray-300 py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:border-black"
          />
          <button
            onClick={(e) => {e.preventDefault();
              handleConnect();
            }}
            disabled={isLoading}
            className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black border border-black transition-colors whitespace-nowrap"
          >
            {isLoading ? "Sending..." : "Let's Connect"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
