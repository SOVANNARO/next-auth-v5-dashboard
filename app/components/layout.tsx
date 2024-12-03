import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
