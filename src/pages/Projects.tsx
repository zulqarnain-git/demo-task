import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Home, Users, Calendar, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: "One North",
      nameAr: "وان نورث",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "Mixed-use",
      typeAr: "متعدد الاستخدامات",
      status: "Available",
      statusAr: "متاح",
      description: "One North is Dar Wa Emaar's latest mixed-use development located in the heart of North Riyadh close to major highways, business districts, universities and residential areas.",
      descriptionAr: "وان نورث هو أحدث تطوير متعدد الاستخدامات من دار وإعمار يقع في قلب شمال الرياض بالقرب من الطرق الرئيسية والمناطق التجارية والجامعات والمناطق السكنية.",
      amenities: ["Retail Spaces", "Restaurants", "Parks", "Business Centers"],
      amenitiesAr: ["محلات تجارية", "مطاعم", "حدائق", "مراكز أعمال"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      units: 450,
      area: "2.5M sqm",
      areaAr: "2.5 مليون متر مربع",
      deliveryDate: "Q4 2025",
      deliveryDateAr: "الربع الأخير 2025"
    },
    {
      id: 2,
      name: "Tala Al-Khazam",
      nameAr: "تلة الخزام",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "Residential",
      typeAr: "سكني",
      status: "Under Construction",
      statusAr: "تحت الإنشاء",
      description: "Upgrading the level of residential units with modern architecture and premium amenities in a prime location.",
      descriptionAr: "رفع مستوى الوحدات السكنية بالعمارة الحديثة والمرافق المميزة في موقع مميز.",
      amenities: ["Swimming Pool", "Gym", "Playground", "Security"],
      amenitiesAr: ["حمام سباحة", "صالة رياضية", "ملعب أطفال", "أمن"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      units: 320,
      area: "1.2M sqm",
      areaAr: "1.2 مليون متر مربع",
      deliveryDate: "Q2 2026",
      deliveryDateAr: "الربع الثاني 2026"
    },
    {
      id: 3,
      name: "Central Plaza",
      nameAr: "السنترال بلازا",
      location: "Jeddah",
      locationAr: "جدة",
      type: "Commercial",
      typeAr: "تجاري",
      status: "Available",
      statusAr: "متاح",
      description: "Prime commercial spaces in the heart of Jeddah's business district with state-of-the-art facilities.",
      descriptionAr: "مساحات تجارية مميزة في قلب منطقة الأعمال في جدة مع مرافق حديثة.",
      amenities: ["Meeting Rooms", "Parking", "Cafeteria", "High-speed Internet"],
      amenitiesAr: ["قاعات اجتماعات", "مواقف", "كافتيريا", "إنترنت عالي السرعة"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
      units: 180,
      area: "800K sqm",
      areaAr: "800 ألف متر مربع",
      deliveryDate: "Q1 2025",
      deliveryDateAr: "الربع الأول 2025"
    },
    {
      id: 4,
      name: "Green Valley",
      nameAr: "الوادي الأخضر",
      location: "Dammam",
      locationAr: "الدمام",
      type: "Residential",
      typeAr: "سكني",
      status: "Planning",
      statusAr: "مرحلة التخطيط",
      description: "An eco-friendly residential community with sustainable living solutions and green spaces.",
      descriptionAr: "مجتمع سكني صديق للبيئة مع حلول معيشة مستدامة ومساحات خضراء.",
      amenities: ["Solar Panels", "Water Recycling", "Organic Gardens", "Electric Car Charging"],
      amenitiesAr: ["ألواح شمسية", "إعادة تدوير المياه", "حدائق عضوية", "شحن سيارات كهربائية"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3",
      units: 280,
      area: "1.8M sqm",
      areaAr: "1.8 مليون متر مربع",
      deliveryDate: "Q3 2027",
      deliveryDateAr: "الربع الثالث 2027"
    },
    {
      id: 5,
      name: "Business Hub",
      nameAr: "مركز الأعمال",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "Commercial",
      typeAr: "تجاري",
      status: "Available",
      statusAr: "متاح",
      description: "A modern business complex offering flexible office spaces and premium business services.",
      descriptionAr: "مجمع أعمال حديث يوفر مساحات مكتبية مرنة وخدمات أعمال مميزة.",
      amenities: ["Conference Centers", "Co-working Spaces", "24/7 Security", "Valet Parking"],
      amenitiesAr: ["مراكز مؤتمرات", "مساحات عمل مشتركة", "أمن 24/7", "مواقف مخدومة"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3",
      units: 150,
      area: "900K sqm",
      areaAr: "900 ألف متر مربع",
      deliveryDate: "Available Now",
      deliveryDateAr: "متاح الآن"
    },
    {
      id: 6,
      name: "Coastal Residences",
      nameAr: "المساكن الساحلية",
      location: "Jeddah",
      locationAr: "جدة",
      type: "Residential",
      typeAr: "سكني",
      status: "Under Construction",
      statusAr: "تحت الإنشاء",
      description: "Luxury waterfront residences with stunning Red Sea views and private beach access.",
      descriptionAr: "مساكن فاخرة على الواجهة المائية مع إطلالات خلابة على البحر الأحمر ووصول إلى شاطئ خاص.",
      amenities: ["Private Beach", "Marina", "Spa & Wellness", "Infinity Pool"],
      amenitiesAr: ["شاطئ خاص", "مارينا", "سبا وعافية", "مسبح لا متناهي"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      units: 220,
      area: "1.5M sqm",
      areaAr: "1.5 مليون متر مربع",
      deliveryDate: "Q4 2026",
      deliveryDateAr: "الربع الأخير 2026"
    },
    {
      id: 2,
      name: "Saraya Olaya",
      nameAr: "سرايا العليا",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "Residential",
      typeAr: "سكني",
      status: "Available",
      statusAr: "متاح",
      description: "The project represents a synthesis of the expertise of Dar and Emaar team, which always keeps in mind the satisfaction of people from all walks of life who have different needs and wants.",
      descriptionAr: "يمثل المشروع تركيبة من خبرة فريق دار وإعمار، والذي يضع دائماً في اعتباره رضا الناس من جميع مناحي الحياة الذين لديهم احتياجات ورغبات مختلفة.",
      amenities: ["Swimming Pool", "Gym", "Coffee Shop", "Multi-purpose Room"],
      amenitiesAr: ["حمام سباحة", "صالة رياضية", "مقهى", "قاعة متعددة الأغراض"],
      image: "/lovable-uploads/fe9a3bf1-cd0f-46ac-82f7-8b21b2b39a03.png",
      units: 324,
      area: "935 sqm",
      areaAr: "935 متر مربع",
      deliveryDate: "Ready",
      deliveryDateAr: "جاهز"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'residential' && project.type === 'Residential') ||
      (selectedFilter === 'commercial' && project.type === 'Commercial') ||
      (selectedFilter === 'mixed' && project.type === 'Mixed-use');
    
    const searchName = language === 'ar' ? project.nameAr : project.name;
    const searchLocation = language === 'ar' ? project.locationAr : project.location;
    const matchesSearch = searchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchLocation.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('projects.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('all')}
                  className="whitespace-nowrap"
                >
                  {t('projects.all')}
                </Button>
                <Button
                  variant={selectedFilter === 'residential' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('residential')}
                  className="whitespace-nowrap"
                >
                  {t('projects.residential')}
                </Button>
                <Button
                  variant={selectedFilter === 'commercial' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('commercial')}
                  className="whitespace-nowrap"
                >
                  {t('projects.commercial')}
                </Button>
                <Button
                  variant={selectedFilter === 'mixed' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('mixed')}
                  className="whitespace-nowrap"
                >
                  {t('projects.mixed')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={language === 'ar' ? project.nameAr : project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Available' ? 'bg-green-500' :
                      project.status === 'Under Construction' ? 'bg-orange-500' : 'bg-blue-500'
                    } text-white`}
                  >
                    {language === 'ar' ? project.statusAr : project.status}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === 'ar' ? project.nameAr : project.name}
                    </h3>
                    <Badge variant="outline" className="text-sm">
                      {language === 'ar' ? project.typeAr : project.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{language === 'ar' ? project.locationAr : project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {language === 'ar' ? project.descriptionAr : project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{project.units} {t('projects.units')}</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{language === 'ar' ? project.areaAr : project.area}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{language === 'ar' ? project.deliveryDateAr : project.deliveryDate}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('projects.amenities')}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {(language === 'ar' ? project.amenitiesAr : project.amenities).slice(0, 4).map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/projects/${project.id}`}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      {t('projects.viewDetails')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
