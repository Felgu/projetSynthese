"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import {useAuth } from "../context/AuthContext"

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const { user } = useAuth();
  // Liste des gabarits, incluant les nouveaux services spécifiques
  const templates = [
    { id: 1, name: 'Premiere Consultation', description: 'Premiere prise de donnees', image: '/images/healthy.svg', link: '/historique' },
    { id: 2, name: 'Soins Generaux', description: 'Suivi des soins quotidiens', image: '/images/dossiermedic.svg', link: '/medical' },
    { id: 3, name: 'Chirurgie', description: 'Suivi des interventions chirurgicales', image: '/images/chirurgie.svg', link: '/chirurgie' },
    { id: 4, name: 'Urologie', description: 'Suivi des infections urinaires', image: '/images/urine.svg', link: '/urologie' },
    { id: 5, name: 'Neurologie', description: 'Suivi des céphalées', image: '/images/dizzy.svg', link: '/neurologie' },
    { id: 6, name: 'Psychologie', description: 'Suivi de la santé préventive', image: '/images/neurolog.svg', link: '/preventif' },
    { id: 7, name: 'Diabéte', description: 'Suivi des patients diabétiques', image: '/images/diabet.svg', link: '/diabete' },
    { id: 8, name: 'Pédiatrie', description: 'Suivi médical des enfants', image: '/images/child.svg', link: '/pediatrie' },
    { id: 9, name: 'Psychatrie', description: 'Suivi pour troubles psychiatriques', image: '/images/psycholog.svg', link: '/psychiatrie' },
    { id: 10, name: 'Gynecology', description: 'Suivi de grossesses', image: '/images/gynecologist.svg', link: '/gynecology' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Ajout du Navbar */}
      <Navbar />
      {/* Section d'introduction */}
      <div className="text-center py-12 bg-[#108ebc]">
        <h1 className="text-4xl font-bold text-[#fae7c7]">
          {user ? `Bienvenue, ${user.displayName || user.email}` : "Gabarits cliniques adaptables"}
        </h1>
        <p className="text-lg text-white mt-4">
          {user 
            ? "Merci d`utiliser Notitia. Choisissez un gabarit."
          : "Votre application de prise de notes médicales, simple, ergonomique et personnalisable."}
           </p>
      </div>

      {/* Section des gabarits */}
      <div className="container mx-auto px-4 bg-red-100">
        <h2 className="text-2xl font-semibold text-[#0b263d] text-center">
          Vos gabarits exploitables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-yellow-100"
              onMouseEnter={() => setHovered(template.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={template.link}>
                <div className="group relative p-6 group:bg-blue-100 rounded-lg shadow-lg transform transition-all duration-300">
                  <div className="group-hover:scale-105 group-hover:bg-blue-300">
                    <Image 
                      src={template.image} 
                      alt={`Image représentant le gabarit ${template.name}`} 
                      width={300} 
                      height={300} 
                      className="rounded-lg mb-4" 
                    />
                    <h3 className="text-xl font-bold text-black">{template.name}</h3>
                    <p className="text-gray-500 mt-2">{template.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Ajout du Footer */}
      <Footer /> 
    </div>
  );
};

export default Home;
