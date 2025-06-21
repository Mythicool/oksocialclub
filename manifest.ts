import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Doing OK Social Club',
    short_name: 'Doing OK',
    description: 'Oklahoma\'s premier social dining experience',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C41E3A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    categories: ['food', 'social', 'entertainment'],
    lang: 'en-US',
    orientation: 'portrait-primary',
  }
}
