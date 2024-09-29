import withPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

// Create the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Base Next.js config
const nextConfig = {};

// Compose the plugins: first `withNextIntl`, then `withPWA`
export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})(withNextIntl(nextConfig)); // Apply `withNextIntl` first, then `withPWA`
