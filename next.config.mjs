/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/kopi_bery" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
