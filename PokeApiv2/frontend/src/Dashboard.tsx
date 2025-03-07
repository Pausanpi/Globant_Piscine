import React, { useState } from "react";
import { usePollinationsImage } from "@pollinations/react";
import { Wand2, LogOut } from "lucide-react";
import { SelectBox } from "./components/SelectBox.tsx";
import { GeneratedImage } from "./components/GeneratedImage.tsx";
import { typeOptions, colorOptions, accessoryOptions, habitatOptions } from "./data/options.tsx";

const Dashboard: React.FC = () => {
    const [type, setType] = useState<string>("water");
    const [color, setColor] = useState<string>("yellow");
    const [accessory, setAccessory] = useState<string>("none");
    const [habitat, setHabitat] = useState<string>("forest");
    const [generate, setGenerate] = useState<boolean>(false);

    const description = `A Pokémon of type ${type} with a ${color} theme, with a ${accessory}, that lives in the ${habitat} illustrated in a detailed and vibrant art style.`;

    const imageUrl = usePollinationsImage(description, {
        width: 512,
        height: 512,
        seed: Math.floor(Math.random() * 100000),
        model: "flux",
        nologo: false,
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-12 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
                {/* Header */}
                <header className="text-center mb-8 sm:mb-16 relative">
                    <div className="">
                        <button
                            onClick={() => {
                                localStorage.removeItem("githubToken");
                                window.location.href = "/";
                            }}
                            className="absolute top-0 right-0 flex items-center px-3 py-1.5 sm:px-4 sm:py-2 
                                        bg-white/50 text-indigo-600 rounded-lg sm:rounded-xl 
                                        hover:bg-white/80 transition-all duration-200
                                        border border-indigo-100 hover:border-indigo-200
                                        text-sm sm:text-base
                                        shadow-sm hover:shadow-md"
                        >
                            <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            Cerrar sesión
                        </button>
                    </div>

                    <div className="relative inline-block mt-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent 
                                     bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 
                                     to-pink-600 mb-3 sm:mb-4">
                            Poke Api 2.0
                        </h1>
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 
                                      via-purple-600 to-pink-600 rounded-2xl blur opacity-20 -z-10" />
                    </div>
                    
                    <p className="text-base sm:text-lg text-indigo-950/70 max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
                        Genera Pokémon únicos combinando diferentes elementos y déjate sorprender por la magia de la IA
                    </p>
                </header>

                {/* Options Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        <SelectBox
                            title="Tipo"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            options={typeOptions}
                        />
                        <SelectBox
                            title="Color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            options={colorOptions}
                        />
                        <SelectBox
                            title="Accesorio"
                            value={accessory}
                            onChange={(e) => setAccessory(e.target.value)}
                            options={accessoryOptions}
                        />
                        <SelectBox
                            title="Hábitat"
                            value={habitat}
                            onChange={(e) => setHabitat(e.target.value)}
                            options={habitatOptions}
                        />
                    </div>

                    {/* Generate Button */}
                    <div className="text-center mb-8 sm:mb-16">
                        <button
                            onClick={() => setGenerate(true)}
                            className="group relative inline-flex items-center justify-center 
                                     px-6 sm:px-8 py-3 sm:py-4
                                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                                     text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl
                                     transition-all duration-300
                                     hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25
                                     active:scale-[0.98]"
                        >
                            <Wand2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
                            Generar Pokémon
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 
                                          via-purple-600 to-pink-600 rounded-xl sm:rounded-2xl 
                                          blur opacity-30 group-hover:opacity-50 
                                          transition-opacity duration-300 -z-10" />
                        </button>
                    </div>

                    {/* Generated Image */}
                    {/* {generate && <GeneratedImage imageUrl={imageUrl} />} */}
					{generate && (
						<div className="text-center">
							<GeneratedImage imageUrl={imageUrl} />
							<a
								href={imageUrl}
								target="_blank"
								rel="noopener noreferrer"
								download="pokemon_generated.png"
								className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-lg
										hover:bg-indigo-700 transition-all duration-200"
							>
								Descargar imagen
							</a>
						</div>
					)}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;