export const settings = {
  name: 'settings',
  title: 'Pengaturan Profil & Angka Statistik',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Dari Kampung Dolly, untuk Cerita Baru.',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      rows: 3,
      initialValue: 'Custom t-shirt, merchandise, dan pelatihan kreatif untuk mendukung ekonomi warga RW 12 Putat Jaya, Surabaya.',
    },
    {
      name: 'heroMockupImage',
      title: 'Gambar Utama Hero (Mockup Kaos/Produk)',
      type: 'image',
      options: { hotspot: true },
      description: 'Jika kosong, akan otomatis memakai gambar default mockup-2.png',
    },
    {
      name: 'statCapacity',
      title: 'Statistik: Kapasitas Kaos/Hari',
      type: 'number',
      initialValue: 200,
    },
    {
      name: 'statMembers',
      title: 'Statistik: Anggota Tim Aktif',
      type: 'number',
      initialValue: 10,
    },
    {
      name: 'statLocations',
      title: 'Statistik: Pusat Produksi / Lokasi',
      type: 'number',
      initialValue: 2,
    },
    {
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp Pemesanan (Format: 628xxxx)',
      type: 'string',
      initialValue: '628123456789',
    },
  ],
};
