# Fix: logo del header en /landing-web

## Diagnóstico

- El archivo `MediaBuster-logo.png` que sirve jsdelivr responde 200, pero es un PNG cuadrado de 1254×1254 con ~40% de padding transparente. Con `className="h-16"` (64px de contenedor), el texto real del logo se renderiza a ~25px — visualmente parece "no estar".
- No hay errores en consola ni requests fallidos registrados, así que no es un problema de red ni de CSP: es una limitación del propio asset.
- En el header del sitio principal (`Header.tsx`) el mismo archivo se ve porque va acompañado de otros elementos y con un contexto compacto, pero la landing usa un header dedicado sin más contenido.

## Plan

1. Subir el PNG del logo a Lovable Assets (`lovable-assets create`) para tener un pointer estable y evitar cachés colgados de jsdelivr.
2. En `src/pages/LandingWeb.tsx`, reemplazar la etiqueta `<img>` del header por el asset importado y subir el contenedor a un tamaño que compense el padding del PNG:
   - `className="h-20 md:h-24 w-auto object-contain"`
   - Ajustar el padding del header a `py-3` para que la altura total quede equilibrada con el logo más grande.
3. Verificar visualmente que el logo se aprecia con claridad sobre el fondo crema del header, sin desbordar y sin agrandar la altura del header más de lo necesario.

## Alcance

- Solo se modifica el bloque `<header>` de `src/pages/LandingWeb.tsx`.
- No se tocan el hero, el overlay, el formulario ni ninguna otra sección.
- No se cambia el logo del resto del sitio.
