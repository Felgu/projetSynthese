import Link from 'next/link';
import Image from 'next/image';
import {FaHospital} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#22577a] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      
        {/* Logo avec un lien */}
        <Link href="/" className="flex items-center space-x-4">
          {/* Utilisation du composant Image pour afficher le logo */}
          <Image
            src="/assets/notitia.png" 
            alt="Logo"
            width={80}
            height={80}
            className="text-white rounded-lg"
          />
          <span className="text-white text-4xl font-semibold">Notitia</span>
          {/* <FaHospital size={30} className="text-white" /> */}
        </Link>

        {/* Liens de navigation */}
        <div className="space-x-16">
          <Link href="/" className="text-white hover:text-yellow-400">Accueil</Link>
          <Link href="/about" className="text-white hover:text-yellow-400">À propos</Link>
          <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>
          <Link href="/login" className="text-white bg-[#79154c] p-4 rounded-lg hover:text-[#ffffff] hover:bg-[#e28743]">Se connecter</Link>
          <Link href="/signup" className="text-white bg-[#747915] p-4 rounded-lg hover:text-[#ffffff]">Créer un compte</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
