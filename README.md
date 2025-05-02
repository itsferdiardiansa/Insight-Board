# Insight Board

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb)](https://reactjs.org/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query)
[![Jest](https://img.shields.io/badge/tested%20with-jest-99424f.svg?logo=jest)](https://jestjs.io/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/itsferdiardiansa/Insight-Board/ci.yml?label=CI&logo=githubactions&style=flat)](https://github.com/itsferdiardiansa/Insight-Board/actions)

A modern, scalable SaaS application built with **Next.js (TypeScript)**. It provides AI-powered dashboards by integrating data from services like Stripe, Shopify, and Google Analytics.
Designed with **TDD**, component-based architecture, and full test coverage using **Jest** and **React Testing Library**.

---

## Features

- **Next.js (TypeScript)** – Fast, SEO-optimized React framework
- **NextAuth.js** – Secure authentication and provider logins
- **API Integrations** – Connect Stripe, Shopify, GA4 (OAuth-based)
- **Smart Dashboards** – Auto-generated KPIs with customizable layouts
- **TDD Workflow** – Unit and integration testing baked in from day 1
- **TailwindCSS** – Utility-first styling for fast UI iteration
- **CI/CD Ready** – Deploy on Vercel with preview URLs and GitHub Actions


## Tech Stack

| Area          | Stack                        |
|---------------|------------------------------|
| Framework     | Next.js (TypeScript)         |
| Styling       | Tailwind CSS                 |
| Auth          | NextAuth.js                  |
| Testing       | Jest, React Testing Library  |
| Deployment    | Vercel                       |


## Getting Started

#### 1. Clone & Install

```bash
git clone https://github.com/your-username/saas-dashboard.git
cd saas-dashboard
pnpm install
```

#### 2. Create .env(?.local|)
```bash
DATABASE_URL=postgres://...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
STRIPE_CLIENT_ID=...
STRIPE_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
SHOPIFY_API_KEY=...
```

#### 3. Start Dev Server
```bash
pnpm run dev
```
then visit `http://localhost:3000`


## Testing

#### Run All Tests
```bash
pnpm test
```

#### Watch Mode
```bash
pnpm run test:watch
```

#### Coverage Report
```bash
pnpm run test:coverage
```

#### Example test file:
```ts
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

test('renders button with text', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

```


## Deployment

#### Recommended: Vercel
- Push code to GitHub
- Import the repo into Vercel
- Set environment variables
- Vercel auto-detects and deploys your Next.js app

#### Roadmap
- TDD setup with Jest + RTL
- OAuth integration with Stripe, GA, Shopify
- Drag-and-drop dashboard editor
- Multi-tenant support
- Admin portal for usage analytics