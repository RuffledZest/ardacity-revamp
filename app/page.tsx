"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Zap, Download, Github, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import Waves from "@/components/waves"
import ShapeBlur from "@/components/shape-blur"
import TextPressure from "@/components/text-pressure"
import { Header2 } from "@/components/header2"
import { useState } from "react"

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "UI & Functional Blocks",
    description: "Pre-built components and smart contract integrations for rapid Arweave dApp development",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Interactive Chat System",
    description: "Built-in chat components with Arweave storage integration for decentralized messaging",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Blockchain Integration",
    description: "Seamless Arweave wallet connection, transaction handling, and permanent data storage",
  },
]

const stats = [
  { label: "Components", value: "15+" },
  { label: "Blocks", value: "5+" },
  { label: "Hooks", value: "3+" },
  { label: "Downloads", value: "1K+" },
]

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="border z-50">
        <Header2 onMenuClick={() => setSidebarOpen(true)} />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black  px-6 border  sm:py-32 lg:px-8">
        <div className="mx-auto  text-center">
          <div className="relative  ">
            {/* add a gradient offcover which goes from transparent to black at the botton of this navigation bar so that the thing blends witht the black bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:to-black to-white z-10"></div>

            <div className="absolute inset-0 overflow-hidden mt-[-100px] ">
              <Waves
                lineColor="#002d58"
                backgroundColor="bg-transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                className="border border-black rounded-3xl shadow-lg"
              />
            </div>

            <div className="absolute inset-0 z-0 opacity-45 mt-[-250px]">
              <ShapeBlur
                variation={0}
                pixelRatioProp={typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1}
                shapeSize={0.9}
                roundness={0.9}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </div>
            <section className="relative  w-full min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="relative z-10 text-center mt-[-150px] mx-20">
                <div className="">
                  <div className=" w-full overflow-hidden">
                    <div className="inset-0 overflow-visible mt-[-100px] items-center translate-y-10 justify-center w-full bg-transparent text-white overflow-x-hidden  my-2 z-40">
                      <TextPressure
                        text="ArDacity"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        // text color should be black for light mode and white for dark mode

                        strokeColor="#ff0000"
                        minFontSize={36}
                        className="text-black dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 max-w-6xl flex justify-center mx-auto">
                  {/* <BlurText
              text="A collection of UI components for the Arweave Ecosystem. Making Frontend and Handlers easy for you."
              delay={100}
              animateBy="words"
              direction="top"
              className="text-lg md:text-xl text-gray-300 mb-8 text-center"
            /> */}
                </div>

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
              </div>

              {/* Circular text at the bottom of hero */}
              {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <CircularText text="ARDACITY*UI*COMPONENTS*" onHover="speedUp" spinDuration={20} className="text-white/70" />
        </div> */}
            </section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-black/20 dark:border-white/20">
              See It In Action
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
              Experience ArDacity in Motion
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              Watch how our components seamlessly integrate with Arweave blockchain technology
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <div className="relative rounded-2xl overflow-hidden">
                {/* <div className="absolute inset-0 z-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10"></div> */}
                <iframe
                  src="https://www.youtube.com/embed/uUH5AvSpNlA"
                  className="w-full h-auto rounded-2xl z-40"
                  style={{ aspectRatio: "16/9" }}
                  title="ArDacity Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10"></div> */}
              </div>
            </Card>
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
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-white/5">
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

      {/* Comprehensive Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-black/20 dark:border-white/20">
              Complete Ecosystem
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
              Everything You Need for Arweave Development
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              ArDacity provides a comprehensive suite of tools and components specifically designed for the Arweave
              ecosystem, enabling developers to build powerful decentralized applications with ease.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    Smart Contract Blocks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Ready-to-use components for Arweave smart contracts, including transaction builders, state readers,
                    and contract interaction handlers.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Palette className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    Wallet Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Seamless integration with ArConnect, Arweave.app, and other popular Arweave wallets with built-in
                    connection management and transaction signing.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    Data Storage UI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Components for permanent data storage on Arweave, including file uploaders, data viewers, and
                    transaction status trackers.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Star className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    Chat & Messaging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Decentralized chat components with Arweave storage, real-time messaging, and permanent message
                    history for dApps and communities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    Transaction Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Advanced transaction management with fee estimation, batch processing, and confirmation tracking for
                    optimal user experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="h-full border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                    <div className="p-2 bg-teal-500/10 rounded-lg">
                      <Github className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    Developer Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black/70 dark:text-white/70">
                    Comprehensive debugging tools, network status indicators, and development utilities to streamline
                    your Arweave development workflow.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-black/70 dark:text-white/70">
            Start building on Arweave with our comprehensive component library and blockchain integrations
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
              className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black "
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
