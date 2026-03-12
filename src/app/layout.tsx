
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohammad Suhail | Full-Stack Developer & Google Apps Script Engineer',
  description: 'Portfolio of Mohammad Suhail, specialized in high-performance web applications with Next.js and business automation with Google Apps Script.',
  metadataBase: new URL('https://devsphere.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsphere.io',
    siteName: 'Dev Suhail Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/dev/1200/630',
        width: 1200,
        height: 630,
        alt: 'Dev Suhail Portfolio',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}>
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
