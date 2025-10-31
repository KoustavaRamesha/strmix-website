'use client'

import { motion } from 'framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  delay?: number
}

const buttonVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { 
    scale: 1.05, 
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  },
  tap: { 
    scale: 0.95, 
    transition: { 
      duration: 0.1 
    }
  }
}

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
}

export function AnimatedButton({ children, delay = 0, className, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      custom={delay}
      style={{ delay }}
    >
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`relative overflow-hidden ${className}`}
        {...props}
      >
        {children}
        {/* Animated underline effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-600/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>
    </motion.div>
  )
}

// Special CTA Button with more prominent animation
export function AnimatedCTAButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.button
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { 
            scale: 1.1, 
            rotate: [-1, 1, -1],
            transition: { 
              duration: 0.4, 
              ease: "easeInOut" 
            }
          },
          tap: { 
            scale: 0.95, 
            rotate: 0,
            transition: { 
              duration: 0.1 
            }
          }
        }}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`relative overflow-hidden ${className}`}
        {...props}
      >
        {children}
        {/* Pulsing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-yellow-600/30 rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ 
            scale: 1.2, 
            opacity: 1,
            transition: { 
              duration: 0.6, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }
          }}
        />
      </motion.button>
    </motion.div>
  )
}