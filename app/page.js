"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const { user } = useAuth();

  const templates = [
    { id: 1, name: 'Première consultation', description: 'Collecte initiale des données médicales', image: '/images/healthy.svg', link: '/historique' },
    { id: 2, name: 'Soins généraux', description: 'Suivi quotidien des soins médicaux', image: '/images/dossiermedic.svg', link: '/medical' },
    { id: 3, name: 'Chirurgie', description: 'Dossier des interventions chirurgicales', image: '/images/chirurgie.svg', link: '/chirurgie' },
    { id: 4, name: 'Urologie', description: 'Suivi des troubles urinaires', image: '/images/urine.svg', link: '/urologie' },
    { id: 5, name: 'Neurologie', description: 'Évaluation et suivi neurologique', image: '/images/dizzy.svg', link: '/neurologie' },
    { id: 6, name: 'Prévention', description: 'Suivi en santé préventive', image: '/images/neurolog.svg', link: '/preventif' },
    { id: 7, name: 'Diabète', description: 'Contrôle des patients diabétiques', image: '/images/diabet.svg', link: '/diabete' },
    { id: 8, name: 'Pédiatrie', description: 'Suivi des enfants et nourrissons', image: '/images/child.svg', link: '/pediatrie' },
    { id: 9, name: 'Psychiatrie', description: 'Suivi en santé mentale avancée', image: '/images/psycholog.svg', link: '/psychiatrie' },
    { id: 10, name: 'Gynécologie', description: 'Grossesses et suivi gynécologique', image: '/images/gynecologist.svg', link: '/gynecology' },
    { id: 11, name: 'Soins palliatifs', description: 'Accompagnement des patients en fin de vie', image: '/images/palliative.svg', link: '/palliatif' },
    { id: 12, name: 'Vaccination', description: 'Gestion des campagnes vaccinales', image: '/images/vaccine.svg', link: '/vaccination' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="text-center py-12 bg-[#108ebc]">
        <h1 className="text-4xl font-bold text-[#fae7c7]">
          {user ? `Bienvenue, ${user.displayName || user.email}` : "Gabarits cliniques personnalisables"}
        </h1>
        <p className="text-lg text-white mt-4">
          {user 
            ? "Merci d’utiliser Notitia. Choisissez un gabarit adapté à votre consultation."
            : "Application de prise de notes médicales simple, ergonomique et pensée pour les professionnels de santé."}
        </p>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-[#0b263d] text-center mb-8">
          Gabarits cliniques disponibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black">
          {templates.map((template) => (
            <Link key={template.id} href={template.link}>
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:bg-yellow-100"
                onMouseEnter={() => setHovered(template.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image 
                  src={template.image} 
                  alt={`Illustration pour ${template.name}`} 
                  width={300} 
                  height={300} 
                  className="rounded-lg mb-4 mx-auto" 
                />
                <h3 className="text-xl font-bold text-center">{template.name}</h3>
                <p className="text-gray-600 text-center mt-2">{template.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
