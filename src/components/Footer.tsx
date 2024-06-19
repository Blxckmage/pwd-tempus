import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 text-white">
      <div className="container mx-auto text-center text-sm">
        <div className="mb-4 flex flex-col items-center">
          <Image
            width={128 / 2}
            height={114 / 2}
            src="/assets/logo.svg"
            alt="Tempus Logo"
            className="mb-4 h-10"
          />
          <p>&copy; {currentYear} Tempus. All rights reserved.</p>
        </div>
        <div className="mb-4 flex justify-center space-x-4">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-gray-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-gray-400"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact-us"
            className="transition-colors duration-300 hover:text-gray-400"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-xs text-gray-400">Created by Faza Zikri</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
