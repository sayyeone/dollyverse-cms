import { client, urlFor } from '@/sanity/client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import ProductsView from './ProductsView';

export const metadata = {
  title: 'Produk & Merchandise — KUB Dollyverse',
  description: 'Katalog produk custom KUB Dollyverse: Kaos custom DTF/sublim, mug, totebag, tumbler, dll.',
};

export const revalidate = 60;

async function getProducts() {
  try {
    const products = await client.fetch(`*[_type == "product"] | order(_createdAt desc)`);
    return products || [];
  } catch (e) {
    return [];
  }
}

export default async function ProductsPage() {
  const sanityProducts = await getProducts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProductsView sanityProducts={sanityProducts} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
