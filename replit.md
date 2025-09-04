# Change by Cole - Video Production Portfolio

## Overview

Change by Cole is a modern, professional portfolio website for a Melbourne-based video production creative specializing in music videos, live events, and brand content creation. The site showcases work through a dynamic portfolio gallery, provides service information, client testimonials, and includes a contact form for new business inquiries. Built as a full-stack application with a focus on visual storytelling and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper HTTP status codes and error handling
- **Data Storage**: In-memory storage with interface-based design for easy database migration
- **Middleware**: Custom logging, JSON parsing, and error handling middleware

### Database Design
- **Schema**: Drizzle ORM with PostgreSQL schema definitions
- **Tables**: Users, contacts, and portfolio items with proper relationships
- **Validation**: Zod schemas for runtime type validation and API request validation
- **Migrations**: Drizzle migrations system for database version control

### Development Environment
- **Monorepo Structure**: Shared schema and types between client and server
- **Hot Reload**: Vite development server with middleware integration
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Linting**: ESLint configuration for code quality

### UI/UX Design Patterns
- **Design System**: Custom color palette with dark theme and gradient text effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS transitions and custom utility classes for smooth interactions
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Glass Morphism**: Custom backdrop blur effects for modern visual appeal

### Contact Management
- **Form Validation**: Zod schema validation for contact form submissions
- **Data Collection**: Structured contact data with project type and budget information
- **Submission Handling**: Async form submission with success/error feedback
- **Data Storage**: Contact submissions stored with timestamps for follow-up

### Portfolio Management
- **Category System**: Filterable portfolio items by project type (video, music-video, live)
- **Image Handling**: External image URLs with responsive loading
- **Featured Content**: Highlighting system for showcasing best work
- **Dynamic Loading**: React Query for efficient data fetching and caching

## External Dependencies

### Core Framework Dependencies
- **React & TypeScript**: Modern frontend development stack
- **Express.js**: Backend API server framework
- **Vite**: Development server and build tool

### Database & Validation
- **Drizzle ORM**: Type-safe database operations and schema management
- **@neondatabase/serverless**: PostgreSQL database adapter
- **Zod**: Runtime type validation and schema definition

### UI Component Libraries
- **Radix UI**: Accessible, unstyled UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Date-fns**: Date manipulation and formatting
- **Wouter**: Lightweight React router

### Build & Development
- **ESBuild**: Fast JavaScript bundler for production
- **TSX**: TypeScript execution for development
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **@replit/vite-plugin-***: Replit-specific development enhancements

### External Services
- **Unsplash**: Stock photography for portfolio and content images
- **Google Fonts**: Typography with DM Sans, Fira Code, and Geist Mono
- **Replit Platform**: Development environment and hosting platform