import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id, title, slug, coverImage, description, highlights, technologies,
    liveUrl, repoUrl, status, featured
  }
`)
