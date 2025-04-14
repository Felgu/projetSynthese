import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, Hix } from "react-icons/hi";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#0f81ab] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo avec un lien */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/assets/notitia.png" 
            alt="Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <span className="text-white text-4xl font-semibold hover:text-yellow-400">Notitia</span>
        </Link>
        {/* navigation mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            {isOpen ? <Hix size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Liens de navigation */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-center">
            <Link href="/" className="text-white text-xl transform hover:scale-125 hover:text-yellow-400 ">Accueil</Link>
            <Link href="/about" className="text-white text-xl transform hover:scale-125 hover:text-yellow-400 ">À propos</Link>
            <Link href="/contact" className="text-white text-xl transform hover:scale-125 hover:text-yellow-400 ">Contact</Link>
            {!user ? (
              <>
                <Link href="/login" className="text-white text-lg bg-[#79154c] p-4 rounded-lg hover:text-[#22577a] hover:bg-[#e28743]">
                  Se connecter
                </Link>
                <Link href="/signup" className="text-white text-lg bg-[#747915] p-4 rounded-lg hover:text-[#22577a] hover:bg-[#e28743]">
                  Créer un compte
                </Link>
              </>
            ) : (
              <>
                {/* <span className='text-white font-semibold'>{user.displayName || user.email}</span> */}
                <button 
                  onClick={logout}
                  className='text-white bg-red-600 p-2 rounded-lg hover:bg-red-800'
                >
                  Se deconnecter
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
