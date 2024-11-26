import { Suspense } from 'react'
import HomeContent from './components/HomeContent'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:bg-dark">
      <Suspense fallback={<div className="min-h-screen" />}>
        <HomeContent />
      </Suspense>
    </main>
  )
}

