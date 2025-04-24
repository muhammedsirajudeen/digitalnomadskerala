"use client";
import Link from "next/link";
import { Menu, TreePalmIcon as PalmTree, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GoogleSignin from "./GoogleSignin";
import { useEffect, useState } from "react";

const navigationItems = [
  { title: "Home", href: "/#" },
  { title: "Work", href: "/#work" },
  { title: "Travel", href: "/#travel" },
  { title: "Connect", href: "/#connect" },
  { title: "Our Story", href: "/#our-story" },
  { title: "Remote Jobs", href: "/#remote-jobs" },
];

export function Navbar() {
  const [scroll,setScroll]=useState(false)
  const handleScroll=()=>{
    console.log(window.scrollY)
    if(window.scrollY<=400){
      setScroll(false)
    }else{
      setScroll(true)
    }
  }
  useEffect(()=>{
    document.addEventListener('scroll',handleScroll)
    return()=>{
      document.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <header className={`fixed top-0 z-50 w-full  bg-gradient-to-br ${scroll ? "text-black" :"text-white"} backdrop-blur-lg px-5`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
              <div className="flex flex-col justify-between h-screen px-3 py-5">
                <div>
                  <Link href="/" className="flex items-center gap-2 py-2">
                    <PalmTree className="size-5 text-emerald-600" />
                    <div className="font-bold">
                      <span>Digital Nomads </span>
                      <span className="text-emerald-600">Kerala</span>
                    </div>
                  </Link>

                  <div className="flex flex-col gap-8 py-5">
                    <nav className="flex flex-col gap-4 px-2">
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
                      <Button
                        size="sm"
                        className="w-full justify-center ring-1 ring-emerald-600 bg-transparent text-emerald-600"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Our Nomads
                      </Button>
                      <Button
                        size="sm"
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                      >
                        Join Our Tribe
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 py-2">
                  <hr className="my-2 bg-black" />
                  <Button
                    size="sm"
                    className="ring-1 ring-emerald-600 bg-transparent text-emerald-600"
                  >
                    Profile
                  </Button>
                  <Button size="sm" className=" bg-emerald-600  text-white">
                    Logout
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <PalmTree className="h-5 w-5 text-emerald-600" />
            <span className="hidden font-bold sm:inline-block text-shadow-md text-white/80">
              Digital Nomads
            </span>
            <span className="font-bold text-emerald-600">Kerala</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex cursor-pointer ring-1 ring-white/50"
          >
            <Link href="/nomads" className="flex items-center gap-2">
              <Users size={18} />
              Our Nomads
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer px-5 hidden md:flex"
          >
            <Link href="#join">Join Our Tribe</Link>
          </Button>

          <GoogleSignin />
        </div>
      </div>
    </header>
  );
}
