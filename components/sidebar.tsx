"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Home, Code, Blocks, Book, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Home", href: "/library", icon: Home },
      { name: "Installation", href: "/library/docs", icon: Book },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Action Search Bar", href: "/library/components/action-search-bar", icon: Code },
      { name: "Avatar Picker", href: "/library/components/avatar-picker", icon: Palette },
      { name: "Background Circles", href: "/library/components/background-circles", icon: Zap },
      { name: "Beams Background", href: "/library/components/beams-background", icon: Zap },
      { name: "Bento Grid", href: "/library/components/bento-grid", icon: Blocks },
      { name: "Buttons", href: "/library/components/button", icon: Code },
      { name: "Checkout Interaction", href: "/library/components/checkout-interaction", icon: Code },
      { name: "Currency Transfer", href: "/library/components/currency-transfer", icon: Code },
      { name: "Hand Written Title", href: "/library/components/hand-written-title", icon: Palette },
      { name: "Hero Geometric", href: "/library/components/hero-geometric", icon: Zap },
      { name: "Particles Background", href: "/library/components/particles-background", icon: Zap },
      { name: "Toolbar", href: "/library/components/toolbar", icon: Code },
      { name: "Tweet Card", href: "/library/components/tweet-card", icon: Code },
      { name: "Vercel V0 Chat", href: "/library/components/vercel-v0-chat", icon: Code },
    ],
  },
  {
    title: "Blocks",
    items: [
      { name: "AI Card Generation", href: "/library/blocks/ai-card-generation", icon: Code },
      { name: "AI Chat", href: "/library/blocks/ai-chat", icon: Code },
      { name: "Dashboard", href: "/library/blocks/dashboard", icon: Blocks },
    ],
  },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={cn(
          "overflow-y-auto fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-semibold">Ardacity</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={item.href} onClick={onClose}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}
