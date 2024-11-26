'use client'

import { useEffect, useRef, useState } from 'react'
import FloatingShapes from './FloatingShape'

interface CardProps {
  title: string
  content: string
}

function Card({ title, content }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-200 ease-out"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Full Stack Developer"
            content="With expertise in both front-end and back-end technologies, I create seamless, end-to-end solutions for web applications."
          />
          <Card
            title="UI/UX Designer"
            content="I combine aesthetics with functionality to design intuitive and visually appealing user interfaces that enhance user experience."
          />
          <Card
            title="Problem Solver"
            content="I thrive on tackling complex challenges and finding innovative solutions that drive projects forward."
          />
          <Card
            title="Continuous Learner"
            content="In the ever-evolving tech landscape, I'm committed to staying updated with the latest trends and technologies."
          />
          <Card
            title="Team Player"
            content="I excel in collaborative environments, contributing ideas and supporting team members to achieve common goals."
          />
          <Card
            title="Detail-Oriented"
            content="I pay close attention to every aspect of a project, ensuring high-quality output and polished final products."
          />
        </div>
      </div>
    </section>
  )
}

