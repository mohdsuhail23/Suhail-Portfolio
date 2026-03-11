import { defineField, defineType } from 'sanity';

export const cvType = defineType({
  name: 'cv',
  title: 'Curriculum Vitae (CV)',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      initialValue: 'My Professional CV',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'CV File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
});
