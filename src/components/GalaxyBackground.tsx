import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

export function GalaxyBackground() {
  const ref = useRef<THREE.Points>(null)
  const mousePosition = useMousePosition()

  // Generate random points for stars
  const count = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return

    // Slower rotation for the galaxy
    ref.current.rotation.x += delta * 0.02
    ref.current.rotation.y += delta * 0.03

    // Slower and smoother mouse movement response
    if (mousePosition) {
      const { x, y } = mousePosition
      const targetX = (x / window.innerWidth) * 2 - 1
      const targetY = -(y / window.innerHeight) * 2 + 1
      
      ref.current.rotation.x += (targetY * 0.05 - ref.current.rotation.x) * 0.05
      ref.current.rotation.y += (targetX * 0.05 - ref.current.rotation.y) * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
} 