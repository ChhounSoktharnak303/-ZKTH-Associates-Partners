import React from 'react';
import { ShieldCheck, FileText, Landmark, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ServiceSection = ({ title, icon: Icon, description, benefits, inquire }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-zkth-navy/80 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-zkth-blue/5 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="w-16 h-16 bg-blue-50 dark:bg-zkth-gold/20 text-blue-600 dark:text-zkth-gold rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-zkth-gold group-hover:text-white dark:group-hover:text-zkth-navy transition-colors">
            <Icon size={32} />
          </div>
          <h3 className="text-2xl font-bold text-zkth-navy dark:text-white leading-tight">{title}</h3>
        </div>
        <div className="md:w-3/4">
          <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-slate-700 dark:text-gray-200 font-medium">
                <CheckCircle2 size={18} className="text-green-500 dark:text-zkth-gold mr-2 shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center font-bold text-blue-600 dark:text-zkth-gold hover:text-blue-700 dark:hover:text-zkth-gold/80"
          >
            {inquire} <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useLanguage();

  const allServices = [
    {
      title: t.businessReg,
      icon: Landmark,
      description: t.fullServiceReg,
      benefits: [t.legalCompliance, t.mocGdt, t.qipSupport, t.cdcGuidance],
      inquire: t.inquire
    },
    {
      title: t.taxAccounting,
      icon: FileText,
      description: t.taxAccountingDesc,
      benefits: [t.monthlyAnnual, t.auditRep, t.payroll, t.financialReporting],
      inquire: t.inquire
    },
    {
      title: t.auditSupport,
      icon: ShieldCheck,
      description: t.auditSupportDesc,
      benefits: [t.gdtAudit, t.taxDispute, t.complianceReviews, t.docPrep],
      inquire: t.inquire
    },
    {
      title: t.dissolution,
      icon: XCircle,
      description: t.dissolutionDesc,
      benefits: [t.taxClearance, t.ministryDereg, t.legalExit, t.liabilityProtection],
      inquire: t.inquire
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-zkth-navy min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-zkth-navy dark:text-white mb-6">
            {t.expertSolutions}
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            {t.servicesDesc}
          </p>
        </div>

        <div className="space-y-8">
          {allServices.map((service, idx) => (
            <ServiceSection key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}