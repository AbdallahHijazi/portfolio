export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeInfo: Record<Locale, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
};

export const authorTranslations = {
  en: {
    title: 'Backend Developer focused on ASP.NET Core APIs and Application Security',
    location: 'Syria',
  },
  ar: {
    title: 'مطور Backend متخصص في ASP.NET Core APIs وأمن التطبيقات',
    location: 'سوريا',
  },
} as const;

export const translations = {
  en: {
    language: 'العربية',
    languageLabel: 'Switch to Arabic',
    nav: { home: 'Home', projects: 'Projects', journey: 'Experience', uses: 'Skills', contact: 'Contact' },
    ui: {
      getInTouch: 'Get In Touch',
      readArticle: 'Read Article',
      viewProject: 'View Project',
      back: 'Back',
      relatedContent: 'Related Content',
      elsewhere: 'Elsewhere',
      allProjects: 'All projects',
      allArticles: 'All articles',
      pagination: 'Pagination',
      previous: 'Previous',
      next: 'Next',
    },
  },
  ar: {
    language: 'English',
    languageLabel: 'Switch to English',
    nav: { home: 'الرئيسية', projects: 'المشاريع', journey: 'الخبرة', uses: 'المهارات', contact: 'تواصل معي' },
    ui: {
      getInTouch: 'تواصل معي',
      readArticle: 'اقرأ المقال',
      viewProject: 'عرض المشروع',
      back: 'رجوع',
      relatedContent: 'محتوى ذو صلة',
      elsewhere: 'روابط أخرى',
      allProjects: 'كل المشاريع',
      allArticles: 'كل المقالات',
      pagination: 'التنقل بين الصفحات',
      previous: 'السابق',
      next: 'التالي',
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Locale];
export const routeNames = ['home', 'projects', 'journey', 'uses', 'contact'] as const;
export type RouteName = (typeof routeNames)[number];

export const routeTranslations: Record<Locale, Record<RouteName, string>> = {
  en: { home: '', projects: 'projects', journey: 'journey', uses: 'uses', contact: 'contact' },
  ar: { home: '', projects: 'projects', journey: 'journey', uses: 'uses', contact: 'contact' },
};

export const pageTranslations = {
  en: {
    home: { title: 'Abdallah Ahmad Hijazi | Backend Developer', description: 'Backend Developer focused on ASP.NET Core APIs and Application Security.' },
    projects: { title: 'Projects - Abdallah Ahmad Hijazi', description: 'Backend and API development projects built with ASP.NET Core, REST APIs, SQL Server, Entity Framework, JWT, and RBAC.', heading: 'Projects', intro: 'Backend and API projects built with ASP.NET Core, relational databases, authentication, authorization, and application-focused workflows.' },
    journey: { title: 'Experience & Education - Abdallah Ahmad Hijazi', description: 'Professional experience and education of Abdallah Ahmad Hijazi.', heading: 'Experience & Education', intro: 'Professional experience, education, and technical skills developed through backend development and application security work.' },
    uses: { title: 'Skills - Backend, API & Security', description: 'Backend, API, database, security, architecture, DevOps, frontend, and AI integration skills of Abdallah Ahmad Hijazi.', heading: 'Skills', intro: 'Backend, API, database, security, architecture, DevOps, frontend, and AI integration skills.' },
    contact: { title: 'Contact - Abdallah Ahmad Hijazi', description: 'Contact Abdallah Ahmad Hijazi regarding backend development and API opportunities.', heading: 'Get In Touch' },
  },
  ar: {
    home: { title: 'عبدالله أحمد حجازي | مطور Backend', description: 'مطور Backend متخصص في ASP.NET Core APIs وأمن التطبيقات.' },
    projects: { title: 'المشاريع - عبدالله أحمد حجازي', description: 'مشاريع في تطوير Backend وAPI باستخدام ASP.NET Core وREST APIs وSQL Server وEntity Framework وJWT وRBAC.', heading: 'المشاريع', intro: 'مشاريع Backend وAPI مبنية باستخدام ASP.NET Core وقواعد البيانات العلائقية والمصادقة والصلاحيات.' },
    journey: { title: 'الخبرة والتعليم - عبدالله أحمد حجازي', description: 'الخبرة المهنية والتعليم لدى عبدالله أحمد حجازي.', heading: 'الخبرة والتعليم', intro: 'الخبرة المهنية والتعليم والمهارات التقنية التي تطورت من خلال العمل في Backend وأمن التطبيقات.' },
    uses: { title: 'المهارات - Backend وAPI والأمن', description: 'مهارات Backend وAPI وقواعد البيانات والأمن والمعمارية وDevOps والواجهة الأمامية وتكامل الذكاء الاصطناعي.', heading: 'المهارات', intro: 'مهارات Backend وAPI وقواعد البيانات والأمن والمعمارية وDevOps والواجهة الأمامية وتكامل الذكاء الاصطناعي.' },
    contact: { title: 'تواصل - عبدالله أحمد حجازي', description: 'تواصل مع عبدالله أحمد حجازي بشأن فرص تطوير Backend وAPI.', heading: 'تواصل معي' },
  },
} as const;
