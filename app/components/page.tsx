import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components",
  description: "Collection of reusable components for building UIs.",
}

export default function ComponentsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Components</h1>
          <p className="text-muted-foreground">
            A collection of reusable components for building beautiful and functional UIs.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Input Components */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Input Components</h2>
            <div className="grid gap-4">
              <a href="/components/inputs" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Form Controls</h3>
                <p className="text-sm text-muted-foreground">
                  Buttons, inputs, selects, and other form elements
                </p>
              </a>
            </div>
          </section>

          {/* Data Display */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Display</h2>
            <div className="grid gap-4">
              <a href="/components/data-display" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Data Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Tables, lists, cards, and other data display components
                </p>
              </a>
            </div>
          </section>

          {/* Feedback */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Feedback</h2>
            <div className="grid gap-4">
              <a href="/components/feedback" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">User Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Alerts, dialogs, progress indicators, and loading states
                </p>
              </a>
            </div>
          </section>

          {/* Surface */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Surface</h2>
            <div className="grid gap-4">
              <a href="/components/surface" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Surface Components</h3>
                <p className="text-sm text-muted-foreground">
                  Cards, accordions, modals, and other surface elements
                </p>
              </a>
            </div>
          </section>

          {/* Navigation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Navigation</h2>
            <div className="grid gap-4">
              <a href="/components/navigation" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Navigation Elements</h3>
                <p className="text-sm text-muted-foreground">
                  Menus, tabs, breadcrumbs, and navigation components
                </p>
              </a>
            </div>
          </section>

          {/* Layout */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Layout</h2>
            <div className="grid gap-4">
              <a href="/components/layout" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Layout Components</h3>
                <p className="text-sm text-muted-foreground">
                  Containers, grids, and layout utilities
                </p>
              </a>
            </div>
          </section>

          {/* Lab */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Lab</h2>
            <div className="grid gap-4">
              <a href="/components/lab" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Experimental</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced and experimental components
                </p>
              </a>
            </div>
          </section>

          {/* Utils */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Utils</h2>
            <div className="grid gap-4">
              <a href="/components/utils" className="block p-4 border rounded-lg hover:border-primary">
                <h3 className="font-medium">Utilities</h3>
                <p className="text-sm text-muted-foreground">
                  Helper components and utility functions
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
