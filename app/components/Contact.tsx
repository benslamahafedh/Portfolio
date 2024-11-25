'use client'

import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function ContactCard() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out to me using the following contact information or connect with me on social media.
            </p>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:hafedhbenslama14@gmail.com"
                className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <Mail className="h-5 w-5" />
                <span>hafedhbenslama14@gmail.com</span>
              </a>
              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <Phone className="h-5 w-5" />
                <span>+216 95158050</span>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/benslamahafedh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/benslamahafedh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <Github className="h-5 w-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
