import { ShieldCheck, Landmark, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ServiceBrief = ({ icon: Icon, title, desc }) => {
  const { t } = useLanguage();
  
  return (
    <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-zkth-blue dark:hover:border-zkth-gold transition-all group hover:shadow-xl bg-white dark:bg-zkth-navy/50">
      <div className="w-12 h-12 bg-zkth-light dark:bg-zkth-navy rounded-lg flex items-center justify-center text-zkth-blue dark:text-zkth-gold mb-6 group-hover:bg-zkth-blue dark:group-hover:bg-zkth-gold group-hover:text-white dark:group-hover:text-zkth-navy transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-zkth-slate dark:text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <Link to="/services" className="text-zkth-blue dark:text-zkth-gold font-bold text-xs uppercase tracking-widest flex items-center">
        {t.details} <ArrowRight size={14} className="ml-1" />
      </Link>
    </div>
  );
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="bg-white dark:bg-zkth-navy">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-zkth-light dark:bg-zkth-navy/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-zkth-blue/10 dark:bg-zkth-gold/20 text-zkth-blue dark:text-zkth-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {t.officialConsultant}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-zkth-navy dark:text-white leading-[1.1] mb-6">
              {t.trustedPartner}
            </h1>
            <p className="text-lg text-zkth-slate dark:text-gray-400 mb-10 max-w-lg">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact" className="bg-zkth-blue dark:bg-zkth-gold text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-zkth-navy dark:hover:bg-zkth-gold/80 transition-all transform hover:-translate-y-1">
                {t.getConsultation}
              </Link>
              <Link to="/services" className="bg-white dark:bg-transparent text-zkth-navy dark:text-white px-8 py-4 rounded-xl font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                {t.ourServices}
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
              alt="Office" 
              className="rounded-3xl shadow-2xl z-10 relative dark:opacity-90"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-zkth-gold dark:bg-zkth-blue rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 bg-white dark:bg-zkth-navy">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t.strategicSolutions}</h2>
            <p className="text-zkth-slate dark:text-gray-400">{t.strategicDesc}</p>
          </div>
          <Link to="/services" className="text-zkth-blue dark:text-zkth-gold font-bold flex items-center hover:underline">
            {t.viewAll} <ArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceBrief 
            icon={Landmark} 
            title={t.businessReg} 
            desc={t.businessRegDesc}
          />
          <ServiceBrief 
            icon={ShieldCheck} 
            title={t.taxDecl} 
            desc={t.taxDeclDesc}
          />
          <ServiceBrief 
            icon={BarChart3} 
            title={t.accounting} 
            desc={t.accountingDesc}
          />
        </div>
      </section>
    </main>
  );
}