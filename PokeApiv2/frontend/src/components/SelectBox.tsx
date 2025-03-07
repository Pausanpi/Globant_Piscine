import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const SelectBox: React.FC<SelectBoxProps> = ({ title, value, onChange, options }) => (
  <div className="backdrop-blur-sm bg-white/30 rounded-xl p-4 sm:p-6 border border-white/20 
                  shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
    <h2 className="text-base sm:text-lg font-bold text-indigo-950 mb-2 sm:mb-3">{title}</h2>
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2.5 sm:p-3 bg-white/50 border-2 border-indigo-100 rounded-lg sm:rounded-xl 
                text-sm sm:text-base text-indigo-950 font-medium
                focus:ring-4 focus:ring-indigo-400/30 focus:border-indigo-400
                hover:border-indigo-300 transition-all duration-300
                appearance-none cursor-pointer
                bg-[url('data:image/svg+xml;"
    >
      {options.map((option: Option) => (
        <option key={option.value} value={option.value} className="text-indigo-950">
          {option.label}
        </option>
      ))}
    </select>
  </div>
);