import { type SchemaTypeDefinition } from 'sanity'
import { profileSchema } from './profile'
import { experienceSchema } from './experience'
import { educationSchema } from './education'
import { skillSchema } from './skill'
import { projectSchema } from './project'
import { certificationSchema } from './certification'
import { contactSettingsSchema } from './contactSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profileSchema,
    experienceSchema,
    educationSchema,
    skillSchema,
    projectSchema,
    certificationSchema,
    contactSettingsSchema,
  ],
}
