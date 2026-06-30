export interface SanityProject {
  _id: string
  kind: 'personal' | 'freelance'
  name: string
  desc: string
  tags: string[]
  type: string
  year: string
  role: string
  duration: string
  client: string | null
  url: string
  outcomes: string[]
}

export interface SanityExperience {
  _id: string
  title: string
  company: string
  location: string
  period: string
  summary: string
  bullets: string[]
  stack: string[]
  team: string
}

export interface SanityEducation {
  _id: string
  degree: string
  school: string
  year: string
  desc: string
  highlights: string[] | null
}

export interface SanityCertification {
  _id: string
  badge: string
  name: string
  issuer: string
  year: string
}

export interface SkillGroup {
  cat: string
  tags: string[]
}

export interface SocialLink {
  id: string
  label: string
  href: string
}

export interface ContactLink {
  id: string
  label: string
  value: string
  href: string
  note: string
}

export interface Language {
  name: string
  level: string
}

export interface SanityProfile {
  _id: string
  name: string
  headline: string
  bio: string
  phone: string | null
  languages: Language[]
  skills: SkillGroup[]
  socials: SocialLink[]
  contactLinks: ContactLink[]
}

export const PROJECTS_QUERY = `*[_type == "project"] | order(_id asc) {
  _id, kind, name, desc, tags, type, year, role, duration, client, url, outcomes
}`

export const EXPERIENCE_QUERY = `*[_type == "experience"] | order(_id asc) {
  _id, title, company, location, period, summary, bullets, stack, team
}`

export const EDUCATION_QUERY = `*[_type == "education"] | order(_id asc) {
  _id, degree, school, year, desc, highlights
}`

export const CERTIFICATIONS_QUERY = `*[_type == "certification"] | order(_id asc) {
  _id, badge, name, issuer, year
}`

export const PROFILE_QUERY = `*[_type == "profile"][0] {
  _id, name, headline, bio, phone, languages, skills, socials, contactLinks
}`
