import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'DevSphere | Senior Software Engineer Portfolio',
  description: 'Portfolio of a specialized full-stack developer focusing on high-performance web applications and scalable architecture.',
  metadataBase: new URL('https://devsphere.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsphere.io',
    siteName: 'DevSphere Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/dev/1200/630',
        width: 1200,
        height: 630,
        alt: 'DevSphere Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevSphere | Senior Software Engineer Portfolio',
    description: 'Portfolio of a specialized full-stack developer focusing on high-performance web applications and scalable architecture.',
    images: ['https://picsum.photos/seed/dev/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "DevSphere",
    "url": "https://devsphere.io",
    "jobTitle": "Senior Software Engineer",
    "description": "Specialized in high-performance full-stack applications with Next.js and TypeScript.",
    "sameAs": [
      "https://github.com/devsphere",
      "https://linkedin.com/in/devsphere"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
