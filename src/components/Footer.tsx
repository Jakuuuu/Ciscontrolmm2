import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo theme="dark" />
            </div>
            <p className="max-w-sm mb-6 leading-relaxed text-sm text-slate-500">
              Firma de ingeniería evolucionando de Control Integral MM, C.A. Brindando soluciones de automatización, electricidad y telecomunicaciones de primer nivel por más de 20 años.
            </p>
          </div>

          {/* Links */}
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h4 className="text-slate-900 font-bold uppercase text-sm tracking-widest mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Automatización</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Electricidad Industrial</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Protección de Activos</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Telecomunicaciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:border-l md:border-slate-200 md:pl-8">
            <h4 className="text-slate-900 font-bold uppercase text-sm tracking-widest mb-6 border-b border-primary w-fit pb-1">Contacto</h4>
            <ul className="space-y-4 text-sm mt-6">
              <li className="flex items-start gap-3">
                <span className="leading-tight">Dirección: Calle Tajalí D1-B, Urbanización Mar, Lechería, Estado Anzoátegui.</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Teléfono: +58 (412) 824-98-98</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Correo: info@ciscontrolmm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2023 CIS CONTROL, C.A. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
