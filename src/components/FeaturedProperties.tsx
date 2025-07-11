
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Building, Users } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      name: "One North",
      location: "Riyadh",
      type: "Mixed-use",
      status: "Available",
      description: "One North is Dar Wa Emaar's latest mixed-use development located in the heart of North Riyadh close to major highways, business districts, universities and residential areas.",
      amenities: ["Retail Spaces", "Restaurants", "Parks", "Business Centers"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      name: "Tala Al-Khazam",
      location: "Riyadh",
      type: "Residential",
      status: "Under Construction",
      description: "Upgrading the level of residential units with modern architecture and premium amenities in a prime location.",
      amenities: ["Swimming Pool", "Gym", "Playground", "Security"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      name: "Central Plaza",
      location: "Jeddah",
      type: "Commercial",
      status: "Available",
      description: "Prime commercial spaces in the heart of Jeddah's business district with state-of-the-art facilities.",
      amenities: ["Meeting Rooms", "Parking", "Cafeteria", "High-speed Internet"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium developments that are reshaping Saudi Arabia's real estate landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={property.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${property.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <Badge 
                  className={`absolute top-4 right-4 bg-white text-gray-900 ${property.status === 'Available' ? 'border-green-500' : 'border-orange-500'}`}
                >
                  {property.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{property.name}</h3>
                  <Badge variant="outline" className="text-sm">
                    {property.type}
                  </Badge>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {property.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Amenities & Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
