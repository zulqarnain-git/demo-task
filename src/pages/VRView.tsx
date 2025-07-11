
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, Eye, Navigation, Settings, Home, Building, TreePine, Car } from 'lucide-react';

const VRView = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentScene, setCurrentScene] = useState('entrance');
  const [showHotspots, setShowHotspots] = useState(true);

  const scenes = [
    { id: 'entrance', label: 'Main Entrance', labelAr: 'المدخل الرئيسي', icon: Building },
    { id: 'lobby', label: 'Lobby', labelAr: 'اللوبي', icon: Home },
    { id: 'apartment', label: 'Sample Apartment', labelAr: 'شقة نموذجية', icon: Home },
    { id: 'amenities', label: 'Amenities', labelAr: 'المرافق', icon: TreePine },
    { id: 'parking', label: 'Parking', labelAr: 'المواقف', icon: Car },
  ];

  useEffect(() => {
    // Initialize VR viewer
    console.log('Initializing VR viewer for project:', id);
    // This would integrate with A-Frame or similar VR framework
  }, [id]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Control VR tour playback
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex justify-between items-center">
          <Link to={`/projects/${id}/3d-view`}>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'العودة للعرض ثلاثي الأبعاد' : 'Back to 3D View'}
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
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
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* VR Viewer Container */}
      <div className="relative w-full h-screen">
        {/* Placeholder for VR viewer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <Eye className="w-16 h-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'الجولة الافتراضية' : 'Virtual Reality Tour'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'ar' ? 'اكتشف المشروع بتقنية الواقع الافتراضي' : 'Immersive VR experience of the project'}
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'بدء الجولة' : 'Start VR Tour'}
              </Button>
            </div>
          </div>
        </div>

        {/* VR Loading */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-pulse">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white/30 border-t-white"></div>
            </div>
            <p className="text-lg">{language === 'ar' ? 'جاري تحميل البيئة الافتراضية...' : 'Loading VR Environment...'}</p>
          </div>
        </div>
      </div>

      {/* Scene Navigation */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm">
                {language === 'ar' ? 'المشاهد' : 'Scenes'}
              </h3>
              <div className="space-y-2">
                {scenes.map((scene) => (
                  <Button
                    key={scene.id}
                    variant={currentScene === scene.id ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start ${
                      currentScene === scene.id 
                        ? 'bg-orange-500 text-white' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => setCurrentScene(scene.id)}
                  >
                    <scene.icon className="w-4 h-4 mr-2" />
                    {language === 'ar' ? scene.labelAr : scene.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VR Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm">
                {language === 'ar' ? 'التحكم في VR' : 'VR Controls'}
              </h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'إعادة تعيين' : 'Reset View'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                  onClick={() => setShowHotspots(!showHotspots)}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  {showHotspots 
                    ? (language === 'ar' ? 'إخفاء النقاط' : 'Hide Hotspots')
                    : (language === 'ar' ? 'إظهار النقاط' : 'Show Hotspots')
                  }
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:bg-white/20"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'إعدادات VR' : 'VR Settings'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VR Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="text-white text-center space-y-2">
              <h4 className="font-semibold">
                {language === 'ar' ? 'كيفية الاستخدام' : 'How to Use'}
              </h4>
              <div className="text-sm space-y-1">
                <p>{language === 'ar' ? 'حرك الماوس للنظر حولك' : 'Move mouse to look around'}</p>
                <p>{language === 'ar' ? 'انقر على النقاط المضيئة للانتقال' : 'Click on hotspots to navigate'}</p>
                <p>{language === 'ar' ? 'استخدم نظارة VR للتجربة الكاملة' : 'Use VR headset for full experience'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VR Compatibility Check */}
      <div className="absolute bottom-4 right-4 z-40">
        <Card className="bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm">
                {language === 'ar' ? 'VR جاهز' : 'VR Ready'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VRView;
