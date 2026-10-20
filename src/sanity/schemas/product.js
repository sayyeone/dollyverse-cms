export const product = {
  name: 'product',
  title: 'Produk & Merchandise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Sablon Digital', value: 'Sablon Digital' },
          { title: 'Merchandise', value: 'Merchandise' },
          { title: 'Sablon Manual', value: 'Sablon Manual' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Harga (Rp)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'priceLabel',
      title: 'Label Harga',
      type: 'string',
      initialValue: 'Mulai dari',
    },
    {
      name: 'badge',
      title: 'Badge (opsional, misal: Best Seller)',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Tampilkan di Beranda (Featured)',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'image',
      title: 'Foto Produk',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageAlt',
      title: 'Deskripsi Foto (Alt text)',
      type: 'string',
    },
    {
      name: 'waText',
      title: 'Template Pesan WhatsApp',
      type: 'string',
      description: 'Pesan otomatis saat tombol Tanya Harga diklik pengunjung',
    },
  ],
};
