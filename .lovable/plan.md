## Objetivo

Unificar los formularios de las landing pages con el formulario de la página de Contacto (mismos campos y mismo payload al webhook), agregar "Diseño Web" al selector de servicios, y eliminar el bloque de formulario integrado en el Footer.

## Campos estándar (según `/contacto`)

- Nombre (requerido)
- Apellidos (requerido)
- Empresa (opcional)
- Email (requerido)
- Teléfono (opcional)
- Servicio de interés (select)
- Mensaje (requerido)

Payload enviado al webhook `https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18`:

```json
{
  "nombre": "Nombre + Apellidos",
  "email": "...",
  "telefono": "...",
  "empresa": "...",
  "servicio_interes": "...",
  "mensaje": "...",
  "origen": "<slug de la landing>"
}
```

## Cambios

### 1. `src/pages/Contacto.tsx`
- Agregar "Diseño Web & CRO" al array `SERVICES` para que aparezca en el menú desplegable.

### 2. `src/pages/LandingWeb.tsx` (`/diseno-web-ventas`)
- Reemplazar los campos actuales (nombre, empresa, whatsapp, reto) por los 7 campos estándar del formulario de contacto.
- Preseleccionar "Diseño Web & CRO" en el selector de servicio (editable por el usuario).
- Actualizar el payload al formato estándar con `origen: "landing_diseno_web_ventas"`.
- Mantener el diseño visual actual (tarjeta glass, tipografía, colores) — sólo cambian los campos.

### 3. `src/pages/ProduccionPodcastRedes.tsx` (`/produccion-podcast-redes`)
- Reemplazar los campos actuales (nombre, whatsapp, redes, meta) por los 7 campos estándar.
- Preseleccionar "Contenido Multimedia" en el selector de servicio.
- Actualizar el payload al formato estándar con `origen: "landing_produccion_podcast_redes"`.
- Mantener el diseño visual actual del bloque formulario.

### 4. `src/components/Footer.tsx`
- Eliminar por completo el bloque de formulario embebido (columna con Nombre / Email / Servicio / botón Enviar) y su lógica de submit/estado.
- Redistribuir las columnas restantes del footer (logo/copy, navegación, contacto/redes) para que el layout siga viéndose equilibrado sin la columna del formulario.
- Conservar el resto del footer intacto (links, redes, copyright).

## Notas

- No se modifica el webhook ni la estructura del payload que ya usa `/contacto`; las landings se alinean a ese contrato para que Make reciba siempre el mismo esquema.
- Se preservan estilos, tipografías y comportamiento de éxito/errores (toast + estado "success") en cada formulario.
- No se tocan Navbar, SEO, ni otros componentes.
