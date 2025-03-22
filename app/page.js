"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Image from 'next/image';
import { useState } from 'react';
import TemplateCard from '@/components/TemplateCard';

const Home = () => {
  const [hovered, setHovered] = useState(null);

  const templates = [
    { id: 1, name: 'Gabarit de Soins', description: 'Suivi des soins quotidiens', image: '/images/window.svg' },
    { id: 2, name: 'Gabarit Médical', description: 'Historique médical du patient', image: '/images/globe.svg' },
    { id: 3, name: 'Gabarit Chirurgical', description: 'Suivi des interventions chirurgicales', image: '/images/file.svg' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/*ajout du navbar */}
      <Navbar />
      {/* section d`introduction*/}
      <div className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">Bienvenue sur Notitia</h1>
        <p className="text-lg text-gray-700 mt-4">Votre application de prise de notes médicales, simple, ergonomique et personnalisable.</p>
      </div>
      {/* onglet de la bare de navigation*/}

      {/*section des gabarits */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-700 text-center">Gabarits disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform ${hovered === template.id ? 'bg-yellow-100' : 'bg-white'}`}
              onMouseEnter={() => setHovered(template.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image src={template.image} alt={template.name} width={300} height={200} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{template.name}</h3>
              <p className="text-gray-500 mt-2">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
       {/* Ajout du pied de page */}   
      <Footer /> 
    </div>
  );
};

export default Home;
