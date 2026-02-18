import '../globals.css'
import { Inter, Fraunces } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { SanityLive } from '@/sanity/lib/live'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    fr: 'Majit Mambetzhumayev - Développeur Full-Stack',
    en: 'Majit Mambetzhumayev - Full-Stack Developer',
  }

  const descriptions: Record<string, string> = {
    fr: 'Portfolio et CV - Next.js, React, Node.js, TypeScript',
    en: 'Portfolio and CV - Next.js, React, Node.js, TypeScript',
  }

  const title = titles[locale] ?? titles['en']
  const description = descriptions[locale] ?? descriptions['en']

  return {
    title: { default: title, template: `%s | ${title}` },
    description,
    metadataBase: new URL('https://majit.dev'),
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en' },
    },
    openGraph: {
      title,
      description,
      url: `https://majit.dev/${locale}`,
      siteName: 'Majit Mambetzhumayev',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          {isDraftMode && <VisualEditing />}
          <Header />
          <div className="min-h-screen bg-forest-900">{children}</div>
          <Footer />
        </NextIntlClientProvider>
        <SanityLive />
      </body>
    </html>
  )
}
