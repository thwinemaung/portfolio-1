import { renderToBuffer } from '@react-pdf/renderer'
import { client } from '@/sanity/lib/client'
import {
  PROJECTS_QUERY,
  EXPERIENCE_QUERY,
  EDUCATION_QUERY,
  CERTIFICATIONS_QUERY,
  PROFILE_QUERY,
  type SanityProject,
  type SanityExperience,
  type SanityEducation,
  type SanityCertification,
  type SanityProfile,
} from '@/sanity/lib/queries'
import { ResumeDocument } from '@/components/resume/ResumeDocument'
import { registerResumeFonts } from '@/components/resume/fonts'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  registerResumeFonts(new URL(request.url).origin)

  const [projects, experience, education, certifications, profile] = await Promise.all([
    client.fetch<SanityProject[]>(PROJECTS_QUERY),
    client.fetch<SanityExperience[]>(EXPERIENCE_QUERY),
    client.fetch<SanityEducation[]>(EDUCATION_QUERY),
    client.fetch<SanityCertification[]>(CERTIFICATIONS_QUERY),
    client.fetch<SanityProfile | null>(PROFILE_QUERY),
  ])

  const buffer = await renderToBuffer(
    <ResumeDocument
      profile={profile}
      experience={experience}
      education={education}
      certifications={certifications}
      projects={projects}
    />
  )

  const filename = `${(profile?.name || 'resume').replace(/\s+/g, '-')}-Resume.pdf`

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  })
}
