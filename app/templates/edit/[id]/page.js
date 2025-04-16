'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const FIELD_TYPES = ['text', 'textarea', 'date', 'checkbox', 'number'];

export default function EditTemplatePage() {
  const router = useRouter();
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const fetchTemplate = async () => {
      const docRef = doc(db, 'userTemplates', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTemplate({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchTemplate();
  }, [id]);

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...template.fields];
    updatedFields[index][key] = value;
    setTemplate({ ...template, fields: updatedFields });
  };

  const handleAddField = () => {
    const newField = { label: '', name: '', type: 'text' };
    setTemplate({ ...template, fields: [...template.fields, newField] });
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...template.fields];
    updatedFields.splice(index, 1);
    setTemplate({ ...template, fields: updatedFields });
  };

  const handleSave = async () => {
    const docRef = doc(db, 'userTemplates', id);
    await updateDoc(docRef, {
      fields: template.fields
    });
    alert('Gabarit mis à jour ✅');
    router.push('/templates');
  };

  if (!template) return <div className="p-8">Chargement...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier le gabarit : {template.nom}</h1>

      <div className="space-y-4">
        {(template.fields || []).map((field, index) => (
          <div key={index} className="p-4 border rounded bg-white shadow space-y-2">
            <input
              type="text"
              placeholder="Label"
              value={field.label}
              onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Nom (clé)"
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              className="w-full border p-2 rounded"
            />
            <select
              value={field.type}
              onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
              className="w-full border p-2 rounded"
            >
              {FIELD_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <button
              onClick={() => handleRemoveField(index)}
              className="text-red-600 hover:underline"
            >
              Supprimer ce champ
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddField}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Ajouter un champ
      </button>

      <button
        onClick={handleSave}
        className="mt-6 ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        💾 Enregistrer
      </button>
    </div>
  );
}
