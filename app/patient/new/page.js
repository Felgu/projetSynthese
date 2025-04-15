"use client";
import { useState } from "react";
import { useRouter } from "next/router";

const AddPatient = () => {
  const router = useRouter();
  const [from, setForm] = useState({
    nom: "",
    prenom: "",
    age: "",
    sexe: "",
    allergies: "",
    identifiant: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log("Patient a enregistrer :", form);
    router.push("/patient");
  };
  return (
<div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Nouveau patient</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={form.prenom}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <select
          name="sexe"
          value={form.sexe}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>Homme</option>
          <option>Femme</option>
          <option>Autre</option>
        </select>
        <input
          type="text"
          name="numeroSecu"
          placeholder="N° sécurité sociale"
          value={form.numeroSecu}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <textarea
          name="allergies"
          placeholder="Allergies connues"
          value={form.allergies}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default AddPatient;