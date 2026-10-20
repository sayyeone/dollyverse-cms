import { client } from '@/sanity/client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import Hero from '@/components/home/Hero';
import AboutTeaser from '@/components/home/AboutTeaser';
import Marquee from '@/components/home/Marquee';
import WhyUs from '@/components/home/WhyUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ServiceCards from '@/components/home/ServiceCards';
import BentoGallery from '@/components/home/BentoGallery';
import FAQ from '@/components/home/FAQ';
import ClosingCta from '@/components/home/ClosingCta';

async function getSanityData() {
  try {
    const products = await client.fetch(`*[_type == "product" && isFeatured == true] | order(_createdAt desc)[0...4]`);
    const gallery = await client.fetch(`*[_type == "gallery"] | order(order asc)[0...6]`);
    const settings = await client.fetch(`*[_type == "settings"][0]`);
    return { products: products || [], gallery: gallery || [], settings: settings || null };
  } catch (error) {
    console.warn('Sanity query warning (fallback to local mock data):', error.message);
    return { products: [], gallery: [], settings: null };
  }
}

export const revalidate = 60;

export default async function HomePage() {
  const { products, gallery, settings } = await getSanityData();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero Section tetap orisinil milik Anda */}
        <Hero settings={settings} />

        {/* 2. Marquee pita berjalan */}
        <Marquee />

        {/* 3. About Teaser (Statistik 200 kaos, 10 anggota, 2 lokasi) */}
        <AboutTeaser settings={settings} />

        {/* 4. Why Us (Kenapa Dollyverse / Beda dari yang lain) */}
        <WhyUs />

        {/* 5. Produk Unggulan (Custom Mulai 1 Pcs) */}
        <FeaturedProducts sanityProducts={products} />

        {/* 6. Layanan Utama */}
        <ServiceCards />

        {/* 7. Bento Grid Portofolio & Aktivitas Dollyverse */}
        <BentoGallery sanityGallery={gallery} />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. Closing CTA Pemesanan */}
        <ClosingCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
