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
            alt="CIS CONTROL Portada Industrial" 
            className="w-full h-full object-cover" 
            src="https://i.postimg.cc/FRfKD14Y/A-Portada.jpg"
            referrerPolicy="no-referrer"
          />
          {/* Overlay - Reduced opacity for more prominence of the photo */}
          <div className="absolute inset-0 bg-slate-900/50 bg-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          >
            Ingeniería que <span className="text-white">Evoluciona</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/services" 
              className="group relative px-10 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Explorar Servicios</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Legacy / Evolution Section */}
      <section className="py-32 bg-white relative overflow-hidden" id="legacy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4">Nuestra Esencia</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Evolución <span className="text-slate-300">/</span> <span className="text-primary">CIS CONTROL</span>
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Durante dos décadas, hemos establecido el estándar de confiabilidad industrial. Hoy, como <strong>CIS CONTROL</strong>, llevamos adelante más de 20 años de maestría técnica.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Nuestra nueva identidad refleja un enfoque más nítido y un compromiso inquebrantable con la excelencia en ingeniería. Los mismos expertos, una nueva visión.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img alt="Modern server room" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeIPouHft2P1Yi1nMkrpz1-795RoxsE7pJ-bOZFZ29foIlxcQNA-iSMqpEjfIdmia7O8H6jgxWZRBoXCcLtQ8v_REnCjdsC555419hJbrXuv6rd5VYq4S2wg7RrG06T_n0Vq0lfqu7KX2OcJJoFpWiJirkbSElVB7bmqDXc3G1yLqfv4yybUGTqv_rJnC-q2QFZ8C5kiEimYhVbNwhm8FwAZX4SuK52wRo8S9PzI0m_fsJVe06C8p8m9_KpLNEsm2Ax2T0VVnB3AE" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center text-white font-black text-3xl rounded-full shadow-2xl">
                20+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Servicios</span>
            <h2 className="text-5xl font-black text-slate-900 mt-4 tracking-tighter">Capacidades Técnicas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Service Item 1 */}
            <Link to="/services" className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img alt="Robotic arm" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNW4og58ZSYjCytfhCNP6Sg3mRwoRTfkCzr-yIXyifQKw3P0Diujd4lUySgwKBfegmpgMLFQptraSZlUb6lix8df9X1eH_YsaOp_bPZXt-MiTRZ7q9fFfBv8nwtVJ_Y8pHz3HTa8CT2E4BVwLUIs_37XFdglrYzt2V80nZMsF9A5WvMlSp78W5dYBzkaqXpAZOEHp5B6uGZ7HGqNW3siocTEMpu8sZhto2t64AcIVqk9INLqNzZ3xDBWMQWDLShIkRg64O3Vo5XdI" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Automatización</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">PLC, SCADA y optimización de procesos industriales.</p>
            </Link>
            {/* Service Item 2 */}
            <Link to="/services" className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img alt="Electrical" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjbLxuIPGeVfREcIqQTj5eeZ-snz7eqsZwlYALzIOMAHVJ83DPbPn9DLAHYh2ITqIJ6EJoCjwc2dgkRupUnr6BccEUaPFrVkICt2LhykAZ1px7Sla0QqYMDAuvMhzDcom3VtLYsl14D23xwKje-u9e7yxicJ3PTSVf9qD8_MY7QrCDV-2uE5nli_VrWXTzdhhIFSogO-Rpl0Wir1W3vhB0hKfujdfLyE7h0WMcD33dUhBXnkZytIvXJpOm-dNpE39Vica9pYnPc8k" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Electricidad</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Alta y media tensión, paneles y distribución.</p>
            </Link>
            {/* Service Item 3 */}
            <Link to="/services" className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img alt="Safety" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0D72fWmh2gw74fo9fPsK5m_xyMybUt8R3QvRCrct-AbwrbE7htY1knkKJhiM9gj6FxSJr8LAGrIZVDcvVZ_fb1nF7pkR9qLHAOnerptFLg6FaYyisFcZzpbRkjfBqqsGRP3SV9eRFXZ4Ze24B3q5KFjGzHExWP2Xlz5bXwt2GwvQvTLlt_9GYqUj2bctm30zte9VLN0Fi7xavOUumasaGOWMrrC1XeDRTl7VcFTMcILSthlmpYawTZWLyQgMXKV6qIBYgOqprBQU" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Protección</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Detección de incendios e instrumentación de seguridad.</p>
            </Link>
            {/* Service Item 4 */}
            <Link to="/services" className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img alt="Telecom" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUkDwJ-WTl0Wnw_oI0DcKcOkHoZFPQLc0FccMfwt2Oav6u_VOqgj89_9ZBzATBhYOk3v3hoMJy2FmUjsXkKcE97d6A7zPwIriUWYibi3_zxfU2fSB90amlZWH1OFTSdQc2PXoeeq38mbk91b_wyzfXHGMYR17Flazd2QpT4drglwNbs8bZXz6repDkGmm0wkOpC7B5eSbl-DZduDDF_6Mkrduc7vtfwmUvicegXffX9JPqG8vbTZgG2HEfkypb3xjJI--8FxfeL1k" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Telecom</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Fibra óptica y redes de datos industriales.</p>
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
              <span className="font-bold text-2xl text-white tracking-widest">PDVSA</span>
              <span className="font-bold text-2xl text-white tracking-widest">CORPOELEC</span>
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
