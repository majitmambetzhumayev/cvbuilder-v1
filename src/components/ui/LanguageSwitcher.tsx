'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const params = useParams()
  const locale = params.locale as string
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: 'fr' | 'en') => {
    startTransition(() => {
      const segments = pathname.split('/')
      segments[1] = newLocale
      router.replace(segments.join('/'))
    })
  }

  return (
    <div className="flex gap-2">
      {(['fr', 'en'] as const).map(lang => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          disabled={isPending}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            locale === lang
              ? 'bg-forest-400 text-forest-900'
              : 'bg-forest-800/50 text-neutral-400 hover:bg-forest-800 hover:text-neutral-200'
          } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
