import React from 'react';
import logo from '../assets/logo.png';

export const PokemonLogo: React.FC = () => (
  <div className="mb-8 text-center">
    <div className="relative mx-auto mb-6 h-20 w-20 sm:h-24 sm:w-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 blur-md" />
      
      {/* Pokeball design */}
      <div className="relative h-full w-full rounded-full bg-gradient-to-br from-indigo-500 to-white p-1">
        {/*<div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500 transition-all group-hover:scale-110" />
            <div className="absolute inset-[30%] rounded-full bg-indigo-500 transition-all group-hover:scale-110" />
          </div>
        </div>*/}
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <img src={logo} alt="Pokeball" className="h-15 w-15 sm:h-18 sm:w-18" />
        </div>
      </div>
    </div>
    
    <h1 className="mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
      Poke Api 2.0
    </h1>
    <p className="text-sm text-indigo-950/70 sm:text-base">
      Inicia sesión para crear tu Pokémon único
    </p>
  </div>
);