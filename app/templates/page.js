'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

export default function TemplateListPage() {
  const [templates, setTemplates] = useState([]);
  const { user } = useAuth();
  console.log("Utilisateur connecté :", user);
  useEffect(() => {
    if (!user) return;

    const fetchTemplates = async () => {
      const q = query(
        collection(db, 'userTemplates'),
        where('uid', '==', user.uid)
      );
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTemplates(items);
    };

    fetchTemplates();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mes gabarits</h1>
      {templates.map((tpl) => (
        <div key={tpl.id} className="mb-2 border p-4 rounded bg-white shadow">
          <h2 className="font-semibold">{tpl.nom}</h2>
          <Link href={`/templates/edit/${tpl.id}`} className="text-blue-600 underline">
            Modifier
          </Link>
        </div>
      ))}
    </div>
  );
}
