import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/dashboard/',
          '/profile',
          '/profile/',
          '/complete-profile',
          '/complete-profile/',
          '/login',
          '/register',
          '/forgot-password',
          '/reset-password',
          '/api/',
        ],
      },
    ],
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}