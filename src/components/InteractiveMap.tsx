import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Layers, Filter, ZoomIn } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedCity, setSelectedCity] = useState('riyadh');
  
  const cities = [
    { id: 'riyadh', name: 'Riyadh', projects: 25, color: 'from-orange-500 to-red-500' },
    { id: 'jeddah', name: 'Jeddah', projects: 18, color: 'from-blue-500 to-cyan-500' },
    { id: 'dammam', name: 'Dammam', projects: 12, color: 'from-green-500 to-emerald-500' },
    { id: 'mecca', name: 'Mecca', projects: 8, color: 'from-purple-500 to-pink-500' },
  ];

  const mapProjects = [
    { id: 1, name: 'One North', x: 45, y: 35, type: 'Mixed-use', status: 'Available' },
    { id: 2, name: 'Tala Al-Khazam', x: 60, y: 50, type: 'Residential', status: 'Construction' },
    { id: 3, name: 'Central Plaza', x: 35, y: 65, type: 'Commercial', status: 'Available' },
    { id: 4, name: 'Green Valley', x: 70, y: 30, type: 'Residential', status: 'Planning' },
    { id: 5, name: 'Business Hub', x: 25, y: 45, type: 'Commercial', status: 'Available' },
  ];

  return (
    <section id="communities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Project Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our developments across major cities in Saudi Arabia through our interactive digital atlas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* City Selector */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  Cities
                </h3>
                <div className="space-y-3">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        selectedCity === city.id
                          ? 'bg-orange-100 border-2 border-orange-500'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{city.name}</span>
                        <Badge variant="secondary">{city.projects}</Badge>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Link to="/projects/filter">
                    <Button className="w-full mb-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter Projects
                    </Button>
                  </Link>
                  <Link to="/3d-map">
                    <Button variant="outline" className="w-full">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      3D View
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.5)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.5)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(245,158,11,0.5)_0%,transparent_50%)]" />
                </div>

                {/* Map Grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Project Markers */}
                {mapProjects.map((project) => (
                  <div
                    key={project.id}
                    className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${project.x}%`, top: `${project.y}%` }}
                  >
                    {/* Marker */}
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full shadow-lg transition-all duration-300 group-hover:scale-125 ${
                        project.status === 'Available' ? 'bg-green-500' :
                        project.status === 'Construction' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-25" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="bg-white rounded-lg shadow-xl p-4 min-w-48 border">
                          <h4 className="font-bold text-gray-900 mb-1">{project.name}</h4>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">{project.type}</Badge>
                            <Badge className={`text-xs ${
                              project.status === 'Available' ? 'bg-green-100 text-green-800' :
                              project.status === 'Construction' ? 'bg-orange-100 text-orange-800' : 
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {project.status}
                            </Badge>
                          </div>
                          <Button size="sm" className="w-full text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Layers className="w-4 h-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-sm font-semibold mb-2">Project Status</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2" />
                      <span>Under Construction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                      <span>Planning Phase</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Click on markers to explore detailed project information
              </p>
              <Link to="/3d-map">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open Full 3D Map Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
