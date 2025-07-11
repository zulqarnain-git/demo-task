
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import InteractiveMap from '../components/InteractiveMap';
import Newsletter from '../components/Newsletter';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProperties />
      <InteractiveMap />
      <Newsletter />
    </div>
  );
};

export default Index;
