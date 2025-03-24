// pages/gabarit-soins.js
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Soins = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit de Soins</h1>
        <p className="text-lg text-gray-700 mt-4">Ici, vous pouvez saisir et suivre les soins quotidiens des patients.</p>
        {/* Contenu spécifique au gabarit de soins */}
      </div>
      <Footer />
    </div>
  );
};

export default Soins;
