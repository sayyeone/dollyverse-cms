// src/data/contact.js

export const WA_NUMBER = '6281234567890' // ⚠️ Ganti dengan nomor WA nyata

export const locations = [
  {
    id: 'balai-rw',
    name: 'Balai RW 12 Putat Jaya',
    address: 'Jl. Putat Jaya, RW 12, Kec. Sawahan, Surabaya, Jawa Timur',
    services: ['DTF', 'Sublim', 'Merchandise'],
    mapsUrl: 'https://maps.google.com/?q=Putat+Jaya+Surabaya', // ⚠️ Ganti URL Maps nyata
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.678!2d112.72!3d-7.295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9!2sPutat+Jaya!5e0!3m2!1sen!2sid!4v1',
  },
  {
    id: 'wisma-barbara',
    name: 'Eks-Wisma Barbara Lt. 3',
    address: 'Jl. Putat Jaya, Kec. Sawahan, Surabaya, Jawa Timur (milik Pemkot Surabaya)',
    services: ['Sablon Manual', 'Pusat Produksi Lokal'],
    mapsUrl: 'https://maps.google.com/?q=Wisma+Barbara+Putat+Jaya+Surabaya', // ⚠️ Ganti URL Maps nyata
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.678!2d112.72!3d-7.295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9!2sPutat+Jaya!5e0!3m2!1sen!2sid!4v1',
  },
]

export const socials = [
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'Instagram',
    url: 'https://instagram.com/dollyverse.id', // ⚠️ Cek username IG nyata
    handle: '@dollyverse.id',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: 'Youtube',
    url: 'https://youtube.com/@dollyverse', // ⚠️ Cek channel YT nyata
    handle: '@dollyverse',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'MessageCircle',
    url: `https://wa.me/${WA_NUMBER}`,
    handle: '+62 812-3456-7890',
  },
]

export const marketplaces = [
  {
    id: 'shopee',
    label: 'Shopee',
    url: '#', // ⚠️ Isi URL Shopee nyata
  },
  {
    id: 'tokopedia',
    label: 'Tokopedia',
    url: '#', // ⚠️ Isi URL Tokopedia nyata
  },
]

export function buildWaUrl(text = 'Halo Dollyverse, saya ingin bertanya. Bisa bantu saya?') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
