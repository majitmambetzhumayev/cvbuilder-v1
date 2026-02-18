import { defineQuery } from 'next-sanity'

export const PROFILE_QUERY = defineQuery(`
  *[_type == "profile" && _id == "singletonProfile"][0]{
    fullName, headline, tagline, email, phone, location,
    website, github, linkedin, cvPdfUrl, photo, summary
  }
`)

export const EXPERIENCE_QUERY = defineQuery(`
  *[_type == "experience"] | order(order asc) {
    _id, company, role, location, startDate, endDate, current, description, technologies
  }
`)

export const EDUCATION_QUERY = defineQuery(`
  *[_type == "education"] | order(order asc) {
    _id, institution, degree, startDate, endDate, grade, description
  }
`)

export const SKILLS_QUERY = defineQuery(`
  *[_type == "skill"] | order(order asc, name asc) {
    _id, name, category, proficiency
  }
`)

export const CERTIFICATIONS_QUERY = defineQuery(`
  *[_type == "certification"] | order(order asc) {
    _id, name, issuer, issueDate, credentialUrl
  }
`)

export const CONTACT_SETTINGS_QUERY = defineQuery(`
  *[_type == "contactSettings" && _id == "singletonContact"][0]{
    sectionTitle, subtitle, successMessage, errorMessage
  }
`)
