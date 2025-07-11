
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.communities': 'Communities', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero Section
    'hero.title': 'Discover Your',
    'hero.titleHighlight': 'Dream Property',
    'hero.subtitle': 'Explore premium real estate developments across Saudi Arabia through our interactive digital atlas',
    'hero.searchPlaceholder': 'Search by location, project name, or amenities...',
    'hero.exploreMap': 'Explore Interactive Map',
    'hero.viewProjects': 'View All Projects',
    'hero.statsProjects': 'Projects',
    'hero.statsCities': 'Cities',
    'hero.statsUnits': 'Units',
    
    // Featured Properties
    'featured.title': 'Featured Projects',
    'featured.subtitle': 'Discover our premium developments that are reshaping Saudi Arabia\'s real estate landscape',
    'featured.learnMore': 'Learn More',
    'featured.viewAll': 'View All Projects',
    'featured.amenities': 'Amenities & Features',
    'featured.available': 'Available',
    'featured.construction': 'Under Construction',
    
    // Interactive Map
    'map.title': 'Interactive Project Map',
    'map.subtitle': 'Explore our developments across major cities in Saudi Arabia through our interactive digital atlas',
    'map.cities': 'Cities',
    'map.filter': 'Filter Projects',
    'map.3dView': '3D View',
    'map.clickMarkers': 'Click on markers to explore detailed project information',
    'map.open3D': 'Open Full 3D Map Experience',
    'map.available': 'Available',
    'map.construction': 'Under Construction',
    'map.planning': 'Planning Phase',
    'map.status': 'Project Status',
    'map.viewDetails': 'View Details',
    
    // Projects Page
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Discover our comprehensive portfolio of premium real estate developments across Saudi Arabia',
    'projects.search': 'Search projects...',
    'projects.all': 'All Projects',
    'projects.residential': 'Residential',
    'projects.commercial': 'Commercial',
    'projects.mixed': 'Mixed-use',
    'projects.viewDetails': 'View Details',
    'projects.units': 'Units',
    'projects.area': 'Area',
    'projects.delivery': 'Delivery',
    'projects.amenities': 'Key Amenities',
    
    // Project Details
    'details.overview': 'Overview',
    'details.amenities': 'Amenities',
    'details.floorplans': 'Floor Plans',
    'details.payment': 'Payment',
    'details.location': 'Location',
    'details.about': 'About the Project',
    'details.masterPlan': 'Master Plan',
    'details.downloadPlan': 'Download Plan',
    'details.paymentPlan': 'Payment Plan',
    'details.locationTransport': 'Location & Transportation',
    'details.address': 'Address',
    'details.landmarks': 'Nearby Landmarks',
    'details.bookConsultation': 'Book Consultation',
    'details.requestInfo': 'Request Info',
    'details.share': 'Share',
    'details.addFavorites': 'Add to Favorites',
    'details.back': 'Back',
    'details.virtualTour': 'Virtual Tour',
    'details.totalArea': 'Total Area',
    'details.price': 'Price',
    
    // Communities Page
    'communities.title': 'Communities',
    'communities.subtitle': 'Explore vibrant communities designed for modern living',
    'communities.discover': 'Discover Community',
    'communities.lifestyle': 'Lifestyle',
    'communities.facilities': 'Facilities',
    'communities.connectivity': 'Connectivity',
    
    // About Page
    'about.title': 'About Dar Wa Emaar',
    'about.subtitle': 'Leading the transformation of Saudi Arabia\'s real estate landscape',
    'about.vision': 'Our Vision',
    'about.mission': 'Our Mission',
    'about.values': 'Our Values',
    'about.story': 'Our Story',
    'about.team': 'Our Team',
    'about.achievements': 'Achievements',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.satisfied': 'Satisfied Clients',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team of real estate experts',
    'contact.getInTouch': 'Get In Touch',
    'contact.visitOffice': 'Visit Our Office',
    'contact.callUs': 'Call Us',
    'contact.emailUs': 'Email Us',
    'contact.followUs': 'Follow Us',
    'contact.sendMessage': 'Send Message',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.office': 'Head Office',
    'contact.hours': 'Working Hours',
    
    // Countries/Cities
    'saudi.arabia': 'Saudi Arabia',
    'city.riyadh': 'Riyadh',
    'city.jeddah': 'Jeddah', 
    'city.dammam': 'Dammam',
    'city.mecca': 'Mecca',
    'city.medina': 'Medina',
    'city.khobar': 'Al Khobar',
    
    // Project Types
    'type.residential': 'Residential',
    'type.commercial': 'Commercial',
    'type.mixed': 'Mixed-use',
    
    // Common
    'common.close': 'Close',
    'common.more': 'More',
    'common.less': 'Less',
    'common.loading': 'Loading...',
    'common.readMore': 'Read More',
    'common.showLess': 'Show Less',
  },
  ar: {
    // Navigation
    'nav.projects': 'المشاريع',
    'nav.communities': 'المجتمعات',
    'nav.about': 'حولنا',
    'nav.contact': 'تواصل معنا',
    'nav.whatsapp': 'واتساب',
    
    // Hero Section
    'hero.title': 'اكتشف',
    'hero.titleHighlight': 'عقارك المثالي',
    'hero.subtitle': 'استكشف التطويرات العقارية المميزة في جميع أنحاء المملكة العربية السعودية من خلال أطلسنا الرقمي التفاعلي',
    'hero.searchPlaceholder': 'البحث بالموقع أو اسم المشروع أو المرافق...',
    'hero.exploreMap': 'استكشف الخريطة التفاعلية',
    'hero.viewProjects': 'عرض جميع المشاريع',
    'hero.statsProjects': 'مشروع',
    'hero.statsCities': 'مدن',
    'hero.statsUnits': 'وحدة',
    
    // Featured Properties
    'featured.title': 'المشاريع المميزة',
    'featured.subtitle': 'اكتشف تطويراتنا المميزة التي تعيد تشكيل المشهد العقاري في المملكة العربية السعودية',
    'featured.learnMore': 'اعرف المزيد',
    'featured.viewAll': 'عرض جميع المشاريع',
    'featured.amenities': 'المرافق والخدمات',
    'featured.available': 'متاح',
    'featured.construction': 'تحت الإنشاء',
    
    // Interactive Map
    'map.title': 'خريطة المشاريع التفاعلية',
    'map.subtitle': 'استكشف تطويراتنا في المدن الرئيسية في المملكة العربية السعودية من خلال أطلسنا الرقمي التفاعلي',
    'map.cities': 'المدن',
    'map.filter': 'تصفية المشاريع',
    'map.3dView': 'العرض ثلاثي الأبعاد',
    'map.clickMarkers': 'انقر على العلامات لاستكشاف معلومات المشروع التفصيلية',
    'map.open3D': 'فتح تجربة الخريطة ثلاثية الأبعاد الكاملة',
    'map.available': 'متاح',
    'map.construction': 'تحت الإنشاء',
    'map.planning': 'مرحلة التخطيط',
    'map.status': 'حالة المشروع',
    'map.viewDetails': 'عرض التفاصيل',
    
    // Projects Page
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'اكتشف محفظتنا الشاملة من التطويرات العقارية المميزة في جميع أنحاء المملكة العربية السعودية',
    'projects.search': 'البحث في المشاريع...',
    'projects.all': 'جميع المشاريع',
    'projects.residential': 'سكني',
    'projects.commercial': 'تجاري',
    'projects.mixed': 'متعدد الاستخدامات',
    'projects.viewDetails': 'عرض التفاصيل',
    'projects.units': 'وحدة',
    'projects.area': 'المساحة',
    'projects.delivery': 'التسليم',
    'projects.amenities': 'المرافق الرئيسية',
    
    // Project Details
    'details.overview': 'نظرة عامة',
    'details.amenities': 'المرافق',
    'details.floorplans': 'المخططات',
    'details.payment': 'الدفع',
    'details.location': 'الموقع',
    'details.about': 'حول المشروع',
    'details.masterPlan': 'المخطط الرئيسي',
    'details.downloadPlan': 'تحميل المخطط',
    'details.paymentPlan': 'خطة الدفع',
    'details.locationTransport': 'الموقع والمواصلات',
    'details.address': 'العنوان',
    'details.landmarks': 'المعالم القريبة',
    'details.bookConsultation': 'احجز استشارة',
    'details.requestInfo': 'طلب معلومات',
    'details.share': 'مشاركة',
    'details.addFavorites': 'إضافة للمفضلة',
    'details.back': 'العودة',
    'details.virtualTour': 'جولة افتراضية',
    'details.totalArea': 'المساحة الإجمالية',
    'details.price': 'السعر',
    
    // Communities Page
    'communities.title': 'المجتمعات',
    'communities.subtitle': 'استكشف المجتمعات النابضة بالحياة المصممة للعيش العصري',
    'communities.discover': 'اكتشف المجتمع',
    'communities.lifestyle': 'نمط الحياة',
    'communities.facilities': 'المرافق',
    'communities.connectivity': 'الاتصال',
    
    // About Page
    'about.title': 'حول دار وإعمار',
    'about.subtitle': 'نقود تحول المشهد العقاري في المملكة العربية السعودية',
    'about.vision': 'رؤيتنا',
    'about.mission': 'مهمتنا',
    'about.values': 'قيمنا',
    'about.story': 'قصتنا',
    'about.team': 'فريقنا',
    'about.achievements': 'الإنجازات',
    'about.experience': 'سنوات من الخبرة',
    'about.projects': 'مشاريع مكتملة',
    'about.satisfied': 'عملاء راضون',
    
    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تواصل مع فريقنا من خبراء العقارات',
    'contact.getInTouch': 'تواصل معنا',
    'contact.visitOffice': 'زر مكتبنا',
    'contact.callUs': 'اتصل بنا',
    'contact.emailUs': 'راسلنا',
    'contact.followUs': 'تابعنا',
    'contact.sendMessage': 'إرسال رسالة',
    'contact.fullName': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.office': 'المكتب الرئيسي',
    'contact.hours': 'ساعات العمل',
    
    // Countries/Cities
    'saudi.arabia': 'المملكة العربية السعودية',
    'city.riyadh': 'الرياض',
    'city.jeddah': 'جدة',
    'city.dammam': 'الدمام',
    'city.mecca': 'مكة المكرمة',
    'city.medina': 'المدينة المنورة',
    'city.khobar': 'الخبر',
    
    // Project Types
    'type.residential': 'سكني',
    'type.commercial': 'تجاري',
    'type.mixed': 'متعدد الاستخدامات',
    
    // Common
    'common.close': 'إغلاق',
    'common.more': 'المزيد',
    'common.less': 'أقل',
    'common.loading': 'جاري التحميل...',
    'common.readMore': 'اقرأ المزيد',
    'common.showLess': 'عرض أقل',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  const isRTL = language === 'ar';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
