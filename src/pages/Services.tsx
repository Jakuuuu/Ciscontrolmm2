import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Settings, Zap, Shield, Network, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import autoImg from '../assets/service_automation.png';
import elecImg from '../assets/service_electricity.png';
import telecomImg from '../assets/service_telecom.png';
import safetyImg from '../assets/service_safety.png';
import corrosionImg from '../assets/corrosion.png';

export default function Services() {
  const services = [
    {
      id: 'electricity',
      title: 'Electricidad',
      icon: <Zap className="w-6 h-6" />,
      description: 'Soluciones eléctricas integrales que garantizan la estabilidad y eficiencia energética de su infraestructura industrial.',
      features: [
        'Subestaciones de Alta y Media Tensión',
        'Unidades de Distribución Crítica (PDU)',
        'Centros de Control de Motores (CCM)',
        'Sistemas de Iluminación de Alta Eficiencia',
        'Análisis de Calidad de Energía'
      ],
      image: elecImg,
      color: 'border-yellow-500/20'
    },
    {
      id: 'ddce',
      title: 'Desionizador de cargas electromagnéticas (DDCE)',
      icon: <ShieldAlert className="w-6 h-6" />,
      description: 'Protección avanzada y continua de infraestructuras críticas contra descargas atmosféricas mediante tecnología de desionización.',
      features: [
        'Prevención de formación de rayos',
        'Protección de equipos electrónicos sensibles',
        'Reducción de riesgos de incendio por descargas',
        'Mantenimiento de continuidad operativa',
        'Instalación bajo normas internacionales'
      ],
      image: safetyImg,
      color: 'border-red-500/20'
    },
    {
      id: 'automation',
      title: 'Automatización',
      icon: <Settings className="w-6 h-6" />,
      description: 'Diseñamos e implementamos sistemas de control robustos para optimizar sus procesos de producción a través de tecnologías inteligentes.',
      features: [
        'Programación de PLC (Siemens, Allen Bradley)',
        'Desarrollo de SCADA y HMI personalizados',
        'Optimización de Lazos de Control',
        'Integración de Robótica Industrial',
        'Alarma contra incendios',
        'Sistemas de paradas de emergencia'
      ],
      image: autoImg,
      color: 'border-blue-500/20'
    },
    {
      id: 'telecom',
      title: 'Despliegue FTTH',
      icon: <Network className="w-6 h-6" />,
      description: 'Construimos la red de fibra óptica óptima para asegurar la transmisión de datos a gran escala y alta velocidad.',
      features: [
        'Despliegue de Fibra Óptica (OSP/ISP)',
        'Arquitecturas de Red Industrial',
        'Radioenlaces de Microondas',
        'Infraestructura para Data Centers',
        'Sistemas de Telefonía VoIP Industrial'
      ],
      image: telecomImg,
      color: 'border-cyan-500/20'
    },
    {
      id: 'corrosion',
      title: 'Sistema de prevención y remoción de corrosión (SPRC)',
      icon: <Shield className="w-6 h-6" />,
      description: 'Protección integral y galvánica diseñada para el monitoreo y mantenimiento de la integridad de sus instalaciones metálicas y de concreto.',
      features: [
        'Monitoreo de integridad',
        'Protección catódica',
        'Remoción de elementos corrosivos',
        'Mantenimiento preventivo especializado',
        'Incremento de vida útil de activos'
      ],
      image: corrosionImg,
      color: 'border-orange-500/20'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-6 block">Nuestras Soluciones</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Ingeniería de <br /> <span className="text-slate-500">Alto Rendimiento</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Transformamos desafíos industriales complejos en sistemas eficientes, seguros y tecnológicamente avanzados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Premium Grid */}
      <section className="pb-32 bg-slate-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-40">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-16 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-3/5">
                  <div className={`relative p-1 bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-transparent' : 'from-transparent to-primary/20'}`}>
                    <div className="relative aspect-[16/9] overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10"></div>
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 border border-slate-200 -z-10 hidden sm:block`}></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <div className="h-[1px] flex-grow bg-slate-200"></div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed italic border-l-2 border-primary pl-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700 group">
                        <CheckCircle2 className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="mt-12 flex items-center gap-3 text-slate-900 text-xs font-bold tracking-[0.2em] uppercase group"
                    >
                      Solicitar Información Técnica
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Hablemos de su Próximo Desafío
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Nuestros ingenieros están listos para diseñar la solución que su proyecto necesita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-12 py-5 bg-white text-primary font-bold uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl">
              Consultar con un Experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
