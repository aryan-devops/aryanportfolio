import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSpheres({ isDark }: { isDark: boolean }) {
    const sphere1Ref = useRef<THREE.Mesh>(null!)
    const sphere2Ref = useRef<THREE.Mesh>(null!)
    const sphere3Ref = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (sphere1Ref.current) {
            sphere1Ref.current.position.y = Math.sin(t * 0.5) * 1.5
            sphere1Ref.current.position.x = Math.cos(t * 0.3) * 2
        }
        if (sphere2Ref.current) {
            sphere2Ref.current.position.y = Math.cos(t * 0.4) * 2
            sphere2Ref.current.position.x = Math.sin(t * 0.6) * 1.5
        }
        if (sphere3Ref.current) {
            sphere3Ref.current.position.y = Math.sin(t * 0.3) * 1
            sphere3Ref.current.rotation.x = t * 0.5
        }
    })

    // Colors: Lavender, Sky Blue, Light Cyan, Purple Accent
    // Dark mode colors: Deep Purples and navy

    const c1 = isDark ? "#4c1d95" : "#E6E6FA" // Lavender / Purple 900
    const c2 = isDark ? "#1e3a8a" : "#87CEEB" // Sky Blue / Blue 900
    const c3 = isDark ? "#082f49" : "#E0FFFF" // Light Cyan / Sky 900

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const baseScale = isMobile ? 0.6 : 1

    return (
        <>
            <ambientLight intensity={isDark ? 0.3 : 0.8} />
            <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.5 : 1} />
            <directionalLight position={[-10, -10, -5]} color={isDark ? "#B026FF" : "#7DF9FF"} intensity={1.5} />

            <Sphere ref={sphere1Ref} args={[1, 64, 64]} position={[-3, 2, -5]} scale={2 * baseScale}>
                <MeshDistortMaterial color={c1} attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.1} />
            </Sphere>

            <Sphere ref={sphere2Ref} args={[1, 64, 64]} position={[4, -2, -8]} scale={3 * baseScale}>
                <MeshDistortMaterial color={c2} attach="material" distort={0.6} speed={1.5} roughness={0.3} metalness={0.1} />
            </Sphere>

            <Sphere ref={sphere3Ref} args={[1, 64, 64]} position={[0, 0, -10]} scale={4 * baseScale}>
                <MeshDistortMaterial color={c3} attach="material" distort={0.4} speed={1} roughness={0.5} metalness={0.2} />
            </Sphere>
        </>
    )
}

export default function AnimatedBackground({ isDark }: { isDark: boolean }) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <AnimatedSpheres isDark={isDark} />
            </Canvas>
        </div>
    )
}
