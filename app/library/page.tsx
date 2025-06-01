"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Palette, Code, Zap, Blocks } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

const components = [
  {
    name: "Action Search Bar",
    description: "Command palette with keyboard navigation and search",
    href: "/library/components/action-search-bar",
    category: "Interactive",
    tags: ["Search", "Command", "Keyboard"],
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "Avatar Picker",
    description: "An animated avatar picker with smooth transitions",
    href: "/library/components/avatar-picker",
    category: "Interactive",
    tags: ["Motion", "User Interface"],
    icon: <Palette className="h-5 w-5" />,
  },
  {
    name: "Background Circles",
    description: "Animated circular background elements",
    href: "/library/components/background-circles",
    category: "Background",
    tags: ["Animation", "Background"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Beams Background",
    description: "Animated background with flowing beams",
    href: "/library/components/beams-background",
    category: "Background",
    tags: ["Animation", "Background"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "Bento Grid",
    description: "A responsive grid layout with hover effects",
    href: "/library/components/bento-grid",
    category: "Layout",
    tags: ["Grid", "Responsive"],
    icon: <Blocks className="h-5 w-5" />,
  },
  // Add more components...
]

const categories = ["All", "Interactive", "Layout", "Background", "Typography"]

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className=" container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-muted-foreground">
          A collection of beautiful, reusable components built with React and Tailwind CSS.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={component.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                        {component.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {component.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{component.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {component.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
