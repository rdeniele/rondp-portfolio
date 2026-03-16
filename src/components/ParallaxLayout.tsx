"use client";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxLayout({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
