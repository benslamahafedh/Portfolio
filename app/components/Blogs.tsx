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
  }
]

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800 dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

