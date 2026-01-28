
# Plan: Implementación SEO Integral para Media Buster

## Resumen del Proyecto
Transformar el sitio actual de una sola página (single-page) a una arquitectura multi-página con SEO técnico completo, incluyendo 7 páginas independientes, meta tags dinámicos, sitemap.xml, y contenido optimizado para cada servicio.

---

## Fase 1: Infraestructura SEO Técnica

### 1.1 Componente SEO dinámico
Crear un componente reutilizable que gestione los meta tags de cada página usando `react-helmet-async`:

| Archivo | Descripción |
|---------|-------------|
| `src/components/SEO.tsx` | Componente que maneja title, description, canonical URL, Open Graph y Twitter Cards |

El componente aceptará props para cada página y actualizará el `<head>` dinámicamente.

### 1.2 Archivos SEO técnicos

| Archivo | Cambios |
|---------|---------|
| `public/robots.txt` | Agregar referencia al sitemap |
| `public/sitemap.xml` | Crear sitemap con todas las URLs del sitio |
| `index.html` | Agregar tag canonical base y schema.org |

---

## Fase 2: Arquitectura de Páginas

### 2.1 Nuevas páginas a crear

```text
src/pages/
├── Index.tsx (actualizar)
├── PaidMedia.tsx (nueva)
├── SEOPage.tsx (nueva)
├── Branding.tsx (nueva)
├── Contenido.tsx (nueva)
├── Nosotros.tsx (nueva)
├── Contacto.tsx (nueva)
└── NotFound.tsx (existente)
```

### 2.2 Rutas

| Ruta | Página | Keyword Principal |
|------|--------|-------------------|
| `/` | Home | agencia de marketing digital |
| `/paid-media` | Paid Media | agencia de pauta digital |
| `/seo` | SEO | agencia SEO |
| `/branding` | Branding | agencia de branding |
| `/contenido` | Contenido & Social | agencia de contenido digital |
| `/nosotros` | Sobre Media Buster | agencia de marketing estratégico |
| `/contacto` | Contacto | estrategia digital |

---

## Fase 3: Estructura SEO por Página

### 3.1 HOME (`/`)

**Meta tags:**
- Title: "Agencia de Marketing Digital Estratégico | Media Buster"
- Description: "Agencia de marketing digital en México enfocada en estrategia, performance y crecimiento medible. Marketing basado en datos para empresas que quieren escalar."

**Jerarquía de encabezados:**
- H1: "Agencia de marketing digital enfocada en estrategia y performance"
- H2: "Estrategia digital que se ve. Crecimiento que se mide."
- H2: "Servicios de marketing digital para marcas que quieren crecer"
  - H3: Paid Media & Growth
  - H3: SEO
  - H3: Branding
  - H3: Contenido & Social Media
- H2: "Nuestro enfoque estratégico"

### 3.2 PAID MEDIA (`/paid-media`)

**Meta tags:**
- Title: "Agencia de Pauta Digital y Performance Marketing | Media Buster"
- Description: "Campañas de Google Ads y Meta Ads orientadas a resultados. Agencia de paid media con estrategia antes de inversión y optimización basada en datos."

**Contenido (700+ palabras):**
- H1: "Agencia de pauta digital orientada a resultados"
- H2: "Performance con visión estratégica"
- H2: "Campañas de Google Ads y Meta Ads que escalan"
  - H3: "Estrategia antes de invertir"
  - H3: "Optimización continua basada en datos"
- Secciones de servicios, metodología y CTA

### 3.3 SEO (`/seo`)

**Meta tags:**
- Title: "Agencia SEO para Empresas | Posicionamiento Web | Media Buster"
- Description: "Servicios de SEO técnico y de contenido para empresas que buscan crecer de forma orgánica. Posicionamiento web con método y estrategia en México."

**Contenido (700+ palabras):**
- H1: "Agencia SEO para empresas que buscan crecer de forma orgánica"
- H2: "Posicionamiento web con método y estrategia"
- H2: "Servicios de SEO técnico y de contenido"
  - H3: "SEO On Page"
  - H3: "SEO de contenidos"
  - H3: "Auditoría y keywords"

### 3.4 BRANDING (`/branding`)

**Meta tags:**
- Title: "Agencia de Branding y Estrategia de Marca | Media Buster"
- Description: "Desarrollo de identidad de marca, naming y estrategia de posicionamiento. Construimos marcas sólidas con dirección clara para empresas en crecimiento."

**Contenido (700+ palabras):**
- H1: "Agencia de branding y estrategia de marca"
- H2: "Las marcas sólidas no se improvisan"
- H2: "Construimos marcas con dirección clara"
  - H3: "ADN de marca"
  - H3: "Identidad visual"
  - H3: "Naming"

### 3.5 CONTENIDO (`/contenido`)

**Meta tags:**
- Title: "Agencia de Contenido Digital y Social Media | Media Buster"
- Description: "Estrategia de contenidos y community management profesional. Contenido para redes sociales que conecta, posiciona y convierte."

