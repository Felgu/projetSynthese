import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nom de l'Application */}
        <Link href="/" className="text-white text-2xl font-semibold">
          Notitia
        </Link>
        {/* Liens de navigation */}
        <div className="space-x-9">
          <Link href="/" className="text-white hover:text-yellow-400">Accueil</Link>
          <Link href="/about" className="text-white hover:text-yellow-400">À propos</Link>
          <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>
          <Link href="/login" className="text-white hover:text-yellow-400">Se connecter</Link>
          <Link href="/signup" className="text-white hover:text-yellow-400">Créer un compte</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
