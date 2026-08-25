/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      /* /single-services was the kit's service detail page, carrying the same
         copy as the architecture audit. The canonical page is now under
         /services/[slug]; this keeps the old URL and its links alive. */
      {
        source: "/single-services",
        destination: "/services/architecture-audit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
