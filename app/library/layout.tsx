"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (

    


    <div className="flex h-screen bg-background">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="overflow-y-auto flex-1 md:ml-0">
          
          {/* Arweave Web Builder Button */}
          <div className="fixed top-20 right-4 z-40">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-black dark:bg-white text-white dark:text-black backdrop-blur-sm border-border hover:bg-accent shadow-md hover:shadow-lg transition-all duration-300 h-10 px-4 flex items-center justify-center gap-2
              rounded-lg text-sm font-medium
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
              style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.2)" }}

            >
              <a
                href="https://arcomponents-arlink_arlink.arweave.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-3 w-3 " />
                Browse Arweave Web Builder
              </a>
            </Button>
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
