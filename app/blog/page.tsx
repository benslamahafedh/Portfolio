import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const blogPosts = [
  {
    title: "The Future of IoT in Smart Cities",
    excerpt: "Exploring how Internet of Things technology is shaping the cities of tomorrow...",
    date: "2023-05-15",
    slug: "future-of-iot-smart-cities"
  },
  {
    title: "5 Web Development Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging trends in web development...",
    date: "2023-06-02",
    slug: "web-development-trends-2023"
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn key strategies to boost the performance of your React apps...",
    date: "2023-06-20",
    slug: "optimizing-react-applications"
  },
  {
    title: "The Rise of Edge Computing in IoT",
    excerpt: "Discover how edge computing is revolutionizing IoT data processing...",
    date: "2023-07-05",
    slug: "rise-of-edge-computing-iot"
  },
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "A comprehensive guide to creating robust microservices architectures...",
    date: "2023-07-18",
    slug: "scalable-microservices-nodejs"
  },
  {
    title: "AI in Web Development: Current Applications and Future Possibilities",
    excerpt: "Exploring the intersection of artificial intelligence and web development...",
    date: "2023-08-01",
    slug: "ai-in-web-development"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

