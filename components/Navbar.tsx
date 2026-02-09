"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NavItem } from "../types";

import Image from "next/image";

const defaultNavItems: NavItem[] = [
  { label: "Beranda", href: "#home" },
  { label: "Fitur", href: "#features" },
  { label: "Harga", href: "#pricing" },
  { label: "Kontak", href: "#contact" },
];

interface NavbarProps {
  navigation?: Array<{
    id: number;
    label: string;
    href: string;
    order: number;
  }>;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  const navItems =
    navigation?.map((item) => ({
      label: item.label,
      href: item.href,
    })) || defaultNavItems;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14">
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <Image
              src="/logo.png"
              alt="Sae POS"
              width={150}
              height={60}
              className="h-auto"
              priority
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-700 hover:text-primary-600 hover:bg-slate-50 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/40 hover:shadow-xl hover:shadow-primary-500/50 hover:-translate-y-0.5 cursor-pointer ml-2"
              >
                Coba Gratis
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-slate-100 focus:outline-none transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-700 hover:text-primary-600 hover:bg-slate-50 block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center mt-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer shadow-lg shadow-primary-500/30 transition-all"
            >
              Coba Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
