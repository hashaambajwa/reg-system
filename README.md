# Registration Admin UI (Prototype)

A Next.js 15 / React 19 prototype for a registration administration interface. This repository currently contains an MUI permanent sidebar, theme integration and a starter homepage. **It is not a complete registration system**: registration workflows, a backend, authentication and deployment are not implemented here.

## Stack

- Next.js 15 / React 19 / TypeScript
- Material UI, Materio theme and Tailwind CSS

## Local development

    npm ci
    npm run dev

Open http://localhost:3000. The main page is in `app/page.tsx`, the sidebar in `components/Sidebar.tsx` and theme setup in `components/ThemeRegistry.tsx`.

## Current implementation

- Permanent navigation sidebar with dashboard/settings links
- Theme and layout scaffolding
- Default Next.js landing content remains in the dashboard area

## Planned work

- Registration overview, station management and attendee search UI
- Authenticated API integration
- Loading/empty/error states and accessible forms
- Tests and deployment configuration

This README intentionally describes the current code, not the broader registration architecture being explored elsewhere.
