'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"

export default function NotFound() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-4">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="text-center space-y-6">
              {/* Large 404 Text with animation */}
              <h1 className="text-9xl font-extrabold text-primary animate-pulse">
                <span className="inline-block hover:animate-bounce">4</span>
                <span className="inline-block hover:animate-bounce mx-4">0</span>
                <span className="inline-block hover:animate-bounce">4</span>
              </h1>
              
              {/* Error Message with fade-in effect */}
              <div className="space-y-2 animate-[fadeIn_1s_ease-in]">
                <h2 className="text-2xl font-semibold text-foreground">Oops! Page not found</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The page you're looking for doesn't exist or has been moved to a different location.
                </p>
              </div>

              {/* Back to Home Button with hover effect */}
              <div className="mt-8">
                <Link href="/dashboard">
                  <Button 
                    size="lg"
                    className="transition-all duration-200 hover:scale-105"
                  >
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Decorative Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
          </div>
        </main>
      </div>
    </div>
  )
}
