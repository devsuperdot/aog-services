/**
 * AOG Blog Data
 * Articles about oil & gas industry insights
 */

import { Droplets, Zap, TrendingUp, Shield, Wrench, Leaf } from 'lucide-react'

// Export icon components for client-side usage
export const BLOG_ICONS = {
  Droplets,
  Zap,
  TrendingUp,
  Shield,
  Wrench,
  Leaf,
}

export type BlogIconName = keyof typeof BLOG_ICONS

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
  }
  date: string
  readTime: string
  category: string
  iconName: BlogIconName
  image: string
}

export const BLOG_CATEGORIES = [
  'Todos',
  'Tecnología',
  'Seguridad',
  'Operaciones',
  'Innovación',
  'Sostenibilidad',
] as const

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'control-solidos-importancia',
    title: 'La Importancia del Control de Sólidos en Perforación Offshore',
    excerpt:
      'Descubre cómo un sistema eficiente de control de sólidos puede reducir costos operativos hasta en un 40% y aumentar la vida útil de los equipos de perforación.',
    content: `
# La Importancia del Control de Sólidos en Perforación Offshore

El control de sólidos es uno de los aspectos más críticos en las operaciones de perforación offshore. Un sistema eficiente no solo protege el equipo de perforación, sino que también mejora significativamente la economía del proyecto.

## ¿Qué es el Control de Sólidos?

El control de sólidos es el proceso de remover partículas sólidas no deseadas del lodo de perforación. Estas partículas, si no se remueven adecuadamente, pueden causar:

- Desgaste prematuro de bombas y equipos
- Aumento en los costos de lodo
- Pérdida de circulación
- Problemas de estabilidad del pozo

## Beneficios Clave

### 1. Reducción de Costos
Un sistema de control de sólidos bien diseñado puede reducir los costos operativos hasta en un 40% al:
- Extender la vida útil del lodo de perforación
- Minimizar el desgaste del equipo
- Reducir los costos de disposición

### 2. Mejor Rendimiento de Perforación
- Mayor velocidad de penetración
- Mejor control del pozo
- Reducción de tiempo no productivo

### 3. Protección Ambiental
- Menor volumen de desechos
- Cumplimiento con regulaciones ambientales
- Reducción de huella de carbono

## Tecnologías Modernas

### Zarandas Vibratorias de Alta Frecuencia
Las zarandas modernas operan a frecuencias más altas (3,600+ RPM) permitiendo:
- Mayor capacidad de procesamiento
- Mejor separación de partículas finas
- Menor costo de operación

### Centrífugas Decantadoras
Equipos de última generación que logran:
- Separación de sólidos ultrafinos
- Recuperación máxima de fase líquida
- Operación continua 24/7

## Conclusión

Invertir en un sistema de control de sólidos de calidad es fundamental para el éxito de cualquier operación de perforación. En AOG, contamos con la experiencia y tecnología para optimizar sus operaciones.
    `,
    author: {
      name: 'Ing. Carlos López',
      role: 'Director Técnico AOG',
    },
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Tecnología',
    iconName: 'Droplets',
    image: '/images/aog/control-de-solidos-1.jpeg',
  },
  {
    id: '2',
    slug: 'seguridad-operaciones-petroleras',
    title: 'Protocolos de Seguridad en Operaciones Petroleras: Estándares Internacionales',
    excerpt:
      'Análisis profundo de los protocolos de seguridad esenciales que toda operación petrolera debe implementar según normativas internacionales.',
    content: `
# Protocolos de Seguridad en Operaciones Petroleras

La seguridad en la industria petrolera no es opcional, es fundamental. En este artículo exploramos los estándares internacionales que rigen nuestras operaciones.

## Marco Normativo

### ISO 45001
Sistema de gestión de seguridad y salud ocupacional que establece:
- Identificación de peligros
- Evaluación de riesgos
- Controles operacionales
- Preparación ante emergencias

### API Standards
Las normas de la API (American Petroleum Institute) cubren:
- Equipos de perforación
- Procedimientos operativos
- Mantenimiento preventivo
- Inspecciones regulares

## Equipos de Protección Personal (EPP)

### Básicos
- Casco con barboquejo
- Botas con puntera de acero
- Lentes de seguridad
- Guantes resistentes

### Especializados
- Trajes ignífugos
- Equipos de respiración
- Arnés de seguridad
- Detector de gases

## Procedimientos de Emergencia

### Plan de Respuesta
1. Identificación inmediata
2. Contención del incidente
3. Evacuación si necesario
4. Comunicación con autoridades
5. Análisis post-incidente

## Capacitación Continua

En AOG implementamos:
- Simulacros mensuales
- Certificaciones anuales
- Actualizaciones normativas
- Auditorías externas

## Conclusión

La seguridad es responsabilidad de todos. Nuestro compromiso con cero incidentes nos distingue en la industria.
    `,
    author: {
      name: 'Ing. María González',
      role: 'Gerente de Seguridad',
    },
    date: '2025-01-10',
    readTime: '6 min',
    category: 'Seguridad',
    iconName: 'Shield',
    image: '/images/aog/tecnicos-1.jpeg',
  },
  {
    id: '3',
    slug: 'bombas-centrifugas-industria-petrolera',
    title: 'Bombas Centrífugas en la Industria Petrolera: Selección y Mantenimiento',
    excerpt:
      'Las bombas centrífugas son el corazón de las operaciones de transferencia de fluidos. Aprende a seleccionar el equipo correcto y mantenerlo en óptimas condiciones.',
    content: `
# Bombas Centrífugas en la Industria Petrolera

Las bombas centrífugas son equipos fundamentales en toda operación petrolera. Su correcta selección y mantenimiento impactan directamente en la eficiencia y rentabilidad del proyecto.

## Principio de Funcionamiento

### Componentes Principales
- Impulsor o rodete
- Carcasa o voluta
- Eje de transmisión
- Sellos mecánicos
- Cojinetes

### Tipos de Bombas Centrífugas
- Bombas de una etapa
- Bombas multietapa
- Bombas sumergibles
- Bombas de alta presión

## Aplicaciones en Oil & Gas

### Transferencia de Crudo
- Bombeo desde tanques de almacenamiento
- Alimentación a sistemas de proceso
- Carga y descarga de buques
- Bombeo entre instalaciones

### Sistemas de Inyección
- Inyección de agua
- Inyección de químicos
- Sistemas de recuperación mejorada
- Manejo de agua producida

### Sistemas de Lodo
- Circulación de fluido de perforación
- Alimentación de equipos de control de sólidos
- Transferencia entre tanques
- Sistemas de mezcla

## Criterios de Selección

### Parámetros Hidráulicos
- Caudal requerido (GPM/m³/h)
- Altura dinámica total (TDH)
- NPSH disponible vs requerido
- Curva del sistema

### Características del Fluido
- Viscosidad
- Densidad
- Contenido de sólidos
- Corrosividad
- Temperatura

### Materiales de Construcción
- Acero al carbono
- Acero inoxidable
- Aleaciones especiales
- Recubrimientos cerámicos

## Mantenimiento Preventivo

### Inspecciones Rutinarias
- Verificación de vibraciones
- Monitoreo de temperatura
- Revisión de sellos
- Análisis de lubricante

### Mantenimiento Programado
- Cambio de sellos mecánicos
- Alineación del conjunto
- Balanceo de impulsores
- Reemplazo de cojinetes

### Indicadores de Desgaste
- Aumento de vibración
- Caída de rendimiento
- Fugas excesivas
- Ruidos anormales

## Eficiencia Energética

### Optimización
- Variadores de frecuencia (VFD)
- Impulsores recortados a medida
- Control de punto de operación
- Bombas de alta eficiencia

### Beneficios
- Reducción de consumo energético hasta 30%
- Menor desgaste mecánico
- Mayor vida útil del equipo
- Menor costo operativo

## Conclusión

En AOG contamos con un amplio catálogo de bombas centrífugas y el expertise para ayudarte a seleccionar el equipo ideal para tu operación.
    `,
    author: {
      name: 'Ing. Roberto Sánchez',
      role: 'Especialista en Equipos Rotativos',
    },
    date: '2025-01-05',
    readTime: '10 min',
    category: 'Tecnología',
    iconName: 'Wrench',
    image: '/images/aog/bombas-centrifugas.jpg',
  },
  {
    id: '4',
    slug: 'sostenibilidad-industria-petrolera',
    title: 'Sostenibilidad en la Industria Petrolera: Prácticas y Tecnologías Verdes',
    excerpt:
      'Exploramos cómo la industria petrolera está adoptando prácticas sostenibles y tecnologías limpias para reducir su impacto ambiental.',
    content: `
# Sostenibilidad en la Industria Petrolera

La industria petrolera está en una transformación hacia prácticas más sostenibles. Aquí exploramos las iniciativas clave.

## Reducción de Emisiones

### Quemadores Ecológicos
- Reducción de 95% en emisiones de partículas
- Menor generación de NOx
- Cumplimiento con normativas ambientales
- Tecnología de combustión limpia

### Captura de Metano
- Sistemas de detección y reparación de fugas
- Recuperación de gas natural
- Conversión a energía útil

## Gestión de Agua

### Tratamiento Avanzado
- Reutilización de agua de proceso
- Sistemas de filtración
- Monitoreo de calidad
- Descarga segura

### Conservación
- Optimización de uso
- Reciclaje en sitio
- Reducción de consumo

## Manejo de Residuos

### Economía Circular
- Reutilización de materiales
- Reciclaje de lodos de perforación
- Disposición responsable
- Minimización de desechos

## Tecnologías Limpias

### Energía Renovable en Sitio
- Paneles solares
- Turbinas eólicas
- Sistemas híbridos
- Almacenamiento de energía

### Equipos Eficientes
- Motores de alta eficiencia
- Sistemas de recuperación de calor
- Automatización inteligente
- Mantenimiento predictivo

## Certificaciones Ambientales

- ISO 14001
- Certificación CLEAN
- Auditorías anuales
- Reporte de sostenibilidad

## Impacto Medible

### Resultados 2024
- 30% reducción en emisiones
- 40% menos consumo de agua
- 50% aumento en reciclaje
- Cero derrames significativos

## Conclusión

En AOG, la sostenibilidad no es solo cumplimiento, es nuestro compromiso con las futuras generaciones.
    `,
    author: {
      name: 'Dra. Ana Martínez',
      role: 'Gerente de Sostenibilidad',
    },
    date: '2025-01-01',
    readTime: '7 min',
    category: 'Sostenibilidad',
    iconName: 'Leaf',
    image: '/images/aog/energia-2.jpeg',
  },
  {
    id: '5',
    slug: 'optimizacion-operaciones-perforacion',
    title: 'Optimización de Operaciones: Cómo la Data Analytics Revoluciona la Perforación',
    excerpt:
      'El análisis de datos en tiempo real está transformando las operaciones de perforación, permitiendo decisiones más inteligentes y resultados superiores.',
    content: `
# Optimización de Operaciones con Data Analytics

La revolución digital ha llegado a los campos petroleros. Descubre cómo la analítica de datos está cambiando todo.

## Big Data en Perforación

### Fuentes de Datos
- Sensores de fondo de pozo
- Parámetros de superficie
- Datos geológicos
- Registros históricos

### Volumen
- 1TB+ de datos por pozo
- Procesamiento en tiempo real
- Machine learning
- Inteligencia artificial

## Aplicaciones Prácticas

### Optimización de ROP
- Predicción de formaciones
- Ajuste automático de parámetros
- Aumento de 20-30% en velocidad
- Reducción de costos

### Mantenimiento Predictivo
- Análisis de vibración
- Detección temprana de fallas
- Programación óptima
- Menor tiempo de inactividad

### Gestión de Lodos
- Control automático de propiedades
- Reducción de desperdicios
- Optimización de aditivos
- Ahorro de hasta 15%

## Tecnologías Clave

### Edge Computing
- Procesamiento local
- Latencia mínima
- Decisiones inmediatas
- Menor dependencia de conectividad

### Digital Twin
- Réplica virtual del pozo
- Simulaciones en tiempo real
- Pruebas sin riesgo
- Optimización continua

### Dashboards Inteligentes
- Visualización intuitiva
- Alertas automáticas
- KPIs en tiempo real
- Acceso móvil

## ROI Comprobado

### Métricas de Éxito
- 25% reducción en NPT
- 30% mejora en ROP
- 20% ahorro en lodos
- 15% menos emisiones

## Implementación

1. **Evaluación**
   - Auditoría de sistemas actuales
   - Identificación de gaps
   - Definición de objetivos

2. **Integración**
   - Instalación de sensores
   - Conectividad
   - Configuración de plataforma

3. **Capacitación**
   - Personal operativo
   - Analistas de datos
   - Tomadores de decisión

4. **Optimización**
   - Ajuste continuo
   - Aprendizaje del sistema
   - Expansión gradual

## Futuro

### Próximas Fronteras
- Perforación autónoma
- IA generativa
- Blockchain para supply chain
- Realidad aumentada

## Conclusión

Los datos son el nuevo petróleo. En AOG, combinamos experiencia tradicional con innovación digital para resultados superiores.
    `,
    author: {
      name: 'Ing. David Torres',
      role: 'Director de Innovación',
    },
    date: '2024-12-28',
    readTime: '9 min',
    category: 'Operaciones',
    iconName: 'TrendingUp',
    image: '/images/aog/platform-hero.jpg',
  },
  {
    id: '6',
    slug: 'mantenimiento-equipos-alta-mar',
    title: 'Mantenimiento de Equipos en Alta Mar: Desafíos y Soluciones',
    excerpt:
      'Las condiciones extremas del mar abierto presentan desafíos únicos para el mantenimiento de equipos. Conoce las estrategias que funcionan.',
    content: `
# Mantenimiento de Equipos en Alta Mar

Las plataformas offshore operan en condiciones extremas. El mantenimiento efectivo es la diferencia entre éxito y fracaso.

## Desafíos Únicos

### Ambiente Hostil
- Corrosión por sal
- Humedad extrema
- Vientos fuertes
- Oleaje constante

### Logística Compleja
- Acceso limitado
- Ventanas meteorológicas
- Transporte costoso
- Personal especializado

### Consecuencias de Fallas
- Alto costo de downtime
- Riesgos de seguridad
- Impacto ambiental
- Pérdida de producción

## Estrategias de Mantenimiento

### Preventivo
- Calendario riguroso
- Inspecciones regulares
- Reemplazo programado
- Lubricación continua

### Predictivo
- Monitoreo de condición
- Análisis de vibración
- Termografía
- Análisis de aceite

### Correctivo Planificado
- Inventario estratégico
- Procedimientos claros
- Herramientas adecuadas
- Personal capacitado

## Tecnologías de Apoyo

### Drones Industriales
- Inspección visual
- Acceso a áreas difíciles
- Reducción de riesgo
- Captura de datos

### ROVs Submarinos
- Inspección subacuática
- Trabajos en líneas
- Menor costo que buzos
- Operación continua

### Sensores IoT
- Monitoreo 24/7
- Alertas tempranas
- Históricos de datos
- Análisis de tendencias

## Mejores Prácticas

### Planificación
- Análisis de criticidad
- Priorización de activos
- Presupuesto realista
- Cronograma flexible

### Ejecución
- Permisos de trabajo
- Procedimientos de seguridad
- Control de calidad
- Documentación completa

### Seguimiento
- KPIs definidos
- Revisiones mensuales
- Mejora continua
- Lecciones aprendidas

## Caso de Estudio: Plataforma XYZ

### Situación Inicial
- MTBF: 45 días
- Downtime: 12%
- Costos altos

### Implementación
- Programa predictivo
- Sensores IoT
- Capacitación personal
- Inventario optimizado

### Resultados
- MTBF: 120 días (+167%)
- Downtime: 3% (-75%)
- ROI: 300% en 18 meses

## Certificaciones Clave

- ISO 55000 (Asset Management)
- API 580 (RBI)
- Certificación de personal
- Auditorías periódicas

## Conclusión

En AOG, nuestro programa de mantenimiento offshore combina experiencia, tecnología y mejores prácticas globales para máxima confiabilidad.
    `,
    author: {
      name: 'Ing. Fernando Ruiz',
      role: 'Gerente de Mantenimiento',
    },
    date: '2024-12-20',
    readTime: '8 min',
    category: 'Operaciones',
    iconName: 'Zap',
    image: '/images/aog/workers-equipment.jpg',
  },
]

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'Todos') return BLOG_POSTS
  return BLOG_POSTS.filter((post) => post.category === category)
}

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

// Helper function to get related posts
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return BLOG_POSTS.filter(
    (post) => post.slug !== currentSlug && post.category === currentPost.category
  ).slice(0, limit)
}
