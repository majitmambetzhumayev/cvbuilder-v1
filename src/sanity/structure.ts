import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Profile')
        .id('profile')
        .child(S.document().schemaType('profile').documentId('singletonProfile')),
      S.listItem()
        .title('Contact Settings')
        .id('contactSettings')
        .child(S.document().schemaType('contactSettings').documentId('singletonContact')),
      S.divider(),
      S.documentTypeListItem('experience').title('Work Experience'),
      S.documentTypeListItem('education').title('Education'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('certification').title('Certifications'),
      S.divider(),
      S.documentTypeListItem('project').title('Portfolio Projects'),
    ])
