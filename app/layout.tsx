import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/navigation/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
