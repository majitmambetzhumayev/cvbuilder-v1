import { defineField, defineType } from 'sanity'

export const contactSettingsSchema = defineType({
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      type: 'object',
      title: 'Section Title',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'subtitle',
      type: 'object',
      title: 'Subtitle',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'successMessage',
      type: 'object',
      title: 'Success Message',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'errorMessage',
      type: 'object',
      title: 'Error Message',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
  ],
})
