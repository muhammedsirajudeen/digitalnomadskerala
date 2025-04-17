import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Calendar,
  Users,
  Coffee,
  Send,
  CoffeeIcon,
  ChevronRight,
  Globe,
  Zap,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GoogleSignin from "@/components/GoogleSignin"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Kerala backwaters"
            fill
            className="object-cover brightness-[0.5] object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 to-emerald-900/50 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm px-4 py-1.5 text-sm">
            Work • Travel • Connect
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Digital Nomads <span className="text-emerald-300">Kerala</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-emerald-50 md:text-2xl">
            Join a thriving community of remote workers exploring the beauty of God&apos;s Own Country
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <GoogleSignin />
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 min-w-52 group">
              <Link href="#join" className="flex items-center gap-2">
                Join Our Community
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" text-emerald-400 hover:text-emerald-400 hover:pointer-fine min-w-52"
            >
              <Link href="/nomads" className="flex items-center gap-2">
                Our Nomads
                <Users size={18} />
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-emerald-100">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <span>100+ Active Members</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>Across 12+ Locations</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Weekly Meetups</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 px-3 py-1">Our Story</Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Community</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Digital Nomads Kerala is a vibrant community of remote workers, freelancers, entrepreneurs, and travelers
              who have chosen Kerala as their base. We connect like-minded individuals, share resources, organize
              meetups, and help each other navigate the beautiful chaos that is Kerala.
            </p>
            <div className="relative mb-12 mt-16 overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-100"></div>
              <p className="relative z-10 text-lg font-medium italic text-emerald-800">
                &quot;Our mission is to create a supportive ecosystem for digital nomads in Kerala, promoting sustainable
                travel, cultural exchange, and professional growth while exploring the rich heritage and natural beauty
                of God&apos;s Own Country.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md border border-emerald-50">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Globe size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Global Community</h3>
                <p className="text-gray-600">Connect with nomads from around the world</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md border border-emerald-50">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Zap size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Skill Sharing</h3>
                <p className="text-gray-600">Learn and grow with fellow professionals</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md border border-emerald-50">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <MessageSquare size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Local Support</h3>
                <p className="text-gray-600">Get help navigating life in Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Telegram Section */}
      <section id="join" className="relative bg-emerald-900 py-20 text-white overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Background pattern" fill className="object-cover" />
        </div> */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-700 blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-700 blur-3xl opacity-20"></div>

        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-4 bg-emerald-800 text-emerald-200 border-emerald-700 px-3 py-1">Get Connected</Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Join Our Community</h2>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-emerald-200">
            Connect with fellow digital nomads, get local tips, find accommodation, and stay updated on upcoming events
            by joining our Telegram group.
          </p>

          <div className="mx-auto max-w-md rounded-xl bg-white/10 backdrop-blur-sm p-8 border border-emerald-700/50 shadow-lg">
            <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-[#0088cc] flex items-center justify-center">
              <Send size={32} className="text-white" />
            </div>
            <h3 className="mb-4 text-xl font-bold">Telegram Community</h3>
            <p className="mb-6 text-emerald-200">
              Join our active Telegram group to connect instantly with nomads currently in Kerala
            </p>
            <Button size="lg" className="w-full bg-[#0088cc] hover:bg-[#0077b5]">
              <Link
                href="https://t.me/digitalnomadskerala"
                className="flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Telegram Group
                <Send size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 px-3 py-1">Why Join Us</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits of Digital Nomads Kerala
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
              Discover how our community can enhance your experience in Kerala
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg border border-emerald-50 hover:border-emerald-100">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                <Coffee size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Coworking Spots</h3>
              <p className="text-gray-600 mb-4">
                Discover the best cafes and coworking spaces with reliable WiFi throughout Kerala.
              </p>
              <p className="text-sm font-medium text-emerald-600 flex items-center">
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </p>
            </div>
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg border border-emerald-50 hover:border-emerald-100">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                <Calendar size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Events & Workshops</h3>
              <p className="text-gray-600 mb-4">
                Participate in skill-sharing sessions, workshops, and networking events.
              </p>
              <p className="text-sm font-medium text-emerald-600 flex items-center">
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </p>
            </div>
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg border border-emerald-50 hover:border-emerald-100">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Meetups</h3>
              <p className="text-gray-600 mb-4">
                Connect with fellow nomads through regular social gatherings and adventures.
              </p>
              <p className="text-sm font-medium text-emerald-600 flex items-center">
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </p>
            </div>
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg border border-emerald-50 hover:border-emerald-100">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Local Tips</h3>
              <p className="text-gray-600 mb-4">
                Get insider knowledge on accommodation, transportation, and hidden gems.
              </p>
              <p className="text-sm font-medium text-emerald-600 flex items-center">
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 px-3 py-1">Questions & Answers</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to know about digital nomad life in Kerala
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-emerald-200">
                <AccordionTrigger className="text-left text-lg font-medium text-emerald-900 hover:text-emerald-700">
                  Who can join Digital Nomads Kerala?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Anyone who works remotely or is location-independent and is currently in Kerala or planning to visit.
                  We welcome digital nomads, remote workers, freelancers, entrepreneurs, and travelers from all
                  backgrounds and nationalities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-emerald-200">
                <AccordionTrigger className="text-left text-lg font-medium text-emerald-900 hover:text-emerald-700">
                  What are the best areas in Kerala for digital nomads?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Popular spots include Kochi (Fort Kochi), Varkala, Kovalam, Alleppey, Munnar, and Wayanad. Each offers
                  different vibes - from beach towns to hill stations. Kochi has the most developed infrastructure for
                  remote workers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-emerald-200">
                <AccordionTrigger className="text-left text-lg font-medium text-emerald-900 hover:text-emerald-700">
                  How&apos;s the internet connectivity in Kerala?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Internet connectivity varies by location. Major towns and cities have reliable 4G coverage and fiber
                  connections. Our community maintains an updated list of cafes and coworking spaces with good WiFi. We
                  recommend having a backup mobile hotspot for important calls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-emerald-200">
                <AccordionTrigger className="text-left text-lg font-medium text-emerald-900 hover:text-emerald-700">
                  Do you help with visa information?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While we&apos;re not visa experts, our community members often share their experiences with visa runs
                  and extensions. We can point you to reliable resources and connect you with others who have navigated
                  the visa process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 p-8 md:p-12 shadow-lg text-white text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Join Our Community?</h2>
            <p className="mb-8 text-lg text-emerald-100">
              Connect with fellow digital nomads and start your Kerala adventure today
            </p>
          </div>
        </div>
      </section>

      <Button className="bg-emerald-500 hover:bg-emerald-600 fixed bottom-4 right-4 rounded-full p-1 w-14 h-14 shadow-lg z-50 transition-transform hover:scale-110">
        <Link
          className="w-full h-full flex items-center justify-center"
          href="https://buymeacoffee.com/muhammedsirajudeen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CoffeeIcon className="scale-150" />
        </Link>
      </Button>
    </div>
  )
}
