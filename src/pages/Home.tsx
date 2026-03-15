import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, TrendingUp, ArrowRight, Wind, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import heroImage from '../assets/dubai_business_hero.png';

// Import service images
import imgCompanyReg from '../assets/service_company_reg.png';
import imgVisa from '../assets/service_visa_residency.png';
import imgPro from '../assets/service_pro_services.png';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const featuredServices = [
    { 
      title: "Mainland Licenses", 
      desc: "Full ownership and freedom to trade across the UAE with expert DED sponsorship handling.", 
      icon: <Globe />,
      image: imgCompanyReg
    },
    { 
      title: "Free Zone Experts", 
      desc: "Strategic setup in Dubai's most advantageous economic zones with 100% tax benefits.", 
      icon: <Zap />,
      image: imgVisa // Using visa image for variety
    },
    { 
      title: "PRO Excellence", 
      desc: "Seamless document clearing and government relations so you can focus on your core business.", 
      icon: <TrendingUp />,
      image: imgPro
    }
  ];

  return (
    <div className="bg-gw-black selection:bg-gw-gold selection:text-gw-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Layer with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 scale-110"
        >
          <img 
            src={heroImage} 
            alt="Dubai Business" 
            className="w-full h-full object-cover brightness-[0.3] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gw-black/80 via-transparent to-gw-black"></div>
        </motion.div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
                <div className="h-[2px] w-12 bg-gw-gold"></div>
                <span className="text-gw-gold font-bold tracking-[0.3em] uppercase text-sm">Dubai's Premier Consultants</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-serif font-black mb-6 leading-[1.05] tracking-tight text-white">
              Crafting Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gw-gold via-gw-gold-light to-gw-gold text-glow-gold italic pr-4">Legacy</span> 
              In the Sand
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
              From Dubai to the world. We don't just process papers; we build the legal foundation for your next empire in the heart of the UAE.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <NavLink to="/contact" className="btn-premium group py-5 px-12 text-lg">
                <span>START YOUR JOURNEY</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </NavLink>
              <NavLink to="/services" className="relative overflow-hidden group py-5 px-12 text-lg font-bold border-2 border-white/10 rounded-full hover:border-gw-gold transition-colors text-center text-white">
                <span className="relative z-10">OUR SERVICES</span>
                <div className="absolute inset-0 bg-gw-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Text Decor */}
        <div className="absolute bottom-10 left-0 text-[20vh] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none italic">
            GOLDEN WINDS PRO • DUBAI EXCELLENCE • DEIRA LEGACY
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gw-dark p-10 md:p-16 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center backdrop-blur-3xl">
            {[
              { val: "15+", label: "Years Experience" },
              { val: "2k+", label: "Success Stories" },
              { val: "100%", label: "Legal Compliance" },
              { val: "24/7", label: "Dedicated Support" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-3xl font-serif font-black text-white mb-1 tracking-tight">{stat.val}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services with Image Cards */}
      <section className="py-32 dark-mesh-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-4 leading-tight">
                Redefining <span className="text-gw-gold">Business Setup</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                We combine traditional Deira hospitality with modern efficiency. Every client is a partner in our shared vision of Dubai's future.
              </p>
            </div>
            <NavLink to="/services" className="text-gw-gold font-bold flex items-center space-x-2 border-b-2 border-gw-gold pb-1 hover:text-white hover:border-white transition-all group tracking-widest text-xs">
                <span>VIEW ALL SERVICES</span>
                <Wind size={18} className="group-hover:rotate-45 transition-transform" />
            </NavLink>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card-dark p-0 overflow-hidden group flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gw-dark to-transparent opacity-80"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-black text-white mb-3 group-hover:text-gw-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 font-light text-sm flex-grow">{service.desc}</p>
                  <div className="h-1 w-0 group-hover:w-full bg-gw-gold transition-all duration-700 mt-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual CTA Section */}
      <section className="py-24 px-4 bg-gw-black">
        <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden relative min-h-[500px] flex items-center shadow-2xl border border-white/5">
            <img 
                src={heroImage} 
                alt="Dubai Office" 
                className="absolute inset-0 w-full h-full object-cover scale-150 grayscale opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gw-black via-gw-black/90 to-transparent"></div>
            
            <div className="relative z-10 w-full px-10 md:px-20 text-center md:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
                            Ready to Claim Your <span className="text-gw-gold">Space?</span>
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 max-w-xl font-light">
                            Our advisors are waiting to guide you through the process. No hidden fees, just pure professional excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <NavLink to="/contact" className="btn-premium py-5 px-14">
                                <span>CONSULT AN EXPERT</span>
                            </NavLink>
                            <div className="flex items-center space-x-4 text-white">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                    <Globe className="w-6 h-6 text-gw-gold" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-gw-gold uppercase tracking-widest">Call 24/7</div>
                                    <a href="tel:+971569775916" className="font-bold text-lg tracking-tight hover:text-gw-gold transition-colors">+971 56 977 5916</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block text-right">
                        <div 
                            className="bg-gw-dark/40 backdrop-blur-xl p-12 rounded-[5rem] border border-white/10 relative overflow-hidden group hover:border-gw-gold/30 transition-colors inline-block text-left"
                        >
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gw-gold/10 blur-[60px]"></div>
                            <h4 className="text-2xl font-serif font-bold text-white mb-3 italic">"The Golden Standard of Deira"</h4>
                            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">Industry Leader Since 2010</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
