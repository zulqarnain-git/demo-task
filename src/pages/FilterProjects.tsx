import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Home, Calendar, Search, Filter, X, SlidersHorizontal, Grid, List } from 'lucide-react';

const FilterProjects = () => {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: [],
    status: [],
    location: [],
    priceRange: [0, 10000000],
    areaRange: [0, 500],
    bedrooms: [],
    amenities: [],
    deliveryYear: []
  });

  const filterOptions = {
    type: [
      { value: 'residential', label: 'Residential', labelAr: 'سكني' },
      { value: 'commercial', label: 'Commercial', labelAr: 'تجاري' },
      { value: 'mixed', label: 'Mixed-use', labelAr: 'متعدد الاستخدامات' },
    ],
    status: [
      { value: 'available', label: 'Available', labelAr: 'متاح' },
      { value: 'construction', label: 'Under Construction', labelAr: 'تحت الإنشاء' },
      { value: 'planning', label: 'Planning', labelAr: 'مرحلة التخطيط' },
      { value: 'completed', label: 'Completed', labelAr: 'مكتمل' },
    ],
    location: [
      { value: 'riyadh', label: 'Riyadh', labelAr: 'الرياض' },
      { value: 'jeddah', label: 'Jeddah', labelAr: 'جدة' },
      { value: 'dammam', label: 'Dammam', labelAr: 'الدمام' },
      { value: 'mecca', label: 'Mecca', labelAr: 'مكة المكرمة' },
    ],
    bedrooms: [
      { value: '1', label: '1 Bedroom', labelAr: 'غرفة واحدة' },
      { value: '2', label: '2 Bedrooms', labelAr: 'غرفتان' },
      { value: '3', label: '3 Bedrooms', labelAr: 'ثلاث غرف' },
      { value: '4+', label: '4+ Bedrooms', labelAr: '4+ غرف' },
    ],
    amenities: [
      { value: 'pool', label: 'Swimming Pool', labelAr: 'حمام سباحة' },
      { value: 'gym', label: 'Gym', labelAr: 'صالة رياضية' },
      { value: 'parking', label: 'Parking', labelAr: 'مواقف' },
      { value: 'security', label: '24/7 Security', labelAr: 'أمن 24/7' },
      { value: 'mall', label: 'Shopping Mall', labelAr: 'مركز تسوق' },
      { value: 'school', label: 'School', labelAr: 'مدرسة' },
    ],
    deliveryYear: [
      { value: '2024', label: '2024', labelAr: '2024' },
      { value: '2025', label: '2025', labelAr: '2025' },
      { value: '2026', label: '2026', labelAr: '2026' },
      { value: '2027', label: '2027', labelAr: '2027' },
    ]
  };

  const mockProjects = [
    {
      id: 1,
      name: "One North",
      nameAr: "وان نورث",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "mixed",
      status: "available",
      price: 850000,
      area: 250,
      bedrooms: "2",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      amenities: ["pool", "gym", "parking", "security"],
      deliveryYear: "2025"
    },
    {
      id: 2,
      name: "Tala Al-Khazam",
      nameAr: "تلة الخزام",
      location: "Riyadh",
      locationAr: "الرياض",
      type: "residential",
      status: "construction",
      price: 1200000,
      area: 320,
      bedrooms: "3",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      amenities: ["pool", "gym", "parking"],
      deliveryYear: "2026"
    },
    // Add more mock projects...
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (Array.isArray(newFilters[filterType])) {
        if (newFilters[filterType].includes(value)) {
          newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
        } else {
          newFilters[filterType] = [...newFilters[filterType], value];
        }
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      status: [],
      location: [],
      priceRange: [0, 10000000],
      areaRange: [0, 500],
      bedrooms: [],
      amenities: [],
      deliveryYear: []
    });
  };

  const filteredProjects = mockProjects.filter(project => {
    // Apply search filter
    if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !project.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Apply other filters
    if (filters.type.length > 0 && !filters.type.includes(project.type)) return false;
    if (filters.status.length > 0 && !filters.status.includes(project.status)) return false;
    if (filters.location.length > 0 && !filters.location.includes(project.location.toLowerCase())) return false;
    if (project.price < filters.priceRange[0] || project.price > filters.priceRange[1]) return false;
    if (project.area < filters.areaRange[0] || project.area > filters.areaRange[1]) return false;
    if (filters.bedrooms.length > 0 && !filters.bedrooms.includes(project.bedrooms)) return false;
    if (filters.deliveryYear.length > 0 && !filters.deliveryYear.includes(project.deliveryYear)) return false;
    
    return true;
  });

  const FilterSection = ({ title, titleAr, options, filterKey }) => (
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">
        {language === 'ar' ? titleAr : title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters[filterKey].includes(option.value)}
              onChange={() => handleFilterChange(filterKey, option.value)}
              className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700">
              {language === 'ar' ? option.labelAr : option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  const Slider = ({ value, onValueChange, max, min, step, className }) => (
    <div className={`relative ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => onValueChange([parseInt(e.target.value), value[1]])}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => onValueChange([value[0], parseInt(e.target.value)])}
        className="absolute top-0 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'تصفية المشاريع' : 'Filter Projects'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'ابحث عن المشروع المثالي باستخدام أدوات التصفية المتقدمة' : 'Find your perfect project using advanced filtering tools'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {language === 'ar' ? 'المرشحات' : 'Filters'}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <X className="w-4 h-4 mr-1" />
                    {language === 'ar' ? 'مسح' : 'Clear'}
                  </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'البحث...' : 'Search...'}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Filter Sections */}
                <FilterSection
                  title="Project Type"
                  titleAr="نوع المشروع"
                  options={filterOptions.type}
                  filterKey="type"
                />

                <FilterSection
                  title="Status"
                  titleAr="الحالة"
                  options={filterOptions.status}
                  filterKey="status"
                />

                <FilterSection
                  title="Location"
                  titleAr="الموقع"
                  options={filterOptions.location}
                  filterKey="location"
                />

                <FilterSection
                  title="Bedrooms"
                  titleAr="عدد الغرف"
                  options={filterOptions.bedrooms}
                  filterKey="bedrooms"
                />

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {language === 'ar' ? 'نطاق السعر' : 'Price Range'}
                  </h4>
                  <div className="space-y-2">
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                      max={10000000}
                      min={0}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>SAR {filters.priceRange[0].toLocaleString()}</span>
                      <span>SAR {filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Area Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {language === 'ar' ? 'نطاق المساحة' : 'Area Range (sqm)'}
                  </h4>
                  <div className="space-y-2">
                    <Slider
                      value={filters.areaRange}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, areaRange: value }))}
                      max={500}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{filters.areaRange[0]} sqm</span>
                      <span>{filters.areaRange[1]} sqm</span>
                    </div>
                  </div>
                </div>

                <FilterSection
                  title="Amenities"
                  titleAr="المرافق"
                  options={filterOptions.amenities}
                  filterKey="amenities"
                />

                <FilterSection
                  title="Delivery Year"
                  titleAr="سنة التسليم"
                  options={filterOptions.deliveryYear}
                  filterKey="deliveryYear"
                />
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredProjects.length} {language === 'ar' ? 'مشروع' : 'Projects'}
                </h2>
                <Badge variant="outline" className="text-orange-600">
                  {language === 'ar' ? 'مفلتر' : 'Filtered'}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Results Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`relative ${viewMode === 'grid' ? 'h-48' : 'h-32'} overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                      {language === 'ar' ? 
                        filterOptions.status.find(s => s.value === project.status)?.labelAr :
                        filterOptions.status.find(s => s.value === project.status)?.label
                      }
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {language === 'ar' ? project.nameAr : project.name}
                      </h3>
                      <Badge variant="outline">
                        {language === 'ar' ? 
                          filterOptions.type.find(t => t.value === project.type)?.labelAr :
                          filterOptions.type.find(t => t.value === project.type)?.label
                        }
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{language === 'ar' ? project.locationAr : project.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2 text-orange-500" />
                        <span>SAR {project.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{project.area} sqm</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProjects;
