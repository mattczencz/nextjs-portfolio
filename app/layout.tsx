import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Matt Czencz - Frontend Developer Portfolio',
  description: `Matt Czencz's Frontend Developer Portfolio. View his work and enjoy!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
