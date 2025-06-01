"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Zap, Download, Github, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer First",
    description: "Built with TypeScript, fully typed components with excellent DX",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Beautiful Design",
    description: "Carefully crafted components with attention to detail and aesthetics",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance",
    description: "Optimized for speed with minimal bundle size and efficient rendering",
  },
]

const stats = [
  { label: "Components", value: "15+" },
  { label: "Blocks", value: "5+" },
  { label: "Hooks", value: "3+" },
  { label: "Downloads", value: "1K+" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-4 border-black dark:border-white">
              <Star className="h-3 w-3 mr-1" />
              Open Source
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Beautiful React Components
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              A comprehensive collection of copy-paste components built with React, TypeScript, and Tailwind CSS.
              Perfect for modern web applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <Link href="/library">
                  Browse Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link href="/library/docs">
                  <Download className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-black dark:text-white">{stat.value}</div>
                <div className="text-sm text-black/60 dark:text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-8 bg-black/5 dark:bg-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Why Choose Ardacity?</h2>
            <p className="mt-4 text-lg text-black/70 dark:text-white/70">
              Built for developers who care about quality and performance
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-black/10 dark:border-white/10">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg text-black dark:text-white">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-black dark:text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-black/70 dark:text-white/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-black/70 dark:text-white/70">
            Install components with a single command using the shadcn/ui CLI
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              <Link href="/library/docs">
                <Download className="mr-2 h-4 w-4" />
                Installation Guide
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <a href="https://github.com/ardacity/ui" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
