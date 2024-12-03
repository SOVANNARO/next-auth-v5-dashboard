import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Input Components",
  description: "Collection of input components for building forms.",
}

export default function InputComponentsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Input Components</h1>
          <p className="text-muted-foreground">
            A collection of input components for building forms and interactive UIs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Button variations and states.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Text Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Text Inputs</CardTitle>
              <CardDescription>Text input variations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default">Default Input</Label>
                <Input id="default" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="Disabled input" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="with-icon">Input with Icon</Label>
                <div className="relative">
                  <Input id="with-icon" placeholder="Search..." />
                  <span className="absolute right-3 top-2.5">🔍</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checkboxes */}
          <Card>
            <CardHeader>
              <CardTitle>Checkboxes</CardTitle>
              <CardDescription>Checkbox inputs for multiple selections.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled">Disabled checkbox</Label>
              </div>
            </CardContent>
          </Card>

          {/* Radio Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Radio Buttons</CardTitle>
              <CardDescription>Radio inputs for single selection.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Switches */}
          <Card>
            <CardHeader>
              <CardTitle>Switches</CardTitle>
              <CardDescription>Toggle switches for boolean inputs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Notifications</Label>
              </div>
            </CardContent>
          </Card>

          {/* Sliders */}
          <Card>
            <CardHeader>
              <CardTitle>Sliders</CardTitle>
              <CardDescription>Range inputs for numerical values.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Price Range</Label>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
