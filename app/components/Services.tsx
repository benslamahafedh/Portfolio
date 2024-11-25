
import { Code, Cpu, Database, LayoutDashboard, MessageSquare, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Custom Web Development',
    description: 'Build user-friendly and responsive websites tailored to your business needs.',
    icon: LayoutDashboard,
    keywords: 'HTML, CSS, JavaScript, React, Angular',
  },
  {
    title: 'IoT Solutions',
    description: 'Develop platforms for monitoring, managing, and visualizing IoT devices in real-time.',
    icon: Cpu,
    keywords: 'MQTT, WebSockets, Real-Time Data',
  },
  {
    title: 'Web Scraping Services',
    description: 'Automate data collection with efficient, accurate scraping solutions.',
    icon: Database,
    keywords: 'Python, Selenium, Data Analysis',
  },
  {
    title: 'Maintenance & Debugging',
    description: 'Identify and resolve bugs to ensure smooth operation of your applications.',
    icon: Wrench,
    keywords: 'Code Optimization, Debugging, Support',
  },
  {
    title: 'Consultation',
    description: 'Get expert advice on architecture, performance optimization, and feature implementation.',
    icon: MessageSquare,
    keywords: 'Software Architecture, System Design',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <service.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">{service.keywords}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

