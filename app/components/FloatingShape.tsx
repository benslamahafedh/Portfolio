'use client'

import { useEffect, useRef } from 'react'

export default function SoothingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let hue = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (hue: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsla(${hue}, 60%, 50%, 0.3)`)
      gradient.addColorStop(1, `hsla(${(hue + 60) % 360}, 60%, 50%, 0.3)`)
      return gradient
    }

    const animate = () => {
      hue = (hue + 0.1) % 360
      ctx.fillStyle = createGradient(hue)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

