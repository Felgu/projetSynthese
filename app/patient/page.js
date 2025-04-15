"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const demoPatients = [
      {id: "1", nom: "Pericles", prenom: "Sobriera", age: 42},
      {id: "2", nom: "Mardi", prenom: "Avril", age: 35},
    ];
    setPatients(demoPatients);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Patients</h1>
        <Link href="/patient/new">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Ajouter un patient
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patients.map((patient) => (
          <Link href={`/patient/${patient.id}`} key={patient.id}>
            <div className="bg-white shadow-md rounded p-6 hover:shadow-xl cursor-pointer transition">
              <h2 className="text-xl font-semibold">
                {patient.prenom} {patient.nom}
              </h2>
              <p className="text-gray-500">Âge : {patient.age} ans</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
