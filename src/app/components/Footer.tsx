"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Facebook, Linkedin } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleConnect = () => {
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full py-8 sm:py-12">
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          <div className="space-y-6">
            <FadeIn>
              <div className="flex flex-col space-y-3">
                <p className="text-base sm:text-lg font-light">
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:09123456789"
                    className="hover:underline transition-colors"
                  >
                    0912 345 6789
                  </a>
                </p>
                <p className="text-base sm:text-lg font-light">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:johnpaulpacatangscc@gmail.com"
                    className="hover:underline transition-colors"
                  >
                    johnpaulpacatangscc@gmail.com
                  </a>
                </p>
                <p className="text-base sm:text-lg font-light">
                  <span className="font-medium">Location:</span>{" "}
                  <a
                    href="https://www.google.com/maps?q=North+Caloocan,+PH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                  >
                    North Caloocan, PH
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <p className="text-lg font-semibold mb-4">Connect with Me</p>
                <div className="flex gap-4">
                  {[
                    {
                      Icon: Github,
                      label: "GitHub",
                      href: "https://github.com/your-username",
                    },
                    {
                      Icon: Facebook,
                      label: "Facebook",
                      href: "https://facebook.com/your-profile",
                    },
                    {
                      Icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/your-profile",
                    },
                  ].map(({ Icon, label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-gray-500 hover:text-black" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="text-gray-600 leading-relaxed text-base sm:text-lg">
            <FadeIn delay={0.2}>
              <p>
                Hi, I&apos;m a web developer passionate about building clean,
                responsive, and accessible websites. I enjoy turning ideas into
                reality with code.
              </p>
              <p className="mt-3">
                Whether you&apos;re a business or a collaborator, let's create
                something meaningful together.
              </p>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.3}>
              <p className="text-lg font-semibold mb-4">
                Let&apos;s Stay in Touch
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 w-full border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                />
                <button
                  onClick={handleConnect}
                  className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full border border-black hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Let&apos;s Connect
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full my-10"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 text-center">
          <p>Designed & developed by John Paul Pacatang</p>
          <p>Let&apos;s build something great. • {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
