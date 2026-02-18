import { defineField, defineType } from 'sanity'

export const skillSchema = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Skill Name', validation: r => r.required() }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Tooling & Ecosystem', value: 'tools' },
          { title: 'Databases', value: 'databases' },
        ],
      },
    }),
    defineField({
      name: 'proficiency',
      type: 'number',
      title: 'Proficiency (1–5)',
      validation: r => r.min(1).max(5),
    }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [
    { title: 'Category then Order', name: 'categoryOrder', by: [{ field: 'category', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
  ],
})
