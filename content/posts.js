/**
 * The blog posts the kit ships, shared by every blog layout.
 *
 * The kit repeated this markup on six pages with slightly different wrappers
 * and no titles — only an excerpt, a tag and a date, which is what the card
 * design shows. `type` picks the card's media: a still, a small gallery, or
 * an embedded video.
 */
export const POSTS = [
  {
    slug: "saas-strategy",
    author: "Vibecop Team",
    tag: "SaaS Strategy",
    date: "April 02, 2026",
    excerpt: "Build strong SaaS foundations with scalable architecture. Vibecop helps startups design efficient systems with better performance, flexibility, and long-term digital growth.",
    type: "image",
    image: "/assets/images/standard_post_img01.jpg"
  },
  {
    slug: "ai-innovation",
    author: "Vibecop Team",
    tag: "AI Innovation",
    date: "April 02, 2026",
    excerpt: "AI is reshaping modern businesses. Vibecop integrates intelligent automation and machine learning to improve efficiency, decision-making, and product scalability.",
    type: "gallery",
    images: [
      "/assets/images/standard_post_img02.jpg",
      "/assets/images/standard_post_img03.jpg",
      "/assets/images/standard_post_img04.jpg"
    ]
  },
  {
    slug: "cloud-trends",
    author: "Vibecop Team",
    tag: "Cloud Trends",
    date: "April 02, 2026",
    excerpt: "Stay ahead with modern cloud technologies. Vibecop delivers scalable cloud solutions that enhance performance, security, and cost efficiency for startups.",
    type: "image",
    image: "/assets/images/standard_post_img05.jpg"
  },
  {
    slug: "product-growth",
    author: "Vibecop Team",
    tag: "Product Growth",
    date: "April 02, 2026",
    excerpt: "Vibecop ensures product success with optimized workflows, better system design, and continuous improvement strategies for SaaS-based applications.",
    type: "image",
    image: "/assets/images/standard_post_img06.jpg"
  },
  {
    slug: "automation-systems",
    author: "Vibecop Team",
    tag: "Automation Systems",
    date: "April 02, 2026",
    excerpt: "Automation is key to efficiency. Vibecop builds intelligent systems that reduce manual effort, improve accuracy, and accelerate digital transformation.",
    type: "video",
    url: "https://player.vimeo.com/video/157467640?background=1"
  },
  {
    slug: "security-and-scale",
    author: "Vibecop Team",
    tag: "Security & Scale",
    date: "April 02, 2026",
    excerpt: "Security and scalability are core to SaaS success. Vibecop ensures safe, reliable, and high-performance systems for modern digital businesses.",
    type: "video",
    url: "https://www.youtube.com/embed/dA8Smj5tZOQ"
  },
  {
    slug: "ai-architecture",
    author: "Vibecop Team",
    tag: "AI Architecture",
    date: "April 02, 2026",
    excerpt: "Vibecop builds advanced AI-driven systems that optimize performance, automate workflows, and deliver scalable digital solutions for modern businesses.",
    type: "image",
    image: "/assets/images/standard_post_img03.jpg"
  },
  {
    slug: "saas-growth",
    author: "Vibecop Team",
    tag: "SaaS Growth",
    date: "April 02, 2026",
    excerpt: "Scalable SaaS growth requires smart planning. Vibecop helps businesses improve product performance with automation, analytics, and cloud-first strategies.",
    type: "video",
    url: "https://player.vimeo.com/video/157467640?background=1"
  },
  {
    slug: "devops-and-cloud",
    author: "Vibecop Team",
    tag: "DevOps & Cloud",
    date: "April 02, 2026",
    excerpt: "Vibecop strengthens infrastructure with modern DevOps practices, ensuring fast deployments, high reliability, and secure cloud environments.",
    type: "video",
    url: "https://www.youtube.com/embed/dA8Smj5tZOQ"
  },
  {
    slug: "automation",
    author: "Vibecop Team",
    tag: "Automation",
    date: "April 02, 2026",
    excerpt: "Automation is at the core of Vibecop. We design intelligent systems that reduce manual effort and improve business efficiency across platforms.",
    type: "image",
    image: "/assets/images/standard_post_img04.jpg"
  },
  {
    slug: "cloud-solutions",
    author: "Vibecop Team",
    tag: "Cloud Solutions",
    date: "April 02, 2026",
    excerpt: "Vibecop delivers cloud-native solutions that enhance scalability, security, and performance for startups and enterprise-level applications.",
    type: "image",
    image: "/assets/images/standard_post_img02.jpg"
  },
  {
    slug: "tech-insights",
    author: "Vibecop Team",
    tag: "Tech Insights",
    date: "April 02, 2026",
    excerpt: "Stay updated with Vibecop insights on AI, SaaS, and modern software engineering practices that shape the future of digital products.",
    type: "image",
    image: "/assets/images/standard_post_img06.jpg"
  },
];

/** The tag list the sidebar and filters use. */
export const POST_TAGS = [...new Set(POSTS.map((p) => p.tag))];
