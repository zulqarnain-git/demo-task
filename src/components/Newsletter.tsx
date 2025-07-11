
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-2xl">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            </div>
            
            <CardContent className="relative p-12 text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get the latest news and updates about our newest developments, special offers, and exclusive investment opportunities.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 text-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                    <Button 
                      type="submit"
                      className="h-12 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle className="w-8 h-8 mr-3" />
                    <span className="text-xl font-semibold">Successfully Subscribed!</span>
                  </div>
                  <p className="text-gray-600">
                    Thank you for subscribing. You'll receive our latest updates soon.
                  </p>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25K+</div>
                  <div className="text-sm text-gray-600">Newsletter Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Monthly Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Exclusive Offers</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
