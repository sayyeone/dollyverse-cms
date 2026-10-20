import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import ContactView from './ContactView';

export const metadata = {
  title: 'Kontak & Lokasi Workshop — KUB Dollyverse',
  description: 'Hubungi KUB Dollyverse dan kunjungi workshop kami di Balai RW 12 dan eks-Wisma Barbara lantai 3 Putat Jaya, Surabaya.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
