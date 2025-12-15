# Kalpatru - Two Crafts, One Legacy

A modern website showcasing professional printing and metal fabrication services.

## Project Overview

Kalpatru represents excellence in two distinct crafts:
- **Printing Services**: Professional printing solutions for all your needs
- **Fabnex (Metal Fabrication)**: Custom metal work and structural fabrication

## Features

- Split-screen hero design showcasing both business divisions
- Responsive design optimized for all devices
- Smooth animations and transitions
- Modern UI with shadcn/ui components
- React Router for seamless navigation

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── workshop/       # Custom business components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

© 2024 Kalpatru Group. All rights reserved.