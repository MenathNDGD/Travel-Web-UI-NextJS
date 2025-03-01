"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      const fromTop = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY + offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 sticky top-0 bg-white">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="Logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ${
              activeSection === link.ref ? "text-green-50 font-extrabold" : ""
            }`}
            onClick={(e) => {
              if (link.ref) {
                e.preventDefault();
                const navbarHeight = 80;
                scrollToSection(link.ref, -navbarHeight);
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={"/menu.svg"}
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col items-center justify-between transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <Image
          src="/close.svg"
          alt="Close"
          width={30}
          height={30}
          className="absolute top-4 right-4 cursor-pointer bg-gray-800 rounded-full p-1"
          onClick={toggleMenu}
        />

        <ul className="flex flex-col items-center mt-20 px-6 gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 py-3 transition-all ${
                activeSection === link.ref ? "text-green-50 font-bold" : ""
              }`}
              onClick={(e) => {
                if (link.ref) {
                  e.preventDefault();
                  const navbarHeight = 90;
                  scrollToSection(link.ref, -navbarHeight);
                }
                toggleMenu();
              }}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="p-6">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
