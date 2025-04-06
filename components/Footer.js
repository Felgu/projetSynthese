import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#154c79] text-white py-4 mt-18">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Notitia. Tous droits réservés.</p>

        {/* Liens internes */}
        <div className="mt-4">
          <Link href="/about" className="text-white hover:text-yellow-400 mx-2">À propos
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 mx-2">Contact
          </Link>
          <Link href="/terms" className="text-white hover:text-yellow-400 mx-2">Conditions d`utilisation
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-4 flex justify-center">
          <a
            href="#"
            className="text-white hover:text-yellow-400 mx-3"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 mx-3"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 mx-3"
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
