'use client'

import { useTranslations } from 'next-intl'
import { t as tr } from '@/lib/locale'
import type { Project } from '@/sanity/lib/types'

interface ProjectsSectionProps {
  locale: string
  projects: Project[]
}

export default function ProjectsSection({ locale, projects }: ProjectsSectionProps) {
  const t = useTranslations('projects')

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 pb-16 pt-8 lg:py-24 md:px-12 lg:px-24">
      <h2 className="font-body text-4xl sm:text-5xl font-bold text-forest-900 mb-4 tracking-tight">
        {t('title')}
      </h2>
      <p className="text-neutral-400 mb-12 max-w-2xl">{t('subtitle')}</p>

      <div className="space-y-12">
        {projects.map(project => (
          <article
            key={project._id}
            className="group relative grid sm:grid-cols-8 gap-4 sm:gap-8 transition-all"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden group-hover:shadow-xl rounded-lg transition lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-400/10" />

            {/* Icon placeholder */}
            <div className="flex items-center justify-center z-10 sm:col-span-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-forest-900 to-forest-800 border border-forest-700 flex items-center justify-center group-hover:border-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/20 transition-all overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="z-10 sm:col-span-6 space-y-4">
              <h3 className="text-xl font-semibold text-forest-800 group-hover:text-forest-900 transition-colors">
                {tr(project.title, locale)}
              </h3>

              {project.description && (
                <p className="text-sm leading-relaxed text-neutral-700">
                  {tr(project.description, locale)}
                </p>
              )}

              {project.highlights && (
                (() => {
                  const hl = project.highlights[locale as 'en' | 'fr'] ?? project.highlights.en
                  return hl && hl.length > 0 ? (
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
                      {hl.map((h, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <svg className="h-3 w-3 text-forest-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null
                })()
              )}

              {project.technologies && project.technologies.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <li key={tech}>
                      <span className="px-3 py-1 bg-neutral-700 border rounded-full text-xs font-medium text-neutral-100 hover:bg-forest-700 transition-colors">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-4 text-sm">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-700 hover:text-forest-700 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-forest-400 hover:text-forest-300 transition-colors"
                  >
                    {t('viewDemo')}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
