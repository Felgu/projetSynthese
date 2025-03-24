"use client"; // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritMedical = () => {
  // State pour les champs du formulaire
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    diagnosis: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    vitalSigns: {
      temperature: '',
      pa: '',
      fc: '',
      fr: '',
      spo2: '',
    },
    symptoms: [],
    observations: '',
    treatmentPlan: '',
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.vitalSigns) {
      setFormData({
        ...formData,
        vitalSigns: {
          ...formData.vitalSigns,
          [name]: type === 'checkbox' ? checked : value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit Médical</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Nom du patient */}
          <div>
            <label className="block text-gray-700">Nom du patient</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Nom du patient"
            />
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-gray-700">Date de naissance</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Diagnostic */}
          <div>
            <label className="block text-gray-700">Diagnostic</label>
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Diabète de type 2"
            />
          </div>

          {/* Historique médical */}
          <div>
            <label className="block text-gray-700">Historique médical</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Antécédents médicaux du patient"
            />
          </div>

          {/* Médicaments actuels */}
          <div>
            <label className="block text-gray-700">Médicaments actuels</label>
            <textarea
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Médicaments actuellement pris par le patient"
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-gray-700">Allergies</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Pénicilline"
            />
          </div>

          {/* Signes vitaux */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#0b263d]">Signes vitaux</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Température (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.vitalSigns.temperature}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 37.5"
                />
              </div>

              <div>
                <label className="block text-gray-700">Pression artérielle</label>
                <input
                  type="text"
                  name="pa"
                  value={formData.vitalSigns.pa}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 120/80"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fréquence cardiaque</label>
                <input
                  type="number"
                  name="fc"
                  value={formData.vitalSigns.fc}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 80 bpm"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fréquence respiratoire</label>
                <input
                  type="number"
                  name="fr"
                  value={formData.vitalSigns.fr}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 18/min"
                />
              </div>

              <div>
                <label className="block text-gray-700">SpO2 (%)</label>
                <input
                  type="number"
                  name="spo2"
                  value={formData.vitalSigns.spo2}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 98%"
                />
              </div>
            </div>
          </div>

          {/* Symptômes */}
          <div>
            <h2 className="text-xl font-semibold text-[#0b263d]">Symptômes</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <div>
                <input
                  type="checkbox"
                  name="symptoms"
                  value="Fièvre"
                  checked={formData.symptoms.includes('Fièvre')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Fièvre</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptoms"
                  value="Toux"
                  checked={formData.symptoms.includes('Toux')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Toux</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptoms"
                  value="Fatigue"
                  checked={formData.symptoms.includes('Fatigue')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Fatigue</label>
              </div>
            </div>
          </div>

          {/* Observations */}
          <div>
            <label className="block text-gray-700">Observations</label>
            <textarea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Ex: Observations cliniques supplémentaires"
            />
          </div>

          {/* Plan de traitement */}
          <div>
            <label className="block text-gray-700">Plan de traitement</label>
            <textarea
              name="treatmentPlan"
              value={formData.treatmentPlan}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Ex: Prescription de médicaments, suivi"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default GabaritMedical;
