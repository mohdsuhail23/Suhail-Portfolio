# DevSphere Professional Portfolio

A high-performance, developer-focused portfolio built with Next.js 15, Sanity.io, and Tailwind CSS.

## 🚀 Architecture Decisions

- **Next.js 15 (App Router)**: Utilizing React Server Components (RSC) for zero client-side JS on static parts and optimized data fetching.
- **Sanity.io**: Headless CMS choice for decoupled content management.
- **SSG & ISR**: Pages are statically generated for speed, with the capability for Incremental Static Regeneration to update content without full rebuilds.
- **Tailwind CSS (Dark Theme)**: Zinc/Slate palette for a professional "IDE-like" aesthetic.
- **SEO & Performance**: 
  - Automated JSON-LD generation (planned).
  - Next.js Metadata API for dynamic OG/Twitter tags.
  - WebP image optimization.

## 🛠️ Setup Instructions

1. **Environment Variables**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

2. **Sanity Schema**:
   The `src/sanity/schemaTypes` directory contains the definitions. You'll need to run a Sanity Studio to push these schemas to your project.

3. **Deploy to Vercel**:
   - Push your code to GitHub.
   - Connect the repository to Vercel.
   - Add the environment variables in the Vercel dashboard.
   - Vercel will automatically detect Next.js and build the project.

## 📊 Success Metrics
- Target Lighthouse Score: > 95
- TTI: < 2s
- Mobile First & Fully Accessible
