
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Layers, Zap, Navigation as NavigationIcon } from 'lucide-react';

const Full3DMap = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خريطة ثلاثية الأبعاد' : '3D Interactive Map'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'استكشف مشاريعنا ومجتمعاتنا من خلال خريطة تفاعلية ثلاثية الأبعاد'
                : 'Explore our projects and communities through an interactive 3D map experience'
              }
            </p>
          </div>
        </div>
      </section>

      {/* 3D Map Container */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <Layers className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'ar' ? 'خريطة ثلاثية الأبعاد' : '3D Map View'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'ar' 
                      ? 'خريطة تفاعلية ثلاثية الأبعاد قيد التطوير'
                      : 'Interactive 3D map coming soon'
                    }
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <NavigationIcon className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'استكشف' : 'Explore'}
                  </Button>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-6 h-6 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-10 right-10 w-5 h-5 bg-blue-600 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Full3DMap;
