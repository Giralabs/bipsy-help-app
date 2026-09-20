# bipsy-help-app

El centro de ayuda de Bipsy, en **Astro**. Se despliega en su propio
subdominio (`ayuda.bipsy.es`) y lo enlazan las otras dos webs.

```
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run preview
```

Son dos páginas de texto y una animación CSS, así que el sitio se genera
estático y **no envía ningún framework al navegador**: lo único que va es un
script en línea por página (el filtro del buscador, el acordeón de respaldo y
el observer que para la animación fuera de pantalla). Unos 18 kB de HTML la
página de negocios, 6 kB la de clientes, más una hoja de estilos.

## Dos audiencias, dos rutas

| Ruta | Para quién | Preguntas | Contenido |
|---|---|---|---|
| `/` | Negocios | 18 | `src/data/faq.ts` → `HELP_FAQ` |
| `/clientes` | Clientes finales | 19 | `src/data/faq-clientes.ts` → `CLIENT_FAQ` |

Cada mitad lleva **su propia marca** en la barra: Bipsy Business en negocios y
Bipsy en clientes. Aterrizar con el logo equivocado es la forma más rápida de
que alguien crea que se ha equivocado de sitio.

Seis de las respuestas de clientes son **el texto literal del `HelpSheet` de
la app** (el mismo que replica la página de perfil de `bipsy-web-app`) y van
marcadas con un comentario. Si la hoja cambia en la app, cambia aquí. El
resto salen de las páginas legales de la web de cliente.

Un grupo sin preguntas no se pinta, y si una sección se queda entera sin
ninguna muestra un «estamos escribiendo esta parte» con el correo de soporte
en vez de una página vacía.

El acordeón es `<details name="...">`, así que abre una a la vez sin
JavaScript en los navegadores actuales; el script solo cubre a los que aún
ignoran el atributo `name`.

## Qué hay que tocar al desplegar

1. **`astro.config.mjs`** — `site` es de donde salen las URL canónicas.
2. **`src/data/site.ts`** — `CLIENT_WEB_URL` y `BUSINESS_WEB_URL` siguen
   apuntando al placeholder.
3. El servidor tiene que servir `/clientes/index.html` en `/clientes`. Con
   salida estática lo hace casi cualquier hosting; comprueba que no fuerce
   una barra final distinta de la que generan los enlaces.

En las otras dos apps el enlace sale de `HELP_URL`, que **cambia solo**: si
estás navegando en `localhost` apunta a `http://localhost:4321` (este dev
server) y si no, a `https://ayuda.bipsy.es`. Está en:

- `bipsy-business-web-app/src/app/data/site.data.ts`
- `bipsy-web-app/src/app/data/site.data.ts`

## Duplicaciones conocidas

Esto es una copia, no un paquete compartido. Si cambias una, cambia la otra:

- `src/data/faq.ts` — igual que `faq.data.ts` en `bipsy-business-web-app`. Es
  la fuente de las respuestas para negocios.
- `TRIAL_DAYS` y `SUPPORT_RESPONSE_TIME` en `src/data/site.ts`, que esas
  respuestas citan.
- `src/styles/global.css` es el sistema de diseño de la web de negocio;
  `src/styles/help.css` es el porte de los CSS de sus componentes
  (`page-hero`, `faq-list`, `bip-rig`) y de la página de ayuda, con los mismos
  nombres de clase para que se puedan comparar.
- `public/mr_bip/rig/mb-08/` — las capas de la animación de Mr. Bip. El
  generador (`scripts/build-bip-rigs.mjs`) vive en `bipsy-business-web-app`;
  aquí solo están los archivos que produce. Si los regeneras, sube `VERSION`
  en `src/components/BipRig.astro` o el navegador servirá los viejos.

`bipsy-business-web-app` conserva su página `/ayuda` para que los enlaces
antiguos no rompan, pero su cabecera y su pie ya apuntan aquí. Cuando el
subdominio esté en marcha, lo suyo es redirigir `/ayuda` a `HELP_URL` desde el
hosting y borrar esa página, o el mismo contenido estará publicado dos veces.
