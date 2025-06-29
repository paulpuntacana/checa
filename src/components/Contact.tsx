
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Info, AlertCircle, Clock, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-warm-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                {t('contact.letsConnect')}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            {/* Makeup Artist Specifications */}
            <div className="mb-8">
              <h4 className="font-playfair text-xl font-bold text-foreground mb-6">
                {t('contact.specifications.title')}
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Specification 1 */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-purple-100">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                </div>
                <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      {t('contact.specifications.1.title')}
                    </h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('contact.specifications.1.desc')}
                    </p>
                </div>
              </div>

                {/* Specification 2 */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-purple-100">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                </div>
                <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      {t('contact.specifications.2.title')}
                    </h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('contact.specifications.2.desc')}
                    </p>
                </div>
              </div>

                {/* Specification 3 */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-purple-100">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                </div>
                <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      {t('contact.specifications.3.title')}
                    </h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('contact.specifications.3.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl h-fit">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl font-bold text-foreground">
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                // Success Message
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-10 h-10 text-white" fill="currentColor" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-playfair text-2xl font-bold text-foreground">
                      {t('language.english') === 'English' 
                        ? 'Thank you, beauty!' 
                        : '¡Gracias, hermosa!'
                      }
                    </h3>
                    
                    <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                      {t('language.english') === 'English' 
                        ? "I'll get in touch with you as quickly as possible to make your special day absolutely stunning!" 
                        : "¡Me pondré en contacto contigo lo más pronto posible para hacer de tu día especial algo absolutamente espectacular!"
                      }
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-purple-600">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">
                        {t('language.english') === 'English' 
                          ? 'Get ready to glow!' 
                          : '¡Prepárate para brillar!'
                        }
                      </span>
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    {t('language.english') === 'English' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                  </Button>
                </div>
              ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                      {t('contact.firstName')}
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder={t('contact.firstNamePlaceholder')} 
                      className="border-gray-200 focus:border-coral h-9" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                      {t('contact.lastName')}
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder={t('contact.lastNamePlaceholder')} 
                      className="border-gray-200 focus:border-coral h-9" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    {t('contact.email')}
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder={t('contact.emailPlaceholder')} 
                    className="border-gray-200 focus:border-coral h-9" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    {t('contact.phoneOptional')}
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder={t('contact.phonePlaceholder')} 
                    className="border-gray-200 focus:border-coral h-9" 
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                    {t('contact.serviceInterest')}
                  </label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-coral h-9"
                    required
                  >
                    <option value="">{t('contact.selectService')}</option>
                    <option value="bridal">{t('contact.bridalMakeup')}</option>
                    <option value="event">{t('contact.eventMakeup')}</option>
                    <option value="resort">{t('contact.resortPartnership')}</option>
                    <option value="editorial">{t('contact.editorialPhoto')}</option>
                    <option value="group">{t('contact.groupServices')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    {t('contact.message')}
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder={t('contact.messagePlaceholder')}
                    className="border-gray-200 focus:border-coral min-h-[90px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#f4e1ff] hover:bg-[#f4e1ff]/90 text-purple-900 font-semibold py-2 transition-all duration-300 transform hover:scale-105 border border-purple-200 disabled:opacity-50"
                >
                  {isSubmitting 
                    ? (t('language.english') === 'English' ? 'Sending...' : 'Enviando...')
                    : t('contact.send')
                  }
                </Button>
              </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Information Grid - Full Width */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Phone className="w-8 h-8 text-coral" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h4>
              <p className="text-muted-foreground">+1 (849) 354-4938</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Mail className="w-8 h-8 text-turquoise" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{t('contact.email')}</h4>
              <p className="text-muted-foreground">checamakeup24@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-8 h-8 text-coral" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{t('contact.location')}</h4>
              <p className="text-muted-foreground">Punta Cana - Dominican Republic</p>
            </div>
          </div>

          {/* Instagram Button - Centered */}
          <div className="mt-12 text-center">
            <h4 className="font-semibold text-foreground mb-4">{t('contact.followWork')}</h4>
            <a 
              href="https://www.instagram.com/checa_makeup/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-pink-400 text-pink-600 px-8 py-3"
              >
                <Instagram className="w-6 h-6 mr-2" />
                {t('language.english') === 'English' ? 'Follow @checa_makeup' : 'Síguenos @checa_makeup'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
