import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ak8win.com'
  
  const routes = [
    '',
    '/games',
    '/games/slots',
    '/games/live-casino',
    '/games/sports',
    '/games/cricket',
    '/games/fishing',
    '/games/esports',
    '/promotions',
    '/promotions/welcome',
    '/promotions/daily',
    '/promotions/cashback',
    '/vip',
    '/affiliate',
    '/about',
    '/responsible-gaming',
    '/terms',
    '/privacy',
  ]

  const locales = ['ne', 'en', 'zh-TW']

  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            'ne': `${baseUrl}/ne${route}`,
            'en': `${baseUrl}/en${route}`,
            'zh-TW': `${baseUrl}/zh-TW${route}`,
          },
        },
      })
    })
  })

  return sitemap
}
