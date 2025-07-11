
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Home, Zap, Wifi, Car, Shield, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const Communities = () => {
  const { t, language } = useLanguage();

  const communities = [
    {
      id: 1,
      name: "One North Community",
      nameAr: "مجتمع وان نورث",
      location: "North Riyadh",
      locationAr: "شمال الرياض",
      type: "Mixed-use Community",
      typeAr: "مجتمع متعدد الاستخدامات",
      description: "A vibrant mixed-use community offering the perfect blend of residential, commercial, and recreational facilities in the heart of North Riyadh.",
      descriptionAr: "مجتمع متعدد الاستخدامات نابض بالحياة يوفر مزيجاً مثالياً من المرافق السكنية والتجارية والترفيهية في قلب شمال الرياض.",
      residents: 2500,
      units: 450,
      amenities: [
        { name: "Shopping Centers", nameAr: "مراكز التسوق", icon: "🛍️" },
        { name: "Parks & Gardens", nameAr: "حدائق ومتنزهات", icon: "🌳" },
        { name: "Schools", nameAr: "مدارس", icon: "🏫" },
        { name: "Healthcare", nameAr: "رعاية صحية", icon: "🏥" },
        { name: "Sports Facilities", nameAr: "مرافق رياضية", icon: "⚽" },
        { name: "Community Centers", nameAr: "مراكز مجتمعية", icon: "🏛️" }
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      connectivity: ["Highway Access", "Public Transport", "Metro Station"],
      connectivityAr: ["الوصول للطريق السريع", "النقل العام", "محطة المترو"]
    },
    {
      id: 2,
      name: "Saraya Olaya Community", 
      nameAr: "مجتمع سرايا العليا",
      location: "Olaya, Riyadh",
      locationAr: "العليا، الرياض", 
      type: "Residential Community",
      typeAr: "مجتمع سكني",
      description: "An exclusive residential community designed for modern living with world-class amenities and facilities.",
      descriptionAr: "مجتمع سكني حصري مصمم للعيش العصري مع مرافق وخدمات عالمية المستوى.",
      residents: 1200,
      units: 324,
      amenities: [
        { name: "Swimming Pools", nameAr: "حمامات السباحة", icon: "🏊" },
        { name: "Fitness Centers", nameAr: "مراكز اللياقة", icon: "💪" },
        { name: "Coffee Shops", nameAr: "المقاهي", icon: "☕" },
        { name: "Multi-purpose Rooms", nameAr: "قاعات متعددة الأغراض", icon: "🏢" },
        { name: "Children's Play Areas", nameAr: "مناطق لعب الأطفال", icon: "🎠" },
        { name: "Security Services", nameAr: "خدمات الأمن", icon: "🔒" }
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
      connectivity: ["Business District", "Shopping Malls", "Restaurants"],
      connectivityAr: ["منطقة الأعمال", "مراكز التسوق", "المطاعم"]
    },
    {
      id: 3,
      name: "Green Valley Community",
      nameAr: "مجتمع الوادي الأخضر",
      location: "East Riyadh",
      locationAr: "شرق الرياض",
      type: "Eco-Friendly Community", 
      typeAr: "مجتمع صديق للبيئة",
      description: "A sustainable community focused on green living with solar energy, water recycling, and organic gardens.",
      descriptionAr: "مجتمع مستدام يركز على العيش الأخضر مع الطاقة الشمسية وإعادة تدوير المياه والحدائق العضوية.",
      residents: 1800,
      units: 280,
      amenities: [
        { name: "Solar Energy", nameAr: "الطاقة الشمسية", icon: "☀️" },
        { name: "Organic Gardens", nameAr: "حدائق عضوية", icon: "🌱" },
        { name: "Water Recycling", nameAr: "إعادة تدوير المياه", icon: "💧" },
        { name: "Electric Car Charging", nameAr: "شحن السيارات الكهربائية", icon: "🔋" },
        { name: "Bike Paths", nameAr: "مسارات الدراجات", icon: "🚴" },
        { name: "Waste Management", nameAr: "إدارة النفايات", icon: "♻️" }
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3",
      connectivity: ["Nature Reserves", "Cycling Routes", "Hiking Trails"],
      connectivityAr: ["المحميات الطبيعية", "مسارات الدراجات", "مسارات المشي"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مجتمعاتنا' : 'Our Communities'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف مجتمعاتنا المميزة المصممة للحياة العصرية'
                : 'Discover our premium communities designed for modern living'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {communities.map((community, index) => (
              <Card key={community.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="relative h-80 lg:h-auto lg:w-1/2 overflow-hidden">
                    <img
                      src={community.image}
                      alt={language === 'ar' ? community.nameAr : community.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      {language === 'ar' ? community.typeAr : community.type}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8 lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {language === 'ar' ? community.nameAr : community.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{language === 'ar' ? community.locationAr : community.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {language === 'ar' ? community.descriptionAr : community.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{community.residents.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{language === 'ar' ? 'سكان' : 'Residents'}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{community.units}</div>
                          <div className="text-sm text-gray-600">{language === 'ar' ? 'وحدة' : 'Units'}</div>
                        </div>
                      </div>
                      
                      {/* Amenities Preview */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{language === 'ar' ? 'المرافق' : 'Amenities'}</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {community.amenities.slice(0, 6).map((amenity, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl mb-1">{amenity.icon}</div>
                              <div className="text-xs text-gray-600">
                                {language === 'ar' ? amenity.nameAr : amenity.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/communities/${community.id}`}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                        {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
