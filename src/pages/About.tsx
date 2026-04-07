import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Lightbulb, Users, Award } from 'lucide-react';
import workspaceImg from '../assets/Nosotros.jpg';

export default function About() {
  const values = [
    { icon: <Award className="w-5 h-5" />, title: 'Trayectoria y Respaldo', desc: 'Construimos nuestro presente sobre una base sólida de conocimientos y proyectos ejecutados con éxito.' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Innovación Tecnológica', desc: 'Buscamos constantemente la integración de tecnologías de última generación, como los sistemas de DDCE y SPRC, para ofrecer soluciones superiores.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Calidad y Seguridad', desc: 'Nos apegamos a los más estrictos estándares técnicos en cada diseño, instalación y puesta en marcha.' },
    { icon: <Users className="w-5 h-5" />, title: 'Alianzas Estratégicas', desc: 'Creemos en la sinergia con empresas líderes para multiplicar el valor que entregamos a nuestros clientes.' }
  ];

  return (
    <div className="bg-background-dark min-h-screen">
      {/* Premium Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 industrial-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-6 block">Nuestra Trayectoria</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                Legado de <br /> <span className="text-slate-500">Precisión</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                CIS CONTROL, C.A. representa la evolución de Control Integral MM, C.A. Llevamos adelante décadas de maestría técnica mientras definimos el futuro de la ingeniería industrial.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">20+</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Años Activos</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Capacidad</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative p-2 bg-gradient-to-br from-primary/30 to-transparent shadow-2xl"
            >
              <img
                src={workspaceImg}
                alt="Nuestro Equipo en CIS CONTROL, C.A."
                className="w-full h-auto transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 border border-white/5 -z-10 bg-industrial-grid"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Industrial Cards */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 bg-white/5 border border-white/10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
                <Target size={120} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">Propósito</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Misión</h2>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg border-l-2 border-primary pl-6 md:pl-8">
                "Proveer soluciones integrales de ingeniería, diseño, suministro y ejecución de proyectos en las áreas de electricidad, automatización, telecomunicaciones, protección de eventos atmosféricos y optimización en la producción de petróleo. Nos dedicamos a resolver los desafíos técnicos de nuestros clientes, mediante la aplicación de tecnología de vanguardia, el expertise de nuestros profesionales y el respaldo directo de nuestras alianzas estratégicas. Trabajamos día a día para garantizar la seguridad, eficiencia y continuidad operativa de las infraestructuras a nivel nacional."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 bg-white/5 border border-white/10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
                <Eye size={120} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">Destino</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Visión</h2>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg border-l-2 border-primary pl-6 md:pl-8">
                "Consolidarnos como la empresa líder y el socio estratégico referente en el sector de la ingeniería y tecnología en el país. Aspiramos a ser reconocidos por la excelencia en la ejecución de nuestros proyectos, la constante innovación de nuestro portafolio de servicios y la solidez de nuestras alianzas corporativas, impulsando el desarrollo de industrias más seguras, eficientes y conectadas con el futuro."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Nuestro ADN</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">Valores <span className="text-slate-500">Fundamentales</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 bg-white/5 border border-white/10 hover:bg-primary/10 transition-colors group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
