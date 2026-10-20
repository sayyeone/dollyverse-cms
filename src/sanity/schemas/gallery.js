export const gallery = {
  name: 'gallery',
  title: 'Galeri Foto Kegiatan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul / Keterangan Singkat',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text Foto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    },
  ],
};
