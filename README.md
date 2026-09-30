# Portafolio de Xajid Martínez

Portafolio en español con Next.js App Router, React, TypeScript y Tailwind CSS. Diseño responsive en grafito y verde, contenido prerenderizado y exportación estática. Funciona sin base de datos, API de GitHub ni credenciales externas.

## Ejecutar

Requiere Node.js 22.13 o posterior y npm.

Abre una terminal de PowerShell en la carpeta del proyecto:

```powershell
npm ci
npm run dev
```

Abre `http://localhost:3000` en el navegador. La terminal indica otro puerto si el 3000 está ocupado. Mantén esa terminal abierta mientras trabajas; `Ctrl+C` detiene el servidor. Guarda los cambios en los archivos y el navegador se actualizará. `npm ci` solo es necesario al instalar o cuando cambie el lockfile.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` sirve la exportación de producción de `out/`. Para otro puerto, configura `PORT`. `npm run format` aplica el formato. El lint incluye reglas de TypeScript, React, Next.js y accesibilidad.

## Personalizar

| Contenido                                              | Archivo              |
| ------------------------------------------------------ | -------------------- |
| Nombre, edad, email, enlaces, idiomas y disponibilidad | `data/profile.ts`    |
| Trayectoria                                            | `data/experience.ts` |
| Áreas y tecnologías                                    | `data/skills.ts`     |
| Proyectos y repositorios destacados                    | `data/projects.ts`   |
| Educación, certificaciones y cursos                    | `data/education.ts`  |
| Paleta, tamaños, animaciones y responsive              | `app/globals.css`    |

**Fotografía:** coloca tu fotografía real en `public/profile.jpg`. Al iniciar desarrollo o construir, Sharp genera `public/profile-800.webp`, limita el ancho a 800 px, respeta la orientación y elimina metadatos. No modifica el original. El marco reserva dimensiones y usa `object-fit: cover`. Si falta el archivo o falla su carga, aparece un monograma. Reinicia el servidor o vuelve a construir después de añadir o reemplazar la imagen. Si cambias `profileImage` a otra ruta local, se utiliza ese archivo directamente; optimízalo por separado.

**CV:** se incluyen `public/CV_Xajid_Martinez.pdf` en español y `public/CV_Xajid_Martinez_EN.pdf` en inglés. El apartado de contacto permite descargar cualquiera de los dos. Puedes reemplazar cada PDF y volver a construir. La presencia de cada archivo habilita su botón con `download`; si falta, se muestra «Próximamente» sin un enlace roto.

Los scripts opcionales `scripts/build-resume.py` y `scripts/build-resume-en.py` reconstruyen los CV. El segundo mantiene las traducciones en inglés de la experiencia, formación y proyectos, y toma los datos de contacto y las fechas del sitio. Requieren Python 3, Node.js y ReportLab (`python -m pip install reportlab`). Ejecútalos con `python scripts/build-resume.py` y `python scripts/build-resume-en.py`, y después ejecuta `npm run build`. Si cambias el contenido, revisa las traducciones y la paginación de ambos PDF.

**LinkedIn:** el enlace público se configura en `data/profile.ts` y aparece en los accesos sociales, contacto y CV. Si cambias de perfil, actualiza esa URL y regenera los PDF.

**Teléfono y WhatsApp:** el número visible y los enlaces de llamada y chat se configuran en `data/profile.ts`. Aparecen en Contacto y en ambos CV. Si cambias el número, actualiza esos tres valores y regenera los PDF.

**Dominio y SEO:** copia `.env.example` a `.env.local` y configura `NEXT_PUBLIC_SITE_URL` con el origen definitivo antes de construir. Se usa para canonical, OpenGraph, robots y sitemap. Las tarjetas sociales incluyen título y descripción, sin una imagen inventada. Las fuentes se descargan durante la compilación con `next/font` y se sirven localmente al visitante.

## Publicar proyectos reales

Se incluyen cuatro trabajos documentados en tu portafolio anterior: robots para FLECHISA, colaboración en THB, recetario con APIs y login con base de datos temporal. Las dos últimas fichas tienen demos disponibles. También hay dos espacios identificados como «Proyecto próximamente» para Data e IA. Los filtros funcionan localmente; Cybersecurity muestra un estado vacío hasta añadir un proyecto de esa categoría.

En `data/projects.ts`, sustituye una ficha por un objeto `Project` y cambia `status` a `published`. Campos:

- `id`, `name`, `category`, `description`, `technologies`, `status` y `visual`.
- `image` y `imageAlt`: imagen local en `public/`, con carga diferida y espacio reservado.
- `problem`, `solution`, `result`: contenido de la ficha accesible.
- `github`, `demo`, `caseStudy`: URLs reales. Los enlaces ausentes se indican como no disponibles en trabajos publicados, o próximos en placeholders.

Las categorías son `Data`, `Development`, `AI`, `Automation` y `Cybersecurity`. Una ficha puede pertenecer a varias. `featuredRepositories` permite añadir repositorios manualmente sin la API de GitHub.

La foto del hero y el repositorio destacado también proceden de tu portafolio anterior. Consulta `CONTENT_SOURCES.md` para ver las fuentes y los datos que siguen pendientes. No existe sincronización automática con GitHub: editar aquí no modifica el repositorio anterior.

## Arquitectura y accesibilidad

`app/` contiene rutas y metadatos; `components/`, las secciones; `data/`, el contenido; `lib/`, los helpers; `scripts/`, la preparación de imágenes y el servidor estático. Solo navegación, filtros y estados de imagen necesitan código interactivo. Los diálogos de Base UI controlan foco, Escape y bloqueo del fondo. Se respetan `prefers-reduced-motion`, navegación por teclado y HTML semántico.

Si el navegador ofrece WebMCP, `filter_portfolio_projects` controla el mismo filtro visible. La integración es opcional y no afecta a navegadores sin soporte.

## Desplegar

Ejecuta `npm run build` y despliega **el contenido de `out/`** en un hosting estático. También puedes desplegar el repositorio en proveedores compatibles con Next.js. `.openai/hosting.json` identifica el sitio de Sites y el directorio de salida.

Para comprobar localmente la misma versión que vas a desplegar:

```powershell
npm run lint
npm run typecheck
npm run build
node scripts/verify.mjs
npm start
```

La publicación de Sites de esta entrega es privada, accesible al propietario; no es todavía un enlace público para recruiters. Para distribuir el portafolio, publica el contenido de `out/` con acceso público en tu hosting elegido y configura su URL en `NEXT_PUBLIC_SITE_URL` antes del build.

El [repositorio público en GitHub](https://github.com/XajidMtz/PortafolioXajidV2) contiene el código y los CV, pero no sirve el sitio web por sí solo. Para abrir el portafolio como página, despliega `out/` en un servicio de hosting estático.

Después de modificar contenido, fotografía, CV o dominio, genera y despliega un nuevo build. El contacto abre el cliente de correo mediante `mailto:`.

Consulta `VALIDATION.md` para conocer las comprobaciones realizadas y los límites de esta versión.
