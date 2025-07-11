
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Home, Users, Calendar, Eye, Play, VolumeX, Volume2, Maximize, ArrowLeft, Phone, Mail, Share2, Heart, Download } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [isMuted, setIsMuted] = useState(true);

  // Mock project data - in real app, this would come from API
  const project = {
    id: 1,
    name: "Saraya Olaya",
    nameAr: "سرايا العليا",
    location: "Olaya, Riyadh",
    locationAr: "العليا، الرياض",
    type: "Residential",
    typeAr: "سكني",
    status: "Available",
    statusAr: "متاح",
    description: "The project represents a synthesis of the expertise of Dar and Emaar team, which always keeps in mind the satisfaction of people from all walks of life who have different needs and wants. Saraya Olaya Project is considered a real estate landmark with complete services and facilities.",
    descriptionAr: "يمثل المشروع تركيبة من خبرة فريق دار وإعمار، والذي يضع دائماً في اعتباره رضا الناس من جميع مناحي الحياة الذين لديهم احتياجات ورغبات مختلفة. يعتبر مشروع سرايا العليا معلماً عقارياً مع خدمات ومرافق كاملة.",
    price: "Starting from SAR 850,000",
    priceAr: "تبدأ من 850,000 ريال سعودي",
    area: "324 units",
    areaAr: "324 وحدة",
    units: 324,
    deliveryDate: "Ready units",
    deliveryDateAr: "وحدات جاهزة",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
    amenities: [
      { name: "Swimming Pools", nameAr: "حمامات السباحة", icon: "🏊" },
      { name: "Gym & Fitness", nameAr: "صالة رياضية ولياقة", icon: "💪" },
      { name: "Coffee Shop", nameAr: "مقهى", icon: "☕" },
      { name: "Multi-purpose Room", nameAr: "قاعة متعددة الأغراض", icon: "🏢" },
      { name: "Parking", nameAr: "مواقف السيارات", icon: "🅿️" },
      { name: "Kids Play Area", nameAr: "منطقة ألعاب الأطفال", icon: "🎠" },
      { name: "24/7 Security", nameAr: "أمن 24/7", icon: "🔒" },
      { name: "Landscaped Gardens", nameAr: "حدائق منسقة", icon: "🌳" },
    ],
    floorPlans: [
      { type: "Fayrouz", typeAr: "فيروز", area: "265 M²", price: "1.2M", description: "Spacious 3-bedroom unit with modern amenities" },
      { type: "Lulu", typeAr: "لولو", area: "235 M²", price: "1.1M", description: "Elegant 2-bedroom unit with balcony" },
      { type: "Dana", typeAr: "دانا", area: "935 M²", price: "2.8M", description: "Luxury penthouse with panoramic views" },
      { type: "Agate", typeAr: "عقيق", area: "215 M²", price: "980K", description: "Cozy 2-bedroom unit perfect for small families" },
    ],
    paymentPlan: [
      { stage: "Booking", stageAr: "الحجز", percentage: "5%", amount: "42,500 SAR" },
      { stage: "Down Payment", stageAr: "الدفعة المقدمة", percentage: "15%", amount: "127,500 SAR" },
      { stage: "During Construction", stageAr: "أثناء البناء", percentage: "60%", amount: "510,000 SAR" },
      { stage: "On Handover", stageAr: "عند التسليم", percentage: "20%", amount: "170,000 SAR" },
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', labelAr: 'نظرة عامة' },
    { id: 'amenities', label: 'Amenities', labelAr: 'المرافق' },
    { id: 'floorplans', label: 'Floor Plans', labelAr: 'المخططات' },
    { id: 'payment', label: 'Payment', labelAr: 'الدفع' },
    { id: 'location', label: 'Location', labelAr: 'الموقع' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={language === 'ar' ? project.nameAr : project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Video Controls */}
        <div className="absolute top-24 right-4 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="bg-white/90 backdrop-blur-sm"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-white/90 backdrop-blur-sm"
          >
            <Maximize className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {language === 'ar' ? project.nameAr : project.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              {language === 'ar' ? project.locationAr : project.location}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={`/projects/${id}/3d-view`}>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <Eye className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'عرض ثلاثي الأبعاد' : '3D View'}
                </Button>
              </Link>
              <Link to={`/projects/${id}/vr-view`}>
                <Button variant="outline" size="lg" className="bg-white/90 backdrop-blur-sm">
                  <Play className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'جولة افتراضية' : 'Virtual Tour'}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link to="/projects" className="absolute top-24 left-4">
          <Button variant="secondary" className="bg-white/90 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة' : 'Back'}
          </Button>
        </Link>
      </section>

      {/* Project Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">{project.units}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'وحدة' : 'Units'}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">{language === 'ar' ? project.areaAr : project.area}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'المساحة الإجمالية' : 'Total Area'}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">{language === 'ar' ? project.deliveryDateAr : project.deliveryDate}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'التسليم' : 'Delivery'}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">{language === 'ar' ? project.priceAr : project.price}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'السعر' : 'Price'}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {language === 'ar' ? tab.labelAr : tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">{language === 'ar' ? 'حول المشروع' : 'About Project'}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {language === 'ar' ? project.descriptionAr : project.description}
                  </p>
                  <div className="flex gap-4">
                    <Badge className="bg-green-100 text-green-800">{language === 'ar' ? project.statusAr : project.status}</Badge>
                    <Badge variant="outline">{language === 'ar' ? project.typeAr : project.type}</Badge>
                  </div>
                </div>
                <div>
                  <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                    <Building className="w-32 h-32 text-orange-500 opacity-50" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.amenities.map((amenity, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{amenity.icon}</div>
                      <h4 className="font-semibold text-gray-900">
                        {language === 'ar' ? amenity.nameAr : amenity.name}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'floorplans' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.floorPlans.map((plan, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                      <Building className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2">{language === 'ar' ? plan.typeAr : plan.type}</h4>
                      <p className="text-gray-600 mb-2">{plan.area}</p>
                      <p className="text-2xl font-bold text-orange-600 mb-4">SAR {plan.price}</p>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'تحميل المخطط' : 'Download Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8">{language === 'ar' ? 'خطة الدفع' : 'Payment Plan'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.paymentPlan.map((stage, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-orange-600 mb-2">{stage.percentage}</div>
                        <h4 className="text-lg font-semibold mb-2">{language === 'ar' ? stage.stageAr : stage.stage}</h4>
                        <p className="text-gray-600">{stage.amount}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">{language === 'ar' ? 'الموقع والنقل' : 'Location & Transport'}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">{language === 'ar' ? 'العنوان' : 'Address'}</h4>
                        <p className="text-gray-600">{language === 'ar' ? project.locationAr : project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">{language === 'ar' ? 'المعالم القريبة' : 'Nearby Landmarks'}</h4>
                        <p className="text-gray-600">
                          {language === 'ar' 
                            ? 'مول الرياض، جامعة الإمام، مستشفى الملك فهد' 
                            : 'Riyadh Mall, Imam University, King Fahd Hospital'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">{language === 'ar' ? 'خريطة تفاعلية' : 'Interactive Map'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Phone className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'طلب معلومات' : 'Request Info'}
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'مشاركة' : 'Share'}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'إضافة للمفضلة' : 'Add to Favorites'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
