'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const cardVariants = {
  initial: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    scale: 0.9
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={direction}
      style={{ delay }}
      className={className}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        {children}
      </Card>
    </motion.div>
  )
}

// Animated Card with entrance effect
interface AnimatedCardWithHeaderProps extends AnimatedCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

export function AnimatedCardWithHeader({ 
  title, 
  description, 
  icon, 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: AnimatedCardWithHeaderProps) {
  return (
    <AnimatedCard delay={delay} direction={direction} className={className}>
      <CardHeader>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.1, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </motion.div>
        {description && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
          >
            <CardDescription>{description}</CardDescription>
          </motion.div>
        )}
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3, duration: 0.4 }}
        >
          {children}
        </motion.div>
      </CardContent>
    </AnimatedCard>
  )
}