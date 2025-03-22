import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Notitia. Tous droits réservés.</p>
        <div className="mt-4">
          <a href="/about" className="text-white hover:text-yellow-400 mx-2">À propos</a>
          <a href="/contact" className="text-white hover:text-yellow-400 mx-2">Contact</a>
          <a href="/terms" className="text-white hover:text-yellow-400 mx-2">Conditions d`utilisation</a>
        </div>
        <div className="mt-4 flex justify-center">
          <a href="#" className="text-white hover:text-yellow-400 mx-3">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 mx-3">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 mx-3">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;