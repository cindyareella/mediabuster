
# Plan: Reemplazar el isotipo con un icono Lucide

## Resumen
Voy a reemplazar el isotipo actual (imagen MB) en la sección "La alternativa inteligente" con un icono de Lucide que represente el concepto de "alternativa inteligente" y esté en sintonía con los otros iconos de la página.

## Análisis de iconos actuales

Los iconos que se usan actualmente en el sitio siguen un estilo consistente:
- **AboutSection:** Target, Users, TrendingUp, Lightbulb
- **ServicesSection:** Zap, Video, Palette, Share2, Search
- **ProcessSection:** Search, Target, Lightbulb, Rocket, BarChart3
- **HeroSection:** Sparkles
- **WhyUsSection:** Check, X, Heart

## Icono recomendado

Para "La alternativa inteligente" propongo usar el icono **`Lightbulb`** o **`Sparkles`**:

| Icono | Significado | Justificación |
|-------|-------------|---------------|
| `Lightbulb` | Ideas, inteligencia | Representa "inteligencia" directamente |
| `Sparkles` | Innovación, diferenciación | Representa "alternativa" como algo nuevo/diferente |
| `Zap` | Energía, agilidad | Transmite dinamismo y eficiencia |

**Mi recomendación:** `Lightbulb` porque conecta directamente con "inteligente" y mantiene coherencia con la sección de diferenciadores donde ya aparece como concepto.

## Cambios técnicos

### Archivo: `src/components/AboutSection.tsx`

1. **Eliminar import del isotipo:**
   - Quitar: `import isotipo from "@/assets/isotipo.png";`

2. **Agregar el icono necesario al import existente:**
   - El icono `Lightbulb` ya está importado, solo necesito usarlo

3. **Reemplazar la imagen por el icono:**
   - Cambiar el `<img>` por un contenedor con el icono
   - Usar un estilo similar a los otros iconos de la página (fondo con opacidad, icono en color primario)
   - Tamaño grande para que sea el elemento visual destacado: `w-20 h-20` para el contenedor y `w-12 h-12` para el icono

### Código actual:
```jsx
<img src={isotipo} alt="Media Buster" className="w-24 h-24 object-contain" />
```

### Código nuevo:
```jsx
<div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
  <Lightbulb className="w-10 h-10 text-primary" />
</div>
```

El estilo usa:
- Fondo con opacidad (`bg-primary/10`) como en las tarjetas de diferenciadores
- Esquinas redondeadas (`rounded-2xl`) para coherencia con el diseño
- El icono en color primario (rojo) para destacar
