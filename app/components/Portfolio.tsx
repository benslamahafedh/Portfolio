
import Image from 'next/image'

const projects = [
  {
    title: 'SMS Gateway Application',
    description: 'Built an application for sending and receiving messages using the SMPP protocol.',
    keywords: 'SMS, SMPP Protocol, Software Development',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Real-Time GPS Tracking Platform',
    description: 'Designed a GPS tracking system with live data visualization on an interactive map.',
    keywords: 'GPS Tracking, Real-Time Mapping',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Community Detection Tool',
    description: 'Developed an AI-based tool to group users effectively using clustering algorithms.',
    keywords: 'AI Clustering, Django, React',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Web Scrapers',
    description: 'Created automated scripts to extract data from multiple platforms, saving time and effort.',
    keywords: 'Web Scraping, Data Mining',
    image: 'https://placehold.co/600x400',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{project.keywords}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

