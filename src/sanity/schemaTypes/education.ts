import { defineField, defineType } from 'sanity'

export const educationSchema = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'institution', type: 'string', title: 'Institution', validation: r => r.required() }),
    defineField({
      name: 'degree',
      type: 'object',
      title: 'Degree / Award',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({ name: 'startDate', type: 'string', title: 'Start Date (e.g. 2014)' }),
    defineField({ name: 'endDate', type: 'string', title: 'End Date' }),
    defineField({ name: 'grade', type: 'string', title: 'Grade / Result' }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Description',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
