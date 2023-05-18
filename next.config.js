/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    // basePath: '/marketplace',
    reactStrictMode: true,
    webpack5: false, // Add this line to disable webpack 5 in Next.js 13.4.0
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}
module.exports = nextConfig