**Contenido (700+ palabras):**
- H1: "Agencia de contenido digital con enfoque estratégico"
- H2: "Estrategia antes de publicar"
- H2: "Contenido que conecta, posiciona y convierte"
  - H3: "Estrategia de contenidos"
  - H3: "Producción de contenido"
  - H3: "Community management"

### 3.6 NOSOTROS (`/nosotros`)

**Meta tags:**
- Title: "Sobre Media Buster | Agencia de Marketing Estratégico"
- Description: "Estrategia, contenido y performance trabajando juntos. Conoce cómo trabajamos con las marcas y nuestra visión de marketing digital estratégico."

**Contenido (600+ palabras):**
- H1: "Estrategia, contenido y performance trabajando juntos"
- H2: "Qué es Media Buster"
- H2: "Cómo trabajamos con las marcas"

### 3.7 CONTACTO (`/contacto`)

**Meta tags:**
- Title: "Contacto | Hablemos de tu Estrategia Digital | Media Buster"
- Description: "Cuéntanos sobre tu marca y tus objetivos. Diagnóstico inicial sin compromiso para entender tu negocio antes de cualquier propuesta."

**Contenido:**
- H1: "Hablemos de tu estrategia digital"
- H2: "Cuéntanos sobre tu marca y tus objetivos"

---

## Fase 4: Componentes Compartidos

### 4.1 Layout de servicios
Crear un layout reutilizable para páginas de servicio con:
- Header con navegación actualizada
- Sección hero específica del servicio
- Contenido con jerarquía semántica
- CTAs orientados a estrategia
- Enlaces internos a otros servicios
- Footer con enlaces actualizados

### 4.2 Navegación actualizada

**Header - Menú principal:**
```text
Inicio | Servicios (dropdown) | Nosotros | Contacto
         ├── Paid Media
         ├── SEO
         ├── Branding
         └── Contenido
```

**Footer - Enlaces:**
- Todos los servicios
- Nosotros
- Contacto

---

## Fase 5: Optimizaciones Técnicas

### 5.1 Imágenes
- Lazy loading para imágenes below-the-fold
- Atributos alt descriptivos con keywords
- Formatos optimizados

### 5.2 Performance
- Prefetch para páginas de servicios
- Componentes con lazy loading donde sea apropiado

### 5.3 Schema.org (JSON-LD)
Agregar marcado estructurado para:
- Organization
- LocalBusiness
- Service (para cada servicio)
- BreadcrumbList

### 5.4 Enlaces internos
Cada página de servicio enlazará a:
- Otros servicios relacionados
- Página de contacto
- Home

---

## Archivos a Crear/Modificar

### Nuevos archivos (14):
1. `src/components/SEO.tsx` - Componente de meta tags
2. `src/components/ServicePageLayout.tsx` - Layout para páginas de servicio
3. `src/components/ServiceHero.tsx` - Hero específico para servicios
4. `src/components/RelatedServices.tsx` - Enlaces a servicios relacionados
5. `src/components/ServiceCTA.tsx` - CTAs para páginas de servicio
6. `src/pages/PaidMedia.tsx` - Página Paid Media
7. `src/pages/SEOPage.tsx` - Página SEO
8. `src/pages/Branding.tsx` - Página Branding
9. `src/pages/Contenido.tsx` - Página Contenido & Social Media
10. `src/pages/Nosotros.tsx` - Página Sobre Nosotros
11. `src/pages/Contacto.tsx` - Página Contacto dedicada
12. `public/sitemap.xml` - Sitemap del sitio
13. `src/lib/seoData.ts` - Datos SEO centralizados por página
14. `src/components/SchemaOrg.tsx` - Marcado estructurado JSON-LD

### Archivos a modificar (6):
1. `src/App.tsx` - Agregar nuevas rutas
2. `src/components/Header.tsx` - Navegación con dropdown de servicios
3. `src/components/Footer.tsx` - Enlaces a todas las páginas
4. `src/pages/Index.tsx` - Optimizar encabezados y contenido SEO
5. `public/robots.txt` - Agregar referencia al sitemap
6. `index.html` - Schema.org base y canonical

---

## Instalación de Dependencia

Se necesita instalar `react-helmet-async` para gestionar los meta tags dinámicamente:
```
react-helmet-async
```

---

## Secuencia de Implementación

1. Instalar dependencia e infraestructura SEO base
2. Crear componente SEO y datos centralizados
3. Actualizar Header y Footer con nueva navegación
4. Crear layout de páginas de servicio
5. Implementar cada página de servicio con contenido completo
6. Crear páginas Nosotros y Contacto
7. Optimizar Home con nueva estructura de encabezados
8. Agregar Schema.org
9. Crear sitemap.xml y actualizar robots.txt
10. Implementar enlaces internos entre páginas

---

## Notas sobre el contenido

- Cada página de servicio tendrá 700-900 palabras de contenido original
- El tono será premium, estratégico y directo (sin lenguaje genérico)
- Los CTAs estarán orientados a "explorar tu estrategia" en lugar de "comprar ahora"
- Las keywords se integrarán naturalmente en títulos, subtítulos y párrafos
- Se evitarán promesas de posicionamiento o resultados garantizados
