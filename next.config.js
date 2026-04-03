/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["awgaulwkwdopvecmigyc.supabase.co"], // 👈 ADD THIS
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

module.exports = nextConfig;
