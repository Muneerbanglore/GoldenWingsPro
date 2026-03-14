import { motion } from 'framer-motion';
import officeImage from '../assets/dubai_about_office.png';

const About: React.FC = () => {
  return (
    <div className="bg-gw-black selection:bg-gw-gold selection:text-gw-black overflow-hidden">
      {/* Introduction */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
                <div className="h-[2px] w-12 bg-gw-gold"></div>
                <span className="text-gw-gold font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
              Dubai's <br />
              <span className="text-gw-gold italic font-normal">Trusted</span> Voice
            </h1>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed font-light">
              Founded in the heart of Deira, Golden Winds Pro has been the trusted partner for entrepreneurs and corporations seeking a foothold in the UAE's vibrant economy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "15+ Years Experience",
                "1000+ Registrations",
                "Deira-based Experts",
                "Ethical Commitment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="p-1 bg-gw-gold/10 rounded-full text-gw-gold group-hover:bg-gw-gold group-hover:text-gw-black transition-colors duration-300 w-2 h-2 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300 font-bold text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gw-dark rounded-[5rem] overflow-hidden shadow-2xl relative group border border-white/5">
                <img 
                    src={officeImage} 
                    alt="Golden Winds Pro Office" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gw-black via-transparent to-transparent"></div>
                
                <div className="p-12 relative z-10 flex flex-col justify-end h-full">
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Founding", value: "2010" },
                            { label: "Team", value: "25+" },
                            { label: "Client Satis.", value: "99%" },
                            { label: "Awards", value: "12" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-gw-black/40 backdrop-blur-2xl p-5 rounded-3xl border border-white/10 hover:border-gw-gold/40 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-2xl font-serif font-black text-white">{stat.value}</div>
                                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - Creative Asymmetrical Layout */}
      <section className="py-40 bg-gw-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="text-[30vh] font-black text-white italic whitespace-nowrap">MISSION VISION PASSION</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-[4rem] border border-white/5 flex flex-col justify-center"
            >
              <h2 className="text-gw-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">Our Vision</h2>
              <p className="text-3xl font-serif italic text-white leading-tight">
                "To be the premier <span className="text-gw-gold">catalyst</span> for growth, known for integrity and speed."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gw-gold p-12 rounded-[4rem] flex flex-col justify-center shadow-2xl shadow-gw-gold/20 translate-y-20 md:-translate-y-10"
            >
              <h2 className="text-gw-black/60 font-bold tracking-[0.3em] uppercase text-xs mb-6">Our Mission</h2>
              <p className="text-2xl font-serif font-black text-gw-black leading-snug">
                To provide seamless, expert, and comprehensive administrative systems for global entrepreneurs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="h-40 bg-gw-black"></div>
    </div>
  );
};

export default About;
