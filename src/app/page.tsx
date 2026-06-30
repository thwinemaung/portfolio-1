import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
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
} from '@/sanity/lib/queries';

export default async function Home() {
  const [projects, experience, education, certifications, profile] = await Promise.all([
    client.fetch<SanityProject[]>(PROJECTS_QUERY),
    client.fetch<SanityExperience[]>(EXPERIENCE_QUERY),
    client.fetch<SanityEducation[]>(EDUCATION_QUERY),
    client.fetch<SanityCertification[]>(CERTIFICATIONS_QUERY),
    client.fetch<SanityProfile | null>(PROFILE_QUERY),
  ]);

  return (
    <>
      <Nav />
      <Hero
        name={profile?.name ?? ''}
        headline={profile?.headline ?? ''}
        bio={profile?.bio ?? ''}
        socials={profile?.socials ?? []}
        phone={profile?.phone}
      />
      <About />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Education education={education} certifications={certifications} />
      <Skills skills={profile?.skills ?? []} languages={profile?.languages ?? []} />
      <Contact contactLinks={profile?.contactLinks ?? []} />
      <Footer />
    </>
  );
}
