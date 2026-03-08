import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Cpu, Lightbulb, PenTool, Users, Award } from 'lucide-react';
import workspaceImg from '../assets/about_workspace.png';

export default function About() {
  const values = [
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Innovación', desc: 'Buscamos siempre la tecnología más avanzada para resolver problemas antiguos.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Integridad', desc: 'Actuamos con honestidad y ética inquebrantable en cada contrato.' },
    { icon: <Award className="w-5 h-5" />, title: 'Excelencia', desc: 'Calidad superior certificada en cada entrega y diseño técnico.' },
    { icon: <Users className="w-5 h-5" />, title: 'Compromiso', desc: 'Dedicados al éxito a largo plazo de nuestros socios industriales.' }
  ];

  return (
    <div className="bg-background-dark min-h-screen">
      {/* Premium Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 industrial-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-6 block">Nuestra Trayectoria</span>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                Legado de <br /> <span className="text-slate-500">Precisión</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                CIS CONTROL representa la evolución de Control Integral MM. Llevamos adelante décadas de maestría técnica mientras definimos el futuro de la ingeniería industrial.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tight">20+</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Años Activos</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tight">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Capacidad Propia</span>
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
                alt="Workspace"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/5 -z-10 bg-industrial-grid"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Industrial Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-12 bg-white/5 border border-white/10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">Propósito</span>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Misión</h2>
              <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-primary pl-8">
                Proporcionar soluciones de ingeniería de clase mundial que maximicen la seguridad y eficiencia de la infraestructura industrial a través de innovación constante.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-12 bg-white/5 border border-white/10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye size={120} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">Destino</span>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Visión</h2>
              <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-primary pl-8">
                Ser el referente absoluto en automatización e ingeniería eléctrica crítica en la región, reconocidos por resolver lo que otros consideran imposible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Nuestro ADN</span>
              <h2 className="text-5xl font-black text-white tracking-tighter leading-none">Valores <span className="text-slate-500">Fundamentales</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 hover:bg-primary/10 transition-colors group"
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
