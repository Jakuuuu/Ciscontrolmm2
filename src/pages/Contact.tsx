import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-background-light">
      {/* Header */}
      <section className="bg-background-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Ponte en contacto con nuestro equipo de ingeniería hoy mismo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Ponte en Contacto</h2>
                <p className="text-slate-600 mb-8">
                  Ya sea que tengas un proyecto específico en mente o simplemente quieras explorar cómo podemos ayudar a optimizar tus operaciones, estamos aquí para ayudar.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Sede Central</h3>
                    <p className="text-slate-600">Zona Industrial 4, Ciudad de México, México</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons">phone</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Teléfono</h3>
                    <p className="text-slate-600">+52 (55) 1234-5678</p>
                    <p className="text-slate-500 text-sm">Lun-Vie, 9am - 6pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons">email</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Correo Electrónico</h3>
                    <p className="text-slate-600">contact@cis-engineering.com</p>
                    <p className="text-slate-600">sales@cis-engineering.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <span className="flex flex-col items-center gap-2">
                    <span className="material-icons text-4xl">map</span>
                    <span>Integración de Mapa Interactivo</span>
                  </span>
                </div>
                {/* In a real app, embed Google Maps iframe here */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Juan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Apellido</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Pérez" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="juan@empresa.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Asunto</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option>Consulta General</option>
                    <option>Solicitar Cotización</option>
                    <option>Soporte Técnico</option>
                    <option>Oportunidad de Alianza</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
