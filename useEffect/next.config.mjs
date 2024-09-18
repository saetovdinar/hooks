/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",

images: {

remotePatterns: [


{

  protocol: "https",
  
  hostname: "i.pravatar.cc",
  
  port: "",
  
  pathname: "/**",
  
  }
  
  ]
}
}

export default nextConfig;
