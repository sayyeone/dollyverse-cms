import './globals.css';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'KUB Dollyverse | Jagonya Sablon Digital Murah di Surabaya',
  description: 'Kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya. Sablon kaos custom satuan, merchandise, dan pelatihan sablon.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
