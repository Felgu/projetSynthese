"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-[#0f81ab] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + nom */}
        <Link href="/" className="flex items-center space-x-4" aria-label="Accueil Notitia">
          <Image
            src="/assets/notitia.png"
            alt="Logo Notitia"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <span className="text-white text-4xl font-semibold hover:text-yellow-400 transition-colors">Notitia</span>
        </Link>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Liens de navigation */}
        <div className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-xl px-4 py-2 rounded-md hover:scale-125 hover:text-yellow-400 transition-all"
              >
                {label}
              </Link>
            ))}

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="text-white text-lg px-4 py-2 border border-white p-3 rounded-lg hover:text-[#CC2121] hover:bg-[#639a88] transition"
                >
                  Se connecter
                </Link>
                <Link
                  href="/signup"
                  className="text-white text-lg px-4 py-2 border border-white p-3 rounded-lg hover:bg-[#e28743] hover:text-[#22577a] transition"
                >
                  Créer un compte
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="text-white bg-red-600 p-3 rounded-lg hover:bg-red-800 transition"
              >
                Se déconnecter
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
