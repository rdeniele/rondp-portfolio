import { useRef, useMemo, useState } from 'react';
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
  const count = 350;

  // State to track animation time for color changes
  const [time, setTime] = useState(0);

  /**
   * Generate positions and colors for all the stars once using useMemo.
   * This avoids regenerating positions every render.
   */
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3); // Each point needs x, y, z
    const colors = new Float32Array(count * 3); // Each point needs r, g, b

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Generate random positions
      positions[i3]     = (Math.random() - 0.5) * 10; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 10; // z

      // Generate random colors
      // You can customize these color ranges for different effects
      const colorChoices = [
        [1.0, 1.0, 1.0],   // White
        [1.0, 0.8, 0.6],   // Warm white/yellow
        [0.8, 0.9, 1.0],   // Cool blue-white
        [1.0, 0.6, 0.8],   // Pink
        [0.6, 0.8, 1.0],   // Light blue
        [1.0, 0.8, 0.4],   // Orange
        [0.8, 1.0, 0.6],   // Light green
      ];
      
      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i3]     = randomColor[0]; // r
      colors[i3 + 1] = randomColor[1]; // g
      colors[i3 + 2] = randomColor[2]; // b
    }
    
    return { positions, colors };
  }, []);

  /**
   * Animate the galaxy on each frame:
   * - Constant slow rotation
   * - Subtle movement based on mouse position
   * - Color animation over time
   */
  useFrame((state, delta) => {
    if (!ref.current) return;

    // Update time for color animation
    setTime(prev => prev + delta);

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

    // Animate colors over time
    if (ref.current.geometry.attributes.color) {
      const colorArray = ref.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const individualTime = time + i * 0.1; // Each star has slightly different timing
        
        // Create smooth color transitions using sine waves
        const r = 0.5 + 0.5 * Math.sin(individualTime * 0.5);
        const g = 0.5 + 0.5 * Math.sin(individualTime * 0.7 + 2);
        const b = 0.5 + 0.5 * Math.sin(individualTime * 0.3 + 4);
        
        colorArray[i3] = r;
        colorArray[i3 + 1] = g;
        colorArray[i3 + 2] = b;
      }
      
      ref.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <color attach="background" args={['#000000']} />
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors={true}    // Enable vertex colors
          size={0.02}            // Size of each point
          sizeAttenuation={true} // Makes points appear smaller farther away
          depthWrite={false}     // Prevents point flickering
          opacity={1.0}          // Opacity
        />
      </Points>
    </>
  );
}
