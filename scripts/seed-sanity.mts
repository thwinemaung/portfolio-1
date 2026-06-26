// One-off migration: pushes the hardcoded mock data from src/data/index.ts
// into the live Sanity dataset, bypassing the Studio UI (and its real-time
// listener, which corporate networks/proxies can block).
//
// Usage:
//   node --experimental-strip-types --env-file=.env.local scripts/seed-sanity.mts
//
// Requires a SANITY_WRITE_TOKEN env var (Editor permission) in .env.local.
// Do NOT prefix it with NEXT_PUBLIC_ — it must never reach the browser bundle.

import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../src/sanity/env.ts'
import {
  CERTS,
  CONTACT_LINKS,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  SOCIALS,
} from '../src/data/index.ts'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Add an Editor-permission API token to .env.local (see sanity.io/manage).'
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const tx = client.transaction()

for (const p of PROJECTS) {
  tx.createOrReplace({
    _id: `project-${p.id}`,
    _type: 'project',
    kind: p.kind,
    name: p.name,
    desc: p.desc,
    tags: p.tags,
    type: p.type,
    year: p.year,
    role: p.role,
    duration: p.duration,
    client: p.client ?? undefined,
    url: p.url,
    outcomes: p.outcomes,
  })
}

EXPERIENCE.forEach((e, i) => {
  tx.createOrReplace({
    _id: `experience-${i}`,
    _type: 'experience',
    title: e.title,
    company: e.company,
    location: e.location,
    period: e.period,
    summary: e.summary,
    bullets: e.bullets,
    stack: e.stack,
    team: e.team,
  })
})

EDUCATION.forEach((ed, i) => {
  tx.createOrReplace({
    _id: `education-${i}`,
    _type: 'education',
    degree: ed.degree,
    school: ed.school,
    year: ed.year,
    desc: ed.desc,
  })
})

CERTS.forEach((c, i) => {
  tx.createOrReplace({
    _id: `certification-${i}`,
    _type: 'certification',
    badge: c.badge,
    name: c.name,
    issuer: c.issuer,
    year: c.year,
  })
})

tx.createOrReplace({
  _id: 'profile',
  _type: 'profile',
  skills: SKILLS.map((s) => ({ _type: 'skillGroup', _key: s.cat, cat: s.cat, tags: s.tags })),
  socials: SOCIALS.map((s) => ({ _type: 'social', _key: s.id, id: s.id, label: s.label, href: s.href })),
  contactLinks: CONTACT_LINKS.map((c) => ({
    _type: 'contactLink',
    _key: c.id,
    id: c.id,
    label: c.label,
    value: c.value,
    href: c.href,
    note: c.note,
  })),
})

const result = await tx.commit()
console.log(`Seeded ${result.results.length} documents into dataset "${dataset}".`)
