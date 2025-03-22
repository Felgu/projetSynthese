// app/about.js
import Navbar from '../components/Navbar';  // Import de la Navbar
import Footer from '../components/Footer';  // Import du Footer

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-primary">À propos de Notitia</h1>
        <p className="text-lg text-gray-600 mt-4">
          Notitia est une application dédiée à la gestion des prises de notes médicales.
          Elle est conçue pour faciliter le suivi des soins, l’historique médical, et la gestion
          des interventions chirurgicales des patients de manière simple et ergonomique.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Notre objectif est de fournir un outil intuitif et personnalisable, permettant aux
          professionnels de la santé, tels que les infirmiers et les médecins, d'améliorer leur
          efficacité et la qualité des soins prodigués aux patients.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
