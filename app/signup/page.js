'use client'
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide.');
      return false;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Activer le chargement
    setTimeout(() => {
      // Simuler une inscription (ici tu pourrais faire un appel API)
      if (email && password) {
        setSuccess(true);
        setError('');
        setIsLoading(false);
        setTimeout(() => {
          router.push('/login'); // Rediriger vers la page de login après succès
        }, 1500);
      } else {
        setError('Veuillez remplir tous les champs');
        setIsLoading(false);
      }
    }, 1500); // Simuler un délai pour la requête
  };

  return (
    <div className="bg-gray-50 min-h-screen text-xl">
      {/* Navbar */}
      <Navbar />

      {/* Section d'inscription */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#154c79]">Créer un compte</h1>
        <p className="text-lg text-gray-600 mt-4">Inscrivez-vous pour commencer à utiliser Notitia</p>

        {/* Formulaire d'inscription */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-lg mx-auto bg-primary">
          {/* Affichage des erreurs */}
          {error && (
            <div className="bg-red-200 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-200 text-green-700 p-4 rounded-lg mb-4">
              Inscription réussie ! Vous pouvez maintenant vous connecter.
            </div>
          )}

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
              className="mt-5 p-5 w-full border border-gray-300 text-[#061724] rounded-lg"
              placeholder="Votre email"
            />
          </div>

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
              className="mt-2 p-3 w-full text-[#061724] border border-gray-300 rounded-lg"
              placeholder="Votre mot de passe"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-left text-gray-700 font-semibold">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 p-3 w-full text-[#061724] border border-gray-300 rounded-lg"
              placeholder="Confirmer votre mot de passe"
            />
          </div>

          {/* Bouton d'inscription */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#154c79]'} text-white font-semibold rounded-lg hover:bg-[#155679] transition-colors`}
            >
              {isLoading ? 'Chargement...' : 'S`inscrire'}
            </button>
          </div>

          <p className="mt-4 text-gray-600">
            Vous avez déjà un compte ?{' '}
            <a href="/login" className="text-[#79154c] hover:underline">
              Connectez-vous ici
            </a>
          </p>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
