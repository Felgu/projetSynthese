import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#154c79] text-white py-6 mt-18">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Notitia. Tous droits réservés.</p>

        {/* Liens internes */}
        <div className="mt-6">
          <Link href="/about" className="text-white hover:text-yellow-400 mx-3">À propos
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 mx-3">Contact
          </Link>
          <Link href="/terms" className="text-white hover:text-yellow-400 mx-3">Conditions d`utilisation
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 mx-3 text-2xl transition-transform duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
            <span className='sr-only'></span>
          </a>
          <a
            href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 mx-3 text-2xl transition-transform duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com" target='_blank' rel='noopener noreferrer'
            className="text-white hover:text-yellow-400 mx-3 text-2xl transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
