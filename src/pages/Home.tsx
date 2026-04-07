import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import elecImg from '../assets/electricidad.png';
import ddcImg from '../assets/ddce_real.jpg';
import fibraImg from '../assets/fibra.png';
import autoImg from '../assets/automatizacion.png';
import corrosionImg from '../assets/corrosion.png';
import heroImg from '../assets/Portada.jpg';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background-dark pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="CIS CONTROL Portada Industrial"
            className="w-full h-full object-cover"
            src={heroImg}
            loading="eager"
            fetchPriority="high"
          />
          {/* Enhanced Overlay for readability and depth */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]">
                Trayectoria sólida, <br />
                <span className="text-white">misión renovada</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-10 max-w-xl leading-relaxed [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
                Como socios estratégicos, guiamos a la industria en su transición hacia sistemas de energía y automatización más eficientes y sostenibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20">
                <Link
                  to="/services"
                  className="px-8 sm:px-10 py-4 bg-white text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 shadow-xl text-center"
                >
                  Explorar soluciones
                </Link>
                <Link
                  to="/contact"
                  className="px-8 sm:px-10 py-4 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Agendar llamada
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Pagination Indicator (Decorative) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary h-8' : 'bg-white/30'} transition-all duration-500`}
            ></div>
          ))}
        </div>
      </section>

      {/* Services Grid (Pilares) - Ajustado el padding inferior tras remover secciones */}
      <section className="pt-20 pb-32 md:pt-32 md:pb-48 bg-background-dark relative overflow-hidden" id="services">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Nuestras Capacidades</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Soluciones de <br /> <span className="text-slate-400">Ingeniería Crítica</span>
              </h2>
            </div>
            <Link to="/services" className="text-white text-xs font-bold tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-primary transition-all">
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Electricity - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={elecImg} alt="Electricidad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Electricidad</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">Ingeniería eléctrica de alta y media tensión.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* DDCE - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={ddcImg} alt="DDCE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">DDCE</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">Protección avanzada de infraestructuras críticas.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Red FTTH - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={fibraImg} alt="Red FTTH" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Red FTTH</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">Infraestructura de red robusta para entornos industriales.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Automation - Large */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-slate-800 aspect-[4/3] md:aspect-[16/9]"
            >
              <img src={autoImg} alt="Automatización" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Automatización Industrial</h3>
                <p className="text-slate-400 max-w-md text-xs md:text-sm leading-relaxed mb-6 italic">Sistemas PLC, SCADA y optimización de procesos mediante tecnología de vanguardia.</p>
                <Link to="/services#automation" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Explorar detalles <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Corrosion - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={corrosionImg} alt="Sistemas de Corrosión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Sistemas de Corrosión</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">Protección galvánica y monitoreo de integridad.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
