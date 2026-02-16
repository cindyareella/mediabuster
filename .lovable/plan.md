
# Plan: Actualizar campos del formulario de contacto

## Resumen
Actualizar el formulario de contacto en `ContactSection.tsx` y `Contacto.tsx` para incluir los nuevos campos solicitados y un selector desplegable de servicio de interes.

## Campos del formulario (nuevo)
1. Nombre (texto, obligatorio)
2. Apellidos (texto, obligatorio)
3. Empresa (texto, opcional)
4. Email (email, obligatorio)
5. Telefono (texto, opcional)
6. Servicio de interes (selector desplegable)
7. Mensaje (texto largo, obligatorio)

## Opciones del selector "Servicio de interes"
- Paid Media & Growth
- Contenido Multimedia
- Branding
- Content & Social Media
- SEO

## Cambios tecnicos

### 1. `src/components/ContactSection.tsx`
- Agregar nuevos campos al estado: `lastName`, `phone`, `service`
- Actualizar el `handleChange` para soportar tambien `<select>`
- Reorganizar el formulario:
  - Fila 1: Nombre + Apellidos (2 columnas)
  - Fila 2: Empresa + Email (2 columnas)
  - Fila 3: Telefono + Servicio de interes (2 columnas)
  - Fila 4: Mensaje (ancho completo)
- Usar el componente `Select` de shadcn/ui para el desplegable de servicio
- Actualizar el body del webhook para enviar los nuevos campos (`apellidos`, `telefono`, `servicio`)

### 2. `src/pages/Contacto.tsx`
- Aplicar los mismos cambios de campos y estructura que en `ContactSection.tsx`
- Mantener la integracion con el webhook (o simular envio si no la tiene)

## Resultado
Ambos formularios de contacto (seccion en Index y pagina /contacto) tendran los 7 campos solicitados con el selector desplegable de servicios.
