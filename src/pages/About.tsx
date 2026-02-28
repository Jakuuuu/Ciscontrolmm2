import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-background-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-gradient opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Historia</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Construyendo sobre un Legado de Excelencia</h1>
                <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                  CIS Engineering representa la evolución de Control Integral MM. Llevamos adelante décadas de experiencia mientras abrazamos el futuro de la tecnología industrial.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMO_EDuCSfSVPTyEKZSo1CwAug-cS7EBb97iWGQ-mk8Rt88EKh3aYSsrEJFvOazUzzqrbB0l2KmEpeGTXCeHxB0BVvIPtpHPk1aZWvlly8koPQQswzXYcYvvlLuvAl0dTh-YM4m7k4cqZfCjB6mmWtU6cW-dywaYDrZHOyrlJQHak6S5pyjJAONZ-GyvhgiV9Thb00c97lVWRPhTKJL32HYEmtRYAX1nabJytSe-J_5iohXieFpp455kIChJPf627Lm68sqIqFO4" 
                alt="Engineering Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background-light p-10 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-icons text-3xl">flag</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h2>
              <p className="text-slate-600 leading-relaxed">
                Proporcionar soluciones de ingeniería de clase mundial que mejoren la seguridad, eficiencia y sostenibilidad de la infraestructura industrial de México a través de la innovación y la maestría técnica.
              </p>
            </div>
            <div className="bg-background-light p-10 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-icons text-3xl">visibility</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Visión</h2>
              <p className="text-slate-600 leading-relaxed">
                Ser el líder indiscutible en automatización industrial e ingeniería eléctrica en la región, reconocidos por nuestra capacidad para resolver los desafíos técnicos más complejos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Nuestra Trayectoria</h2>
          
          <div className="relative border-l-2 border-slate-200 ml-6 md:ml-0 space-y-12">
            {/* Item 1 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="md:text-right mb-4 md:mb-0">
                <span className="text-primary font-bold text-xl">2003</span>
                <h3 className="text-lg font-bold text-slate-900">Fundación</h3>
                <p className="text-slate-600 text-sm">Se establece Control Integral MM, enfocándose en proyectos locales de automatización.</p>
              </div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
              <div className="hidden md:block"></div>
            </div>

            {/* Item 2 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="hidden md:block"></div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <div className="mb-4 md:mb-0">
                <span className="text-primary font-bold text-xl">2010</span>
                <h3 className="text-lg font-bold text-slate-900">Expansión</h3>
                <p className="text-slate-600 text-sm">Ampliación de servicios para incluir instalaciones eléctricas de alta tensión y mantenimiento.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="md:text-right mb-4 md:mb-0">
                <span className="text-primary font-bold text-xl">2018</span>
                <h3 className="text-lg font-bold text-slate-900">Contratos Mayores</h3>
                <p className="text-slate-600 text-sm">Aseguramiento de alianzas clave con PEMEX y CFE para proyectos de infraestructura a gran escala.</p>
              </div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <div className="hidden md:block"></div>
            </div>

            {/* Item 4 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="hidden md:block"></div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm animate-pulse"></div>
              <div className="mb-4 md:mb-0">
                <span className="text-primary font-bold text-xl">2023</span>
                <h3 className="text-lg font-bold text-slate-900">Rebranding a CIS</h3>
                <p className="text-slate-600 text-sm">Evolución a CIS Engineering, lanzando una nueva era de servicios de transformación digital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
