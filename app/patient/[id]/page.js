import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function getPatientData(id) {
  const docRef = doc(db, 'patients', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return { id: docSnap.id, ...docSnap.data() };
}

export default async function PatientPage({ params }) {
  const patient = await getPatientData(params.id);

  if (!patient) {
    return <div className="p-8">❌ Patient introuvable</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Détails du patient</h1>

      <div className="space-y-2">
        <p><strong>Nom :</strong> {patient.nom}</p>
        <p><strong>Prénom :</strong> {patient.prenom}</p>
        <p><strong>Date de naissance :</strong> {patient.dateNaissance}</p>
        <p><strong>Téléphone :</strong> {patient.telephone}</p>
        <p><strong>Adresse :</strong> {patient.adresse}</p>
        <p><strong>Pharmacie :</strong> {patient.pharmacie}</p>
        <p><strong>État civil :</strong> {patient.etatCivil}</p>
        <p><strong>Emploi :</strong> {patient.emploi}</p>
        <p><strong>Tabac :</strong> {patient.tabac}</p>
        <p><strong>Alcool :</strong> {patient.alcool} ({patient.alcoolQuantite})</p>
        <p><strong>Drogue :</strong> {patient.drogue}</p>
      </div>
    </div>
  );
}
