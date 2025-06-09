import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber'; // Hook to animate on each frame
import { Points, PointMaterial } from '@react-three/drei'; // Easier abstractions for Three.js
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition'; // Custom hook to track mouse position

export function GalaxyBackground() {
  // Reference to the Points object so we can animate it
  const ref = useRef<THREE.Points>(null);

  // Get real-time mouse position
  const mousePosition = useMousePosition();

  // Total number of points (stars) to render
  const count = 1500;

  /**
   * Generate positions for all the stars once using useMemo.
   * This avoids regenerating positions every render.
   */
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3); // Each point needs x, y, z
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 10; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return positions;
  }, []);

  /**
   * Animate the galaxy on each frame:
   * - Constant slow rotation
   * - Subtle movement based on mouse position
   */
  useFrame((state, delta) => {
    if (!ref.current) return;

    // Constant slow rotation
    ref.current.rotation.x += delta * 0.02;
    ref.current.rotation.y += delta * 0.03;

    // Smooth mouse interaction (parallax-like effect)
    if (mousePosition) {
      const { x, y } = mousePosition;
      const targetX = (x / window.innerWidth) * 2 - 1;
      const targetY = -(y / window.innerHeight) * 2 + 1;

      // Lerp towards target rotation based on mouse
      ref.current.rotation.x += (targetY * 0.05 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (targetX * 0.05 - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"         // Color of each point (white)
        size={0.02}             // Size of each point
        sizeAttenuation={true} // Makes points appear smaller farther away
        depthWrite={false}     // Prevents point flickering
      />
    </Points>
  );
}
