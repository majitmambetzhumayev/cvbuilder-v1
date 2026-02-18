import { sanityFetch } from '@/sanity/lib/live'
import {
  PROFILE_QUERY,
  EXPERIENCE_QUERY,
  EDUCATION_QUERY,
  SKILLS_QUERY,
  CERTIFICATIONS_QUERY,
  CONTACT_SETTINGS_QUERY,
} from '@/sanity/lib/queries/cv'
import { PROJECTS_QUERY } from '@/sanity/lib/queries/portfolio'
import CVSection from '@/components/cv/CVSection'
import ProjectsSection from '@/components/projects/ProjectsSection'
import ContactSection from '@/components/contact/ContactSection'

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const [
    { data: profile },
    { data: experiences },
    { data: educations },
    { data: skills },
    { data: certifications },
    { data: projects },
    { data: contactSettings },
  ] = await Promise.all([
    sanityFetch({ query: PROFILE_QUERY }),
    sanityFetch({ query: EXPERIENCE_QUERY }),
    sanityFetch({ query: EDUCATION_QUERY }),
    sanityFetch({ query: SKILLS_QUERY }),
    sanityFetch({ query: CERTIFICATIONS_QUERY }),
    sanityFetch({ query: PROJECTS_QUERY }),
    sanityFetch({ query: CONTACT_SETTINGS_QUERY }),
  ])

  return (
    <>
      <section id="cv">
        <CVSection
          locale={locale}
          profile={profile}
          experiences={experiences ?? []}
          educations={educations ?? []}
          skills={skills ?? []}
          certifications={certifications ?? []}
        />
      </section>
      <section id="projects" className="bg-neutral-100">
        <ProjectsSection locale={locale} projects={projects ?? []} />
      </section>
      <section id="contact">
        <ContactSection locale={locale} contactSettings={contactSettings} />
      </section>
    </>
  )
}
