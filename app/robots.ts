import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/user/', '/checkout/', '/payment/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://ak8win.com/sitemap.xml',
  }
}
