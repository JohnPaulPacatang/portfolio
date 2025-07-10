"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "@/app/components/modals/Contact"; 

export function ResizeNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <Navbar className="py-2">
          {/* Desktop Navigation */}
          <NavBody className="py-1 px-8">
            <NavbarLogo />
            <NavItems 
              items={navItems} 
              className="text-base font-medium space-x-6" 
              activeTab={pathname}
            />
            <div className="flex items-center gap-6">
              <NavbarButton 
                variant="dark" 
                className="text-base px-8 py-2 rounded-xl"
                onClick={handleContactClick}
              >
                Contact
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav className="py-1 px-6">
            <MobileNavHeader className="py-2">
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              className="py-8 px-6"
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-black text-2xl font-medium py-4 w-full border-b border-gray-100"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4 mt-6">
                <NavbarButton
                  onClick={handleContactClick}
                  variant="primary"
                  className="w-full text-xl py-4"
                >
                  Contact
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}