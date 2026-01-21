import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hasan Ahmed Jobayer - Full Stack Developer',
  description: 'Portfolio of Hasan Ahmed Jobayer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased selection:bg-brand-500 selection:text-white`}>{children}</body>
    </html>
  );
}
