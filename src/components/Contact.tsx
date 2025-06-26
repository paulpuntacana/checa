
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Netlify will handle form submission automatically
  };

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.phone')}</h4>
                  <p className="text-muted-foreground">+1 (849) 354-4938</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-turquoise/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.email')}</h4>
                  <p className="text-muted-foreground">checamakeup24@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.location')}</h4>
                  <p className="text-muted-foreground">Punta Cana - Dominican Republic</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">{t('contact.followWork')}</h4>
              <div>
                <a 
                  href="https://www.instagram.com/checa_makeup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-pink-400 text-pink-600 px-6 py-3"
                  >
                    <Instagram className="w-6 h-6 mr-2" />
                    Follow @checa_makeup
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl font-bold text-foreground">
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.firstName')}
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder={t('contact.firstNamePlaceholder')} 
                      className="border-gray-200 focus:border-coral" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.lastName')}
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder={t('contact.lastNamePlaceholder')} 
                      className="border-gray-200 focus:border-coral" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder={t('contact.emailPlaceholder')} 
                    className="border-gray-200 focus:border-coral" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.phoneOptional')}
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder={t('contact.phonePlaceholder')} 
                    className="border-gray-200 focus:border-coral" 
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.serviceInterest')}
                  </label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-coral"
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
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder={t('contact.messagePlaceholder')}
                    className="border-gray-200 focus:border-coral min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#f4e1ff] hover:bg-[#f4e1ff]/90 text-purple-900 font-semibold py-3 transition-all duration-300 transform hover:scale-105 border border-purple-200"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
