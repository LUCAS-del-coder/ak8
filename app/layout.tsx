import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ak8win.com'),
  title: {
    default: 'AK8 Casino Nepal 🎰 Most Trusted Online Casino 2025 | अनलाइन क्यासिनो',
    template: '%s | AK8 Casino Nepal'
  },
  description: "AK8 is Nepal's #1 trusted online casino offering 2000+ slot games, live casino, sports betting, cricket betting, fishing games. Licensed & secure. Join now for NPR 50,000 welcome bonus! नेपालको सबैभन्दा भरपर्दो अनलाइन क्यासिनो।",
  keywords: [
    'online casino nepal',
    'ak8 casino',
    'nepal online gambling',
    'online slots nepal',
    'live casino nepal',
    'sports betting nepal',
    'cricket betting nepal',
    'fishing games nepal',
    'pragmatic play nepal',
    'jili slots nepal',
    'trusted casino nepal'
  ],
  authors: [{ name: 'AK8 Casino' }],
  creator: 'AK8 Casino',
  publisher: 'AK8 Casino Nepal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ne_NP',
    alternateLocale: ['en_US', 'zh_TW'],
    url: 'https://ak8win.com',
    title: 'AK8 Casino Nepal - Most Trusted Online Casino 2025',
    description: "Nepal's #1 online casino with 2000+ games. Licensed, secure, and trusted by 500,000+ players. Get NPR 50,000 welcome bonus!",
    siteName: 'AK8 Casino',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AK8 Casino Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AK8 Casino Nepal - Most Trusted Online Casino 2025',
    description: "Nepal's #1 online casino with 2000+ games. Get NPR 50,000 welcome bonus!",
    images: ['/twitter-card.jpg'],
    creator: '@ak8casino',
  },
  alternates: {
    canonical: 'https://ak8win.com',
    languages: {
      'ne': 'https://ak8win.com/ne',
      'en': 'https://ak8win.com/en',
      'zh-TW': 'https://ak8win.com/zh-TW',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ne">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Geo Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Nepal" />
        <meta name="geo.position" content="28.3949;84.1240" />
        <meta name="ICBM" content="28.3949, 84.1240" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OnlineCasino",
              "name": "AK8 Casino Nepal",
              "alternateName": "AK8",
              "url": "https://ak8win.com",
              "logo": "https://ak8win.com/logo.png",
              "image": "https://ak8win.com/casino-banner.jpg",
              "description": "Nepal's most trusted online casino offering slots, live casino, sports betting, and fishing games with secure payment options.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NP",
                "addressRegion": "Nepal"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.3949",
                "longitude": "84.1240"
              },
              "telephone": "+977-XXXX-XXXX",
              "priceRange": "NPR",
              "currenciesAccepted": "NPR, USD, BTC, USDT",
              "paymentAccepted": "eSewa, Khalti, IME Pay, Visa, Mastercard, Bitcoin, USDT",
              "openingHours": "Mo-Su 00:00-24:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "15420",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/ak8casino",
                "https://twitter.com/ak8casino",
                "https://www.instagram.com/ak8casino"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
