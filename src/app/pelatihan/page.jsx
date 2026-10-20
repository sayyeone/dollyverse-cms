import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import PelatihanView from './PelatihanView';

export const metadata = {
  title: 'Pelatihan Wirausaha Sablon — KUB Dollyverse',
  description: 'Program pelatihan sablon digital DTF, sublimasi, dan sablon manual di eks-Wisma Barbara Lt. 3 Putat Jaya Surabaya.',
};

export default function PelatihanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PelatihanView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
