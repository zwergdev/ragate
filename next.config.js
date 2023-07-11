/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'uploadthing.com',
				port: '',
				pathname: '/f/**'
			}
		]
	},
	webpack: config => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding')
		return config
	}
}

module.exports = nextConfig
