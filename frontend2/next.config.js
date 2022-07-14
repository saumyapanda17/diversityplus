/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // API_URL: "http://localhost:8000", 
    API_URL: "https://diversityplus.herokuapp.com",
    
    MAPBOX_ACCESS_TOKEN: "pk.eyJ1Ijoic2F1bXlhcGFuZGEiLCJhIjoiY2w1azNrYTZ0MDY5MTNqcGE5dmJlZnJ6dyJ9.EKmcmKYTVfHl9q_Gbp6zYg"
  },
};

module.exports = nextConfig;
