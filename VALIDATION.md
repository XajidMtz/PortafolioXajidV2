# Validación de la primera versión

Validación realizada el 6 de septiembre de 2026 (CDMX).

## Comprobaciones completadas

- Dependencias instaladas con npm y lockfile conservado. `npm audit`: **0 vulnerabilidades**.
- `npm run lint`: sin errores ni advertencias.
- `npm run typecheck`: sin errores de TypeScript.
- `npm run build`: exportación estática completada; rutas principal, 404, robots y sitemap.
- Servidor de desarrollo y servidor de producción ejecutados y revisados en navegador.
- Responsive: 320 × 740, 375 × 812, 390 × 844, 768 × 1024, 1024 × 768 y 1440 × 1000. Sin desplazamiento horizontal del documento. Revisión visual de portada, trayectoria, proyectos, fichas y contacto.
- Menú móvil horizontal a 667 × 375: altura acotada y desplazamiento interno; navegación a contacto funcional.
- Foco dentro del diálogo durante tabulación; Escape cierra y devuelve el foco al botón de menú. Fichas de proyecto con título y descripción accesibles.
- Un único h1, idioma español, imágenes con alt o fallback semántico, enlaces con nombre accesible, salto al contenido y destinos internos válidos.
- Comprobación básica de contraste: 297 elementos de texto habilitados revisados, sin fallos detectados en los colores base. Los fondos con degradado también se revisaron visualmente. Esto no sustituye una auditoría WCAG completa.
- Filtros probados: Data, Development, AI y Automation muestran su ficha; Cybersecurity muestra el estado vacío; Todos restaura las tres fichas. Las fichas explican que todavía no representan proyectos realizados.
- Indicador de sección activa verificado en la versión de producción.
- GitHub enlaza a `https://github.com/XajidMtz`, cuyo perfil fue verificado. Hay accesos en portada, sección GitHub, contacto y footer. No se requiere la API.
- Los enlaces de correo usan `mailto:Xajidmartinez@gmail.com`. No se envió ningún mensaje.
- LinkedIn vacío: tres accesos deshabilitados con nombre accesible y estado próximo, sin URLs ficticias.
- Fotografía ausente: monograma visible, sin petición a una imagen inexistente.
- Prueba temporal de fotografía: una imagen de color plano fue convertida a WebP, cargada correctamente y mostrada con `object-fit: cover`.
- CV ausente: botones deshabilitados. Prueba temporal con un PDF identificado como documento de prueba: activación del enlace, nombre de archivo y evento real de descarga confirmados.
- **Todos los archivos temporales de fotografía y CV se retiraron antes del build final.** No se incluye un CV ficticio ni una persona generada.
- Metadata, canonical, favicon, OpenGraph, Twitter, robots y sitemap configurados y comprobados.
- Consola de producción: sin errores ni advertencias durante navegación y filtrado.
- WebMCP: registro, categoría válida, actualización visible del filtro y rechazo de categoría inválida verificados mediante el contexto WebMCP del navegador.

## Rendimiento

HTML prerenderizado, fuentes servidas localmente, imágenes con dimensiones reservadas, optimización de fotografía a WebP y carga diferida de imágenes de proyectos. No hay llamadas obligatorias a servicios externos ni librerías de gráficos o animación pesadas.

La comprobación estática del build registró aproximadamente **19 KiB de HTML, 209.6 KiB de JavaScript y 13.2 KiB de CSS, comprimidos con gzip**, para los recursos referenciados por la portada. Son tamaños calculados, no mediciones de transferencia de un hosting específico. No se atribuyen puntuaciones Lighthouse ni resultados de Core Web Vitals de usuarios reales: esos requieren medir el despliegue con sus archivos definitivos y tráfico real.

La regla `prefers-reduced-motion` desactiva animación y scroll suave. Se comprobó su presencia en el código; no se cambió la preferencia de accesibilidad del sistema del usuario.

## Pendiente de contenido del propietario

Fotografía real, CV definitivo, URL de LinkedIn y proyectos reales. Las instituciones y empresas no fueron inventadas. Estos contenidos pueden incorporarse siguiendo `README.md` y generando un nuevo build.

Para repetir la comprobación estática tras construir:

```sh
node scripts/verify.mjs
```
