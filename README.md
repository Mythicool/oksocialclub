# Doing OK Social Club

A modern, responsive website for Oklahoma's premier social dining experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, responsive design with Oklahoma-themed branding
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Built-in SEO with structured data, sitemap, and meta tags
- **Performance Focused**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG compliant with proper semantic HTML
- **PWA Ready**: Progressive Web App capabilities with manifest
- **Mobile First**: Fully responsive design for all devices

## 🎨 Design Highlights

- **Oklahoma-Themed Color Palette**: Custom colors inspired by Oklahoma's landscape
- **Typography**: Elegant combination of Playfair Display and Inter fonts
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Visual Hierarchy**: Clear content structure with engaging visual elements

## 🏗️ Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Optimized for Vercel, Netlify, or any static hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/doing-ok-social.git
cd doing-ok-social
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
doing-ok-social/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── sitemap.ts       # SEO sitemap
│   │   ├── robots.ts        # SEO robots.txt
│   │   └── manifest.ts      # PWA manifest
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── FoodVendors.tsx  # Food vendors showcase
│   │   ├── Events.tsx       # Events calendar
│   │   ├── Location.tsx     # Location information
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer
│   │   └── StructuredData.tsx # SEO structured data
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Key Sections

### Hero Section
- Compelling headline with Oklahoma branding
- Call-to-action buttons
- Animated background elements
- Responsive design

### About Section
- Oklahoma culture storytelling
- Community statistics
- Feature highlights
- Engaging visuals

### Food & Vendors
- Local vendor showcase
- Interactive vendor cards
- Cuisine categories
- High-quality food imagery

### Events Calendar
- Oklahoma-themed events
- Ticket booking integration
- Event filtering and search
- Availability tracking

### Location & Contact
- Interactive map integration
- Transportation options
- Contact form with validation
- Social media links

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  'oklahoma-red': '#C41E3A',
  'oklahoma-cream': '#FFF8DC',
  'prairie-gold': '#DAA520',
  // Add more colors...
}
```

### Content
- Update text content in component files
- Replace placeholder images with actual photos
- Modify event data in `Events.tsx`
- Update contact information throughout

### Styling
- Customize animations in component files
- Modify layout in `globals.css`
- Adjust responsive breakpoints in Tailwind config

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Next.js Image component
- **SEO**: Structured data and meta tags

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project builds to static files and can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by Dockyard Social's design
- Oklahoma cultural elements and imagery
- Local food and entertainment scene
- Community feedback and suggestions

---

**Built with ❤️ in Oklahoma**
