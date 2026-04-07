import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Proyectos', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === '/';

  const showSolidNav = scrolled || !isHomePage;

  const navBg = showSolidNav
    ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200 py-3'
    : 'bg-transparent py-5';

  const logoTheme = 'dark'; // Always dark logo for light theme backdrops

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo theme={logoTheme} />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                ['INICIO', '/'],
                ['NOSOTROS', '/about'],
                ['SERVICIOS', '/services'],
                ['PROYECTOS', '/projects']
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className={`px-3 py-2 text-[13px] font-bold tracking-[0.1em] transition-all duration-300 hover:text-primary ${location.pathname === path ? 'text-primary' : (isHomePage && !scrolled ? 'text-slate-900' : 'text-slate-600')
                    }`}
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary hover:bg-slate-900 text-white px-8 py-3 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl ml-4"
              >
                Contáctanos
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${showSolidNav ? 'text-slate-600' : 'text-slate-900'} hover:text-primary transition-colors p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 absolute w-full shadow-2xl h-screen">
          <div className="px-6 pt-10 pb-10 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-4 text-xl font-black tracking-tighter uppercase transition-all ${isActive(link.path)
                  ? 'text-primary border-l-4 border-primary pl-6 bg-slate-50'
                  : 'text-slate-600 hover:text-slate-900 hover:pl-6'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 px-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-primary text-white px-8 py-5 text-sm font-black uppercase tracking-[0.3em] shadow-lg shadow-primary/20 transition-transform active:scale-95"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
