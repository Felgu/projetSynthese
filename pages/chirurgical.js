"use client";
import { useState } from 'react';

const GabaritChirurgical = () => {
  const [formData, setFormData] = useState({
    typeChirurgie: '',
    dateChirurgie: '',
    anesthesie: '',
    douleurPostOp: '',
    signesVitaux: {
      temperature: '',
      pa: '',
      fc: '',
      fr: '',
      spo2: '',
    },
    complications: [],
    soinsPostOp: '',
    recommandations: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-blue-50 min-h-screen font-sans p-4">
      <div className="container mx-auto px-6 py-16 bg-red p-8 shadow-xl rounded-lg ml-[100px]">
        <h1 className="text-4xl font-bold text-[#0b263d] text-center mb-18">Gabarit Chirurgical</h1>

        <form onSubmit={handleSubmit} className="space-y-8 mx-auto max-w-4xl">
          {/* Type de chirurgie */}
          <div className='flex flex-col'>
            <label className="text-xl text-[#0b263d] font-medium mb-2">Type de Chirurgie</label>
            <input
              type="text"
              name="typeChirurgie"
              value={formData.typeChirurgie}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Chirurgie abdominale"
            />
          </div>

          {/* Date de chirurgie */}
          <div className='flex flex-col'>
            <label className="text-xl text-[#0b263d] font-medium mb-2">Date de Chirurgie</label>
            <input
              type="date"
              name="dateChirurgie"
              value={formData.dateChirurgie}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Anesthésie */}
          <div className='flex flex-col'>
            <label className="text-xl text-[#0b263d] font-medium mb-2">Anesthésie utilisée</label>
            <input
              type="text"
              name="anesthesie"
              value={formData.anesthesie}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Anesthésie générale"
            />
          </div>

          {/* Douleur post-opératoire */}
          <div className='flex flex-col'>
            <label className="block text-xl text-[#0b263d] font-medium mb-2">Douleur post-opératoire (sur 10)</label>
            <input
              type="number"
              name="douleurPostOp"
              value={formData.douleurPostOp}
              onChange={handleChange}
              min="0"
              max="10"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Notez la douleur de 0 à 10"
            />
          </div>

          {/* Signes vitaux */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#0b263d] mb-6">Signes vitaux</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className='flex flex-col'>
                <label className="text-lg text-[#0b263d] font-medium mb-2">Température (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.signesVitaux.temperature}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 37.5"
                />
              </div>

              <div className='flex flex-col'>
                <label className="text-xl text-[#0b263d] font-medium mb-2">Pression artérielle</label>
                <input
                  type="text"
                  name="pa"
                  value={formData.signesVitaux.pa}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 120/80"
                />
              </div>

              <div className='flex flex-col'>
                <label className="text-xl text-[#0b263d] font-medium mb-2">Fréquence cardiaque</label>
                <input
                  type="number"
                  name="fc"
                  value={formData.signesVitaux.fc}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 80 bpm"
                />
              </div>

              <div className='flex flex-col'>
                <label className="text-lg text-[#0b263d] font-medium mb-2">Fréquence respiratoire</label>
                <input
                  type="number"
                  name="fr"
                  value={formData.signesVitaux.fr}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 18/min"
                />
              </div>

              <div className='flex flex-col'>
                <label className="block text-xl text-[#0b263d] font-medium mb-2">SpO2 (%)</label>
                <input
                  type="number"
                  name="spo2"
                  value={formData.signesVitaux.spo2}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 98%"
                />
              </div>
            </div>
          </div>

          {/* Complications */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#0b263d] mb-4">Complications</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="complications"
                  value="Infection"
                  checked={formData.complications.includes('Infection')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-lg">Infection</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="complications"
                  value="Hémorragie"
                  checked={formData.complications.includes('Hémorragie')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-lg">Hémorragie</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="complications"
                  value="Trouble respiratoire"
                  checked={formData.complications.includes('Trouble respiratoire')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-lg">Trouble respiratoire</label>
              </div>
            </div>
          </div>

          {/* Soins post-opératoires */}
          <div className='flex flex-col'>
            <label className="text-xl text-[#0b263d] font-medium mb-2">Soins post-opératoires</label>
            <textarea
              name="soinsPostOp"
              value={formData.soinsPostOp}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Ex: Surveillance de la plaie, administration des analgésiques"
            />
          </div>

          {/* Recommandations */}
          <div className='flex flex-col'>
            <label className="text-xl text-[#0b263d] font-medium mb-2">Recommandations</label>
            <textarea
              name="recommandations"
              value={formData.recommandations}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Ex: Repos, suivi médical dans les 48 heures"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GabaritChirurgical;
