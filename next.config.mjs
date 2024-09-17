import withPWA from 'next-pwa';

const nextConfig = {};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false,  // Enable service worker for testing in development mode
})(nextConfig);

