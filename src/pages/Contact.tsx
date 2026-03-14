import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle } from 'lucide-react';
import locationImage from '../assets/dubai_contact_location.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mainland Setup',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = `New Inquiry: ${formData.service} - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    const mailtoLink = `mailto:info@goldenwindspro.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open the mail client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gw-black selection:bg-gw-gold selection:text-gw-black dark-mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-gw-gold"></div>
            <span className="text-gw-gold font-bold tracking-[0.3em] uppercase text-xs">Let's Connect</span>
            <div className="h-[2px] w-8 bg-gw-gold"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-white mb-6"
          >
            Start Your <span className="text-gw-gold italic">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-light"
          >
            Have questions about company registration? our experts are ready to assist you in Deira and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-10"
          >
            <div className="bg-gw-dark p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gw-gold/10 blur-[50px] group-hover:bg-gw-gold/20 transition-colors duration-700"></div>
              <h3 className="text-2xl font-serif font-bold mb-8 border-b border-white/5 pb-6">Direct Channels</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="text-gw-gold" size={18} />, label: "Call Us", value: "+971 56 977 5916", href: "tel:+971569775916" },
                  { icon: <Mail className="text-gw-gold" size={18} />, label: "Email", value: "info@goldenwindspro.com" },
                  { icon: <MapPin className="text-gw-gold" size={18} />, label: "Our Office", value: "101, Deira Business, Dubai" },
                  { icon: <Clock className="text-gw-gold" size={18} />, label: "Availability", value: "Mon - Fri: 9am - 6pm" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group/item">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 group-hover/item:border-gw-gold/30 transition-colors">
                        {item.icon}
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-base font-bold tracking-tight text-white hover:text-gw-gold transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-base font-bold tracking-tight text-white">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro map info */}
            <div className="premium-card-dark p-0 overflow-hidden group flex flex-col">
                <div className="h-48 relative overflow-hidden">
                    <img 
                        src={locationImage} 
                        alt="Deira Dubai" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gw-gold/5"></div>
                </div>
                <div className="p-8 text-center">
                    <div className="p-3 bg-gw-gold/10 rounded-full inline-block mb-4">
                        <Globe className="text-gw-gold w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-serif font-black text-white mb-2">Locally Rooted</h4>
                    <p className="text-gray-500 text-xs font-light">Strategically located in Deira for rapid government coordination across the UAE.</p>
                </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form 
              className="bg-gw-dark p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white/5 relative group h-full"
              onSubmit={handleSubmit}
            >
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-50 bg-gw-dark/95 backdrop-blur-sm rounded-[4rem] flex flex-col items-center justify-center text-center p-12"
                  >
                    <CheckCircle className="text-gw-gold w-24 h-24 mb-6" />
                    <h2 className="text-3xl font-serif font-black text-white mb-4">Message Prepared!</h2>
                    <p className="text-gray-400 font-light max-w-sm">
                      Your email client has been opened with your inquiry details. Please click send in your email app to finish.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-gw-gold font-bold tracking-widest text-xs border-b border-gw-gold pb-1"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute top-0 right-0 w-64 h-64 bg-gw-gold/5 blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Your Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-luxury" 
                    placeholder="Alex Johnson" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-luxury" 
                    placeholder="alex@business.com" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-luxury" 
                    placeholder="+971 56 977 5916" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Interest Area</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-luxury appearance-none cursor-pointer w-full"
                    >
                      <option>Mainland Setup</option>
                      <option>Free Zone Setup</option>
                      <option>PRO Services</option>
                      <option>Visa Assistance</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gw-gold">
                      <Send size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-12">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Briefly Describe Your Needs</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6} 
                  className="input-luxury resize-none" 
                  placeholder="How can we help your business thrive?"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-premium py-6 text-xl tracking-widest space-x-4">
                <span>SEND MESSAGE</span>
                <Send size={24} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
