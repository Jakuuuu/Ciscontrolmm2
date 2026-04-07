import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MapPin, Building2, ExternalLink, Calendar, Filter } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Optimización de Unidad de Craqueo Catalítico',
      category: 'automation',
      client: 'PDVSA',
      location: 'Complejo Criogénico José',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      description: 'Implementación de control avanzado de procesos (APC) y migración de DCS para máxima eficiencia operativa.'
    },
    {
      id: 2,
      title: 'Sistema de Respaldo Crítico Data Center',
      category: 'electricity',
      client: 'Corporación Bancaria',
      location: 'Caracas, DC',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop',
      description: 'Diseño e integración de sistema de energía redundante Tier IV con UPS paralelo y generación sincronizada.'
    },
    {
      id: 3,
      title: 'Infraestructura de Red Industrial 5.0',
      category: 'telecom',
      client: 'Siderúrgica del Orinoco',
      location: 'Puerto Ordaz, Bolívar',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1544380903-533923363321?q=80&w=1000&auto=format&fit=crop',
      description: 'Red de fibra óptica monomodo de alta disponibilidad para monitoreo en tiempo real de hornos industriales.'
    },
    {
      id: 4,
      title: 'Protección de Tanques de Combustible',
      category: 'safety',
      client: 'Terminal Marítimo',
      location: 'Zulia',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1590218706342-023a1e944b25?q=80&w=1000&auto=format&fit=crop',
      description: 'Instalación de sistema SIL-2 de detección de fuego y gas con supresión de espuma automática.'
    },
    {
      id: 5,
      title: 'Modernización de Subestación Eléctrica',
      category: 'electricity',
      client: 'Zona Industrial Valencia',
      location: 'Carabobo',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop',
      description: 'Reemplazo de transformadores de potencia y actualización de celdas de media tensión con protecciones digitales.'
    },
    {
      id: 6,
      title: 'Automatización de Planta de Alimentos',
      category: 'automation',
      client: 'Consorcio Alimenticio',
      location: 'Aragua',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
      description: 'Línea de producción integrada con PLC Siemens S7-1500 y sistema SCADA Ignition para trazabilidad total.'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'Todos los Sectores' },
    { id: 'automation', label: 'Automatización' },
    { id: 'electricity', label: 'Electricidad' },
    { id: 'telecom', label: 'Telecomunicaciones' },
    { id: 'safety', label: 'Seguridad Industrial' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 border-b border-slate-200">
        <div className="absolute inset-0 industrial-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-6 block">Casos de Éxito</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Estos son algunos de <br /> <span className="text-slate-500">nuestros proyectos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Soluciones de ingeniería de alto impacto ejecutadas bajo los más rigurosos estándares internacionales de calidad y seguridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white/80 backdrop-blur-md sticky top-20 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-primary mr-2 md:mr-4 shrink-0">
              <Filter size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Filtrar</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 md:px-6 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all shrink-0 ${filter === cat.id
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(200,16,46,0.2)]'
                  : 'border-slate-300 text-slate-600 hover:border-primary/50 hover:text-primary bg-white'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={project.id}
                  className="bg-white border border-slate-200 shadow-lg group relative overflow-hidden flex flex-col"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 p-4 z-20">
                      <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors shrink-0 ml-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Building2 size={12} className="text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={12} className="text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={12} className="text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">{project.year}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mt-auto border-t border-slate-100 pt-6">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
