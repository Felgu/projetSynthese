'use client';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function Page() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    adresse: '',
    pharmacie: '',
    etatCivil: '',
    emploi: '',
    tabac: '',
    alcool: '',
    alcoolQuantite: '',
    drogue: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'patients'), formData);
      alert('Patient ajouté avec succès 🎉');
      setFormData({
        nom: '',
        prenom: '',
        dateNaissance: '',
        telephone: '',
        adresse: '',
        pharmacie: '',
        etatCivil: '',
        emploi: '',
        tabac: '',
        alcool: '',
        alcoolQuantite: '',
        drogue: '',
      });
    } catch (error) {
      console.error('Erreur ajout patient :', error);
      alert('Erreur lors de l’ajout du patient 😞');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Navbar /> */}
      <Navbar />
      <div className="text-center py-12 bg-black">
      <h1 className="text-2xl font-bold mb-6">Nouveau Patient</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="input" type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
        <input className="input" type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
        <input className="input" type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
        <input className="input" type="text" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
        <input className="input" type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
        <input className="input" type="text" name="pharmacie" placeholder="Pharmacie habituelle" value={formData.pharmacie} onChange={handleChange} />
        <input className="input" type="text" name="emploi" placeholder="Emploi actuel" value={formData.emploi} onChange={handleChange} />

        <select className="input" name="etatCivil" value={formData.etatCivil} onChange={handleChange}>
          <option value="">État civil</option>
          <option value="célibataire">Célibataire</option>
          <option value="marié">Marié(e)</option>
          <option value="divorcé">Divorcé(e)</option>
          <option value="conjoint">Conjoint de fait</option>
          <option value="veuf">Veuf/Veuve</option>
        </select>

        <select className="input" name="tabac" value={formData.tabac} onChange={handleChange}>
          <option value="">Tabac</option>
          <option value="jamais">Jamais</option>
          <option value="fumeur">Fumeur</option>
          <option value="ex-fumeur">Ex-fumeur</option>
        </select>

        <select className="input" name="alcool" value={formData.alcool} onChange={handleChange}>
          <option value="">Alcool</option>
          <option value="jamais">Jamais</option>
          <option value="occasionnel">Occasionnel</option>
          <option value="quotidien">Quotidien</option>
        </select>

        <input className="input" type="text" name="alcoolQuantite" placeholder="Quantité d'alcool (verres/jour)" value={formData.alcoolQuantite} onChange={handleChange} />
        <input className="input" type="text" name="drogue" placeholder="Usage de drogues" value={formData.drogue} onChange={handleChange} />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Enregistrer le patient
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
}
