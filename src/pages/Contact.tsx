import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquareText } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 border-b border-slate-200">
        <div className="absolute inset-0 industrial-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-6 block">Contacto Directo</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Inicie su <br /> <span className="text-slate-500">Proyecto</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Nuestro equipo de ingeniería está listo para analizar sus requerimientos técnicos y proponer soluciones de alto rendimiento.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Contact Info - Technical Sidebar */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8">Canales Oficiales</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Sede Central</h3>
                      <p className="text-slate-900 font-medium">Zona Industrial II, Valencia, Carabobo 2001, Venezuela</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Ingeniería y Ventas</h3>
                      <p className="text-slate-900 font-medium">+58 (241) 832-1594</p>
                      <p className="text-slate-500 text-sm">Disponibilidad: 08:00 - 17:00 (VET)</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Consultas Técnicas</h3>
                      <p className="text-slate-900 font-medium group-hover:text-primary transition-colors">proyectos@ciscontrol.com</p>
                      <p className="text-slate-900 font-medium group-hover:text-primary transition-colors">info@ciscontrol.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Support Box */}
              <div className="p-8 bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-4 mb-4 text-primary">
                  <Clock size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Respuesta Garantizada</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Evaluamos cada solicitud bajo criterios técnicos rigurosos. Recibirá una respuesta de nuestro departamento de ingeniería en menos de 24 horas hábiles.
                </p>
              </div>
            </div>

            {/* Contact Form - Industrial Design */}
            <div className="lg:col-span-7 bg-white shadow-xl border border-slate-200 p-12 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquareText size={120} className="text-primary" />
              </div>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-10">Formulario de Solicitud</h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Nombre Completo</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-slate-900 outline-none focus:border-primary transition-all placeholder-slate-400" placeholder="Ej. Ing. Carlos Pérez" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Empresa / Organización</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-slate-900 outline-none focus:border-primary transition-all placeholder-slate-400" placeholder="Ej. Empresa Polar" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Correo Corporativo</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-slate-900 outline-none focus:border-primary transition-all placeholder-slate-400" placeholder="c.perez@empresa.com" />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Servicio Requerido</label>
                  <select className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-slate-900 outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                    <option className="bg-white">Automatización Industrial</option>
                    <option className="bg-white">Ingeniería Eléctrica</option>
                    <option className="bg-white">Telecomunicaciones</option>
                    <option className="bg-white">Seguridad Proceso (SIS)</option>
                    <option className="bg-white">Mantenimiento Especializado</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Descripción del Requerimiento</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-slate-900 outline-none focus:border-primary transition-all resize-none placeholder-slate-400" placeholder="Detalle los desafíos técnicos de su proyecto..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary py-6 text-white text-[12px] font-black uppercase tracking-[0.3em] hover:bg-slate-900 transition-all flex items-center justify-center gap-4 group shadow-md">
                  Enviar Requerimiento
                  <Send size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
