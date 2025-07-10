"use client";
import { useState } from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full py-8 sm:py-12 text-black">
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              Turning bold ideas into beautifully
              <br className="hidden sm:block" />
              crafted digital realities.
            </h1>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <FadeIn>
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {[
                  { label: "Phone: (123) 456-7890" },
                  { label: "Email: contact@company.com" },
                  { label: "Address: 123 Main St, North Caloocan" },
                ].map(({ label }) => (
                  <p
                    key={label}
                    className="text-base sm:text-lg lg:text-xl font-light hover:font-semibold hover:text-black transition-all duration-300 ease-in-out"
                  >
                    {label}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <p className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  Connect with Us
                </p>

                <div className="flex gap-4 sm:gap-6">
                  {[
                    { Icon: Twitter, label: "Twitter" },
                    { Icon: Facebook, label: "Facebook" },
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ Icon, label }) => (
                    <Link
                      key={label}
                      href="#"
                      aria-label={label}
                      className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-black transition-colors duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
              <FadeIn>
                <p>
                  We're a creative studio shaping striking brand identities,
                  immersive digital journeys, and unforgettable narratives.
                </p>
                <p className="mt-2">Rooted in the heart of creativity.</p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div>
                <p className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  Join the Vision
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 sm:px-6 py-3 sm:py-4 flex-1 border border-gray-300 rounded-full text-sm sm:text-base focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all duration-300"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="text-sm sm:text-base font-medium px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full my-8 sm:my-10 lg:my-12"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vision Collective</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
