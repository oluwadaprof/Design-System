// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE_BUNDLE === 'true',
  openAnalyzer: false
})

/** @type {import('next').NextConfig} */
const nextConfig = {

}


