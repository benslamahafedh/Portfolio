export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 animate-fade-in">About Me</h2>
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hi, I'm Hafedh Ben Slama. With over two years of experience in software engineering, I specialize in creating custom web applications, IoT integrations, and data-driven platforms. Whether you're a small business or a large enterprise, my goal is to provide clean, efficient, and maintainable solutions.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <li className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 animate-fade-in">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Web Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">React, Angular, Laravel</p>
            </li>
            <li className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 animate-fade-in">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Backend Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">NestJS, Fastify, Django</p>
            </li>
            <li className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 animate-fade-in">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">IoT and Real-Time Systems</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">MQTT, WebSockets</p>
            </li>
            <li className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 animate-fade-in">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Databases</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">MySQL, SQL Server, InfluxDB</p>
            </li>
            <li className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 animate-fade-in">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">DevOps</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Docker, CI/CD Pipelines</p>
            </li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            I focus on writing clean, well-documented code and delivering projects on time. I value collaboration and aim to build long-term relationships with my clients.
          </p>
        </div>
      </div>
    </section>
  )
}

