"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { LogOut, User } from "lucide-react"

interface UserProps {
  name?: string
  avatar?: string
}

interface NavbarProfileProps {
  user: UserProps | null
  onSignOut?: () => void
}

export default function NavbarProfile({ user, onSignOut = () => {} }: NavbarProfileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-3 rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors hover:bg-[#0a3a1c]/30"
      >
        <Image
          src={(user?.avatar as string) || "/placeholder.svg"}
          width={36}
          height={36}
          className="rounded-full border-2 border-[#10b981] shadow-md"
          alt="Profile"
        />
        <p className="text-white font-medium pr-1">{user?.name || "Guest"}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-[#0a3a1c]/90 backdrop-blur-md shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
          >
            <div className="py-1.5">
              <div className="px-4 py-2 border-b border-white/10">
                <p className="text-white font-medium">{user?.name || "Guest"}</p>
                <p className="text-[#10b981] text-xs">Digital Nomad</p>
              </div>

              <Link
                href="/profile"
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-white hover:bg-[#10b981]/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4 text-[#10b981]" />
                <span>Your Profile</span>
              </Link>

              <button
                onClick={() => {
                  onSignOut()
                  setIsOpen(false)
                }}
                className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-white hover:bg-[#10b981]/20 transition-colors"
              >
                <LogOut className="h-4 w-4 text-[#10b981]" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
