import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'صدى القوافي | Sada al-Qawafi',
    short_name: 'Sada al-Qawafi',
    description: 'Where Ink Meets Eternity - An Arabic Poetry Experience',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5E6C4',
    theme_color: '#F5E6C4',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: '144x144 192x192 512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      }
    ],
  }
}
