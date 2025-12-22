'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  update: (canvas: HTMLCanvasElement) => void;
  draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
}

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Toews-inspired color palette
    const colors = {
      navy: '#0d1b2a',
      darkNavy: '#1b263b',
      red: '#ce1141',
      darkRed: '#8b0a2e',
      white: '#e0e1dd',
      blue: '#415a77'
    };

    // Particle class
    class ParticleImpl implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        
        // Distribute colors: mostly white (excellence), touches of red (passion), hints of blue (steady)
        const rand = Math.random();
        if (rand < 0.7) {
          this.color = colors.white;
          this.opacity = Math.random() * 0.3 + 0.1;
        } else if (rand < 0.85) {
          this.color = colors.red;
          this.opacity = Math.random() * 0.4 + 0.15;
        } else {
          this.color = colors.blue;
          this.opacity = Math.random() * 0.35 + 0.1;
        }
      }
      
      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        const hex = this.color;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push(new ParticleImpl(canvas));
      }
    };

    // Draw gradient background
    const drawBackground = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
      );
      gradient.addColorStop(0, colors.darkNavy);
      gradient.addColorStop(0.6, colors.navy);
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Subtle structural lines
    const drawStructure = () => {
      ctx.strokeStyle = 'rgba(65, 90, 119, 0.08)';
      ctx.lineWidth = 1;
      
      const gridSize = 80;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };

    // Connection lines between particles
    const connectParticles = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 0.12 * (1 - distance / 100);
            ctx.strokeStyle = `rgba(224, 225, 221, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Leadership ring accent
    const drawLeadershipRing = () => {
      const centerX = canvas.width * 0.2;
      const centerY = canvas.height * 0.25;
      
      // Red ring
      ctx.strokeStyle = 'rgba(206, 17, 65, 0.12)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner white ring
      ctx.strokeStyle = 'rgba(224, 225, 221, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      // Subtle fade effect
      ctx.fillStyle = 'rgba(13, 27, 42, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawStructure();
      drawLeadershipRing();
      
      particlesRef.current.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx, canvas);
      });
      
      connectParticles();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      drawBackground();
      initParticles();
    };

    // Initialize
    drawBackground();
    initParticles();
    animate();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default HeroBackground;