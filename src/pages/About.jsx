import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto bg-white dark:bg-zkth-navy min-h-screen transition-colors duration-200">
      <h1 className="text-4xl font-extrabold text-zkth-navy dark:text-white mb-6">
        {t.aboutZKTH}
      </h1>
      <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
        {t.aboutDesc}
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-slate-50 dark:bg-zkth-navy/80 p-8 rounded-2xl border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-zkth-gold">
            {t.ourMission}
          </h3>
          <p className="text-slate-600 dark:text-gray-300">
            {t.missionDesc}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-zkth-navy/80 p-8 rounded-2xl border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-zkth-gold">
            {t.ourVision}
          </h3>
          <p className="text-slate-600 dark:text-gray-300">
            {t.visionDesc}
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block px-6 py-3 bg-zkth-light dark:bg-zkth-navy/60 rounded-full">
          <span className="text-zkth-navy dark:text-zkth-gold font-semibold">
            {t.integrity}
          </span>
        </div>
      </div>
    </div>
  );
}