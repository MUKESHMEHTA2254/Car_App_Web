/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    }, server: {
        // You can specify a custom host and port here
        host: 'localhost', // Change to your desired host, e.g., '0.0.0.0' for all available network interfaces
        port: 5001, // Change to your desired port
    }
}

