'use client'

import React, { useState, useEffect } from 'react'

const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string; type: number }>>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${10 + Math.random() * 10}s`,
      type: (i % 3) + 1
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light beams */}
      <div className="absolute inset-0">
        <div className="beam beam-1"></div>
        <div className="beam beam-2"></div>
        <div className="beam beam-3"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        {particles.map((particle, i) => (
          <div key={i} className={`particle particle-${particle.type}`} style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}></div>
        ))}
      </div>

      {/* Grid shimmer */}
      <div className="grid-shimmer"></div>

      {/* Parallax shapes */}
      <div className="parallax-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  )
}

export default BackgroundEffects
