# Mohammad Suhail | Professional Portfolio

A high-performance, developer-focused portfolio built with Next.js 15, Sanity.io, and Tailwind CSS.

## 🚀 Quick Start

1. **Install Dependencies**: `npm install`
2. **Local Development**: `npm run dev`
3. **Build for Production**: `npm run build`

---

## 🌍 Deployment to Vercel

Vercel is the recommended hosting platform for this Next.js application.

### 1. Push to GitHub
Create a new repository on GitHub and push your local code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New"** > **"Project"**.
2. Import your GitHub repository.
3. In the **Environment Variables** section, add the following (copy from your `.env`):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (usually `production`)
4. Click **Deploy**.

### 3. Sanity CORS Settings
To allow your Vercel site to fetch data from Sanity:
1. Go to [sanity.io/manage](https://www.sanity.io/manage).
2. Select your project.
3. Go to **API** > **CORS origins**.
4. Add your Vercel URL (e.g., `https://your-portfolio.vercel.app`) and check **"Allow credentials"**.

---

## 🛠️ Content Management (Sanity Studio)

The app includes an embedded **Sanity Studio** at `/admin`.

1. **Initialize Sanity**: 
   - Go to [sanity.io/manage](https://www.sanity.io/manage) and create a project.
   - Copy the `Project ID`.
2. **Access the Admin Panel**:
   - Locally: `http://localhost:9002/admin`
   - Production: `https://your-site.com/admin`
3. **Add Content**:
   - Click on **Project** or **Experience** in the sidebar.
   - Fill out the forms and click **Publish**.

---

## 📊 Success Metrics
- Target Lighthouse Score: > 95
- TTI: < 2s
- Mobile First & Fully Accessible
