/** @type {import("next").NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

/* Inject bundle analyzer in development. */
async function injectBundleAnalyzer() {
  const analyzer = import('@next/bundle-analyzer').then((withBundleAnalyzer) => {
    console.log('Bundle analyzer loaded.');
    const bundleAnalyzer = withBundleAnalyzer.default({
      enabled: true,
    });
    return bundleAnalyzer(nextConfig);
  });
  return analyzer;
}

nextConfig = await injectBundleAnalyzer();
export default nextConfig;
