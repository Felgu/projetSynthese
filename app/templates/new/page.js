'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

export default function NewTemplatePage() {
  const [nom, setNom] = useState('');
  const [structure, setStructure] = useState(`{
  "fields": [
    { "name": "nom", "label": "Nom", "type": "text" },
    { "name": "dateNaissance", "label": "Date de naissance", "type": "date" }
  ]
}`);
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(structure);
      const docRef = await addDoc(collection(db, 'userTemplates'), {
        uid: user.uid,
        nom,
        structure: parsed,
      });
      alert('Gabarit créé avec succès ✅');
      router.push(`/templates/edit/${docRef.id}`);
    } catch (e) {
      alert('Erreur JSON ❌: ' + e.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Créer un nouveau gabarit</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom du gabarit"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          value={structure}
          onChange={(e) => setStructure(e.target.value)}
          className="w-full h-[300px] p-4 font-mono border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Créer
        </button>
      </form>
    </div>
  );
}
