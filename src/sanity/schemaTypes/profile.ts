import { defineField, defineType } from 'sanity'

export const profileSchema = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'fullName', type: 'string', title: 'Full Name', validation: r => r.required() }),
    defineField({
      name: 'headline',
      type: 'object',
      title: 'Professional Headline',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'tagline',
      type: 'object',
      title: 'Tagline (Location / Availability)',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({ name: 'email', type: 'string', title: 'Email Address' }),
    defineField({ name: 'phone', type: 'string', title: 'Phone Number' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'website', type: 'url', title: 'Website URL' }),
    defineField({ name: 'github', type: 'url', title: 'GitHub URL' }),
    defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn URL' }),
    defineField({ name: 'cvPdfUrl', type: 'string', title: 'CV PDF filename or URL' }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Profile Photo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'summary',
      type: 'object',
      title: 'Professional Summary',
      fields: [
        defineField({ name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] }),
        defineField({ name: 'fr', type: 'array', title: 'French', of: [{ type: 'block' }] }),
      ],
    }),
  ],
})
