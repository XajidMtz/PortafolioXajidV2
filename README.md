# Portafolio de Xajid Martínez

Portafolio en español con Next.js App Router, React, TypeScript y Tailwind CSS. Diseño responsive en grafito y verde, contenido prerenderizado y exportación estática. Funciona sin base de datos, API de GitHub ni credenciales externas.

## Ejecutar

Requiere Node.js 22.13 o posterior y npm.

```sh
npm ci
npm run dev
```

La dirección se muestra en la terminal (normalmente `http://localhost:3000`).

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` sirve la exportación de producción de `out/`. Para otro puerto, configura `PORT`. `npm run format` aplica el formato. El lint incluye reglas de TypeScript, React, Next.js y accesibilidad.

## Personalizar

| Contenido | Archivo |
| --- | --- |
| Nombre, edad, email, enlaces, idiomas y disponibilidad | `data/profile.ts` |
| Trayectoria | `data/experience.ts` |
| Áreas y tecnologías | `data/skills.ts` |
| Proyectos y repositorios destacados | `data/projects.ts` |
| Educación, certificaciones y cursos | `data/education.ts` |
| Paleta, tamaños, animaciones y responsive | `app/globals.css` |

**Fotografía:** coloca tu fotografía real en `public/profile.jpg`. Al iniciar desarrollo o construir, Sharp genera `public/profile-800.webp`, limita el ancho a 800 px, respeta la orientación y elimina metadatos. No modifica el original. El marco reserva dimensiones y usa `object-fit: cover`. Si falta el archivo o falla su carga, aparece un monograma. Reinicia el servidor o vuelve a construir después de añadir o reemplazar la imagen. Si cambias `profileImage` a otra ruta local, se utiliza ese archivo directamente; optimízalo por separado.

**CV:** coloca el documento real en `public/CV_Xajid_Martinez.pdf` y vuelve a construir. La presencia del archivo habilita los botones con `download`. Cuando falta, se muestra «Próximamente» sin enlaces rotos. No se incluye ningún CV ficticio.

**LinkedIn:** sustituye la cadena vacía `linkedin` en `data/profile.ts` por la URL completa. Mientras esté vacía, el control permanece deshabilitado e identificado como próximo.

**Dominio y SEO:** copia `.env.example` a `.env.local` y configura `NEXT_PUBLIC_SITE_URL` con el origen definitivo antes de construir. Se usa para canonical, OpenGraph, robots y sitemap. Las tarjetas sociales incluyen título y descripción, sin una imagen inventada. Las fuentes se descargan durante la compilación con `next/font` y se sirven localmente al visitante.

## Publicar proyectos reales

Las tres fichas incluidas son placeholders explícitos, sin resultados, clientes, enlaces o proyectos inventados. Los filtros funcionan localmente; Cybersecurity muestra un estado vacío hasta añadir un proyecto de esa categoría.

En `data/projects.ts`, sustituye una ficha por un objeto `Project` y cambia `status` a `published`. Campos:

- `id`, `name`, `category`, `description`, `technologies`, `status` y `visual`.
- `image` y `imageAlt`: imagen local en `public/`, con carga diferida y espacio reservado.
- `problem`, `solution`, `result`: contenido de la ficha accesible.
- `github`, `demo`, `caseStudy`: URLs reales. Los enlaces ausentes se indican como próximos.

Las categorías son `Data`, `Development`, `AI`, `Automation` y `Cybersecurity`. Una ficha puede pertenecer a varias. `featuredRepositories` permite añadir repositorios manualmente sin la API de GitHub.

## Arquitectura y accesibilidad

`app/` contiene rutas y metadatos; `components/`, las secciones; `data/`, el contenido; `lib/`, los helpers; `scripts/`, la preparación de imágenes y el servidor estático. Solo navegación, filtros y estados de imagen necesitan código interactivo. Los diálogos de Base UI controlan foco, Escape y bloqueo del fondo. Se respetan `prefers-reduced-motion`, navegación por teclado y HTML semántico.

Si el navegador ofrece WebMCP, `filter_portfolio_projects` controla el mismo filtro visible. La integración es opcional y no afecta a navegadores sin soporte.

## Desplegar

Ejecuta `npm run build` y despliega **el contenido de `out/`** en un hosting estático. También puedes desplegar el repositorio en proveedores compatibles con Next.js. `.openai/hosting.json` identifica el sitio de Sites y el directorio de salida.

Después de modificar contenido, fotografía, CV o dominio, genera y despliega un nuevo build. El contacto abre el cliente de correo mediante `mailto:`.

Consulta `VALIDATION.md` para conocer las comprobaciones realizadas y los límites de esta versión.
