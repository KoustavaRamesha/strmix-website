'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AnimatedNavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  delay?: number
}

const linkVariants = {
  initial: { opacity: 0, y: -5 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.05,
    x: 5,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  }
}

const underlineVariants = {
  initial: { width: 0 },
  animate: { width: '100%' },
  hover: { 
    width: '100%',
    background: ['linear-gradient(90deg, #16a34a, #eab308)', 'linear-gradient(90deg, #eab308, #16a34a)'],
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
}

export function AnimatedNavLink({ 
  href, 
  children, 
  className = '', 
  delay = 0 
}: AnimatedNavLinkProps) {
  return (
    <motion.div
      variants={linkVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      style={{ delay }}
      className="relative inline-block"
    >
      <Link 
        href={href} 
        className={cn(
          "text-gray-700 hover:text-green-600 font-medium transition-colors relative z-10",
          className
        )}
      >
        {children}
        {/* Animated underline */}
        <motion.div
          variants={underlineVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full"
        />
      </Link>
    </motion.div>
  )
}

// Animated navigation container
export function AnimatedNavContainer({ children }: { children: React.ReactNode }) {
  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-white shadow-md sticky top-0 z-50"
    >
      {children}
    </motion.nav>
  )
}