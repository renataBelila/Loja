/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatters:[{
            protocol: "https",
            hostname: "",
            port: "",
            pathname: "/**"
        }]
    },
}
