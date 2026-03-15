import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const dotSpringConfig = { damping: 40, stiffness: 400, mass: 0.2 }
    const dotXSpring = useSpring(cursorX, dotSpringConfig)
    const dotYSpring = useSpring(cursorY, dotSpringConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    // Don't render cursor on mobile devices
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.5 : 1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-electric-blue rounded-full pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    x: dotXSpring,
                    y: dotYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
            />
        </>
    )
}
