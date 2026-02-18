import type { PortableTextBlock } from '@portabletext/types'

export type LocaleString = { en?: string; fr?: string }
export type LocaleBlock = { en?: PortableTextBlock[]; fr?: PortableTextBlock[] }
export type LocaleStringArray = { en?: string[]; fr?: string[] }

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?: { top: number; bottom: number; left: number; right: number }
}

export interface Profile {
  fullName: string
  headline?: LocaleString
  tagline?: LocaleString
  email?: string
  phone?: string
  location?: string
  website?: string
  github?: string
  linkedin?: string
  cvPdfUrl?: string
  photo?: SanityImage
  summary?: LocaleBlock
}

export interface Experience {
  _id: string
  company: string
  role?: LocaleString
  location?: string
  startDate?: string
  endDate?: string
  current?: boolean
  description?: LocaleBlock
  technologies?: string[]
}

export interface Education {
  _id: string
  institution: string
  degree?: LocaleString
  startDate?: string
  endDate?: string
  grade?: string
  description?: LocaleString
}

export interface Skill {
  _id: string
  name: string
  category?: string
  proficiency?: number
}

export interface Certification {
  _id: string
  name: string
  issuer?: string
  issueDate?: string
  credentialUrl?: string
}

export interface Project {
  _id: string
  title?: LocaleString
  slug?: { current: string }
  coverImage?: SanityImage
  description?: LocaleString
  highlights?: LocaleStringArray
  technologies?: string[]
  liveUrl?: string
  repoUrl?: string
  status?: 'in-progress' | 'completed' | 'archived'
  featured?: boolean
}

export interface ContactSettings {
  sectionTitle?: LocaleString
  subtitle?: LocaleString
  successMessage?: LocaleString
  errorMessage?: LocaleString
}

export type SupportedLocale = 'fr' | 'en'
