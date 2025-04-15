'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const NouveauPatientForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    adresse: '',
    pharmacie: '',
    medecinPrecedent: '',
    dernierRdv: '',
    etatCivil: '',
    emploi: '',
    tabac: '',
    alcool: '',
    alcoolQuantite: '',
    drogue: '',
    allergies: {
      medicaments: '',
      alimentaires: '',
      saisonnieres: '',
    },
    vaccination: {
      tetanos: '',
      pneumovax: false,
    },
    chirurgies: '',
    antecedentsFamiliaux: {
      pere: { vivant: true, age: '', details: '' },
      mere: { vivante: true, age: '', details: '' },
      fratrie: [],
      enfants: [],
    },
    problemesSante: {
      mental: [],
      pulmonaire: [],
      cardiaque: [],
      neurologique: [],
      endocrinien: [],
      digestif: [],
      divers: [],
      autres: '',
    },
    examens: {
      pap: '',
      prostate: '',
      gastro: '',
      colo: '',
      polype: '',
      itss: '',
    },
  });

  const handleChange = (e, section = null, subSection = null) => {
    const { name, value, type, checked } = e.target;

    if (section) {
      if (subSection) {
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [subSection]: {
              ...prev[section][subSection],
              [name]: type === 'checkbox' ? checked : value,
            },
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [name]: type === 'checkbox' ? checked : value,
          },
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'patients'), formData);
      alert('Formulaire soumis avec succès');
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-[#1f2937]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Formulaire - Nouveau patient</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Nom / Prénom */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} className="input" />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} className="input" />
        </div>

        {/* Date de naissance, téléphone */}
        <div className="grid grid-cols-2 gap-4">
          <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} className="input" />
          <input type="text" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} className="input" />
        </div>

        {/* Adresse, Pharmacie */}
        <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} className="input w-full" />
        <input type="text" name="pharmacie" placeholder="Pharmacie" value={formData.pharmacie} onChange={handleChange} className="input w-full" />

        {/* Statut social */}
        <select name="etatCivil" value={formData.etatCivil} onChange={handleChange} className="input w-full text-black">
          <option value="">État civil</option>
          <option value="célibataire">Célibataire</option>
          <option value="marié">Marié(e)</option>
          <option value="divorcé">Divorcé(e)</option>
          <option value="conjoint">Conjoint de fait</option>
          <option value="veuf">Veuf/veuve</option>
        </select>

        {/* Emploi */}
        <input type="text" name="emploi" placeholder="Emploi actuel" value={formData.emploi} onChange={handleChange} className="input w-full" />

        {/* Tabac, alcool, drogue */}
        <div className="grid grid-cols-3 gap-4">
          <select name="tabac" value={formData.tabac} onChange={handleChange} className="input">
            <option value="">Tabac</option>
            <option value="jamais">Jamais</option>
            <option value="fumeur">Fumeur</option>
            <option value="ex-fumeur">Ex-fumeur</option>
          </select>

          <select name="alcool" value={formData.alcool} onChange={handleChange} className="input">
            <option value="">Alcool</option>
            <option value="jamais">Jamais</option>
            <option value="occasionnel">Occasionnel</option>
            <option value="quotidien">Quotidien</option>
          </select>

          <input type="text" name="alcoolQuantite" placeholder="Alcool: nb/jour" value={formData.alcoolQuantite} onChange={handleChange} className="input" />
        </div>

        {/* Drogue */}
        <select name="drogue" value={formData.drogue} onChange={handleChange} className="input w-full">
          <option value="">Drogue</option>
          <option value="jamais">Jamais</option>
          <option value="occasionnel">Occasionnel</option>
          <option value="regulier">Régulièrement</option>
        </select>

        {/* Allergies */}
        <input type="text" name="medicaments" placeholder="Allergies médicamenteuses" value={formData.allergies.medicaments} onChange={(e) => handleChange(e, 'allergies')} className="input w-full" />
        <input type="text" name="alimentaires" placeholder="Allergies alimentaires" value={formData.allergies.alimentaires} onChange={(e) => handleChange(e, 'allergies')} className="input w-full" />
        <input type="text" name="saisonnieres" placeholder="Allergies saisonnières" value={formData.allergies.saisonnieres} onChange={(e) => handleChange(e, 'allergies')} className="input w-full" />

        {/* Tétanos */}
        <input type="date" name="tetanos" value={formData.vaccination.tetanos} onChange={(e) => handleChange(e, 'vaccination')} className="input w-full" />

        {/* Pneumovax */}
        <label className="flex items-center">
          <input type="checkbox" name="pneumovax" checked={formData.vaccination.pneumovax} onChange={(e) => handleChange(e, 'vaccination')} className="mr-2" />
          Déjà reçu Pneumovax ?
        </label>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">
          Soumettre
        </button>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default NouveauPatientForm;
