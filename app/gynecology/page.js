"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PremiereConsultation = () => {
  const [formData, setFormData] = useState({
    genre: "",

    // Données générales
    nom: "",
    prenom: "",
    dateNaissance: "",
    telephone: "",
    adresse: "",

    // Statut social
    statutSocial: {
      profession: "",
      poids: "",
      taille: "",
      activitePhysique: "",
      tabac: false,
      cannabis: false,
      alcool: false,
    },

    // Femme
    femme: {
      contraception: "",
      grossessesActuel: "",
      grossessesAnterieures: "",
      chirurgies: "",
      antecedentsSante: {
        migraine: false,
        diabete: false,
        hta: false,
        allergies: "",
        coagulation: false,
        phlebite: false,
        avc: false,
        hemoglobine: false,
        genetique: false,
        ist: false,
        autre: "",
      },
      antecedentsGyneco: {
        debutRegles: "",
        cyclesReguliers: "",
        frequence: "",
        reglesDouloureuses: false,
        dernierFrottis: "",
      },
      antecedentsFamiliaux: {
        sein: false,
        ovaire: false,
        endometre: false,
        colon: false,
        phlebite: false,
        avc: false,
        infarctus: false,
        genetique: false,
        malformation: false,
      },
      infertilite: {
        deja: false,
        details: "",
      },
    },

    // Homme
    homme: {
      grossesses: "",
      enfants: false,
      antecedents: {
        sante: false,
        details: "",
        medicaments: "",
      },
      chirurgies: "",
      urologie: {
        ectopie: false,
        torsion: false,
        varicocele: false,
        ist: false,
        prostatite: false,
      },
      antecedentsFamiliaux: "",
    },
  });

  const handleChange = (e, section = null, subSection = null) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    if (section) {
      if (subSection) {
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [subSection]: {
              ...prev[section][subSection],
              [name]: val,
            },
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [name]: val,
          },
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: val,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Première consultation patient
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Infos générales */}
          <section>
            <h2 className="text-xl font-semibold">Informations personnelles</h2>
            <input className="input" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
            <input className="input" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
            <input className="input" name="dateNaissance" type="date" value={formData.dateNaissance} onChange={handleChange} />
            <input className="input" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
            <input className="input" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />

            <label className="block mt-4">Genre :</label>
            <select name="genre" className="input" value={formData.genre} onChange={handleChange}>
              <option value="">-- Sélectionner --</option>
              <option value="femme">Femme</option>
              <option value="homme">Homme</option>
            </select>
          </section>

          {/* Statut social */}
          <section>
            <h2 className="text-xl font-semibold">Habitudes de vie</h2>
            <input className="input" name="profession" placeholder="Profession" value={formData.statutSocial.profession} onChange={(e) => handleChange(e, "statutSocial")} />
            <input className="input" name="poids" placeholder="Poids (kg)" value={formData.statutSocial.poids} onChange={(e) => handleChange(e, "statutSocial")} />
            <input className="input" name="taille" placeholder="Taille (cm)" value={formData.statutSocial.taille} onChange={(e) => handleChange(e, "statutSocial")} />
            <input className="input" name="activitePhysique" placeholder="Activité physique" value={formData.statutSocial.activitePhysique} onChange={(e) => handleChange(e, "statutSocial")} />
            <div className="flex gap-4">
              <label><input type="checkbox" name="tabac" checked={formData.statutSocial.tabac} onChange={(e) => handleChange(e, "statutSocial")} /> Tabac</label>
              <label><input type="checkbox" name="cannabis" checked={formData.statutSocial.cannabis} onChange={(e) => handleChange(e, "statutSocial")} /> Cannabis</label>
              <label><input type="checkbox" name="alcool" checked={formData.statutSocial.alcool} onChange={(e) => handleChange(e, "statutSocial")} /> Alcool</label>
            </div>
          </section>

          {/* Section Femme */}
          {formData.genre === "femme" && (
            <>
              <section>
                <h2 className="text-xl font-semibold">Informations gynécologiques</h2>
                <textarea className="input" name="contraception" placeholder="Contraception / rapports non protégés" value={formData.femme.contraception} onChange={(e) => handleChange(e, "femme")} />
                <textarea className="input" name="grossessesActuel" placeholder="Grossesses avec partenaire actuel" value={formData.femme.grossessesActuel} onChange={(e) => handleChange(e, "femme")} />
                <textarea className="input" name="grossessesAnterieures" placeholder="Grossesses avec anciens partenaires" value={formData.femme.grossessesAnterieures} onChange={(e) => handleChange(e, "femme")} />
                <textarea className="input" name="chirurgies" placeholder="Chirurgies passées" value={formData.femme.chirurgies} onChange={(e) => handleChange(e, "femme")} />
              </section>

              <section>
                <h2 className="text-xl font-semibold">Antécédents santé</h2>
                {Object.keys(formData.femme.antecedentsSante).map((key) => (
                  <label key={key} className="block capitalize">
                    <input type="checkbox" name={key} checked={formData.femme.antecedentsSante[key]} onChange={(e) => handleChange(e, "femme", "antecedentsSante")} />
                    {key}
                  </label>
                ))}
              </section>

              <section>
                <h2 className="text-xl font-semibold">Antécédents gynécologiques</h2>
                <input className="input" name="debutRegles" placeholder="Âge des premières règles" value={formData.femme.antecedentsGyneco.debutRegles} onChange={(e) => handleChange(e, "femme", "antecedentsGyneco")} />
                <input className="input" name="cyclesReguliers" placeholder="Cycles réguliers ?" value={formData.femme.antecedentsGyneco.cyclesReguliers} onChange={(e) => handleChange(e, "femme", "antecedentsGyneco")} />
                <input className="input" name="frequence" placeholder="Fréquence des cycles" value={formData.femme.antecedentsGyneco.frequence} onChange={(e) => handleChange(e, "femme", "antecedentsGyneco")} />
                <input className="input" name="dernierFrottis" placeholder="Date du dernier frottis" value={formData.femme.antecedentsGyneco.dernierFrottis} onChange={(e) => handleChange(e, "femme", "antecedentsGyneco")} />
              </section>
            </>
          )}

          {/* Section Homme */}
          {formData.genre === "homme" && (
            <>
              <section>
                <h2 className="text-xl font-semibold">Antécédents masculins</h2>
                <textarea className="input" name="grossesses" placeholder="Grossesses / enfants" value={formData.homme.grossesses} onChange={(e) => handleChange(e, "homme")} />
                <textarea className="input" name="chirurgies" placeholder="Chirurgies passées" value={formData.homme.chirurgies} onChange={(e) => handleChange(e, "homme")} />
              </section>

              <section>
                <h2 className="text-xl font-semibold">Urologie</h2>
                {Object.keys(formData.homme.urologie).map((key) => (
                  <label key={key} className="block capitalize">
                    <input type="checkbox" name={key} checked={formData.homme.urologie[key]} onChange={(e) => handleChange(e, "homme", "urologie")} />
                    {key}
                  </label>
                ))}
              </section>
            </>
          )}

          <div className="text-center mt-10">
            <button type="submit" className="px-6 py-3 bg-[#157291] text-white text-lg font-semibold rounded-lg hover:bg-[#7fc6a4] hover:text-black">
              Soumettre
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PremiereConsultation;
