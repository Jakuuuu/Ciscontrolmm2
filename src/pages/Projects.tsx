import { motion } from 'motion/react';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Actualización de Automatización de Refinería',
      category: 'automation',
      client: 'PEMEX',
      location: 'Tula, Hidalgo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNW4og58ZSYjCytfhCNP6Sg3mRwoRTfkCzr-yIXyifQKw3P0Diujd4lUySgwKBfegmpgMLFQptraSZlUb6lix8df9X1eH_YsaOp_bPZXt-MiTRZ7q9fFfBv8nwtVJ_Y8pHz3HTa8CT2E4BVwLUIs_37XFdglrYzt2V80nZMsF9A5WvMlSp78W5dYBzkaqXpAZOEHp5B6uGZ7HGqNW3siocTEMpu8sZhto2t64AcIVqk9INLqNzZ3xDBWMQWDLShIkRg64O3Vo5XdI',
      description: 'Modernización del sistema de control distribuido (DCS) para la unidad de craqueo catalítico.'
    },
    {
      id: 2,
      title: 'Subestación 115kV',
      category: 'electricity',
      client: 'CFE',
      location: 'Monterrey, NL',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjbLxuIPGeVfREcIqQTj5eeZ-snz7eqsZwlYALzIOMAHVJ83DPbPn9DLAHYh2ITqIJ6EJoCjwc2dgkRupUnr6BccEUaPFrVkICt2LhykAZ1px7Sla0QqYMDAuvMhzDcom3VtLYsl14D23xwKje-u9e7yxicJ3PTSVf9qD8_MY7QrCDV-2uE5nli_VrWXTzdhhIFSogO-Rpl0Wir1W3vhB0hKfujdfLyE7h0WMcD33dUhBXnkZytIvXJpOm-dNpE39Vica9pYnPc8k',
      description: 'Construcción llave en mano de una subestación de alta tensión incluyendo transformadores y tableros.'
    },
    {
      id: 3,
      title: 'Backbone de Fibra Óptica',
      category: 'telecom',
      client: 'Parque Industrial',
      location: 'Querétaro, Qro',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUkDwJ-WTl0Wnw_oI0DcKcOkHoZFPQLc0FccMfwt2Oav6u_VOqgj89_9ZBzATBhYOk3v3hoMJy2FmUjsXkKcE97d6A7zPwIriUWYibi3_zxfU2fSB90amlZWH1OFTSdQc2PXoeeq38mbk91b_wyzfXHGMYR17Flazd2QpT4drglwNbs8bZXz6repDkGmm0wkOpC7B5eSbl-DZduDDF_6Mkrduc7vtfwmUvicegXffX9JPqG8vbTZgG2HEfkypb3xjJI--8FxfeL1k',
      description: 'Instalación de 50km de cable de fibra óptica para un nuevo complejo industrial.'
    },
    {
      id: 4,
      title: 'Sistema de Supresión de Incendios',
      category: 'safety',
      client: 'Planta Química',
      location: 'Coatzacoalcos, Ver',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0D72fWmh2gw74fo9fPsK5m_xyMybUt8R3QvRCrct-AbwrbE7htY1knkKJhiM9gj6FxSJr8LAGrIZVDcvVZ_fb1nF7pkR9qLHAOnerptFLg6FaYyisFcZzpbRkjfBqqsGRP3SV9eRFXZ4Ze24B3q5KFjGzHExWP2Xlz5bXwt2GwvQvTLlt_9GYqUj2bctm30zte9VLN0Fi7xavOUumasaGOWMrrC1XeDRTl7VcFTMcILSthlmpYawTZWLyQgMXKV6qIBYgOqprBQU',
      description: 'Diseño e instalación de un sistema de supresión de incendios a base de espuma para tanques de almacenamiento.'
    },
    {
      id: 5,
      title: 'Migración SCADA',
      category: 'automation',
      client: 'Planta de Tratamiento de Agua',
      location: 'Guadalajara, Jal',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwtAN3f6HHNQ_HXYn9kWzzDao-HPOyJQ0BN0MA-Kv5UjLFBoeVPoU00d5lxdV8dVmHWsjDf7QQtHQe-TpAAf8labS0lFseJ0D7AOtEGioHMZCZBMhwoxJtmPtLh8XFMRCujuFdCPd3y85eUvWYQS_Jg5D-z0fblRbo3JQwdbygyg31YUarlQT5L7cdHYHdDYrNlJvWHolUjMI__8Pv2QISqoSE-qm0aLmzalhHWynWpBAUnAAcBt7pbzYhGFUoTq0hoFXBRmSGR-g',
      description: 'Migración de sistemas SCADA heredados a una arquitectura moderna basada en web.'
    },
    {
      id: 6,
      title: 'Energía para Centro de Datos',
      category: 'electricity',
      client: 'Empresa Tecnológica',
      location: 'Ciudad de México',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeIPouHft2P1Yi1nMkrpz1-795RoxsE7pJ-bOZFZ29foIlxcQNA-iSMqpEjfIdmia7O8H6jgxWZRBoXCcLtQ8v_REnCjdsC555419hJbrXuv6rd5VYq4S2wg7RrG06T_n0Vq0lfqu7KX2OcJJoFpWiJirkbSElVB7bmqDXc3G1yLqfv4yybUGTqv_rJnC-q2QFZ8C5kiEimYhVbNwhm8FwAZX4SuK52wRo8S9PzI0m_fsJVe06C8p8m9_KpLNEsm2Ax2T0VVnB3AE',
      description: 'Sistema de suministro de energía redundante (UPS + Generadores) para un centro de datos Tier III.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'automation', label: 'Automatización' },
    { id: 'electricity', label: 'Electricidad' },
    { id: 'telecom', label: 'Telecom' },
    { id: 'safety', label: 'Seguridad' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-background-light">
      {/* Header */}
      <section className="bg-background-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Portafolio de Proyectos</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de nuestros desafíos de ingeniería más impactantes resueltos en todo México.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-slate-200 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary z-20 uppercase tracking-wide">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="material-icons text-sm">business</span> {project.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-icons text-sm">place</span> {project.location}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
