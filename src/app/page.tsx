import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Users, Coffee, Send, Instagram, Twitter, Facebook, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Kerala backwaters"
            fill
            className="object-cover brightness-[0.6] object-bottom"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Digital Nomads Kerala
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl">Work, travel, and connect in God&apos;s Own Country</p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="#join" className="flex items-center gap-2">
              Join Our Community
              <Send size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Community</h2>
            <p className="mb-8 text-lg text-gray-600">
              Digital Nomads Kerala is a vibrant community of remote workers, freelancers, entrepreneurs, and travelers
              who have chosen Kerala as their base. We connect like-minded individuals, share resources, organize
              meetups, and help each other navigate the beautiful chaos that is Kerala.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to create a supportive ecosystem for digital nomads in Kerala, promoting sustainable
              travel, cultural exchange, and professional growth while exploring the rich heritage and natural beauty of
              God&apos;s Own Country.
            </p>
          </div>
        </div>
      </section>

      {/* Join Telegram Section */}
      <section id="join" className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Community</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-600">
            Connect with fellow digital nomads, get local tips, find accommodation, and stay updated on upcoming events
            by joining our Telegram group.
          </p>
          <Button size="lg" className="bg-[#0088cc] hover:bg-[#0077b5]">
            <Link
              href="https://t.me/digitalnomadskerala"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Telegram Group
              <Send size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Join Digital Nomads Kerala
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600">
                <Coffee size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Coworking Spots</h3>
              <p className="text-gray-600">
                Discover the best cafes and coworking spaces with reliable WiFi throughout Kerala.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600">
                <Calendar size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Events & Workshops</h3>
              <p className="text-gray-600">Participate in skill-sharing sessions, workshops, and networking events.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Meetups</h3>
              <p className="text-gray-600">
                Connect with fellow nomads through regular social gatherings and adventures.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600">
                <MapPin size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Local Tips</h3>
              <p className="text-gray-600">Get insider knowledge on accommodation, transportation, and hidden gems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Who can join Digital Nomads Kerala?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Anyone who works remotely or is location-independent and is currently in Kerala or planning to visit.
                  We welcome digital nomads, remote workers, freelancers, entrepreneurs, and travelers from all
                  backgrounds and nationalities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What are the best areas in Kerala for digital nomads?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Popular spots include Kochi (Fort Kochi), Varkala, Kovalam, Alleppey, Munnar, and Wayanad. Each offers
                  different vibes - from beach towns to hill stations. Kochi has the most developed infrastructure for
                  remote workers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How&apos;s the internet connectivity in Kerala?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Internet connectivity varies by location. Major towns and cities have reliable 4G coverage and fiber
                  connections. Our community maintains an updated list of cafes and coworking spaces with good WiFi. We
                  recommend having a backup mobile hotspot for important calls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Do you help with visa information?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While we&apos;re not visa experts, our community members often share their experiences with visa runs and
                  extensions. We can point you to reliable resources and connect you with others who have navigated the
                  visa process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
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
      </footer>
    </div>
  )
}
