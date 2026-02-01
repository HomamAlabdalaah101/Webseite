# Homam Dev Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and optimized performance for showcasing creative development work.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Core Web Vitals monitoring, lazy loading, optimized images
- **SEO Friendly**: Meta tags, structured data, sitemap generation
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark/Light Mode**: Theme switching with system preference detection
- **Contact Form**: Integrated with Resend for email handling
- **Analytics**: Google Analytics 4 integration
- **PWA Ready**: Service worker, manifest, offline support

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (Headless components)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Backend & Services
- **Email**: Resend API
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4
- **Domain**: Custom domain support

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Code Formatting**: Prettier (via ESLint)
- **Git Hooks**: Husky + lint-staged
- **Testing**: Jest (configured)

## 📁 Project Structure

```
Webseite/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix)
│   ├── GoogleAnalytics.tsx
│   └── ...
├── lib/                   # Utility functions
│   ├── utils.ts          # General utilities
│   ├── performance.ts    # Performance monitoring
│   └── ...
├── public/               # Static assets
│   ├── images/           # Optimized images
│   └── ...
├── styles/               # Additional styles
└── types/                # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/homam-portfolio.git
   cd homam-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in your values:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Deployment
- `pnpm deploy` - Run automated deployment script
- `pnpm deploy:vercel` - Deploy to Vercel
- `pnpm deploy:check` - Pre-deployment checks

### Utilities
- `pnpm clean` - Clean build artifacts
- `pnpm analyze` - Bundle analyzer
- `pnpm security` - Security audit
- `pnpm test` - Run tests (when implemented)

## 🌐 Deployment

### Automated Deployment (Recommended)

1. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

2. **Follow the prompts** to configure your deployment

### Manual Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure environment variables** in Vercel dashboard

### Pre-deployment Checklist

- [ ] Environment variables configured
- [ ] Domain purchased and configured
- [ ] Google Analytics set up
- [ ] Email service (Resend) configured
- [ ] SEO metadata updated
- [ ] Images optimized
- [ ] Performance tested
- [ ] Accessibility tested

## 🔧 Configuration

### Environment Variables

See `.env.example` for all available variables. Key configurations:

- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `RESEND_API_KEY`: Email service API key
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID

### SEO Configuration

Update metadata in `app/layout.tsx` and `lib/seo-config.ts`:

- Site title and description
- Open Graph images
- Twitter card settings
- Structured data

### Theme Customization

Modify colors and styles in:
- `tailwind.config.js` - Color palette
- `app/globals.css` - Global styles
- `components/ui/` - Component theming

## 📊 Performance Monitoring

The app includes built-in performance monitoring:

- **Core Web Vitals**: FCP, LCP, FID, CLS tracking
- **Bundle Analysis**: Size monitoring and optimization
- **Memory Usage**: Client-side memory monitoring
- **Network Info**: Connection quality detection

View performance metrics in browser console during development.

## 🧪 Testing

Testing setup is configured but not yet implemented. To add tests:

1. **Unit Tests**: Component and utility testing
2. **Integration Tests**: API route testing
3. **E2E Tests**: Playwright or Cypress

Run tests with:
```bash
pnpm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support:
- Email: contact@homam.dev
- Portfolio: https://homam.dev

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design trends
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Framework**: Next.js team

---

Built with ❤️ by Homam
