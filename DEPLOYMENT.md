# Deployment Guide

This guide covers multiple deployment options for the Doing OK Social Club website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/doing-ok-social)

1. **One-Click Deploy**: Click the button above
2. **Connect GitHub**: Link your GitHub account
3. **Configure**: Set environment variables if needed
4. **Deploy**: Automatic deployment on every push

### Option 2: Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/doing-ok-social)

1. **One-Click Deploy**: Click the button above
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Deploy**: Automatic deployment

### Option 3: GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Set source** to GitHub Actions
3. **Push to main branch** - automatic deployment via workflow

## 🔧 Manual Deployment

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Step 1: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/doing-ok-social.git
cd doing-ok-social

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values
```

### Step 2: Build

```bash
# Development build
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Step 3: Deploy to Your Platform

#### Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

#### Traditional Hosting
```bash
npm run build
# Upload the 'out' folder to your web server
```

## 🌍 Environment Variables

### Required Variables
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Optional Variables
```env
NEXT_PUBLIC_GA_TRACKING_ID=GA-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
```

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env.local` to Git
2. **API Keys**: Use environment variables for all sensitive data
3. **HTTPS**: Always use HTTPS in production
4. **CSP**: Consider implementing Content Security Policy

## 📊 Performance Optimization

### Automatic Optimizations
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Static generation for better performance
- ✅ Automatic bundle optimization

### Manual Optimizations
- Replace placeholder images with optimized versions
- Add real content and compress images
- Configure CDN for static assets
- Enable gzip compression on server

## 🔍 SEO Configuration

### Included SEO Features
- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ PWA manifest

### Additional SEO Steps
1. **Google Search Console**: Verify your domain
2. **Google Analytics**: Add tracking code
3. **Social Media**: Update social media links
4. **Local SEO**: Add Google My Business listing

## 🧪 Testing

### Local Testing
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

### Production Testing
1. **Lighthouse**: Test performance, SEO, accessibility
2. **Mobile Testing**: Test on various devices
3. **Cross-browser**: Test on different browsers

## 🔄 Continuous Deployment

### GitHub Actions (Included)
- Automatic testing on pull requests
- Automatic deployment on main branch push
- Type checking and linting

### Webhook Setup
1. **Vercel**: Automatic via GitHub integration
2. **Netlify**: Automatic via GitHub integration
3. **Custom**: Use GitHub webhooks

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

#### Environment Variables Not Working
- Check variable names start with `NEXT_PUBLIC_`
- Restart development server after changes
- Verify variables are set in deployment platform

#### Images Not Loading
- Check image paths are correct
- Verify images are in `public` folder
- Update `next.config.js` domains if using external images

### Getting Help
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review deployment platform documentation
3. Check GitHub Issues for common problems

## 📈 Monitoring

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking
- **Uptime Robot**: Uptime monitoring

---

**Need help?** Open an issue on GitHub or contact the development team.
