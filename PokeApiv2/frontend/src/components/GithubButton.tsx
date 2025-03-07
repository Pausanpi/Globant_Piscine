import React from 'react';
import { Github } from 'lucide-react';

interface GithubButtonProps {
  onClick: () => void;
}

export const GithubButton: React.FC<GithubButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl 
               bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[2px] 
               transition-all duration-300 hover:scale-[1.01]
               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <div className="relative flex w-full items-center justify-center space-x-3 rounded-[10px] 
                    bg-gray-900 px-4 py-3 transition-all duration-300 
                    group-hover:bg-opacity-90">
      <Github className="h-5 w-5 text-white transition-transform duration-300 
                        group-hover:scale-110" />
      <span className="font-medium text-white">
        Continuar con GitHub
      </span>
    </div>
    
    {/* Animated gradient border */}
    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-600 
                    via-purple-600 to-pink-600 opacity-30 blur transition-all 
                    duration-300 group-hover:opacity-50" />
  </button>
);