# DevSphere Professional Portfolio

A high-performance, developer-focused portfolio built with Next.js 15, Sanity.io, and Tailwind CSS.

## 🚀 Architecture Decisions

- **Next.js 15 (App Router)**: Utilizing React Server Components (RSC) and Server Actions for data mutations.
- **Sanity.io**: Headless CMS for decoupled content management.
- **Floating Glassmorphism UI**: Modern aesthetic with Lucide icons and dark/light mode support.

## 🛠️ Content Management (How to add projects)

The app includes an embedded **Sanity Studio**. You don't need to write code to add projects!

1.  **Initialize Sanity**: 
    - Go to [sanity.io/manage](https://www.sanity.io/manage) and create a new project.
    - Copy the `Project ID`.
2.  **Set Environment Variables**:
    Update your `.env` file:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_id_here
    NEXT_PUBLIC_SANITY_DATASET=production
    ```
3.  **Access the Admin Panel**:
    - Run the app and visit `http://localhost:9002/admin`.
    - Log in with your Sanity account.
4.  **Add Content**:
    - Click on **Project** or **Experience** in the sidebar.
    - Fill out the forms (upload images, write case studies, select technologies).
    - Click **Publish**. 
    - The changes will appear on your site immediately (or within a minute due to revalidation).

## 🛠️ Setup Instructions

1. **Install Dependencies**: `npm install`
2. **Local Development**: `npm run dev`
3. **Build for Production**: `npm run build`

## 📊 Success Metrics
- Target Lighthouse Score: > 95
- TTI: < 2s
- Mobile First & Fully Accessible
