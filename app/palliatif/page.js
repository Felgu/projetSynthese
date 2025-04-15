"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Palliatif = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    diagnosticPrincipal: '',
    stadeMaladie: '',
    objectifsSoins: '',
    traitements: '',
    douleurs: '',
    confort: '',
    soutienFamille: '',
    directivesAnticipees: '',
    recommandations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soins palliatifs soumises:", formData);
  };

  return (
    <div className="bg-gray-400 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-[#0b263d]">Gabarit Soins Palliatifs</h1>

        <form onSubmit={handleSubmit} className="mt-8 text-lg space-y-6">
          <Input label="Nom du patient" name="patientName" value={formData.patientName} onChange={handleChange} />
          <Input type="date" label="Date de naissance" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          <Input label="Diagnostic principal" name="diagnosticPrincipal" value={formData.diagnosticPrincipal} onChange={handleChange} />
          <Input label="Stade de la maladie" name="stadeMaladie" value={formData.stadeMaladie} onChange={handleChange} />
          <Textarea label="Objectifs des soins" name="objectifsSoins" value={formData.objectifsSoins} onChange={handleChange} />
          <Textarea label="Traitements en cours" name="traitements" value={formData.traitements} onChange={handleChange} />
          <Textarea label="Évaluation de la douleur" name="douleurs" value={formData.douleurs} onChange={handleChange} />
          <Textarea label="Confort et qualité de vie" name="confort" value={formData.confort} onChange={handleChange} />
          <Textarea label="Soutien à la famille / entourage" name="soutienFamille" value={formData.soutienFamille} onChange={handleChange} />
          <Textarea label="Directives anticipées / volonté du patient" name="directivesAnticipees" value={formData.directivesAnticipees} onChange={handleChange} />
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
      className="px-9 py-3 bg-[#ff8811] text-black font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
    >
      Soumettre
    </button>
  </div>
);

export default Palliatif;
