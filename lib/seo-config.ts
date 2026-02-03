// Centralized SEO configuration for the application

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  author: string
  siteName: string
  locale: string
  type: 'website' | 'article' | 'profile'
  image: {
    url: string
    width: number
    height: number
    alt: string
  }
  twitter: {
    card: 'summary' | 'summary_large_image' | 'app' | 'player'
    site: string
    creator: string
  }
  openGraph: {
    title: string
    description: string
    url: string
    siteName: string
    locale: string
    type: 'website' | 'article' | 'profile'
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  robots: {
    index: boolean
    follow: boolean
    googleBot: string
  }
  canonical?: string
  alternates?: {
    languages?: Record<string, string>
  }
}

// Default SEO configuration
export const defaultSEOConfig: SEOConfig = {
  title: 'Homam - Full Stack Developer & Designer',
  description: 'Portfolio of Homam, a passionate full-stack developer and designer specializing in modern web technologies, game development, and creative solutions.',
  keywords: [
    'Homam',
    'full stack developer',
    'web developer',
    'designer',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'game development',
    'UI/UX design',
    'frontend developer',
    'backend developer'
  ],
  author: 'Homam',
  siteName: 'Homam Portfolio',
  locale: 'en_US',
  type: 'website',
  image: {
    url: '/placeholder.jpg',
    width: 1200,
    height: 630,
    alt: 'Homam - Full Stack Developer'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@homamalkhateeb', // Replace with actual Twitter handle
    creator: '@homamalkhateeb'
  },
  openGraph: {
    title: 'Homam - Full Stack Developer & Designer',
    description: 'Portfolio of Homam, a passionate full-stack developer and designer specializing in modern web technologies, game development, and creative solutions.',
    url: 'https://homam.dev', // Replace with actual domain
    siteName: 'Homam Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Homam - Full Stack Developer'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1'
  }
}

// Function to generate SEO config for specific pages
export function generateSEOConfig(overrides: Partial<SEOConfig> = {}): SEOConfig {
  return {
    ...defaultSEOConfig,
    ...overrides,
    // Deep merge for nested objects
    image: { ...defaultSEOConfig.image, ...overrides.image },
    twitter: { ...defaultSEOConfig.twitter, ...overrides.twitter },
    openGraph: {
      ...defaultSEOConfig.openGraph,
      ...overrides.openGraph,
      images: overrides.openGraph?.images || defaultSEOConfig.openGraph.images
    },
    robots: { ...defaultSEOConfig.robots, ...overrides.robots }
  }
}

// Predefined configs for common pages
export const pageSEOConfigs = {
  home: generateSEOConfig(),
  about: generateSEOConfig({
    title: 'About - Homam',
    description: 'Learn more about Homam, his background, skills, and passion for technology and design.',
    openGraph: {
      title: 'About - Homam',
      description: 'Learn more about Homam, his background, skills, and passion for technology and design.',
      url: 'https://homamdev.de/about',
      siteName: 'Homam Portfolio',
      locale: 'de_DE',
      type: 'profile',
      images: defaultSEOConfig.openGraph.images
    }
  }),
  projects: generateSEOConfig({
    title: 'Projects - Homam',
    description: 'Explore Homam\'s portfolio of web development, game development, and design projects.',
    openGraph: {
      title: 'Projects - Homam',
      description: 'Explore Homam\'s portfolio of web development, game development, and design projects.',
      url: 'https://homam.dev/projects',
      siteName: 'Homam Portfolio',
      locale: 'en_US',
      type: 'website',
      images: defaultSEOConfig.openGraph.images
    }
  }),
  contact: generateSEOConfig({
    title: 'Contact - Homam',
    description: 'Get in touch with Homam for collaboration opportunities, projects, or just to say hello.',
    openGraph: {
      title: 'Contact - Homam',
      description: 'Get in touch with Homam for collaboration opportunities, projects, or just to say hello.',
      url: 'https://homamdev.de/kontakt',
      siteName: 'Homam Portfolio',
      locale: 'de_DE',
      type: 'website',
      images: defaultSEOConfig.openGraph.images
    }
  })
}

// Utility function to generate structured data (JSON-LD)
export function generateStructuredData(config: SEOConfig) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.author,
    description: config.description,
    url: config.openGraph.url,
    image: config.image.url,
    sameAs: [
      // Add social media profiles here
      // 'https://twitter.com/homamalkhateeb',
      // 'https://github.com/homamalkhateeb',
      // 'https://linkedin.com/in/homamalkhateeb'
    ],
    jobTitle: 'Full Stack Developer & Designer',
    knowsAbout: config.keywords
  }

  return structuredData
}

// Meta tags generator for Next.js
export function generateMetaTags(config: SEOConfig) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    author: config.author,
    robots: `${config.robots.index ? 'index' : 'noindex'},${config.robots.follow ? 'follow' : 'nofollow'}`,
    googlebot: config.robots.googleBot,
    'og:title': config.openGraph.title,
    'og:description': config.openGraph.description,
    'og:url': config.openGraph.url,
    'og:site_name': config.openGraph.siteName,
    'og:locale': config.openGraph.locale,
    'og:type': config.openGraph.type,
    'og:image': config.openGraph.images[0]?.url,
    'og:image:width': config.openGraph.images[0]?.width,
    'og:image:height': config.openGraph.images[0]?.height,
    'og:image:alt': config.openGraph.images[0]?.alt,
    'twitter:card': config.twitter.card,
    'twitter:site': config.twitter.site,
    'twitter:creator': config.twitter.creator,
    'twitter:title': config.openGraph.title,
    'twitter:description': config.openGraph.description,
    'twitter:image': config.openGraph.images[0]?.url,
    ...(config.canonical && { canonical: config.canonical })
  }
}
