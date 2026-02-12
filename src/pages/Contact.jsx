import React from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto bg-white dark:bg-zkth-navy min-h-screen transition-colors duration-200">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zkth-navy dark:text-white">{t.contactZKTH}</h1>
        <p className="text-slate-500 dark:text-gray-400 mt-4">{t.contactDesc}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          {/* Phone Card */}
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-zkth-navy/80 shadow-sm dark:shadow-zkth-blue/5 border dark:border-gray-800 rounded-2xl hover:shadow-md dark:hover:shadow-zkth-gold/10 transition-all">
            <div className="w-12 h-12 bg-blue-100 dark:bg-zkth-gold/20 text-blue-600 dark:text-zkth-gold rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-gray-400">{t.callUs}</p>
              <p className="font-bold text-zkth-navy dark:text-white">{t.phone}</p>
            </div>
          </div>
          
          {/* Telegram Card */}
          <a 
            href="https://t.me/089528518" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-6 bg-white dark:bg-zkth-navy/80 shadow-sm dark:shadow-zkth-blue/5 border dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-zkth-gold transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500 dark:bg-zkth-gold text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-gray-400">{t.telegram}</p>
              <p className="font-bold text-zkth-navy dark:text-white">{t.joinChat}</p>
            </div>
          </a>

          {/* Email Card */}
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-zkth-navy/80 shadow-sm dark:shadow-zkth-blue/5 border dark:border-gray-800 rounded-2xl hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-red-100 dark:bg-zkth-gold/20 text-red-500 dark:text-zkth-gold rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-gray-400">{t.email}</p>
              <p className="font-bold text-zkth-navy dark:text-white">{t.emailAddr}</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <form className="bg-white dark:bg-zkth-navy/80 p-8 rounded-3xl border dark:border-gray-800 shadow-sm dark:shadow-zkth-blue/5 space-y-4">
          <input 
            type="text" 
            placeholder={t.yourName}
            className="w-full p-4 bg-slate-50 dark:bg-zkth-navy border-none dark:border dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-zkth-gold focus:outline-none text-zkth-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
          />
          <input 
            type="email" 
            placeholder={t.emailAddress}
            className="w-full p-4 bg-slate-50 dark:bg-zkth-navy border-none dark:border dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-zkth-gold focus:outline-none text-zkth-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
          />
          <textarea 
            placeholder={t.howHelp}
            rows="4" 
            className="w-full p-4 bg-slate-50 dark:bg-zkth-navy border-none dark:border dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-zkth-gold focus:outline-none text-zkth-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none"
          ></textarea>
          <button className="w-full bg-zkth-navy dark:bg-zkth-gold text-white dark:text-zkth-navy py-4 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-zkth-gold/80 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            {t.sendInquiry}
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-zkth-light dark:bg-zkth-navy/60 rounded-full">
          <MapPin size={18} className="text-red-500 dark:text-zkth-gold" />
          <a 
            href="https://maps.app.goo.gl/uBbh3uj7npucPTQJ6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zkth-navy dark:text-zkth-gold font-semibold hover:underline"
          >
            {t.phnomPenh}
          </a>
        </div>
      </div>
    </div>
  );
}