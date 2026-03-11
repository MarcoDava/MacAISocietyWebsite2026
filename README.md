# MacAI Society Website 2026

Official website for the McMaster AI Society, featuring event information, project showcases, and community resources.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/MarcoDava/MacAISocietyWebsite2026.git
cd MacAISocietyWebsite2026

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Tech Stack

### Core
- **React 19.2.4** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.3.1** - Build tool and dev server
- **React Router DOM 7.4.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.2.1** - Utility-first CSS
- **Shadcn/ui** - Component library (New York style)
- **Motion (Framer Motion) 12.34.3** - Animations
- **Lucide React** - Icon library
- **Radix UI** - Accessible primitives

### 3D Graphics
- **Three.js 0.183.2** - 3D rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers


## 📁 Project Structure

```
MacAISocietyWebsite2026/
├── frontend/               # Main application
│   ├── src/
│   │   ├── Pages/         # Route components
│   │   │   ├── Home.tsx
│   │   │   ├── MacHacks.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── ...
│   │   ├── Components/    # Reusable components
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ui/        # UI primitives
│   │   ├── assets/        # Static assets
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript types
│   ├── public/            # Public static files
│   ├── scripts/           # Build/utility scripts
│   └── package.json       # Dependencies
└── README.md              
```

## ⚙️ Configuration


### Path Aliases

The project uses `@/` as an alias for `./src/`:
```typescript
import { Button } from '@/Components/ui/button'
```

### Before Commiting

ESLint is configured with TypeScript rules. Run before committing:
```bash
npm run lint
npm run build
npm audit fix
```





