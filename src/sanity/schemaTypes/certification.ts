import { defineField, defineType } from 'sanity'

export const certificationSchema = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Certification Name', validation: r => r.required() }),
    defineField({ name: 'issuer', type: 'string', title: 'Issuing Organisation' }),
    defineField({ name: 'issueDate', type: 'string', title: 'Date Issued (e.g. 2024)' }),
    defineField({ name: 'expiryDate', type: 'string', title: 'Expiry Date' }),
    defineField({ name: 'credentialId', type: 'string', title: 'Credential ID' }),
    defineField({ name: 'credentialUrl', type: 'url', title: 'Verify URL' }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
})
