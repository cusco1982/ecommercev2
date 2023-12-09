/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig


// images: {
//     remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'assets.example.com',
//             port: '',
//             pathname: '/account123/**',
//         }
//     ]
// }