
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, RotateCcw, ZoomIn, ZoomOut, Move, Layers, Settings, Maximize, Volume2, VolumeX, Camera, Share2, Home, Building, Eye, Sun, Moon } from 'lucide-react';

const ThreeDView = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentView, setCurrentView] = useState('exterior');
  const [timeOfDay, setTimeOfDay] = useState('day');

  const viewOptions = [
    { id: 'exterior', label: 'Exterior', labelAr: 'الخارجي', icon: Building },
    { id: 'interior', label: 'Interior', labelAr: 'الداخلي', icon: Home },
    { id: 'aerial', label: 'Aerial', labelAr: 'جوي', icon: Eye },
  ];

  useEffect(() => {
    // Initialize 3D viewer here
    console.log('Initializing 3D viewer for project:', id);
    // This would integrate with Three.js or similar 3D library
  }, [id]);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={`min-h-screen bg-black ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex justify-between items-center">
          <Link to={`/projects/${id}`}>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'العودة' : 'Back'}
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setTimeOfDay(timeOfDay === 'day' ? 'night' : 'day')}
            >
              {timeOfDay === 'day' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleFullscreen}
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 3D Viewer Container */}
      <div className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Placeholder for 3D viewer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <Building className="w-16 h-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'العرض ثلاثي الأبعاد' : '3D Interactive View'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'ar' ? 'استكشف المشروع بتقنية ثلاثية الأبعاد' : 'Explore the project in immersive 3D'}
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-black hover:bg-gray-200">
                {language === 'ar' ? 'بدء الجولة' : 'Start Tour'}
              </Button>
            </div>
          </div>
        </div>

        {/* Loading overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg">{language === 'ar' ? 'جاري التحميل...' : 'Loading 3D Model...'}</p>
          </div>
        </div>
      </div>

      {/* Left Control Panel */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm">
                {language === 'ar' ? 'أدوات التحكم' : 'Controls'}
              </h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'إعادة تعيين' : 'Reset'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <ZoomIn className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'تكبير' : 'Zoom In'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <ZoomOut className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'تصغير' : 'Zoom Out'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <Move className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'تحريك' : 'Pan'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right View Options */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm">
                {language === 'ar' ? 'طرق العرض' : 'View Options'}
              </h3>
              <div className="space-y-2">
                {viewOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={currentView === option.id ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start ${
                      currentView === option.id 
                        ? 'bg-orange-500 text-white' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => setCurrentView(option.id)}
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {language === 'ar' ? option.labelAr : option.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Link to={`/projects/${id}/vr-view`}>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
                  <Eye className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'VR' : 'VR Mode'}
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
                <Camera className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'لقطة' : 'Screenshot'}
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
                <Share2 className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'مشاركة' : 'Share'}
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
                <Settings className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'إعدادات' : 'Settings'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-3">
            <div className="text-white text-sm space-y-1">
              <p>{language === 'ar' ? 'اسحب للدوران' : 'Drag to rotate'}</p>
              <p>{language === 'ar' ? 'اسحب مع Shift للتحريك' : 'Shift+drag to pan'}</p>
              <p>{language === 'ar' ? 'عجلة الماوس للتكبير' : 'Mouse wheel to zoom'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThreeDView;
