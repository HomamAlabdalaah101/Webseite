/** @type {import('next').NextConfig} */
const nextConfig = {
    // ===== VERCEL-BRANDING ENTFERNEN =====

    // Entfernt "X-Powered-By: Next.js" Header
    poweredByHeader: false,

    // Verhindert Source Maps in Production (verhindert Code-Einsicht)
    productionBrowserSourceMaps: false,

    // Sichere React Strict Mode
    reactStrictMode: true,

    // Trailing Slash konsistent halten (verhindert Redirect-Probleme bei Google-Indexierung)
    trailingSlash: false,

    typescript: {
        ignoreBuildErrors: true,
    },

    images: {
        unoptimized: true,
    },

    // Hide Next.js development indicators (including the "N" logo)
    devIndicators: false,

    // ===== COMPILER OPTIMIERUNGEN =====
    compiler: {
        // Entfernt console.log in Production
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // ===== SECURITY HEADERS =====
    async headers() {
        return [{
            source: '/:path*',
            headers: [
                // Vercel-Branding entfernen
                {
                    key: 'X-Powered-By',
                    value: '',
                },
                {
                    key: 'Server',
                    value: '',
                },

                // Security Headers
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                },
                {
                    key: 'Referrer-Policy',
                    value: 'strict-origin-when-cross-origin'
                },
                {
                    key: 'Permissions-Policy',
                    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
                },
                {
                    key: 'Content-Security-Policy',
                    value: [
                        "default-src 'self'",
                        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                        "style-src 'self' 'unsafe-inline'",
                        "img-src 'self' data: https:",
                        "font-src 'self' data:",
                        "connect-src 'self'",
                        "frame-ancestors 'none'"
                    ].join('; ')
                }
            ]
        }]
    },

    // ===== REDIRECTS (Optional) =====
    async redirects() {
        return [
            // Alte URLs umleiten, falls nötig
            // {
            //   source: '/old-path',
            //   destination: '/new-path',
            //   permanent: true,
            // },
        ]
    },
}

export default nextConfig