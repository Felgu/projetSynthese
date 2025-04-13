import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
            className="text-white rounded-lg"
          />
          <span className="text-white text-4xl font-semibold hover:text-yellow-400">Notitia</span>
        </Link>

        {/* Liens de navigation */}
        <div className="space-x-16">
          <Link href="/" className="text-white text-xxl transform hover:scale-125 hover:text-yellow-400 ">Accueil</Link>
          <Link href="/about" className="text-white text-lg transform hover:scale-125 hover:text-yellow-400 ">À propos</Link>
          <Link href="/contact" className="text-white text-lg transform hover:scale-125 hover:text-yellow-400 ">Contact</Link>
          <Link href="/login" className="text-white text-lg bg-[#79154c] p-4 rounded-lg hover:text-[#22577a] hover:bg-[#e28743]">Se connecter</Link>
          <Link href="/signup" className="text-white text-lg bg-[#747915] p-4 rounded-lg hover:text-[#22577a] hover:bg-[#e28743]">Créer un compte</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
