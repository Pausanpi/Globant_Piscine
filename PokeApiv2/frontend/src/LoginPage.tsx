import React from 'react';
import { PokemonLogo } from './components/PokemonLogo.tsx';
import { GithubButton } from './components/GithubButton.tsx';

const LoginPage: React.FC = () => {
  const clientId = 'Ov23lioZpnEEOsKtxdif';
  const redirectUri = 'http://localhost:5174/callback';

  const handleLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-blob rounded-full 
                       bg-gradient-to-br from-indigo-400 to-indigo-300 opacity-20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 animate-blob animation-delay-2000 
                       rounded-full bg-gradient-to-br from-purple-400 to-purple-300 opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/4 left-1/3 h-96 w-96 animate-blob animation-delay-4000 
                       rounded-full bg-gradient-to-br from-pink-400 to-pink-300 opacity-20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md transform rounded-2xl backdrop-blur-sm 
                       bg-white/80 p-6 sm:p-8 shadow-2xl transition-all 
                       hover:shadow-indigo-500/10">
          <PokemonLogo />

          <GithubButton onClick={handleLogin} />

          {/* Footer text */}
          <p className="mt-6 text-center text-xs sm:text-sm text-indigo-950/60">
            Al iniciar sesión, te unes al mundo de la generación de Pokémon con IA
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
