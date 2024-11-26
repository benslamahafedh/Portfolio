'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 9000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#8B5CF6'
      ctx.beginPath()
      for (let particle of particles) {
        ctx.moveTo(particle.x, particle.y)
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height
      }
      ctx.fill()
      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

