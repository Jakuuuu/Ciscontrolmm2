import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: 'automation',
      title: 'Automatización Industrial',
      icon: 'settings_input_component',
      description: 'Diseñamos e implementamos sistemas de control robustos para optimizar sus procesos de producción.',
      features: [
        'Programación de PLC (Siemens, Allen Bradley)',
        'Desarrollo de SCADA y HMI',
        'Lazos de Control de Procesos',
        'Integración de Robótica Industrial',
        'Soluciones IoT e Industria 4.0'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNW4og58ZSYjCytfhCNP6Sg3mRwoRTfkCzr-yIXyifQKw3P0Diujd4lUySgwKBfegmpgMLFQptraSZlUb6lix8df9X1eH_YsaOp_bPZXt-MiTRZ7q9fFfBv8nwtVJ_Y8pHz3HTa8CT2E4BVwLUIs_37XFdglrYzt2V80nZMsF9A5WvMlSp78W5dYBzkaqXpAZOEHp5B6uGZ7HGqNW3siocTEMpu8sZhto2t64AcIVqk9INLqNzZ3xDBWMQWDLShIkRg64O3Vo5XdI'
    },
    {
      id: 'electricity',
      title: 'Ingeniería Eléctrica',
      icon: 'bolt',
      description: 'Soluciones eléctricas integrales desde subestaciones de alta tensión hasta distribución de baja tensión.',
      features: [
        'Subestaciones de Alta y Media Tensión',
        'Unidades de Distribución de Energía (PDU)',
        'Centros de Control de Motores (CCM)',
        'Sistemas de Iluminación y Eficiencia Energética',
        'Auditorías de Seguridad Eléctrica (ARC Flash)'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjbLxuIPGeVfREcIqQTj5eeZ-snz7eqsZwlYALzIOMAHVJ83DPbPn9DLAHYh2ITqIJ6EJoCjwc2dgkRupUnr6BccEUaPFrVkICt2LhykAZ1px7Sla0QqYMDAuvMhzDcom3VtLYsl14D23xwKje-u9e7yxicJ3PTSVf9qD8_MY7QrCDV-2uE5nli_VrWXTzdhhIFSogO-Rpl0Wir1W3vhB0hKfujdfLyE7h0WMcD33dUhBXnkZytIvXJpOm-dNpE39Vica9pYnPc8k'
    },
    {
      id: 'safety',
      title: 'Protección de Activos y Seguridad',
      icon: 'shield',
      description: 'Protegiendo sus activos más valiosos con sistemas avanzados de detección y supresión.',
      features: [
        'Sistemas de Detección y Alarma de Incendios',
        'Sistemas de Detección de Gas',
        'Control de Acceso y CCTV',
        'Sistemas de Parada de Emergencia (ESD)',
        'Ciberseguridad para Sistemas de Control Industrial'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0D72fWmh2gw74fo9fPsK5m_xyMybUt8R3QvRCrct-AbwrbE7htY1knkKJhiM9gj6FxSJr8LAGrIZVDcvVZ_fb1nF7pkR9qLHAOnerptFLg6FaYyisFcZzpbRkjfBqqsGRP3SV9eRFXZ4Ze24B3q5KFjGzHExWP2Xlz5bXwt2GwvQvTLlt_9GYqUj2bctm30zte9VLN0Fi7xavOUumasaGOWMrrC1XeDRTl7VcFTMcILSthlmpYawTZWLyQgMXKV6qIBYgOqprBQU'
    },
    {
      id: 'telecom',
      title: 'Telecomunicaciones',
      icon: 'router',
      description: 'Construyendo la columna vertebral de su infraestructura digital con conectividad de alta velocidad.',
      features: [
        'Redes de Fibra Óptica (OSP/ISP)',
        'Cableado Estructurado (Cat 6A, 7)',
        'Redes Inalámbricas Industriales',
        'Infraestructura de Centros de Datos',
        'VoIP y Comunicaciones Unificadas'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUkDwJ-WTl0Wnw_oI0DcKcOkHoZFPQLc0FccMfwt2Oav6u_VOqgj89_9ZBzATBhYOk3v3hoMJy2FmUjsXkKcE97d6A7zPwIriUWYibi3_zxfU2fSB90amlZWH1OFTSdQc2PXoeeq38mbk91b_wyzfXHGMYR17Flazd2QpT4drglwNbs8bZXz6repDkGmm0wkOpC7B5eSbl-DZduDDF_6Mkrduc7vtfwmUvicegXffX9JPqG8vbTZgG2HEfkypb3xjJI--8FxfeL1k'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-background-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-gradient opacity-90"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios de Ingeniería Especializada</h1>
            <p className="text-xl text-slate-300 font-light">
              Entregando precisión, confiabilidad e innovación en cada proyecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-2">
                      <span className="material-icons text-2xl">{service.icon}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  {service.title}
                </h2>
                <div className="h-1 w-20 bg-primary mb-6"></div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Capacidades Clave</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Necesita una solución personalizada?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Nuestro equipo de ingeniería está listo para abordar sus desafíos más complejos.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
            Consultar con un Ingeniero
          </a>
        </div>
      </section>
    </div>
  );
}
