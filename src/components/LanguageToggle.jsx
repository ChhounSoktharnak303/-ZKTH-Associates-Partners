import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-100 dark:bg-zkth-slate/20 hover:bg-gray-200 dark:hover:bg-zkth-slate/30 transition-colors"
      aria-label={language === 'en' ? 'Switch to Khmer' : 'Switch to English'}
    >
      <img 
        src={language === 'en' 
          ? 'https://flagcdn.com/w40/us.png' 
          : 'https://flagcdn.com/w40/kh.png'
        } 
        alt={language === 'en' ? 'USA flag' : 'Cambodia flag'}
        className="w-6 h-6 rounded-full object-cover border border-gray-300"
      />
    </button>
  );
}