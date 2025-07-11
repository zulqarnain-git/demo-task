
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Award, Target, Heart, Shield, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const stats = [
    { value: "25+", label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
    { value: "50+", label: language === 'ar' ? 'مشروع' : 'Projects' },
    { value: "10K+", label: language === 'ar' ? 'عميل راضي' : 'Happy Clients' },
    { value: "15", label: language === 'ar' ? 'مدن' : 'Cities' }
  ];

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar' 
        ? 'نسعى للتميز في كل مشروع نقوم به' 
        : 'We strive for excellence in every project'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'التركيز على العملاء' : 'Customer Focus',
      description: language === 'ar' 
        ? 'عملاؤنا هم في قلب كل ما نقوم به'
        : 'Our customers are at the heart of everything we do'
    },
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar' 
        ? 'نتبنى الابتكار في كل مشاريعنا'
        : 'We embrace innovation in all our projects'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'الجودة' : 'Quality',
      description: language === 'ar' 
        ? 'نلتزم بأعلى معايير الجودة'
        : 'We maintain the highest quality standards'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'عن دار وإعمار' : 'About Dar Wa Emaar'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نحن شركة رائدة في التطوير العقاري في المملكة العربية السعودية، نبني أحلام المستقبل'
              : 'We are a leading real estate development company in Saudi Arabia, building dreams for the future'
            }
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {language === 'ar' 
                  ? 'تأسست دار وإعمار برؤية واضحة لتحويل المشهد العقاري في المملكة العربية السعودية. منذ بدايتنا المتواضعة قبل أكثر من 25 عاماً، نمت لتصبح واحدة من أبرز شركات التطوير العقاري في المنطقة.'
                  : 'Dar Wa Emaar was founded with a clear vision to transform the real estate landscape of Saudi Arabia. From our humble beginnings over 25 years ago, we have grown to become one of the leading real estate development companies in the region.'
                }
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {language === 'ar'
                  ? 'نحن ملتزمون بخلق مجتمعات تعكس التطلعات الحديثة للحياة السعودية، مع الحفاظ على قيمنا الثقافية الأصيلة.'
                  : 'We are committed to creating communities that reflect the modern aspirations of Saudi living, while preserving our authentic cultural values.'
                }
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-32 h-32 text-orange-500 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' 
                ? 'القيم التي توجه كل قرار نتخذه'
                : 'The principles that guide every decision we make'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'ar'
                    ? 'تطوير مجتمعات سكنية وتجارية عالية الجودة تلبي احتياجات عملائنا وتساهم في التنمية المستدامة للمملكة العربية السعودية.'
                    : 'To develop high-quality residential and commercial communities that meet our clients\' needs and contribute to the sustainable development of Saudi Arabia.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'ar'
                    ? 'أن نكون الشركة الرائدة في التطوير العقاري في المنطقة، معروفة بالابتكار والجودة والالتزام بأعلى المعايير.'
                    : 'To be the leading real estate development company in the region, known for innovation, quality, and commitment to the highest standards.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
