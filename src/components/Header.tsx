"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MedicA
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Beranda
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">
              Tentang Kami
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600"
            >
              Layanan
            </Link>
            <Link
              href="#products"
              className="text-gray-600 hover:text-blue-600"
            >
              Produk
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Kontak
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Tentang Kami
            </Link>
            <Link
              href="#services"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Layanan
            </Link>
            <Link
              href="#products"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Produk
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Kontak
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
