import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    title: "The Future of IoT in Smart Cities",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    date: "2023-05-15",
    slug: "future-of-iot-smart-cities"
  },
  {
    title: "5 Web Development Trends to Watch in 2023",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    date: "2023-06-02",
    slug: "web-development-trends-2023"
  },
  {
    title: "Optimizing React Applications for Performance",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    date: "2023-06-20",
    slug: "optimizing-react-applications"
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-6">{post.date}</p>
            <div className="prose dark:prose-invert max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

