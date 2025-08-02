# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 15.4.5 portfolio website built with TypeScript and React 19.1.0. It uses the App Router architecture, Tailwind CSS v4 for styling, and Framer Motion for animations.

## Essential Commands

### Development
```bash
npm run dev         # Start development server with Turbopack
npm run build       # Create production build
npm run start       # Start production server
npm run lint        # Run ESLint checks
```

### Common Development Tasks
```bash
# Install dependencies
npm install

# Check for TypeScript errors (no built-in script, use):
npx tsc --noEmit

# Format code with Prettier (not configured, manual setup needed):
npx prettier --write .
```

## Architecture Overview

### Directory Structure
- `/app/` - Next.js App Router pages and layouts
  - Each subdirectory represents a route (contact, resume, services, work)
  - `layout.tsx` wraps all pages with transitions and common layout
  - `globals.css` contains Tailwind directives and CSS variables
- `/components/` - Reusable React components
  - `/ui/` - shadcn/ui components (Button, Input, Tabs, etc.)
  - Feature components like Header, Hero, MobileNav, Social, Stats
- `/lib/` - Utility functions (mainly `utils.ts` for className handling)
- `/public/assets/` - Static assets (images, icons)

### Key Architectural Patterns

1. **Component Architecture**
   - All interactive components use "use client" directive
   - shadcn/ui components are in `/components/ui/`
   - Components use `cn()` utility from `/lib/utils` for className management
   - Consistent prop interfaces with TypeScript

2. **Styling System**
   - Tailwind CSS v4 with custom configuration
   - CSS variables defined in `globals.css` for theming
   - Primary color: `#1c1c22`, Accent: `#00ff99`
   - JetBrains Mono font family

3. **Animation Framework**
   - Framer Motion for page transitions (`PageTransition`, `StairTransition`)
   - Standard animation config: `delay: 0.3s`, `ease: "easeIn"`
   - Swiper.js for project carousel in `/work` page

4. **Data Structure**
   - Static data for portfolio content (no external API calls)
   - Resume data includes: experience, education, skills, about sections
   - Project data includes: name, category, description, stack, links

### Important Technical Details

1. **TypeScript Configuration**
   - Strict mode enabled
   - Path alias: `@/*` maps to root directory
   - Use absolute imports with `@/` prefix

2. **Next.js Setup**
   - App Router (not Pages Router)
   - No custom `next.config.ts` settings
   - Image optimization with `next/image`

3. **Dependencies to Know**
   - UI: `@radix-ui/*` components, `lucide-react`, `react-icons`
   - Animation: `framer-motion`, `swiper`
   - Utilities: `clsx`, `tailwind-merge`, `class-variance-authority`

### Development Considerations

1. **No Testing Framework** - Tests need to be set up if required
2. **No Environment Variables** - All configuration is hardcoded
3. **No CI/CD Pipeline** - Manual deployment process
4. **Mobile-First Design** - Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Working with Components

When creating new components:
1. Place in `/components/` directory
2. Use TypeScript interfaces for props
3. Apply "use client" directive if using hooks or browser APIs
4. Use `cn()` utility for conditional classes
5. Follow existing naming conventions (PascalCase for components)

When modifying pages:
1. Pages are in `/app/[route]/page.tsx`
2. Each page is wrapped with `PageTransition` for animations
3. Maintain consistent spacing using Tailwind classes
4. Keep mobile responsiveness in mind

### Common Patterns

```typescript
// Component with cn() utility
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
}

const Component = ({ className }: ComponentProps) => {
  return (
    <div className={cn("base-classes", className)}>
      {/* content */}
    </div>
  )
}

// Page with transitions
const Page = () => {
  return (
    <PageTransition>
      {/* page content */}
    </PageTransition>
  )
}
```