
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'ar' ? 'العنوان' : 'Address',
      content: language === 'ar' 
        ? 'الرياض، المملكة العربية السعودية' 
        : 'Riyadh, Saudi Arabia',
      detail: language === 'ar'
        ? 'طريق الملك فهد، حي العليا'
        : 'King Fahd Road, Olaya District'
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      content: '+966 11 234 5678',
      detail: language === 'ar' ? 'متاح من 8 صباحاً إلى 6 مساءً' : 'Available 8 AM - 6 PM'
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      content: 'info@darwaemaar.com',
      detail: language === 'ar' ? 'نرد خلال 24 ساعة' : 'We respond within 24 hours'
    },
    {
      icon: MessageCircle,
      title: language === 'ar' ? 'واتساب' : 'WhatsApp',
      content: '+966 50 123 4567',
      detail: language === 'ar' ? 'للاستفسارات السريعة' : 'For quick inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نحن هنا لمساعدتك وللإجابة على جميع استفساراتك'
              : 'We are here to help you and answer all your questions'
            }
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'ar' ? 'أرسل رسالة' : 'Send Message'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ar' ? 'الاسم' : 'Name'}
                      </label>
                      <Input
                        name="name"
                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <Input
                      name="subject"
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الرسالة' : 'Message'}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <Send className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'تواصل معنا من خلال الطرق التالية وسنكون سعداء لخدمتك'
                    : 'Get in touch with us through the following ways and we will be happy to serve you'
                  }
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <info.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-600 mt-1">{info.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office Hours */}
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'ar' ? 'ساعات العمل' : 'Office Hours'}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-700">
                          {language === 'ar' ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sunday - Thursday: 8:00 AM - 6:00 PM'}
                        </p>
                        <p className="text-gray-700">
                          {language === 'ar' ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'موقعنا' : 'Our Location'}
            </h2>
            <p className="text-gray-600">
              {language === 'ar' ? 'زورونا في مكتبنا الرئيسي' : 'Visit us at our main office'}
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                {language === 'ar' ? 'خريطة تفاعلية قريباً' : 'Interactive Map Coming Soon'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
