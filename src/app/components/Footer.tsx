"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Facebook, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import FadeIn from "@/app/components/animations/FadeIn";

const Footer = () => {
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

  return (
    <footer className="w-full py-8 sm:py-12">
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200 w-full my-10"></div>
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
                    href="mailto:johnpaulpacatang1@gmail.com"
                    className="hover:underline transition-colors"
                  >
                    johnpaulpacatang1@gmail.com
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
                Whether you&apos;re a business or a collaborator, let&apos;s
                create something meaningful together.
              </p>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.3}>
              <p className="text-lg font-semibold mb-4">
                Let&apos;s Stay in Touch
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Your email address"
                  disabled={isLoading}
                  autoComplete="email"
                  className="px-4 py-3 w-full text-lg border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={(e) => {e.preventDefault();handleConnect();}}
                  disabled={isLoading}
                  className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full border border-black hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white"
                >
                  {isLoading ? "Sending..." : "Let's Connect"}
                </button>
              </form>
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
