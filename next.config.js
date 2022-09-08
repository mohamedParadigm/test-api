/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["txsrv-v5.psdigital.me"]
  },
  env: {
    API_URL: "https://txsrv-v5.psdigital.me",
    PUBLIC_KEY: "",
    LANG: "en",
    COUNTRY: 6
  }
}

module.exports = nextConfig
