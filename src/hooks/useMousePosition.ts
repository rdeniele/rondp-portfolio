import { useState, useEffect } from 'react'

// Define a TypeScript interface to represent the mouse position coordinates
interface MousePosition {
  x: number
  y: number
}

// Custom hook to track the mouse cursor's position on the screen
export function useMousePosition() {
  // State to store the current mouse position; initialized as null (no position yet)
  const [mousePosition, setMousePosition] = useState<MousePosition | null>(null)

  // useEffect is used to set up and clean up the event listener for mouse movement
  useEffect(() => {
    // Event handler that updates the state with the current mouse coordinates
    const updateMousePosition = (ev: MouseEvent) => {
      // ev.clientX and ev.clientY give the mouse position relative to the viewport
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    // Attach the mousemove event listener when the component mounts
    window.addEventListener('mousemove', updateMousePosition)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Return the current mouse position so the component using this hook can access it
  return mousePosition
}
