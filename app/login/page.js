"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Pour gérer le chargement
  const router = useRouter();

  const validateForm = () => {
    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide.');
      return false;
    }

    // Validation du mot de passe (longueur minimale)
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }

    setError(''); // Si tout est valide, réinitialise l'erreur
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true); // Indiquer que la requête est en cours
    setTimeout(() => {
      // Simuler un délai pour la connexion (simule un appel API)
      if (email === 'user@example.com' && password === 'password123') {
        // Rediriger vers la page d'accueil après la connexion réussie
        router.push('/');
      } else {
        setError('Email ou mot de passe incorrect');
        setIsLoading(false); // Revenir à l'état initial en cas d'erreur
      }
    }, 1500); // Délai de 1.5 secondes pour simuler le processus de connexion
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Section de login */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Connexion</h1>
        <p className="text-lg text-gray-600 mt-4">Connectez-vous à votre compte</p>

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-lg mx-auto">
          {/* Affichage des erreurs */}
          {error && (
            <div className="bg-red-200 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Champ email */}
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
              placeholder="Votre email"
            />
          </div>

          {/* Champ mot de passe */}
          <div>
            <label htmlFor="password" className="block text-left text-gray-700 font-semibold">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
              placeholder="Votre mot de passe"
            />
          </div>

          {/* Bouton de connexion */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading} // Désactive le bouton pendant le chargement
              className={`px-6 py-3 ${
                isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700'
              } text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors`}
            >
              {isLoading ? 'Chargement...' : 'Se connecter'}
            </button>
          </div>

          {/* Lien vers la page d'inscription */}
          <p className="mt-4 text-gray-600">
            Pas de compte ?{' '}
            <a href="/signup" className="text-blue-700 hover:underline">
              Créez un compte ici
            </a>
          </p>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
