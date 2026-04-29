# Dream Performance Vehicle Repair - Marketing Site

Astro-based marketing site for Dream Performance Vehicle Repair in Covington, KY.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

### Vercel

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Deploy

## Project Structure

```
/src
  /components    - Astro components (Hero, Services, Reviews, etc.)
  /ui            - Reusable UI components (Button, Card, etc.)
  /layouts       - Page layouts
  /pages         - Astro pages
  /styles        - Global CSS and design tokens
  /lib           - Utility functions
/public
  /images        - Static images
  favicon.svg    - Site favicon
  og-image.svg  - Open Graph image
```

## TODOs for Owner

- [ ] **Hours**: Confirm business hours (currently uses placeholder "Mon–Fri 8 AM – 6 PM, Sat by appointment")
- [ ] **Founding Year**: Add to Footer ("Family-owned since [YEAR]")
- [ ] **Contact Form**: Connect to Formspree or serverless function
- [ ] **Site Attribution**: Add to Footer ("Site by [NAME]")
- [ ] **Google Maps Link**: Update the Google reviews link in Reviews component

## Design System

- **Colors**: Dark theme with orange accent (#ff5722)
- **Fonts**: Geist (sans) and Geist Mono
- **Animations**: Scroll-triggered reveals, count-ups, magnetic buttons
- **Mobile-first**: Optimized for mobile users searching "auto repair near me"

## Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100