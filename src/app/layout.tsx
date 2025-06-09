// Import the Inter font from Google Fonts via Next.js font optimization
import { Inter } from 'next/font/google'
// Import global styles (applies to the whole app)
import './globals.css'

// Load the Inter font with the Latin character subset
const inter = Inter({ subsets: ['latin'] })

// Metadata for the HTML document (used by Next.js for SEO and browser tab info)
export const metadata = {
  title: 'Ron Paragoso', // Title shown in the browser tab
  description: 'Software Engineer Portfolio', // Description for SEO and social previews
}

// Root layout for the entire application
// This wraps around all pages and components
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">  
      {/* Sets the language of the document */}
      {/* Apply the Inter font globally by assigning its className to the body */}
      <body className={inter.className}>
        {children} {/* Render the page-specific content inside the layout */}
        </body>
        </html>
  )
}
