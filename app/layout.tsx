import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from '@/components/whatspp/whatsapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dhanish-portfolio.vercel.app'),
  title: 'Dhanish S Portfolio Website',
  description:
    'Full Stack Developer specializing in MERN stack, AI integration, and modern web development. Building responsive applications with React, Node.js, and cutting-edge technologies.',
  keywords:
    'Full Stack Developer, MERN Stack, React Developer, Node.js, Web Developer, Frontend Developer, Backend Developer, JavaScript, AI Integration',
  authors: [{ name: 'Dhanish S' }],
  creator: 'Dhanish S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhanish-portfolio.vercel.app',
    title: 'Dhanish S Portfolio',
    description: 'Full Stack Developer specializing in MERN stack and AI integration',
    siteName: 'Dhanish S Portfolio',
    images: [
      {
        url: '/white-logo.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview of Dhanish S',
      },
    ],
  },
  icons: {
    icon: '/white-logo.png', // 32x32 or 64x64 is best for favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}
