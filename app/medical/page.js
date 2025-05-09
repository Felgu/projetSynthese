"use client"; 
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SoinGeneral = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    dateSoins: '',
    soinsEffectues: '',
    observations: '',
    traitementsAdministres: '',
    signesVitaux: {
      temperature: '',
      pa: '',
      fc: '',
      fr: '',
      spo2: '',
    },
    actionInfirmiere: '',
    prochaineEvaluation: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.signesVitaux) {
      setFormData({
        ...formData,
        signesVitaux: {
          ...formData.signesVitaux,
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
  const [submitted, setSubmitted ] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-[#1f2937]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-[#0b263d] text-center mb-12">Soins Infirmiers</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-lg p-10 space-y-8">
          {/* Nom du patient */}
          <div className=' text-xl space-y-2' >
            <label htmlFor='patientName' className="block text-white">
              Nom du patient
            </label>
            <input
              id="patientName"
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full p-4 mt-2 text-gray-300 border border-gray-300 rounded-lg"
              placeholder="Nom du patient"
            />
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-white text-xl">Date de naissance</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-4 mt-2 border text-gray-400 border-gray-300 rounded-lg"
            />
          </div>

          {/* Date des soins */}
          <div>
            <label className="block text-white text-xl">Date des soins</label>
            <input
              type="date"
              name="dateSoins"
              value={formData.dateSoins}
              onChange={handleChange}
              className="w-full p-4 mt-2 border text-gray-400 border-gray-300 rounded-lg"
            />
          </div>

          {/* Soins effectués */}
          <div>
            <label className="block text-white text-xl">Soins effectués</label>
            <textarea
              name="soinsEffectues"
              value={formData.soinsEffectues}
              onChange={handleChange}
              className="w-full p-4 mt-2 text-gray-300 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Détaillez les soins effectués (pansement, injection, etc.)"
            />
          </div>

          {/* Observations */}
          <div>
            <label className="block text-white text-xl">Observations</label>
            <textarea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Observations spécifiques concernant l'état du patient"
            />
          </div>

          {/* Traitements administrés */}
          <div>
            <label className="block text-white text-xl">Traitements administrés</label>
            <textarea
              name="traitementsAdministres"
              value={formData.traitementsAdministres}
              onChange={handleChange}
              className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Détails des traitements administrés au patient (médicaments, doses, fréquence)"
            />
          </div>

          {/* Signes vitaux */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-white">Signes vitaux</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-white text-xl">Température (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.signesVitaux.temperature}
                  onChange={handleChange}
                  className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 37.5"
                />
              </div>

              <div>
                <label className="block text-white text-xl">Pression artérielle</label>
                <input
                  type="text"
                  name="pa"
                  value={formData.signesVitaux.pa}
                  onChange={handleChange}
                  className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 120/80"
                />
              </div>

              <div>
                <label className="block text-white text-xl">Fréquence cardiaque</label>
                <input
                  type="number"
                  name="fc"
                  value={formData.signesVitaux.fc}
                  onChange={handleChange}
                  className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 80 bpm"
                />
              </div>

              <div>
                <label className="block text-white text-xl">Fréquence respiratoire</label>
                <input
                  type="number"
                  name="fr"
                  value={formData.signesVitaux.fr}
                  onChange={handleChange}
                  className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 18/min"
                />
              </div>

              <div>
                <label className="block text-white text-xl">SpO2 (%)</label>
                <input
                  type="number"
                  name="spo2"
                  value={formData.signesVitaux.spo2}
                  onChange={handleChange}
                  className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 98%"
                />
              </div>
            </div>
          </div>

          {/* Action infirmière */}
          <div>
            <label className="block text-white text-xl">Action infirmière</label>
            <textarea
              name="actionInfirmiere"
              value={formData.actionInfirmiere}
              onChange={handleChange}
              className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Actions spécifiques réalisées (éducation, conseils, suivi)"
            />
          </div>

          {/* Prochaine évaluation */}
          <div>
            <label className="block text-white text-xl">Prochaine évaluation</label>
            <input
              type="date"
              name="prochaineEvaluation"
              value={formData.prochaineEvaluation}
              onChange={handleChange}
              className="w-full text-white p-4 mt-2 border border-gray-300 rounded-lg"
            />
          </div>
          {/* Bouton de soumission */}
          <div className="mt-28 text-center">
            <button
              type="submit"
              className="bg-[#fae7c7] font-bold rounded-2l hover:bg-[#bcacd7] hover:text-lg transition-all duration-300 mx-auto"
            >
              Soumettre
            </button>
            { submitted && (
              <p className='text-green-700 text-center mt-4 font-bold'>
                Données enregistrees avec succès
              </p>
            )}
          </div>

        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SoinGeneral;
