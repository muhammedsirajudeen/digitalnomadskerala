"use client"
import Link from "next/link"
import { Menu, TreePalmIcon as PalmTree, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
    { title: "Home", href: "/#" },
    { title: "Work", href: "/#work" },
    { title: "Travel", href: "/#travel" },
    { title: "Connect", href: "/#connect" },
    { title: "Our Story", href: "/#our-story" },
    { title: "Remote Jobs", href: "/#remote-jobs" }
]

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full  bg-gradient-to-br text-white backdrop-blur-lg">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="flex flex-col gap-6 py-6">
                                <Link href="/" className="flex items-center gap-2">
                                    <PalmTree className="h-5 w-5 text-emerald-600" />
                                    <span className="font-bold">Digital Nomads Kerala</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="text-sm font-medium transition-colors hover:text-emerald-600"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="flex flex-col gap-2">
                                    <Button variant="outline" className="w-full justify-start">
                                        <Users className="mr-2 h-4 w-4" />
                                        Our Nomads
                                    </Button>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Join Our Community</Button>
                                    <Button variant="outline" className="w-full">
                                        Login/Signup
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2">
                        <PalmTree className="h-5 w-5 text-emerald-600" />
                        <span className="hidden font-bold sm:inline-block">Digital Nomads</span>
                        <span className="font-bold text-emerald-600">Kerala</span>
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {navigationItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={item.href}>{item.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hidden md:flex">
                        <Users className="mr-2 h-4 w-4" />
                        Our Nomads
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden md:flex border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                        Login/Signup
                    </Button>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Join Our Community
                    </Button>
                </div>
            </div>
        </header>
    )
}
