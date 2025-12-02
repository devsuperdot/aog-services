# AOG Services - Plataforma de Servicios Industriales

Plataforma web de servicios industriales para la industria del petróleo y gas.

## Descripción del Proyecto

Sistema integral para la administración de servicios de inspección, certificación y capacitación en el sector petrolero. Construido con Next.js 15 y tecnologías empresariales modernas.

## Estado del Proyecto

🚧 **En Desarrollo** - Fase inicial

## Características Planeadas

- Sistema de gestión de cursos y módulos de capacitación
- Gestión de usuarios (administradores, instructores, estudiantes)
- Seguimiento de certificaciones y renovaciones
- Reportes y análisis de desempeño
- Gestión de contenido multimedia (videos, PDFs, documentos)
- Sistema de pagos (Stripe)
- Integración con AWS para almacenamiento y hosting

## Stack Tecnológico

### Frontend
- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework CSS utility-first
- **Radix UI** - Componentes UI accesibles

### Herramientas de Desarrollo
- **pnpm** - Gestor de paquetes
- **ESLint & Prettier** - Linting y formateo
- **Vitest** - Testing unitario
- **Playwright** - Testing E2E
- **Storybook** - Desarrollo de componentes
- **GitHub Actions** - CI/CD

### Por Implementar
- **Prisma/Drizzle** - ORM para base de datos
- **PostgreSQL** - Base de datos
- **NextAuth.js** - Autenticación
- **AWS S3** - Almacenamiento de archivos
- **Stripe** - Procesamiento de pagos

## Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar tests
pnpm test
pnpm test:watch
pnpm e2e:headless

# Linting y formateo
pnpm lint
pnpm lint:fix
pnpm prettier:fix

# Storybook
pnpm storybook

# Análisis de bundle
pnpm analyze
```

## Estructura del Proyecto

```
aog-services/
├── app/              # Next.js App Router
│   ├── api/         # API routes
│   └── page.tsx     # Página principal
├── components/      # Componentes React
├── styles/          # Estilos globales
├── e2e/            # Tests E2E
└── .storybook/     # Configuración Storybook
```

## Configuración

El proyecto utiliza T3 Env para manejo type-safe de variables de entorno. Ver `env.mjs` para la configuración.

## Licencia

Propietario - AOG Services / Alze Group
