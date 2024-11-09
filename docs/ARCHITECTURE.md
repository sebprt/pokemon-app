# Architecture

## 1. `public/`
Contains static files like images, icons, and assets that can be referenced directly.

## 2. `components/`
- **Reusable Components**
- Each file is a reusable component
- Components should be modular and only rely on props passed to them

## 3. `hooks/`
- **Custom Hooks**
- Store all custom React hooks
- Keep logic separate and reusable

## 4. `layouts/`
- **Layout Components**
- Help organize common page structure

## 5. `pages/`
- **Next.js Pages**
- Defines the main routes in your application
- Structure:
- `index.tsx` is the homepage
- `games/[id].tsx` for dynamic routes
- `_app.tsx` serves as the global wrapper for all pages

## 6. `services/`
- **API Service Functions**
- Abstracting API logic improves maintainability

## 7. `store/`
- **Zustand Store**
- Global state for items that need to persist

## 8. `styles/`
- **Global Styles**
- CSS files including:
- `globals.css` for base styles
- `shadcn-custom.css` for ShadCN UI modifications

## 9. `types/`
- **TypeScript Types and Interfaces**
- Store TypeScript interfaces and types

## 10. `utils/`
- **Utility Functions**

## 11. `config/`
- **Project Configuration**
- Project-wide configurations
