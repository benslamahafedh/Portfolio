import { FileDown } from "lucide-react";
import Link from "next/link";

export default function CVDownload() {
  return (
    <section id="cv-download" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Download My CV</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get a comprehensive overview of my skills, experience, and qualifications by downloading my CV.
          </p>
          <a
            href="/Hafedh_Ben_Slama_CV.pdf"
            download="Hafedh_Ben_Slama_CV.pdf"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors animate-slide-up"
          >
            <FileDown className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
