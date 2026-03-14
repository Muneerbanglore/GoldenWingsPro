import { motion } from 'framer-motion';
import { Building2, FileText, UserCheck, Globe, Briefcase, Landmark, ArrowRight } from 'lucide-react';
import servicesImage from '../assets/dubai_services_main.png';

// Import service images
import imgCompanyReg from '../assets/service_company_reg.png';
import imgProServices from '../assets/service_pro_services.png';
import imgVisa from '../assets/service_visa_residency.png';
import imgTradeLicense from '../assets/service_trade_license.png';
import imgConsultancy from '../assets/service_consultancy.png';
import imgOffice from '../assets/service_office_solutions.png';

const Services: React.FC = () => {
  const serviceList = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Registration",
      desc: "End-to-end support for Mainland, Free Zone, and Offshore company formation in Dubai.",
      image: imgCompanyReg
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "PRO Services",
      desc: "Professional handling of all government-related paperwork and legal document processing.",
      image: imgProServices
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Visa & Residency",
      desc: "Faster processing for investor visas, employment visas, and family sponsorship.",
      image: imgVisa
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Trade Licensing",
      desc: "Assistance in obtaining and renewing trade licenses across all business categories.",
      image: imgTradeLicense
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Consultancy",
      desc: "Expert advice on market entry strategies and local business regulations.",
      image: imgConsultancy
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Office Solutions",
      desc: "Helping you find the perfect office space or virtual office in Deira and beyond.",
      image: imgOffice
    }
  ];

  return (
    <div className="bg-gw-black selection:bg-gw-gold selection:text-gw-black">
      {/* Services Header with Image */}
      <section className="relative h-[50vh] flex items-center mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesImage} 
            alt="Dubai Business Services" 
            className="w-full h-full object-cover brightness-[0.2] saturate-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gw-black/80 to-gw-black"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-3xl mx-auto"
            >
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="h-[2px] w-8 bg-gw-gold"></div>
                    <span className="text-gw-gold font-bold tracking-[0.3em] uppercase text-xs">Excellence in Action</span>
                    <div className="h-[2px] w-8 bg-gw-gold"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-[1.1] text-white">
                    Our <span className="text-gw-gold italic pr-4">Signature</span> Services
                </h1>
                <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                    We offer comprehensive business solutions designed to simplify the complexities of the UAE market. Your success, simplified.
                </p>
            </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card-dark p-0 overflow-hidden group flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gw-dark to-transparent opacity-80"></div>
                <div className="absolute top-6 right-6 bg-gw-gold/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-gw-gold border border-gw-gold/20 group-hover:bg-gw-gold group-hover:text-gw-black group-hover:rotate-12 transition-all duration-500">
                  {service.icon}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gw-gold transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base mb-8 font-light flex-grow">{service.desc}</p>
                
                <button className="flex items-center space-x-2 text-gw-gold font-bold tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                  <span>LEARN MORE</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="h-1 w-0 group-hover:w-full bg-gw-gold transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
