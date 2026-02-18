import { defineField, defineType } from 'sanity'

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', type: 'string', title: 'Company Name', validation: r => r.required() }),
    defineField({
      name: 'role',
      type: 'object',
      title: 'Job Title',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'startDate', type: 'string', title: 'Start Date (e.g. 2023)' }),
    defineField({ name: 'endDate', type: 'string', title: 'End Date (leave blank for "Present")' }),
    defineField({ name: 'current', type: 'boolean', title: 'Currently Working Here' }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Role Description (bullet points)',
      description: 'Each paragraph becomes a bullet point',
      fields: [
        defineField({ name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] }),
        defineField({ name: 'fr', type: 'array', title: 'French', of: [{ type: 'block' }] }),
      ],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
