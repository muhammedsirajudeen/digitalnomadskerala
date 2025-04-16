import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className = "bg-gray-900 py-12 text-white  bottom-0 w-full" >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div>
                        <h2 className="text-2xl font-bold">Digital Nomads Kerala</h2>
                        <p className="mt-2 text-gray-400">Work, travel, and connect in God&apos;s Own Country</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:items-end">
                        <div className="flex space-x-4">
                            <Link
                                href="https://instagram.com"
                                className="text-white hover:text-emerald-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Instagram</span>
                                <Instagram size={24} />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                className="text-white hover:text-emerald-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Twitter</span>
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="https://facebook.com"
                                className="text-white hover:text-emerald-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook size={24} />
                            </Link>
                            <Link href="mailto:hello@digitalnomadskerala.com" className="text-white hover:text-emerald-400">
                                <span className="sr-only">Email</span>
                                <Mail size={24} />
                            </Link>
                        </div>
                        <Link href="mailto:hello@digitalnomadskerala.com" className="text-gray-400 hover:text-white">
                            hello@digitalnomadskerala.com
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Digital Nomads Kerala. All rights reserved.
                    </p>
                </div>
            </div>
    </footer >
    )
}