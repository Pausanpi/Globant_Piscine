import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface GeneratedImageProps {
  imageUrl: string | null;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ imageUrl }) => (
  <div className="max-w-lg mx-auto px-4 sm:px-0">
    <div className="backdrop-blur-sm bg-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 
                    border border-white/20 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-4 sm:mb-6 
                     flex items-center justify-center">
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-indigo-600" />
        Tu Pokémon Único
      </h2>
      
      {imageUrl ? (
        <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt="Generated Pokémon"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 
                         via-transparent to-transparent opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="flex items-center justify-center p-8 sm:p-12">
          <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 animate-spin" />
          <span className="ml-3 text-sm sm:text-base text-indigo-950/70">
            Generando tu Pokémon...
          </span>
        </div>
      )}
    </div>
  </div>
);