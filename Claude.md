# Arquitectura y Estructura del Proyecto: Ciscontrolmm2

## Tech Stack
- **Frontend**: React 19, React Router DOM, Vite
- **Estilos**: Tailwind CSS v4, Lucide React (Iconos)
- **Animaciones**: Motion (framer-motion v12)
- **Servicios/Dependencias Backend**: Express, better-sqlite3 (SQLite), @google/genai (Integración con Gemini AI)
- **Lenguaje**: TypeScript

## Estructura de Directorios
- `src/`
  - `components/`: Componentes reutilizables generales (ej. UI compartida como Navbar, Footer, ScrollToTop).
  - `pages/`: Vistas de la aplicación completas (`Home.tsx`, `Services.tsx`, `Projects.tsx`, `About.tsx`, `Contact.tsx`). Están implementadas con lazy-loading.
  - `assets/`: Recursos estáticos que se importan en el código.
  - `App.tsx`: Orquestación de rutas y el Layout principal (Header + Main + Footer).
  - `main.tsx` y `index.css`: Punto de entrada de React e inicialización de Tailwind CSS.
- **Raíz del Proyecto**:
  - `vite.config.ts`: Configuración que incluye plugins para React y Tailwind; mapeo de variables de entorno (`GEMINI_API_KEY`).
  - `package.json`: Scripts y dependencias requeridos para inicialización.

## Patrones y Lógica
- **Lazy Loading**: Enrutamiento optimizado mediante `Suspense` y `lazy` de React Router DOM.
- **Manejo de Variables**: El frontend expone `GEMINI_API_KEY` desde Vite, diseñado para que la infraestructura en runtime la pueda inyectar con seguridad.

## Lab Notes
- **Experimento Relámpago DDCE (`/active/ui-experiments/relampago-test.html`)**: Se desarrolló una animación procedural en Canvas para simular un rayo eléctrico de expansión lenta sobre fondo oscuro. 
  - **Rendimiento**: Se evaluó el impacto en métricas web. Si bien la animación es fluida, la generación dinámica de ramas mediante fractales sobre un `<canvas>` exige cálculo constante en el hilo principal de JavaScript y actualizaciones intensivas de repintado (paint) debido a la propiedad `shadowBlur` (resplandor).
  - **Métricas Afectadas**: Su carga al inicio del DOM podría retrasar el *LCP* (Largest Contentful Paint) si el canvas bloquea hilos clave, y probablemente eleve el *TBT* (Total Blocking Time) si la lógica iterativa de actualización de nodos resulta prolongada en dispositivos de gama media/baja. 
  - **Decisión y Recomendación**: Para producción, este efecto no debería instanciarse de manera pesada en el montado principal de alta demanda web (ej. Home). Alternativamente, se aconseja reducir sus ciclos de cálculo, limitarlo condicionalmente, o preferiblemente optar por un vídeo ligero (WebM sin fondo) de stock pre-renderizado, reduciendo a 0% la sobrecarga matemática sobre el Main Thread de JavaScript.

> **[🛑 RESOLUCIÓN EXPERIMENTO Y QA - Slider 1]:**
> La renderización del Relámpago DDCE vía Canvas Procedural fue **auditada y descartada definitivamente** debido a sus riesgos de regresión en las métricas core (Core Web Vitals).
> **Motivos:** 
> 1. Iterar fractales recursivos en Canvas 2D ocasiona un pico de latencia en el TBT (Total Blocking Time), afectando la interacción React/framer-motion.
> 2. Su inicialización temprana interrumpe los flujos de hidratación en Vite perjudicando el Largest Contentful Paint (LCP). 
> **Enfoque Obligatorio Establecido:** Usar obligatoriamente un `.webm` pre-renderizado (fondo transparente sin alpha channel) o un loop de video pasivo y limpio encrustado con la etiqueta `<video>` u opcionalmente animaciones CSS (no-DOM blocking) pero sin Canvas procedimental.

## 4. NOTAS DE LABORATORIO Y REGISTRO DE ERRORES

- **Inversión de Colores en Slider 3 (`Services.tsx`)**: Al invertir los fondos (de `bg-background-dark` a `bg-slate-50`), existía el riesgo de que los textos originales en color blanco (`text-white` y `text-slate-400`) ocasionaran errores severos o nulos de contraste. Se soluciona esto aplicando un mapeo estricto global en clases Tailwind transformando en esa página toda tipografía a `text-slate-900` para títulos y `text-slate-600` para cuerpos de texto. También se ajustaron transparencias para no fusionarse con los bloques claros.
- **Redimensionamiento y Layout en Slider 1 (`Home.tsx`)**: Tras la eliminación completa de las secciones grandes de métricas de autoridad ("Trust in Numbers" visual "20+", "150+") y "Newsletter", los bloques de contenido podían dejar una sensación de corte abrupto con un gran espacio de salto. Solución: Se reconfiguró el padding de la sección del bloque grid para absorber el blanco vacío (`pt-20 pb-32 md:pb-48`) sin extender los elementos más allá del viewport en el diseño móvil. Garantizando fluidez de visualización móvil y de escritorio sin comprometer el layout.
- **QA Accesibilidad Lab y Contrastes WCAG (Paleta Sin Extremos)**: Se evaluó la validación estricta de contraste en el prototipo `/active/ui-experiments/theme-test.css`. Se probaron colores "off-white" (`#F8FAFC`) en vez de blanco puro y un "Azul Noche Profundo" (`#0B132B`) en vez de negro. 
  - *Hallazgo de Legibilidad (Slider 3 Invertido)*: En métricas teóricas WCAG 2.1, la mezcla de texto oscuro carbón (`#0F172A`) contra el tono 'off-white' proporciona un ratio excelente de 16.3:1 (Nivel AAA). 
  - *Identificación y Mitigación de Contraste para el Acento*: El accent Cyan Eléctrico (`#00D2FF`) para el relámpago funciona perfecto en fondos oscuros (ratio 8.5:1), pero se determinó la advertencia de que fallará el contraste sobre los fondos invertidos claros en el Slider 3 reduciendo abruptamente la lectura (ratio 1.7:1). Solución propuesta: Para elementos textuales sobre la base off-white, se restringirá ese cyan y se utilizará el primario Azul Corporativo pesado (`#1C3B70`), garantizando la legibilidad perfecta.
