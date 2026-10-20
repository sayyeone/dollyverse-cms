// src/data/services.js

export const services = [
  {
    id: 'kaos-satuan',
    icon: 'Shirt',
    title: 'Kaos Satuan',
    description: 'Pesan mulai 1 pcs tanpa minimum order. Cocok untuk hadiah, souvenir, atau ekspresi diri.',
    detail: [
      'Minimal order 1 pcs',
      'Teknik DTF (full color, detail tinggi)',
      'Teknik sublim (warna cerah, tahan lama)',
      'Pilihan bahan cotton combed 24s, 30s',
      'Ukuran S–3XL',
      'Estimasi 3–5 hari kerja',
    ],
    waText: 'Halo Dollyverse, saya ingin pesan kaos satuan. Bisa bantu saya?',
  },
  {
    id: 'pesanan-kelompok',
    icon: 'Users',
    title: 'Pesanan Kelompok / Seragam',
    description: 'Seragam komunitas, instansi, atau event dengan harga makin hemat untuk pemesanan banyak.',
    detail: [
      'Diskon progresif mulai 12 pcs',
      'Sablon manual, DTF, atau sublim',
      'Kapasitas hingga 200 kaos per hari',
      'Free desain untuk pesanan ≥ 24 pcs',
      'Pengiriman ke seluruh Indonesia',
    ],
    waText: 'Halo Dollyverse, saya ingin pesan seragam kelompok. Bisa bantu saya?',
  },
  {
    id: 'pelatihan',
    icon: 'GraduationCap',
    title: 'Pelatihan Sablon',
    description: 'Belajar sablon dari nol bersama pengrajin berpengalaman. Dapat sertifikat dan bimbingan usaha.',
    detail: [
      'Materi: sablon manual, DTF, dan sublim',
      'Praktik langsung di workshop',
      'Peserta mendapat sertifikat pelatihan',
      'Bimbingan usaha sablon mandiri',
      'Lokasi: Wisma Barbara Lt. 3, Putat Jaya',
    ],
    waText: 'Halo Dollyverse, saya ingin tahu info pelatihan sablon. Bisa bantu saya?',
  },
]

export const orderSteps = [
  { step: '01', title: 'Hubungi Kami', desc: 'Chat WhatsApp atau kunjungi langsung lokasi kami.' },
  { step: '02', title: 'Kirim Desain', desc: 'Kirim file desain atau minta bantuan desainer kami.' },
  { step: '03', title: 'Konfirmasi & Bayar', desc: 'Setujui proof desain dan lakukan pembayaran DP.' },
  { step: '04', title: 'Produksi & Kirim', desc: 'Pesanan diproduksi dan dikirim ke alamat kamu.' },
]
