import { defineField, defineType } from 'sanity';

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g. 2022 - Present)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the timeline.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
    },
  },
});
