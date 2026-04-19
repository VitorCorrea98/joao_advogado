import { Link } from 'react-router-dom';
import type { PracticeAreaCardProps } from '../types';

export const PracticeAreaCard = ({ title, path, isMain = false }: PracticeAreaCardProps) => {
  return (
    <Link
      to={path}
      className={`group flex flex-col justify-between p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-premium ${isMain
          ? 'border-cs-goldDark bg-cs-darkGreen text-cs-cream'
          : 'border-cs-goldDark/20 bg-white text-cs-darkGreen hover:border-cs-goldDark'
        }`}
    >
      <h3 className={`text-2xl font-serif font-bold mb-4 text-center leading-tight ${isMain ? 'text-cs-goldDark' : ''}`}>
        {title}
      </h3>
      <div className="flex justify-center mt-auto pt-6">
        <span className={`text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${isMain
            ? 'border-cs-goldDark text-cs-cream group-hover:border-cs-cream'
            : 'border-cs-goldDark text-cs-goldDark group-hover:border-cs-darkGreen group-hover:text-cs-darkGreen'
          }`}>
          Saber mais →
        </span>
      </div>
    </Link>
  );
};