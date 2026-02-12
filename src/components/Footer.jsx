import React from 'react';
import { Facebook, Send, MapPin, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-zkth-navy border-t border-slate-200 dark:border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black mb-4 dark:text-white uppercase">{t.zkth}</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 max-w-xs">
            {t.footerDesc}
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/ZKTH-Associates-Partners-61579118823177/" target="_blank" className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:scale-110 transition-all"><Facebook size={20}/></a>
            <a href="https://t.me/+85589528518" target="_blank" className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full hover:scale-110 transition-all"><Send size={20}/></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 dark:text-white">{t.directConnect}</h4>
          <div className="space-y-4 text-slate-600 dark:text-gray-400">
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600 dark:text-zkth-gold"/> {t.phone}
            </p>
            <p className="flex items-center gap-3">
              <MessageSquare size={18} className="text-green-500 dark:text-zkth-gold"/> {t.wechat}
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-red-500 dark:text-zkth-gold"/> 
              <a href="https://maps.app.goo.gl/uBbh3uj7npucPTQJ6" target="_blank" className="hover:underline underline-offset-4 text-slate-600 dark:text-gray-400">
                {t.viewMap}
              </a>
            </p>
          </div>
        </div>

        <div className="text-slate-500 dark:text-gray-400 text-sm">
          <h4 className="font-bold mb-6 dark:text-white">{t.ppOffice}</h4>
          <p>{t.officeHours}</p>
          <p className="mt-4 font-bold text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500">
            {t.integrity}
          </p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-gray-800 text-xs text-slate-400 dark:text-gray-500">
        {t.copyright}
      </div>
    </footer>
  );
}