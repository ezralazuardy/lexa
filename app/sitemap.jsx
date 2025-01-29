export default function sitemap() {
  return [
    // Home
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Product
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/product`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Security
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/security`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // News
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/news`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Contact Sales
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/sales`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Beta Registration
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/beta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/security-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/acceptable-use-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/data-processing-agreement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
