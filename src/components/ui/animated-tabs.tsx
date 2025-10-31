'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

interface AnimatedTabsProps {
  value: string
  children: React.ReactNode
  className?: string
}

const tabTriggerVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  }
}

const tabContentVariants = {
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

export function AnimatedTabTrigger({ 
  value, 
  children, 
  className = '' 
}: AnimatedTabsProps) {
  return (
    <motion.div variants={tabTriggerVariants} initial="initial" animate="animate" whileHover="hover">
      <TabsTrigger 
        value={value} 
        className={cn(
          "relative overflow-hidden data-[state=active]:bg-green-100",
          className
        )}
      >
        {children}
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-600/20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ 
            scale: 1, 
            opacity: 0.3,
            transition: { 
              duration: 0.3 
            }
          }}
        />
      </TabsTrigger>
    </motion.div>
  )
}

export function AnimatedTabContent({ 
  value, 
  children, 
  className = '' 
}: AnimatedTabsProps) {
  return (
    <TabsContent value={value} className={className}>
      <motion.div
        variants={tabContentVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    </TabsContent>
  )
}

// Animated tabs container
interface AnimatedTabsContainerProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedTabsContainer({ 
  children, 
  className = '' 
}: AnimatedTabsContainerProps) {
  const containerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      <Tabs className="w-full">{children}</Tabs>
    </motion.div>
  )
}