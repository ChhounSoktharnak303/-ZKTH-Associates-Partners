import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    
    // Hero
    officialConsultant: "Official Business Consultant",
    trustedPartner: "Your Trusted Business & Tax Partner",
    heroDesc: "Navigate the Cambodian regulatory landscape with confidence. We specialize in tax compliance, company registration, and financial reporting.",
    getConsultation: "Get a Consultation",
    ourServices: "Our Services",
    
    // Home Services
    strategicSolutions: "Strategic Solutions for Cambodian Enterprises",
    strategicDesc: "We handle the complexity of local laws so you can focus on scale.",
    viewAll: "View All Services",
    businessReg: "Business Registration",
    businessRegDesc: "SME and QIP setup with CDC, MoC, and GDT. We manage the entire government workflow.",
    taxDecl: "Tax Declaration",
    taxDeclDesc: "Monthly and annual tax compliance, E-filing, and audit representation for local and international firms.",
    accounting: "Accounting & IFRS",
    accountingDesc: "Professional bookkeeping and financial statement preparation following Cambodian CIFRS standards.",
    details: "Details",
    
    // Footer
    zkth: "ZKTH",
    footerDesc: "Leading Business & Tax Consulting Firm in Cambodia. Expert solutions for sustainable growth.",
    directConnect: "Direct Connect",
    wechat: "WeChat: kterrence2006",
    viewMap: "View on Google Maps",
    ppOffice: "Phnom Penh Office",
    officeHours: "Available Mon-Fri (8:00 AM - 5:00 PM)",
    integrity: "Integrity • Growth • Compliance",
    copyright: "© 2026 ZKTH Business Consulting Co., Ltd.",
    
    // About
    aboutZKTH: "About ZKTH",
    aboutDesc: "ZKTH is a premier business consulting firm based in Phnom Penh, Cambodia. We bridge the gap between complex local regulations and international business standards.",
    ourMission: "Our Mission",
    missionDesc: "To provide transparent, high-integrity tax and legal consulting that empowers investors in the Kingdom of Cambodia.",
    ourVision: "Our Vision",
    visionDesc: "To be the most trusted partner for SME and QIP enterprises navigating the Cambodian economic landscape.",
    
    // Services Page
    expertSolutions: "Expert Solutions for Your Business",
    servicesDesc: "ZKTH provides professional consulting services tailored to the Cambodian regulatory landscape. We ensure your business is compliant, efficient, and ready to scale.",
    fullServiceReg: "Full-service company formation in Cambodia. We handle the Ministry of Commerce (MoC), General Department of Taxation (GDT), and Ministry of Labour (MLVT). We also specialize in Qualified Investment Project (QIP) applications for tax incentives.",
    legalCompliance: "100% Legal Compliance",
    mocGdt: "MoC & GDT Registration",
    qipSupport: "QIP Tax Incentive Support",
    cdcGuidance: "CDC Application Guidance",
    taxAccounting: "Tax & Accounting",
    taxAccountingDesc: "Stay compliant with Cambodian Tax Laws. We manage your monthly and annual tax declarations, E-filing, and bookkeeping based on Cambodian International Financial Reporting Standards (CIFRS).",
    monthlyAnnual: "Monthly/Annual Tax Filing",
    auditRep: "Audit Representation",
    payroll: "Payroll Management",
    financialReporting: "Financial Reporting",
    auditSupport: "Audit Support",
    auditSupportDesc: "Facing a tax audit? Our experts represent your company before the GDT to ensure fair assessments and help resolve tax disputes efficiently.",
    gdtAudit: "GDT Audit Representation",
    taxDispute: "Tax Dispute Resolution",
    complianceReviews: "Compliance Reviews",
    docPrep: "Document Preparation",
    dissolution: "Company Dissolution",
    dissolutionDesc: "Proper legal closure of your business entity. We manage the tax clearance process and deregistration with all relevant ministries to ensure zero future liability.",
    taxClearance: "Tax Clearance Certificate",
    ministryDereg: "Ministry Deregistration",
    legalExit: "Legal Exit Strategy",
    liabilityProtection: "Liability Protection",
    inquire: "Inquire for this service",
    
    // Contact
    contactZKTH: "Contact ZKTH",
    contactDesc: "We usually respond within 2 hours during business hours.",
    callUs: "Call Us",
    phone: "089 528 518",
    telegram: "Telegram",
    joinChat: "Join Chat",
    email: "Email",
    emailAddr: "info@zkth.com",
    yourName: "Your Name",
    emailAddress: "Email Address",
    howHelp: "How can we help?",
    sendInquiry: "Send Inquiry",
    phnomPenh: "Phnom Penh, Cambodia",
  },
  kh: {
    // Navbar
    home: "ទំព័រ​ដើម",
    about: "អំពី​ពួក​យើង",
    services: "សេវាកម្ម",
    contact: "ទំនាក់ទំនង",
    
    // Hero
    officialConsultant: "ទីប្រឹក្សា​អាជីវកម្ម​ផ្លូវការ",
    trustedPartner: "ដៃគូជឿទុកចិត្ត អាជីវកម្ម និងពន្ធ",
    heroDesc: "ដំណើរការទៅក្នុងផ្ទៃប្រទេសកម្ពុជា​ដោយមានទំនុកចិត្ត។ យើងមានជំនាញក្នុងការអនុលោមតាមច្បាប់ពន្ធ ការចុះបញ្ជីក្រុមហ៊ុន និងរបាយការណ៍ហិរញ្ញវត្ថុ។",
    getConsultation: "ទទួលការពិគ្រោះយោបល់",
    ourServices: "សេវាកម្មរបស់យើង",
    
    // Home Services
    strategicSolutions: "ដំណោះស្រាយយុទ្ធសាស្រ្តសម្រាប់សហគ្រាសកម្ពុជា",
    strategicDesc: "យើងគ្រប់គ្រងភាពស្មុគស្មាញនៃច្បាប់ក្នុងស្រុក ដើម្បីឲ្យអ្នកផ្តោតលើការពង្រីក។",
    viewAll: "មើលសេវាកម្មទាំងអស់",
    businessReg: "ការចុះបញ្ជីអាជីវកម្ម",
    businessRegDesc: "ការរៀបចំ SME និង QIP ជាមួយ CDC, MoC និង GDT។ យើងគ្រប់គ្រងដំណើរការរដ្ឋាភិបាលទាំងមូល។",
    taxDecl: "ការប្រកាសពន្ធ",
    taxDeclDesc: "អនុលោមតាមពន្ធប្រចាំខែ និងប្រចាំឆ្នាំ, ការបញ្ជូនតាមប្រព័ន្ធអេឡិចត្រូនិក និងតំណាងពិនិត្យសវនកម្មសម្រាប់ក្រុមហ៊ុនក្នុងស្រុក និងអន្តរជាតិ។",
    accounting: "គណនេយ្យ និង CIFRS",
    accountingDesc: "ការចុះកំណត់ត្រាគណនេយ្យ និងរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុតាមស្តង់ដារ CIFRS របស់កម្ពុជា។",
    details: "ព័ត៌មានលម្អិត",
    
    // Footer
    zkth: "ZKTH",
    footerDesc: "ក្រុមហ៊ុនប្រឹក្សា​អាជីវកម្ម និងពន្ធឈានមុខគេនៅកម្ពុជា។ ដំណោះស្រាយជំនាញសម្រាប់កំណើនប្រកបដោយចីរភាព។",
    directConnect: "ទំនាក់ទំនងផ្ទាល់",
    wechat: "WeChat: kterrence2006",
    viewMap: "មើលលើ Google Maps",
    ppOffice: "ការិយាល័យភ្នំពេញ",
    officeHours: "មានសេវា ច័ន្ទ-សុក្រ (8:00 ព្រឹក - 5:00 ល្ងាច)",
    integrity: "សុចរិត • កំណើន • អនុលោមតាមច្បាប់",
    copyright: "© 2026 ZKTH Business Consulting Co., Ltd.",
    
    // About
    aboutZKTH: "អំពី ZKTH",
    aboutDesc: "ZKTH គឺជាក្រុមហ៊ុនប្រឹក្សាអាជីវកម្មឈានមុខគេ ដែលមានមូលដ្ឋាននៅភ្នំពេញ ប្រទេសកម្ពុជា។ យើងជួយបំពេញចន្លោះរវាងច្បាប់ក្នុងស្រុកស្មុគស្មាញ និងស្តង់ដារអាជីវកម្មអន្តរជាតិ។",
    ourMission: "បេសកកម្ម",
    missionDesc: "ផ្តល់ជូនសេវាប្រឹក្សាពន្ធ និងច្បាប់ដោយសុចរិត និងថ្លៃថ្នូរ ដែលជួយឲ្យអ្នកវិនិយោគមានអំណាចនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា។",
    ourVision: "ចក្ខុវិស័យ",
    visionDesc: "ក្លាយជាដៃគូដែលមានការជឿទុកចិត្តបំផុតសម្រាប់ SME និង QIP ក្នុងការដំណើរការទៅក្នុងសេដ្ឋកិច្ចកម្ពុជា។",
    
    // Services Page
    expertSolutions: "ដំណោះស្រាយជំនាញសម្រាប់អាជីវកម្មរបស់អ្នក",
    servicesDesc: "ZKTH ផ្តល់សេវាប្រឹក្សាជំនាញដែលសមស្របនឹងផ្ទៃប្រទេសកម្ពុជា។ យើងធានាថា អាជីវកម្មរបស់អ្នកអនុលោមតាមច្បាប់ មានប្រសិទ្ធភាព និងរួចរាល់សម្រាប់ការពង្រីក។",
    fullServiceReg: "សេវាកម្មបំពេញទាំងមូលសម្រាប់ការចុះបញ្ជីក្រុមហ៊ុននៅកម្ពុជា។ យើងគ្រប់គ្រង MoC, GDT និង MLVT។ យើងមានជំនាញក្នុងការដាក់ពាក្យ QIP ដើម្បីទទួលបានអត្ថប្រយោជន៍ពន្ធ។",
    legalCompliance: "អនុលោមតាមច្បាប់ 100%",
    mocGdt: "ចុះបញ្ជី MoC & GDT",
    qipSupport: "គាំទ្រអត្ថប្រយោជន៍ពន្ធ QIP",
    cdcGuidance: "ណែនាំការដាក់ពាក្យ CDC",
    taxAccounting: "ពន្ធ និងគណនេយ្យ",
    taxAccountingDesc: "អនុលោមតាមច្បាប់ពន្ធកម្ពុជា។ យើងគ្រប់គ្រងការប្រកាសពន្ធប្រចាំខែ និងប្រចាំឆ្នាំ, ការបញ្ជូនតាមប្រព័ន្ធអេឡិចត្រូនិក និងការចុះកំណត់ត្រាគណនេយ្យតាម CIFRS។",
    monthlyAnnual: "ប្រកាសពន្ធប្រចាំខែ/ឆ្នាំ",
    auditRep: "តំណាងពិនិត្យសវនកម្ម",
    payroll: "គ្រប់គ្រងប្រាក់ខែ",
    financialReporting: "រៀបចំរបាយការណ៍ហិរញ្ញវត្ថុ",
    auditSupport: "គាំទ្រសវនកម្ម",
    auditSupportDesc: "ប្រឈមមុខនឹងសវនកម្មពន្ធ? ជំនាញរបស់យើងតំណាងក្រុមហ៊ុនអ្នកនៅ GDT ដើម្បីធានាការវាយតម្លៃយុត្តិធម៌ និងជួយដោះស្រាយវិវាទពន្ធ។",
    gdtAudit: "តំណាងសវនកម្ម GDT",
    taxDispute: "ដោះស្រាយវិវាទពន្ធ",
    complianceReviews: "ពិនិត្យអនុលោមតាមច្បាប់",
    docPrep: "រៀបចំឯកសារ",
    dissolution: "ការលុបបំបាត់ក្រុមហ៊ុន",
    dissolutionDesc: "ការបិទអាជីវកម្មតាមច្បាប់។ យើងគ្រប់គ្រងដំណើរការបញ្ចប់ពន្ធ និងការដកឈ្មោះចេញពីក្រសួងទាំងអស់ ដើម្បីធានាថាមិនមានបំណុលអនាគត។",
    taxClearance: "វិញ្ញាបនប័ត្របញ្ចប់ពន្ធ",
    ministryDereg: "ដកឈ្មោះចេញពីក្រសួង",
    legalExit: "យុទ្ធសាស្រ្តចេញតាមច្បាប់",
    liabilityProtection: "ការការពារទំនួលខុសត្រូវ",
    inquire: "ស្នើសុំសេវាកម្មនេះ",
    
    // Contact
    contactZKTH: "ទំនាក់ទំនង ZKTH",
    contactDesc: "យើងភ្លាមៗឆ្លើយតបក្នុងរយៈពេល 2 ម៉ោង នៅពេលធ្វើការ។",
    callUs: "ទូរស័ព្ទ",
    phone: "089 528 518",
    telegram: "Telegram",
    joinChat: "ចូលក្រុមជជែក",
    email: "អ៊ីមែល",
    emailAddr: "info@zkth.com",
    yourName: "ឈ្មោះអ្នក",
    emailAddress: "អាសយដ្ឋានអ៊ីមែល",
    howHelp: "តើយើងអាចជួយអ្នកដូចម្តេច?",
    sendInquiry: "ផ្ញើសំណើ",
    phnomPenh: "ភ្នំពេញ, កម្ពុជា",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kh' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}