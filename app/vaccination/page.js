"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Vaccination = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    vaccin: '',
    dose: '',
    dateInjection: '',
    lot: '',
    lieuInjection: '',
    effetsSecondaires: '',
    recommandations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données de vaccination soumises:", formData);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-[#0b263d]">Gabarit Vaccination</h1>

        <form onSubmit={handleSubmit} className="mt-8 text-lg space-y-6">
          <Input label="Nom du patient" name="patientName" value={formData.patientName} onChange={handleChange} />
          <Input type="date" label="Date de naissance" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          <Input label="Type de vaccin" name="vaccin" value={formData.vaccin} onChange={handleChange} />
          <Input label="Dose (1ère, 2ème, rappel...)" name="dose" value={formData.dose} onChange={handleChange} />
          <Input type="date" label="Date de l'injection" name="dateInjection" value={formData.dateInjection} onChange={handleChange} />
          <Input label="N° de lot" name="lot" value={formData.lot} onChange={handleChange} />
          <Input label="Lieu d'injection (épaule, cuisse...)" name="lieuInjection" value={formData.lieuInjection} onChange={handleChange} />
          <Textarea label="Effets secondaires observés" name="effetsSecondaires" value={formData.effetsSecondaires} onChange={handleChange} />
          <Textarea label="Recommandations" name="recommandations" value={formData.recommandations} onChange={handleChange} />
          
          <SubmitButton />
        </form>
      </div>
      <Footer />
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input className="w-full p-3 mt-2 border border-gray-300 rounded-lg" {...props} />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <textarea rows="4" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" {...props} />
  </div>
);

const SubmitButton = () => (
  <div className="mt-6">
    <button
      type="submit"
      className="px-9 py-3 bg-[#157291] text-white font-semibold rounded-lg hover:bg-[#7fc6a4] hover:text-black transition-colors"
    >
      Soumettre
    </button>
  </div>
);

export default Vaccination;
