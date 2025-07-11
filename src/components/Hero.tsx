
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Search, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-red-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          {t('hero.title')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
          {t('hero.subtitle')}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-400">
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-600">
          <Link to="/3d-map">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-xl">
              <MapPin className="w-5 h-5 mr-2" />
              {t('hero.exploreMap')}
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-xl">
              {t('hero.viewProjects')}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in animation-delay-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">{t('hero.statsProjects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">15</div>
            <div className="text-sm text-gray-600">{t('hero.statsCities')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">10K+</div>
            <div className="text-sm text-gray-600">{t('hero.statsUnits')}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
