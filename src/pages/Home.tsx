import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Industrial automation facility with blurred lights and machinery" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUteGzAcBLvJQSremX7biKrRDQEzquZC08OMZ4q7YGuFLZ5smhgzcnoBPqEMKGfVEr8kP-n3vlo4zs58HjoY02XRvHfBCqF4A7cnwA0ZgzLKSGqiO3oWpC6hGwx7yLJbTapf3ZY2Dx8N9id5ZZv6Zyj-Ug0sO-mp4x1pmx0dRBNKrYlYhUR1RFuU14L31pvUsGKTTLk704Kk7NqZ4VdGNMjVY0K04JeGXWQus7T7Gh80ZrgM5BQpLgxVPY1lNnfJHmdktbi1TMXEA"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/80 bg-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Evolución en Ingeniería
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
          >
            Ingeniería que <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Evoluciona</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 font-light leading-relaxed"
          >
            Más de 20 años de legado técnico consolidado en una nueva visión. Transformamos la industria con soluciones de ingeniería de vanguardia.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            >
              Descubre Nuestros Servicios
              <span className="material-icons text-sm">arrow_downward</span>
            </Link>
            <Link 
              to="/about" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-lg text-base font-bold transition-all flex items-center justify-center"
            >
              Nuestro Legado
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Legacy / Evolution Section */}
      <section className="py-24 bg-background-light relative" id="legacy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Nuestra Historia</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                De <span className="text-slate-400 decoration-slate-400 line-through decoration-2">Control Integral MM</span> a <span className="text-primary">CIS</span>
              </h3>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Durante dos décadas, Control Integral MM estableció el estándar de confiabilidad industrial. Hoy, evolucionamos a <strong>CIS</strong>, llevando adelante más de 20 años de maestría técnica mientras abrazamos el futuro de la automatización y la integración digital.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestra nueva identidad refleja un enfoque más nítido, capacidades más amplias y un compromiso inquebrantable con la excelencia en ingeniería. Los mismos expertos, una nueva visión.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img alt="Engineer Portrait" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMO_EDuCSfSVPTyEKZSo1CwAug-cS7EBb97iWGQ-mk8Rt88EKh3aYSsrEJFvOazUzzqrbB0l2KmEpeGTXCeHxB0BVvIPtpHPk1aZWvlly8koPQQswzXYcYvvlLuvAl0dTh-YM4m7k4cqZfCjB6mmWtU6cW-dywaYDrZHOyrlJQHak6S5pyjJAONZ-GyvhgiV9Thb00c97lVWRPhTKJL32HYEmtRYAX1nabJytSe-J_5iohXieFpp455kIChJPf627Lm68sqIqFO4" />
                  <img alt="Engineer Portrait" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABYVSAHCXoEHZb86-5nJ6XdqBzVEe56YtRO6DrItLGUATX9oE0w4PWISx4ru_r0RUheoMFzKhCsj5Q1Fye6KWV1zxUoxzmDwcYXMGMLUPbUFInJjX_tU-58xFqHmf15ZVwC2sq3Qzi2ywaMmktPKuJBq9A5o9lBdD2Aj9hrEhHX7_QPwOTks3TZ2Q7qkwO6RjvC8Z0-vQ8IiOxxqg4sLouw_0122A2MblDIa5b2zoerZTqBwoDoivxh5JHLt-N93KaFZE7NQwlG3k" />
                  <img alt="Engineer Portrait" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhWVaFEI1C1Ym2bm8Qb-X8Har_kWKpCXYX560C2HehBh7dezFrWOM5Lp2u0zNUSL54cDzm3nj7VatxmxpRGY01Sp4k0uBFNq5qxBOqr8G0-o1fSu5O3GvBeXDMgLDnQGcwNMzTlPp3L_3VccBFemaflbQqL_n4GUtL5ycqImuB3kZWSgLzXVyGZVPdPOY6CCIEICT3OF2_vXlxM2Rowgyc6QSAxCjDXtO2KJWUNuA6ykTdz97y9zde1PkXMgUvGiSUyXIFVGXSlIc" />
                </div>
                <span className="text-sm font-medium text-slate-500">Únete a nuestro creciente equipo de expertos</span>
              </div>
            </div>
            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="absolute -inset-4 bg-slate-200 rounded-xl transform -rotate-3 transition-transform group-hover:-rotate-6 opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex flex-col">
                {/* Before/After Split Visual simulation */}
                <div className="h-1/2 relative overflow-hidden border-b border-white/20">
                  <img alt="Vintage industrial control panel" className="w-full h-full object-cover filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwtAN3f6HHNQ_HXYn9kWzzDao-HPOyJQ0BN0MA-Kv5UjLFBoeVPoU00d5lxdV8dVmHWsjDf7QQtHQe-TpAAf8labS0lFseJ0D7AOtEGioHMZCZBMhwoxJtmPtLh8XFMRCujuFdCPd3y85eUvWYQS_Jg5D-z0fblRbo3JQwdbygyg31YUarlQT5L7cdHYHdDYrNlJvWHolUjMI__8Pv2QISqoSE-qm0aLmzalhHWynWpBAUnAAcBt7pbzYhGFUoTq0hoFXBRmSGR-g" />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-bold rounded">LEGADO</div>
                </div>
                <div className="h-1/2 relative overflow-hidden">
                  <img alt="Modern server room with blue lights" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeIPouHft2P1Yi1nMkrpz1-795RoxsE7pJ-bOZFZ29foIlxcQNA-iSMqpEjfIdmia7O8H6jgxWZRBoXCcLtQ8v_REnCjdsC555419hJbrXuv6rd5VYq4S2wg7RrG06T_n0Vq0lfqu7KX2OcJJoFpWiJirkbSElVB7bmqDXc3G1yLqfv4yybUGTqv_rJnC-q2QFZ8C5kiEimYhVbNwhm8FwAZX4SuK52wRo8S9PzI0m_fsJVe06C8p8m9_KpLNEsm2Ax2T0VVnB3AE" />
                  <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 text-xs font-bold rounded">FUTURO</div>
                </div>
                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                  <span className="material-icons text-primary text-3xl">change_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Lo Que Hacemos</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Pilares de Ingeniería</h2>
            <p className="max-w-2xl mx-auto text-slate-600">Soluciones industriales integrales diseñadas para eficiencia, seguridad y escalabilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <Link to="/services" className="group relative bg-background-light rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                <img alt="Robotic arm in factory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNW4og58ZSYjCytfhCNP6Sg3mRwoRTfkCzr-yIXyifQKw3P0Diujd4lUySgwKBfegmpgMLFQptraSZlUb6lix8df9X1eH_YsaOp_bPZXt-MiTRZ7q9fFfBv8nwtVJ_Y8pHz3HTa8CT2E4BVwLUIs_37XFdglrYzt2V80nZMsF9A5WvMlSp78W5dYBzkaqXpAZOEHp5B6uGZ7HGqNW3siocTEMpu8sZhto2t64AcIVqk9INLqNzZ3xDBWMQWDLShIkRg64O3Vo5XdI" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center -mt-12 relative z-20 shadow-md mb-4 text-primary">
                  <span className="material-icons text-3xl">settings_input_component</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Automatización</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Integración avanzada de PLC y SCADA para optimizar líneas de producción y minimizar tiempos de inactividad.
                </p>
              </div>
            </Link>
            {/* Service Card 2 */}
            <Link to="/services" className="group relative bg-background-light rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                <img alt="High voltage electrical towers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjbLxuIPGeVfREcIqQTj5eeZ-snz7eqsZwlYALzIOMAHVJ83DPbPn9DLAHYh2ITqIJ6EJoCjwc2dgkRupUnr6BccEUaPFrVkICt2LhykAZ1px7Sla0QqYMDAuvMhzDcom3VtLYsl14D23xwKje-u9e7yxicJ3PTSVf9qD8_MY7QrCDV-2uE5nli_VrWXTzdhhIFSogO-Rpl0Wir1W3vhB0hKfujdfLyE7h0WMcD33dUhBXnkZytIvXJpOm-dNpE39Vica9pYnPc8k" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center -mt-12 relative z-20 shadow-md mb-4 text-primary">
                  <span className="material-icons text-3xl">bolt</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Electricidad</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Soluciones de alta y media tensión, diseño de paneles industriales y sistemas de distribución de energía.
                </p>
              </div>
            </Link>
            {/* Service Card 3 */}
            <Link to="/services" className="group relative bg-background-light rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                <img alt="Fire safety sprinkler system" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0D72fWmh2gw74fo9fPsK5m_xyMybUt8R3QvRCrct-AbwrbE7htY1knkKJhiM9gj6FxSJr8LAGrIZVDcvVZ_fb1nF7pkR9qLHAOnerptFLg6FaYyisFcZzpbRkjfBqqsGRP3SV9eRFXZ4Ze24B3q5KFjGzHExWP2Xlz5bXwt2GwvQvTLlt_9GYqUj2bctm30zte9VLN0Fi7xavOUumasaGOWMrrC1XeDRTl7VcFTMcILSthlmpYawTZWLyQgMXKV6qIBYgOqprBQU" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center -mt-12 relative z-20 shadow-md mb-4 text-primary">
                  <span className="material-icons text-3xl">shield</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Protección de Activos</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Detección de incendios de última generación, instrumentación de seguridad y defensa de infraestructura crítica.
                </p>
              </div>
            </Link>
            {/* Service Card 4 */}
            <Link to="/services" className="group relative bg-background-light rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                <img alt="Fiber optic cables" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUkDwJ-WTl0Wnw_oI0DcKcOkHoZFPQLc0FccMfwt2Oav6u_VOqgj89_9ZBzATBhYOk3v3hoMJy2FmUjsXkKcE97d6A7zPwIriUWYibi3_zxfU2fSB90amlZWH1OFTSdQc2PXoeeq38mbk91b_wyzfXHGMYR17Flazd2QpT4drglwNbs8bZXz6repDkGmm0wkOpC7B5eSbl-DZduDDF_6Mkrduc7vtfwmUvicegXffX9JPqG8vbTZgG2HEfkypb3xjJI--8FxfeL1k" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center -mt-12 relative z-20 shadow-md mb-4 text-primary">
                  <span className="material-icons text-3xl">router</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Telecomunicaciones</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Redes robustas de fibra óptica, cableado estructurado y transmisión de datos industriales.
                </p>
              </div>
            </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-extrabold mb-2">+2800</div>
              <div className="h-1 w-12 bg-white/50 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">Puntos Ópticos</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-extrabold mb-2">20+</div>
              <div className="h-1 w-12 bg-white/50 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">Años de Experiencia</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-extrabold mb-2">150+</div>
              <div className="h-1 w-12 bg-white/50 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">Proyectos Importantes</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Con la confianza de líderes de la industria en los sectores de energía y manufactura. Entregamos precisión donde más importa.
            </p>
            {/* Logos row placeholder */}
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale">
              <span className="font-bold text-2xl text-white tracking-widest">PEMEX</span>
              <span className="font-bold text-2xl text-white tracking-widest">CFE</span>
              <span className="font-bold text-2xl text-white tracking-widest">SIEMENS</span>
              <span className="font-bold text-2xl text-white tracking-widest">SCHNEIDER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-20 bg-background-light border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Listo para actualizar tu infraestructura industrial?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Hablemos de cómo CIS puede diseñar el siguiente paso de tu evolución.
          </p>
          <form className="max-w-md mx-auto mb-12 relative" onSubmit={(e) => e.preventDefault()}>
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder="Ingresa tu correo" 
                className="flex-1 px-6 py-4 bg-white border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
              />
              <Link to="/contact" className="bg-primary hover:bg-blue-700 text-white px-6 font-bold transition-colors flex items-center">
                Conectar
              </Link>
            </div>
            <p className="text-xs text-slate-500 mt-2">Respetamos tu privacidad. Sin spam.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
