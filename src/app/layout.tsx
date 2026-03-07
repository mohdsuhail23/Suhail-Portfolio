
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: 'Mohammad Suhail | Full-Stack Developer & Google Apps Script Engineer',
  description: 'Portfolio of Mohammad Suhail, specialized in high-performance web applications with Next.js and business automation with Google Apps Script.',
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
    title: 'Mohammad Suhail | Developer Portfolio',
    description: 'Specialized in high-performance full-stack applications and business automations.',
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
    "name": "Mohammad Suhail",
    "url": "https://devsphere.io",
    "jobTitle": "Full-Stack Developer & Google Apps Script Engineer",
    "description": "Specialized in high-performance full-stack applications with Next.js and business automation.",
    "sameAs": [
      "https://github.com/Suhail1102",
      "https://www.linkedin.com/in/mohammad-suhail-406a81250/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
