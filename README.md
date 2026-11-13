# Aluna Residencial — Landing page

Sitio de una sola página para **Senderos de Aluna**, un desarrollo residencial de vivienda horizontal en condominio en Villa Nueva, Guatemala, de **Grupo MR2**. Presenta el proyecto, el plano de conjunto, las amenidades, los modelos de casa (Aluna 70, 90 y 100), la ubicación y el financiamiento FHA, y capta leads mediante formularios.

El sitio se migró desde WordPress + Elementor a Vite + React + TypeScript.

> **Estado:** en desarrollo. No está desplegado, no tiene variables de entorno, no tiene tracking y el envío de leads está simulado (ver [Pendientes](#pendientes)).

---

## Stack

| Área        | Herramienta                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Build       | Vite 8 (Rolldown) con `@vitejs/plugin-react` y React Compiler (`babel-plugin-react-compiler` vía `@rolldown/plugin-babel`) |
| UI          | React 19 + TypeScript 6                                                                                                    |
| Estilos     | Tailwind CSS v4 (`@tailwindcss/vite`), configurado desde `src/index.css` con `@theme` (no hay `tailwind.config.js`)        |
| Rutas       | React Router 8 (se importa desde `"react-router"`, no desde `react-router-dom`)                                            |
| Formularios | react-hook-form + intl-tel-input (`@intl-tel-input/react/with-utils`) para teléfonos                                       |
| Carruseles  | Embla Carousel (`embla-carousel-react`, con plugin de autoplay disponible)                                                 |
| Animaciones | Motion (`motion/react`)                                                                                                    |
| Tipografía  | Poppins vía `@fontsource/poppins`                                                                                          |
| Calidad     | ESLint 10 + typescript-eslint + reglas de React Hooks                                                                      |

## Comandos

Requiere Node.js en una versión compatible con Vite 8 (se recomienda la LTS actual) y npm.

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # verificación de tipos (tsc -b) + build de producción en dist/
npm run preview   # previsualizar el build
npm run lint      # ESLint
```

`npm run build` falla si hay errores de TypeScript, incluidos imports o variables sin usar (`noUnusedLocals` / `noUnusedParameters`). Antes de dar por terminado un cambio, conviene correrlo.

## Estructura

```
src/
├── main.tsx                  # punto de entrada
├── router.tsx                # definición de rutas
├── index.css                 # Tailwind, fuentes, paleta (@theme) y clases de tipografía
├── layout/layout.tsx         # layout general
├── pages/
│   └── home/
│       ├── home.tsx          # la página: secciones + popups controlados por la URL
│       └── components/       # una sección por archivo (hero, historia, plano, amenidades,
│                             # modelos, explora-cx, cotiza, ubicacion, fha, navbar, footer)
├── components/
│   ├── carousel/             # image-carousel (planos de modelos), infinite-carousel
│   ├── forms/
│   │   ├── fields.tsx        # Field, PhoneField, ErrorText, inputClass y reglas de validación
│   │   └── xperience-form.tsx
│   ├── popup/                # form-popup, model-popup, plano-popup
│   ├── pill-button.tsx       # botón tipo píldora (con icono opcional)
│   ├── fill-button.tsx       # botón relleno
│   ├── floatin-actions.tsx   # botón flotante de WhatsApp
│   └── formulario-cotiza.tsx
├── data/
│   ├── amenidades.ts         # amenidades: id, label, Icon, images[4]
│   └── modelos.ts            # modelos: descripción, niveles (plano + espacios con icono)
├── lib/leads.ts              # envío (simulado) y guardado de leads
├── hooks/
│   ├── use-lock-body-scroll.ts
│   └── use-media-query.ts
├── const/                    # URLs y constantes (click-and-xperience, nav-links)
├── types/xperience-form.ts   # tipo DatosLead
└── assets/
    ├── icons/components/     # iconos como componentes TSX (usan currentColor)
    ├── icons/{form,modelo,footer}/  # iconos como archivos SVG (se usan en <img>)
    ├── images/               # fotos, fondos y formas decorativas
    └── logos/
```

El alias `@` apunta a `src/` (configurado en `vite.config.ts` y en `tsconfig`).

---

## Sistema de diseño

### Colores

Definidos en `src/index.css` dentro de `@theme`, por lo que generan utilidades de Tailwind (`bg-proposito`, `text-beige`, `border-horizonte`, etc.). Cada color tiene una base y cuatro derivados, del 1 (más cercano a la base) al 4 (más claro).

| Token       | Base      | Uso típico                                       |
| ----------- | --------- | ------------------------------------------------ |
| `beige`     | `#f2ece1` | fondos claros, texto sobre verde oscuro          |
| `origen`    | `#3c4142` | texto oscuro neutro                              |
| `impulso`   | `#df7a5f` | acentos, mensajes de error                       |
| `proposito` | `#166d5c` | verde oscuro principal: títulos, botones, bordes |
| `encuentro` | `#89c38b` | verde claro: fondo del `body` y de popups        |
| `horizonte` | `#daf4af` | verde muy claro: detalles sobre `proposito`      |

Usa siempre estos tokens en lugar de valores hex. Las excepciones existentes (por ejemplo `#E1F1DC` en los inputs o los colores de la simbología del plano) son candidatas a convertirse en tokens.

### Tipografía

Poppins en pesos 300 a 800, con cursivas. Las clases de texto responsivo están en `@layer components` de `index.css` y ya escalan por breakpoint; úsalas en lugar de `text-[..]` sueltos:

| Clase                         | Uso                                                  |
| ----------------------------- | ---------------------------------------------------- |
| `.hero`                       | títulos principales (32 → 64px)                      |
| `.hero-2`                     | títulos secundarios (28 → 52px)                      |
| `.modelo-title`               | títulos de modelos                                   |
| `.subtitle`, `.subtitle-caps` | subtítulos                                           |
| `.regular`                    | texto de lectura                                     |
| `.paragraph`                  | párrafos pequeños con interlineado 150%              |
| `.button`                     | texto de botones                                     |
| `.caption`                    | etiquetas pequeñas (11px)                            |
| `.formulario-input`           | inputs (16px fijos: evita el zoom automático de iOS) |
| `.text-icon`                  | texto junto a iconos                                 |

Como son clases de `@layer components` y no utilidades, **no aceptan variantes** (`md:subtitle` no funciona). Para un tamaño distinto en un breakpoint, se combina la clase con una utilidad: `subtitle max-md:text-[17px]`.

### Breakpoints

Mobile-first con los de Tailwind (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) más dos personalizados que se escriben como valores arbitrarios: `min-[1440px]:` y `min-[1920px]:`. El corte principal entre diseño móvil y de escritorio es `lg`; en el código es frecuente `max-lg:` para estilos solo de móvil y tablet.

### Otras utilidades globales

- `.drop-shadow`: sobrescribe la utilidad de Tailwind con una `box-shadow` suave.
- `.curva`: esquina curva decorativa en color `proposito`.
- `body` tiene `text-wrap: pretty`; los títulos suelen llevar `text-balance`.
- `html` y `body` tienen `overflow-x: clip` para evitar scroll horizontal.

---

## Patrones del proyecto

### Popups controlados por la URL

Los popups se abren con un parámetro de búsqueda, no con estado local, para que el botón "atrás" del navegador los cierre y se puedan enlazar:

| URL                     | Popup                                                       |
| ----------------------- | ----------------------------------------------------------- |
| `?popup=plano-conjunto` | `PlanoPopup` (plano de conjunto con zoom al pasar el mouse) |
| `?form=xperience`       | `FormPopup` con `XperienceForm`                             |

`home.tsx` lee los parámetros con `useSearchParams` y monta el popup correspondiente. Al cerrar, se borra **solo** ese parámetro con `replace: true` (para no ensuciar el historial) y `preventScrollReset: true` (para que la página no salte):

```tsx
const cerrar = (param: string) => {
  setSearchParams(
    (prev) => {
      const next = new URLSearchParams(prev);
      next.delete(param);
      return next;
    },
    { replace: true, preventScrollReset: true },
  );
};
```

Para abrir uno: `setSearchParams({ form: "xperience" }, { state: { origen }, preventScrollReset: true })`. El `state.origen` identifica desde qué botón se abrió el formulario (pensado para el tracking futuro).

### Estructura de un popup

`PlanoPopup` y `FormPopup` usan el elemento nativo `<dialog>` con `showModal()`, que resuelve capa superior, foco atrapado y tecla Escape. Patrón base:

- `useLockBodyScroll()` para bloquear el scroll de la página (bloquea `html` y `body`, compensa el ancho de la barra de scroll y admite varios bloqueos simultáneos con un contador).
- `onCancel` con `preventDefault()` + `onClose()` para Escape.
- `onClick` en el `<dialog>` comprobando `e.target === e.currentTarget` para cerrar al hacer clic en el fondo.
- `aria-labelledby` apuntando al título visible del contenido.
- Clases `backdrop:` de Tailwind para el fondo oscuro.

`ModelPopup` usa un `div` con `role="dialog"` en lugar de `<dialog>`, con su propio manejo de Escape y foco. Si se modifica, conviene migrarlo al mismo patrón que los demás.

Dentro de un `<dialog>` modal, cualquier cosa que se agregue al `body` (por ejemplo el popup de pantalla completa de intl-tel-input en móvil) queda **detrás** del modal. Por eso `PhoneField` debe usarse con `useFullscreenPopup={false}` dentro de popups.

### Formularios

Se construyen con react-hook-form y las piezas de `components/forms/fields.tsx`:

- `Field`: contenedor con icono a la izquierda y mensaje de error (`ErrorText`). El error usa el id `${id}-error`, que se enlaza con `aria-describedby` en el input.
- `inputClass`: clases compartidas de los inputs.
- `PhoneField`: teléfono con intl-tel-input. Guarda el número en formato E.164, país inicial Guatemala, valida con la utilidad de la librería.
- Reglas reutilizables: `nombreRules`, `apellidosRules`, `correoRules`.

Los formularios usan `mode: "onTouched"`, `noValidate` y prellenan los datos con `getLeadGuardado()`.

### Leads (`src/lib/leads.ts`)

Actualmente **simulado**: `solicitarFolleto(datos)` guarda el lead en `localStorage` (clave `aluna_residencial_lead`) y espera 500 ms. El registro vence a los 7 días; `getLeadGuardado()` devuelve `null` si no existe o caducó.

Interruptores en el mismo archivo:

- `FORMULARIOS_ACTIVOS`: apaga la apertura de formularios mientras se configura el backend.
- `FICHAS_ACTIVAS`: descarga de fichas técnicas en los popups de modelo (apagada).
- `FOLLETO_URL` y `AVISO_PRIVACIDAD_URL`: pendientes (vacío y `"#"`).

Los componentes llaman a estas funciones sin saber que están simuladas, así que conectar el backend solo debería requerir cambiar este archivo.

Flujo del botón "Iniciar recorrido virtual": si ya hay un lead guardado, se salta el formulario (la redirección a CX en ese caso está pendiente); si no, abre `?form=xperience`. Al enviar el formulario, redirige a `CLICK_AND_XPERIENCE_URL` (`src/const/click-and-xperience.ts`).

### Datos

Las secciones se alimentan de arreglos tipados en `src/data/`:

- `amenidades.ts`: cada amenidad tiene `id`, `label`, `Icon` (componente) e `images`, siempre cuatro y ordenadas de la más grande a la más pequeña (así las consume la galería).
- `modelos.ts`: cada modelo tiene `label`, `modalLabel`, `descripcion` y `niveles`; cada nivel tiene `titulo`, `plano` (imagen para el carrusel) y `espacios` (`{ icon, label }`).

Para agregar contenido se edita el arreglo, no los componentes.

### Imágenes e iconos

- Las imágenes se importan como módulos (`import foto from "@/assets/..."`), lo que da una URL con hash. No se usan rutas de texto ni la carpeta `public/` para contenido.
- Iconos que deben cambiar de color: componentes TSX en `assets/icons/components/`, con `fill`/`stroke="currentColor"` y que reenvían las props al `<svg>`. Se colorean con `text-*`.
- Iconos de un solo color: archivos SVG usados con `<img>`.
- Imágenes decorativas: `alt=""` y `aria-hidden="true"`. Imágenes de contenido: `alt` descriptivo.
- Las formas de fondo SVG usan `preserveAspectRatio="none"` con `object-fill` para estirarse al contenedor; para recortarlas se ajusta el `viewBox`.

### Animaciones

Con `motion/react`. Las transiciones al cambiar de contenido usan `AnimatePresence` con un `key` que cambia (por ejemplo la URL de la imagen o el `id` seleccionado). Se envuelven en `<MotionConfig reducedMotion="user">` para respetar la preferencia de reducir movimiento.

---

## Convenciones

- **Idioma:** nombres de datos, funciones de negocio, comentarios y textos en español (`modelos`, `solicitarFolleto`, `getLeadGuardado`). Términos técnicos de React en inglés (`onClose`, `isSelected`).
- **Archivos:** kebab-case (`model-popup.tsx`). Componentes con `export default function NombreEnPascalCase`.
- **Tipos:** `type` para props y datos; props tipadas siempre (el proyecto es estricto).
- **Estilos:** utilidades de Tailwind en el JSX; valores exactos del diseño con valores arbitrarios (`gap-[13px]`, `w-[204px]`). Mobile-first. Tokens de color del tema, clases de tipografía de `index.css`.
- **Accesibilidad:** botones solo con icono llevan `aria-label`; estados con `aria-pressed` / `aria-current`; contenido que cambia con `aria-live="polite"`; un `h1`/`h2` por bloque con jerarquía correcta.
- **Navegación interna:** enlaces reales (`<a href="#seccion">`), no botones con `onClick` que hacen scroll.

---

## SEO

Al ser una SPA de una sola página, las metaetiquetas (título, descripción, `canonical`, Open Graph y datos estructurados) van escritas directamente en `index.html`, para que existan sin ejecutar JavaScript. La `canonical` apunta a la raíz del dominio, por lo que las URLs con `?popup=` o `?form=` no generan contenido duplicado.

Antes del lanzamiento: crear `public/robots.txt` y `public/sitemap.xml`, configurar redirecciones 301 de las URLs que tenía indexadas el WordPress anterior, y valorar prerenderizar la página en el build.

---

## Pendientes

**Integraciones**

- [ ] Conectar `lib/leads.ts` con HubSpot o con `/api/onboarding` de la app CX.
- [ ] Redirección a CX cuando el usuario ya tiene un lead guardado (en `onRecorrido`; a cargo de otro programador).
- [ ] Tracking de eventos. **Aún no existe**: no hay `@/lib/track` ni constantes de analytics; no importarlos hasta que se creen. Los puntos donde iría están marcados con `TODO`.
- [ ] `FOLLETO_URL` (PDF del folleto) y `AVISO_PRIVACIDAD_URL`.
- [ ] Revisar si el formulario de xperience necesita la casilla de aviso de privacidad.

**Despliegue**

- [ ] Elegir hosting (Vercel o SiteGround) y configurar dominio, `robots.txt`, `sitemap.xml` y redirecciones 301.
- [ ] Si el correo del dominio está en SiteGround y se usa Vercel, cambiar solo los registros A/CNAME, no los nameservers.

**Contenido por confirmar**

- [ ] Textos de `modelos.ts`: la descripción del Aluna 100 es igual a la del Aluna 70; revisar espacios duplicados o dudosos (por ejemplo "Estudio / 4.º dormitorio" y "Estudio" en el Aluna 90).
- [ ] Nombre del primer modelo: "Aluna 70" en los datos y "Aluna 70 Plus" en la simbología del plano.
- [ ] Fotos de la cancha: hay cinco y se usan cuatro.

**Técnicos**

- [ ] El variant `short:` se usa en varios componentes pero **no está definido** en `index.css`, así que esas clases no tienen efecto. Definirlo, por ejemplo: `@custom-variant short (@media (max-height: 800px));`.
- [ ] Los planos de `assets/images/modelos/*` son `.png`; verificar que los imports de `modelos.ts` usen esa extensión.
- [ ] Mover `import "intl-tel-input/styles"` de `fields.tsx` a `index.css` dentro de una capa (`@import "intl-tel-input/styles" layer(intl-tel-input);` antes de Tailwind) para poder sobrescribir sus estilos de forma fiable.
- [ ] Algunos comentarios de `index.css` tienen acentos corruptos (`mÃ¡s`, `PropÃ³sito`): el archivo se guardó en otra codificación en algún momento. Guardarlo como UTF-8.
- [ ] Agregar `.DS_Store` a `.gitignore` y eliminar los que ya están en `src/assets`.
- [ ] Renombrar `floatin-actions.tsx` a `floating-actions.tsx`.
- [ ] Migrar `ModelPopup` al patrón de `<dialog>` de los demás popups.
- [ ] Optimizar las fotos (`.webp`, tamaño acorde a como se muestran), sobre todo las 24 de amenidades.

---

## Notas para asistentes de IA

Si eres un modelo de lenguaje trabajando en este repositorio:

1. Responde y comenta en español, siguiendo las convenciones de arriba.
2. Antes de crear estilos, revisa los tokens de color y las clases de tipografía de `src/index.css`; no inventes colores hex.
3. Los popups nuevos siguen el patrón de `<dialog>` + `useLockBodyScroll` + parámetro de URL.
4. Los formularios nuevos reutilizan `Field`, `PhoneField`, `inputClass` y las reglas de `fields.tsx`, y envían datos solo a través de `lib/leads.ts`.
5. No importes módulos que no existen (tracking, analytics) ni dejes imports sin usar: el build falla.
6. React Router se importa de `"react-router"`. Motion se importa de `"motion/react"`.
7. El React Compiler está activo, así que no hace falta añadir `useMemo`/`useCallback` por rendimiento salvo casos concretos.
8. Verifica cada cambio con `npm run build`.
