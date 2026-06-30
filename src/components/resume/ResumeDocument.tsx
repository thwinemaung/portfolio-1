import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer'
import type {
  SanityProfile,
  SanityExperience,
  SanityEducation,
  SanityCertification,
  SanityProject,
} from '@/sanity/lib/queries'

const COLORS = {
  fg: '#1E1B18',
  fg2: '#5C5650',
  fg3: '#9C9690',
  accent: '#2563EB',
  accentSoft: '#EEF3FF',
  border: '#DCDCDA',
  borderSoft: '#E6E6E4',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 46,
    fontSize: 9.5,
    fontFamily: 'Inter',
    fontWeight: 400,
    color: COLORS.fg2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  identity: {
    maxWidth: 300,
  },
  name: {
    fontSize: 23,
    fontWeight: 700,
    color: COLORS.fg,
    letterSpacing: -0.3,
    marginBottom: 5,
  },
  headline: {
    fontSize: 10,
    fontWeight: 600,
    color: COLORS.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  bio: {
    fontSize: 9,
    fontWeight: 400,
    color: COLORS.fg2,
    lineHeight: 1.55,
  },
  contactCol: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  contactLabel: {
    fontSize: 8,
    fontWeight: 600,
    color: COLORS.fg3,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginRight: 6,
  },
  contactValue: {
    fontSize: 9,
    fontWeight: 500,
    color: COLORS.accent,
    textDecoration: 'none',
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.fg,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: COLORS.accent,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 9,
    marginTop: 2,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSoft,
  },
  section: {
    marginBottom: 16,
  },
  entry: {
    marginBottom: 11,
  },
  entryHeadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  entryTitleLine: {
    fontSize: 10,
    color: COLORS.fg,
  },
  entryTitleBold: {
    fontWeight: 700,
  },
  entrySub: {
    fontSize: 9,
    fontWeight: 400,
    color: COLORS.fg2,
    marginBottom: 5,
  },
  entryPeriod: {
    fontSize: 8.5,
    fontWeight: 500,
    color: COLORS.fg3,
    flexShrink: 0,
    marginLeft: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3.5,
    paddingRight: 4,
  },
  bulletMark: {
    width: 11,
    fontSize: 9,
    color: COLORS.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    fontWeight: 400,
    color: COLORS.fg2,
    lineHeight: 1.5,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 2,
  },
  tag: {
    fontSize: 8,
    fontWeight: 500,
    color: COLORS.accent,
    backgroundColor: COLORS.accentSoft,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  skillGroup: {
    marginBottom: 9,
  },
  skillCat: {
    fontSize: 8.5,
    fontWeight: 700,
    color: COLORS.fg,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  certRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSoft,
  },
  certName: {
    fontSize: 9,
    fontWeight: 600,
    color: COLORS.fg,
  },
  certIssuer: {
    fontSize: 8.5,
    fontWeight: 400,
    color: COLORS.fg3,
  },
})

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((b, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bulletMark}>•</Text>
          <Text style={styles.bulletText}>{b}</Text>
        </View>
      ))}
    </View>
  )
}

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <View style={styles.tagRow} wrap={false}>
      {items.map((t) => (
        <Text key={t} style={styles.tag}>{t}</Text>
      ))}
    </View>
  )
}

function contactDisplay(href: string) {
  return href.replace(/^mailto:|^tel:|^https?:\/\//, '')
}

export function ResumeDocument({
  profile,
  experience,
  education,
  certifications,
  projects,
}: {
  profile: SanityProfile | null
  experience: SanityExperience[]
  education: SanityEducation[]
  certifications: SanityCertification[]
  projects: SanityProject[]
}) {
  const contacts: { id: string; label: string; href: string }[] = [
    ...(profile?.socials ?? []),
    ...(profile?.phone ? [{ id: 'phone', label: 'Phone', href: `tel:${profile.phone.replace(/\s+/g, '')}` }] : []),
  ]

  return (
    <Document title={profile?.name ? `${profile.name} — Resume` : 'Resume'}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <View style={styles.identity}>
            <Text style={styles.name}>{profile?.name}</Text>
            <Text style={styles.headline}>{profile?.headline}</Text>
            <Text style={styles.bio}>{profile?.bio}</Text>
          </View>
          <View style={styles.contactCol}>
            {contacts.map((c) => (
              <View key={c.id} style={styles.contactRow}>
                <Text style={styles.contactLabel}>{c.label}</Text>
                <Link src={c.href} style={styles.contactValue}>{contactDisplay(c.href)}</Link>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.divider} />

        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((e) => (
              <View key={e._id} style={styles.entry}>
                <View style={styles.entryHeadRow}>
                  <Text style={styles.entryTitleLine}>
                    {e.title} <Text style={styles.entryTitleBold}>· {e.company}</Text>
                  </Text>
                  <Text style={styles.entryPeriod}>{e.period}</Text>
                </View>
                <Bullets items={e.bullets} />
              </View>
            ))}
          </View>
        )}

        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((ed) => (
              <View key={ed._id} style={styles.entry}>
                <View style={styles.entryHeadRow}>
                  <Text style={[styles.entryTitleLine, styles.entryTitleBold]}>{ed.degree}</Text>
                  <Text style={styles.entryPeriod}>{ed.year}</Text>
                </View>
                <Text style={styles.entrySub}>{ed.school}</Text>
                {ed.highlights && ed.highlights.length > 0 ? (
                  <Bullets items={ed.highlights} />
                ) : ed.desc ? (
                  <Text style={styles.bulletText}>{ed.desc}</Text>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((p) => (
              <View key={p._id} style={styles.entry}>
                <View style={styles.entryHeadRow}>
                  <Text style={[styles.entryTitleLine, styles.entryTitleBold]}>{p.name}</Text>
                  <Text style={styles.entryPeriod}>{p.type}</Text>
                </View>
                {p.desc && <Text style={styles.entrySub}>{p.desc}</Text>}
                <Bullets items={p.outcomes} />
                <Tags items={p.tags} />
              </View>
            ))}
          </View>
        )}

        {((profile?.skills?.length ?? 0) > 0 || (profile?.languages?.length ?? 0) > 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {profile?.skills?.map((g) => (
              <View key={g.cat} style={styles.skillGroup} wrap={false}>
                <Text style={styles.skillCat}>{g.cat}</Text>
                <Tags items={g.tags} />
              </View>
            ))}
            {(profile?.languages?.length ?? 0) > 0 && (
              <View style={styles.skillGroup} wrap={false}>
                <Text style={styles.skillCat}>Languages</Text>
                <Tags items={profile!.languages.map((l) => `${l.name} · ${l.level}`)} />
              </View>
            )}
          </View>
        )}

        {certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.map((c) => (
              <View key={c._id} style={styles.certRow}>
                <Text style={styles.certName}>{c.name}</Text>
                <Text style={styles.certIssuer}>{c.issuer}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  )
}
