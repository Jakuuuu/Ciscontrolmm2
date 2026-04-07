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
