import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import AboutView from './AboutView';

export const metadata = {
  title: 'Tentang Kami — KUB Dollyverse',
  description: 'Mengenal lebih dekat KUB Dollyverse — kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
