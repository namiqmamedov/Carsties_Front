/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        serverActions: true
    },
    images: {
        domains: [
            'cdn.pixabay.com'
        ]
    },
    output: 'standalone'
}

module.exports = nextConfig
