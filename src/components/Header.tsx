"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="HCS Logo"
              width={110}
              height={110}
              style={{ objectFit: "cover" }}
              className="rounded-full object-cover"
              priority
            />
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
            <Link href="/" className="text-secondary hover:text-accent">
              Beranda
            </Link>
            <Link
              href="/#services"
              className="text-secondary hover:text-accent"
            >
              Layanan
            </Link>
            <Link
              href="/#profiles"
              className="text-secondary hover:text-accent"
            >
              Profil
            </Link>
            <Link href="/articles" className="text-secondary hover:text-accent">
              Artikel
            </Link>
            <Link href="/#contact" className="text-secondary hover:text-accent">
              Kontak
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-secondary hover:text-accent"
            >
              Beranda
            </Link>
            <Link
              href="/#services"
              className="block py-2 text-secondary hover:text-accent"
            >
              Layanan
            </Link>
            <Link
              href="/#profiles"
              className="block py-2 text-secondary hover:text-accent"
            >
              Profil
            </Link>
            <Link
              href="/articles"
              className="block py-2 text-secondary hover:text-accent"
            >
              Artikel
            </Link>
            <Link
              href="/#contact"
              className="block py-2 text-secondary hover:text-accent"
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
