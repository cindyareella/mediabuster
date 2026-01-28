
# Plan: Reemplazar el logo del menú principal

## Resumen
Reemplazaré el logo actual del menú principal con la nueva versión proporcionada desde la URL de Imgur, manteniendo el tamaño grande (h-20 / 80px) para que el logo destaque.

## Cambios técnicos

### 1. Descargar el nuevo logo
- Descargaré la imagen desde `https://imgur.com/yE9UmLx` 
- La guardaré como `src/assets/logo.png` (reemplazando el archivo existente)

### 2. Archivo: `src/components/Header.tsx`
- No se requieren cambios en el código ya que:
  - El import del logo ya está configurado: `import logo from "@/assets/logo.png";`
  - El tamaño del logo ya está en `h-20` (80px)
  - La altura del header ya está en `h-24` (96px)

El logo simplemente cambiará al reemplazar el archivo de imagen, manteniendo todas las dimensiones actuales que hacen que destaque.

## Resultado esperado
El menú principal mostrará la nueva versión del logo con el mismo tamaño prominente actual (80px de altura).
