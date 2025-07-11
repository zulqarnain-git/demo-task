
import React, { useState } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/projects', label: t('nav.projects') },
    { path: '/communities', label: t('nav.communities') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">PropVerse Atlas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={cn("ml-10 flex items-baseline space-x-8", isRTL && "space-x-reverse")}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-900 hover:text-orange-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className={cn("flex items-center space-x-4", isRTL && "space-x-reverse")}>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={cn("hidden sm:flex items-center space-x-2", isRTL && "space-x-reverse")}
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className={cn("hidden sm:flex items-center space-x-2", isRTL && "space-x-reverse")}>
              <MessageCircle className="w-4 h-4" />
              <span>{t('nav.whatsapp')}</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-3 py-2 text-base font-medium hover:bg-gray-50",
                isActive(item.path)
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-900 hover:text-orange-600"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={cn("flex items-center justify-between px-3 py-2", isRTL && "space-x-reverse")}>
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className={cn("flex items-center space-x-2", isRTL && "space-x-reverse")}>
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            <Button variant="ghost" size="sm" className={cn("flex items-center space-x-2", isRTL && "space-x-reverse")}>
              <MessageCircle className="w-4 h-4" />
              <span>{t('nav.whatsapp')}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
