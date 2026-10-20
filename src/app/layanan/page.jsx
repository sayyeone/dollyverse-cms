import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import ServicesView from './ServicesView';

export const metadata = {
  title: 'Layanan & Pelatihan — KUB Dollyverse',
  description: 'Layanan sablon digital DTF, sublim, sablon manual, dan pelatihan wirausaha sablon KUB Dollyverse Surabaya.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServicesView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
