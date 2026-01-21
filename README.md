# ideal-doodle

A modern React + TypeScript frontend project built with best practices.

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript 5** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting with TypeScript and React rules
- **Prettier** - Code formatting with Tailwind plugin

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run preview` - Preview production build

### Building
- `npm run build` - Build for production
- `npm run build:dev` - Build for development environment
- `npm run build:staging` - Build for staging environment
- `npm run build:prod` - Build for production environment

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── assets/      # Static assets (images, fonts, etc.)
├── App.tsx      # Main App component
├── main.tsx     # Application entry point
└── index.css    # Global styles with Tailwind directives
```

## Features

- Modern React with TypeScript
- Tailwind CSS with automatic class sorting
- ESLint + Prettier integration
- Fast HMR (Hot Module Replacement) with Vite
- Type-safe development with TypeScript
- Best practices configuration out of the box

## Deployment

This project uses GitHub Pages for hosting with automated deployments through GitHub Actions.

### Environments

#### 🚀 Staging (Main Branch)
- **URL**: `https://<username>.github.io/<repo-name>/`
- **Trigger**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/deploy-staging.yml`

#### 🧪 Dev Environment
- **URL**: `https://<username>.github.io/<repo-name>/dev/`
- **Trigger**: Manual deployment via GitHub Actions
- **Workflow**: `.github/workflows/deploy-dev.yml`
- **Usage**: Go to Actions → Deploy to Dev Environment → Run workflow

#### 🔍 PR Previews
- **URL**: `https://<username>.github.io/<repo-name>/pr-<number>/`
- **Trigger**: Automatic deployment when PR is opened/updated
- **Cleanup**: Automatic removal when PR is closed
- **Workflows**:
  - `.github/workflows/deploy-pr-preview.yml` (deployment)
  - `.github/workflows/cleanup-pr-preview.yml` (cleanup)

### Environment Variables

Environment-specific variables are configured in:
- `.env.development` - Development environment
- `.env.staging` - Staging environment (main branch)
- `.env.production` - Production environment

Variables prefixed with `VITE_` are exposed to the client-side code.

### Initial Setup

To enable GitHub Pages deployments:

1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Save the settings
5. The workflows will automatically deploy on the next push to `main` or when a PR is created

**Note**: All environments (staging, dev, and PR previews) are deployed to the `gh-pages` branch in different directories for optimal compatibility.

### Manual Deployment

To manually deploy to any environment:

```bash
# Build for specific environment
npm run build:dev
npm run build:staging
npm run build:prod
```

Then trigger the appropriate GitHub Actions workflow.
