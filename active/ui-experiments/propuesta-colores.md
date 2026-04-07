# Propuesta Visual: Paleta de Colores Corporativa
**Proyecto:** CIS CONTROL, C.A.
**Contexto Técnico:** Ingeniería, DDCE, SPRC, FTTH.

Esta propuesta se ha diseñado siguiendo directrices de marca corporativa, tecnológica y de alta elegancia, aplicando una regla estricta: **"Anti-Extremos"**. Queda excluido el uso de #FFFFFF absoluto y #000000 absoluto, maximizando así la comodidad visual y ofreciendo una sensación más profunda y premuim al usuario.

## Psicología del Color y Selección

### 1. Tonos Claros (Off-White)
**Variable:** `--color-bg-light`
**HEX propuesto:** `#F8FAFC` (Slate 50 / Tinción Azulada Muy Tenue) o `#FDFDF9` (Toque Hueso)
**Razón:** Para el fondo en las secciones invertidas (como el Slider 3), se prohíbe el blanco puro que es reflectante y rudo para el ojo. `#F8FAFC` descansa la vista, evita la fatiga lumínica y transfiere de forma inconsciente limpieza, innovación, y sofisticación corporativa en la ingeniería.

### 2. Tonos Oscuros (Deep Night / Charcoal)
**Variable:** `--color-bg-dark` / `--color-text-dark`
**HEX propuesto:** `#0B132B` (Azul Noche Profundo) y `#0F172A` (Gris Carbón Dominante)
**Razón:** Al evitar el agresivo #000000, un oscuro basado en niveles profundos de azul proporciona todo el contraste necesario de legibilidad, pero evocando confianza, seriedad corporativa, y tecnología de precisión (acorde a DDCE, SPRC y FTTH). Sirve excepcionalmente como fondo envolvente en los demás Sliders.

### 3. Color de Acento (Identidad y Energía Tecnológica)
**Variable:** `--color-accent-lightning`
**HEX propuesto:** `#00D2FF` (Cyan Eléctrico) / Apoyo: `#1C3B70` (Azul Ingeniería)
**Razón:** El cyan eléctrico armoniza a la perfección con la animación del Relámpago DDCE (Slider 1). Representa la chispa, la energía del sistema DDCE y emite una vibra "High-Tech". Su uso está destinado a elementos interactivos clave y animaciones, principalmente cuando el entorno está oscurecido.

## Estrategia de Tokens a nivel de CSS
Las variables definidas en `theme-test.css` han sido ideadas para una transposición directa en el modelo DOM cuando procedamos, y resguardan en su ADN estos principios de pureza y eficiencia visual.
