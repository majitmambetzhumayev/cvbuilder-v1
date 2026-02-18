import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      title: 'Project Title',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English', validation: r => r.required() }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title.en' },
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Project Description',
      fields: [
        defineField({ name: 'en', type: 'string', title: 'English' }),
        defineField({ name: 'fr', type: 'string', title: 'French' }),
      ],
    }),
    defineField({
      name: 'highlights',
      type: 'object',
      title: 'Highlights (short bullet points)',
      fields: [
        defineField({ name: 'en', type: 'array', title: 'English', of: [{ type: 'string' }], options: { layout: 'tags' } }),
        defineField({ name: 'fr', type: 'array', title: 'French', of: [{ type: 'string' }], options: { layout: 'tags' } }),
      ],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'liveUrl', type: 'url', title: 'Live / Demo URL' }),
    defineField({ name: 'repoUrl', type: 'url', title: 'Repository URL' }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'completed',
    }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured Project' }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
