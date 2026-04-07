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
    <div className="overflow-x-hidden bg-slate-50">
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
          {/* Enhanced Overlay for light readability */}
          <div className="absolute inset-0 bg-black/50 transition-all"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-lg">
                Trayectoria sólida, <br />
                <span className="text-primary">misión renovada</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium mb-10 mx-auto max-w-2xl leading-relaxed drop-shadow-md">
                Como socios estratégicos, guiamos a la industria en su transición hacia sistemas de energía y automatización más eficientes y sostenibles.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 md:mb-20">
                <Link
                  to="/services"
                  className="px-8 sm:px-10 py-4 bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-xl text-center"
                >
                  Explorar soluciones
                </Link>
                <Link
                  to="/contact"
                  className="px-8 sm:px-10 py-4 border border-white/50 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center"
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
              className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary h-8' : 'bg-slate-400'} transition-all duration-500`}
            ></div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 bg-slate-50 relative overflow-hidden" id="services">
        <div className="absolute inset-0 industrial-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Nuestras Capacidades</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                Soluciones de <br /> <span className="text-primary">Ingeniería Crítica</span>
              </h2>
            </div>
            <Link to="/services" className="text-slate-900 text-xs font-bold tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-primary transition-all">
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Electricity */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-white shadow-xl border border-slate-200 aspect-square flex flex-col"
            >
              <img src={elecImg} alt="Electricidad" className="w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-end bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Electricidad</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">Ingeniería eléctrica de alta y media tensión.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-primary transition-colors mt-auto">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* DDCE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-white shadow-xl border border-slate-200 aspect-square flex flex-col"
            >
              <img src={ddcImg} alt="DDCE" className="w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-end bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">DDCE</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">Protección avanzada de infraestructuras críticas.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-primary transition-colors mt-auto">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Red FTTH */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-white shadow-xl border border-slate-200 aspect-square flex flex-col"
            >
              <img src={fibraImg} alt="Red FTTH" className="w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-end bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Red FTTH</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">Infraestructura de red robusta para entornos industriales.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-primary transition-colors mt-auto">
                  Saber más <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Automation - Large */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-white shadow-xl border border-slate-200 aspect-[4/3] md:aspect-[16/9] flex flex-col"
            >
              <img src={autoImg} alt="Automatización" className="w-full h-1/2 md:h-3/5 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-end bg-white relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Automatización Industrial</h3>
                <p className="text-slate-600 max-w-md text-xs md:text-sm leading-relaxed mb-6 italic">Sistemas PLC, SCADA y optimización de procesos mediante tecnología de vanguardia.</p>
                <Link to="/services#automation" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-primary transition-colors mt-auto">
                  Explorar detalles <span className="w-6 md:w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Corrosion */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-6 lg:col-span-4 group relative overflow-hidden bg-white shadow-xl border border-slate-200 aspect-square flex flex-col"
            >
              <img src={corrosionImg} alt="Sistemas de Corrosión" className="w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-end bg-white relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Sistemas de Corrosión</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">Protección galvánica y monitoreo de integridad.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-primary transition-colors mt-auto">
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
