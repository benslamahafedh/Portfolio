
import { Star } from 'lucide-react'

const testimonials = [
  {
    title: 'Reliable and Fast Service',
    quote: 'Hafedh completed my Node.js project ahead of schedule and explained everything clearly.',
    author: 'John Doe',
    rating: 5,
  },
  {
    title: 'Expert Web Scraper',
    quote: 'Delivered high-quality scraping solutions that met all our requirements.',
    author: 'Jane Smith',
    rating: 5,
  },
  {
    title: 'Great to Work With',
    quote: 'Professional, knowledgeable, and responsive. Highly recommend.',
    author: 'Mike Johnson',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.quote}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

