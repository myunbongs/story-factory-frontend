/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
        {
          source: '/:path*',
          destination: 'http://117.16.45.69:80/:path*' 
        },
    ]
  },

  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'dummyimage.com'
    ],
    format: ['image/png', 'image/webp', 'image/jpeg']
  }
}

module.exports = nextConfig
