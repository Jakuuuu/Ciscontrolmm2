import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo theme="light" />
            </div>
            <p className="max-w-sm mb-6 leading-relaxed text-sm text-slate-400">
              Firma de ingeniería evolucionando de Control Integral MM. Brindando soluciones de automatización, electricidad y telecomunicaciones de primer nivel por más de 20 años.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                <span className="material-icons text-sm">work</span>
              </a>
              <a href="mailto:contact@cis-control.com" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                <span className="material-icons text-sm">email</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Automatización</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Electricidad Industrial</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Protección de Activos</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Telecomunicaciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Contacto</h4>
            <div className="mb-6">
              <Logo theme="light" />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-base mt-0.5">location_on</span>
                <span>Zona Industrial<br />Valencia, Venezuela</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-base">phone</span>
                <span>+58 (212) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-base">mail</span>
                <span>contact@cis-control.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2023 CIS CONTROL. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
