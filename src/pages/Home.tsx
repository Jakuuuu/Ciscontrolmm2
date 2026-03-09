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
    <div className="overflow-x-hidden">
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]">
                Ingeniería que <br />
                <span className="text-white">Evoluciona</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-xl leading-relaxed [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
                Como socios estratégicos, guiamos a la industria en su transición hacia sistemas de energía y automatización más eficientes y sostenibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <Link
                  to="/services"
                  className="px-10 py-4 bg-white text-slate-900 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                >
                  Explorar soluciones
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-4 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Agendar llamada
                </Link>
              </div>
            </motion.div>

            {/* In-hero Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">20+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Años de experiencia técnica</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">150+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Proyectos industriales entregados</span>
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

        {/* Social Proof Section (Bottom Right) */}
        <div className="absolute bottom-12 right-8 hidden md:flex items-center gap-4 z-10">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-background-dark object-cover"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Confianza Global</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-tighter font-medium">+20K PROFESIONALES CONFÍAN EN NOSOTROS</span>
          </div>
        </div>
      </section>


      {/* Services Grid (Pilares) */}
      <section className="py-32 bg-background-dark relative overflow-hidden" id="services">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Nuestras Capacidades</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Soluciones de <br /> <span className="text-slate-400">Ingeniería Crítica</span>
              </h2>
            </div>
            <Link to="/services" className="text-white text-xs font-bold tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-primary transition-all">
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Automation - Large */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-8 group relative overflow-hidden bg-slate-800 aspect-[16/9]"
            >
              <img src={autoImg} alt="Automatización" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-bold text-white mb-2">Automatización Industrial</h3>
                <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-6 italic">Sistemas PLC, SCADA y optimización de procesos mediante tecnología de vanguardia.</p>
                <Link to="/services#automation" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Explorar detalles <span className="w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* DDCE - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={ddcImg} alt="DDCE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-bold text-white mb-2">DDCE</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Protección avanzada de infraestructuras críticas.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Electricity - Square */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-4 group relative overflow-hidden bg-slate-800 aspect-square"
            >
              <img src={elecImg} alt="Electricidad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-bold text-white mb-2">Electricidad</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Ingeniería eléctrica de alta y media tensión.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Saber más <span className="w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>

            {/* Fibra - Large */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-8 group relative overflow-hidden bg-slate-800 aspect-[16/9]"
            >
              <img src={fibraImg} alt="Fibra Comunicación" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-bold text-white mb-2">Comunicaciones Ópticas</h3>
                <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-6">Infraestructura de red robusta para entornos industriales exigentes.</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
                  Explorar detalles <span className="w-8 h-[1px] bg-primary"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust in Numbers Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-white max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-extrabold mb-2">20+</div>
              <div className="h-1 w-12 bg-white/50 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">Años de Experiencia</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-extrabold mb-2">150+</div>
              <div className="h-1 w-12 bg-white/50 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">Proyectos</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Con la confianza de líderes de la industria en los sectores de energía y manufactura. Entregamos precisión donde más importa.
            </p>
            {/* Logos row placeholder */}
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale">
              <span className="font-bold text-2xl text-white tracking-widest">PDVSA</span>
              <span className="font-bold text-2xl text-white tracking-widest">CORPOELEC</span>
              <span className="font-bold text-2xl text-white tracking-widest">SIEMENS</span>
              <span className="font-bold text-2xl text-white tracking-widest">SCHNEIDER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden bg-background-dark border-t border-white/5">
        <div className="absolute inset-0 industrial-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="industrial-border p-12 md:p-16 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Mantente a la Vanguardia</h2>
              <p className="text-slate-300 text-lg">
                Recibe las últimas noticias sobre automatización industrial, casos de éxito y actualizaciones técnicas directo en tu correo.
              </p>
            </div>
            <form className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-white min-w-[300px] backdrop-blur-sm"
              />
              <button className="btn-premium whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
