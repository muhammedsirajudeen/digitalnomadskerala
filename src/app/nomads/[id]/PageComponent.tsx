"use client"

import { fetcher } from "@/lib/utils"
import type { User } from "@/model/User"
import { useParams, useRouter } from "next/navigation"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronLeft,
  Flag,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Share2,
  Star,
  User2,
  Users,
  Zap,
} from "lucide-react"

interface UserResponse {
  user: User
}

// Mock data for the profile sections that aren't in the User model
const mockUserData = {
  bio: "Digital nomad exploring the world while working remotely. Passionate about sustainable travel and connecting with local communities.",
  location: "Currently in Bali, Indonesia",
  interests: ["Photography", "Hiking", "Local Cuisine", "Coworking", "Language Learning"],
  countries: 12,
  languages: ["English", "Spanish", "Basic Indonesian"],
  trips: [
    { destination: "Bali, Indonesia", date: "Current" },
    { destination: "Chiang Mai, Thailand", date: "Jan 2023 - Mar 2023" },
    { destination: "Lisbon, Portugal", date: "Aug 2022 - Dec 2022" },
  ],
  connections: 47,
  reviews: 8,
  achievements: [
    { name: "Globe Trotter", description: "Visited 10+ countries", icon: "Globe" },
    { name: "Community Builder", description: "Connected with 25+ nomads", icon: "Users" },
    { name: "Early Adopter", description: "Joined in the first month", icon: "Star" },
  ],
}

export default function NomadPageComponent() {
  const { id } = useParams()
  const router = useRouter()
  const { data, isLoading, error } = useSWR<UserResponse>(`/api/users/${id}`, fetcher)

  // Calculate user level based on XP
  const calculateLevel = (xp: number) => {
    return Math.floor(Math.sqrt(xp / 100)) + 1
  }

  // Calculate progress to next level
  const calculateProgress = (xp: number) => {
    const currentLevel = calculateLevel(xp)
    const xpForCurrentLevel = (currentLevel - 1) * (currentLevel - 1) * 100
    const xpForNextLevel = currentLevel * currentLevel * 100
    const xpNeeded = xpForNextLevel - xpForCurrentLevel
    const xpProgress = xp - xpForCurrentLevel
    return Math.min(Math.floor((xpProgress / xpNeeded) * 100), 100)
  }

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center bg-red-50 border-red-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <User2 className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-700">User Not Found</h2>
              <p className="text-red-600">
                We couldn&apos;t find the nomad you&apos;re looking for. They may have moved on to a new destination.
              </p>
              <Button onClick={() => router.push("/nomads")} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Nomads
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="h-48 bg-emerald-100">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
                <Skeleton className="h-32 w-32 rounded-full border-4 border-white" />
                <div className="mt-4 md:mt-0 md:ml-6 md:mb-2 space-y-2">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-64 w-full" />
                </div>
                <div className="space-y-6">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-40 w-full" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const user = data?.user

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center bg-red-50 border-red-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <User2 className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-700">No Data Available</h2>
              <p className="text-red-600">We couldn&apos;t load the nomad&apos;s profile data. Please try again later.</p>
              <Button onClick={() => router.push("/nomads")} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Nomads
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/nomads")}
            className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 -ml-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Nomads
          </Button>
        </div>

        <Card className="overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
          </div>

          <div className="px-6 md:px-8 pb-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-20 scale-110"></div>
                <Image
                  src={user.avatar || "/placeholder.svg?height=128&width=128"}
                  alt={user.name}
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white shadow-lg relative z-10"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:mb-2">
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold text-emerald-900">{user.name}</h1>
                  {user.isVerified && <CheckCircle className="h-5 w-5 ml-2 text-emerald-500" />}
                </div>
                <div className="flex items-center mt-1 text-emerald-600">
                  <Award className="h-4 w-4 mr-1" />
                  <span className="font-medium">Level {calculateLevel(user.xp)}</span>
                  <span className="mx-2">•</span>
                  <Zap className="h-4 w-4 mr-1 text-amber-500" />
                  <span>{user.xp} XP</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto flex space-x-2">
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            {/* XP Progress */}
            <div className="mb-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-emerald-600" />
                  <span className="font-medium text-emerald-800">Level {calculateLevel(user.xp)}</span>
                </div>
                <div className="text-sm text-emerald-700">
                  {calculateProgress(user.xp)}% to level {calculateLevel(user.xp) + 1}
                </div>
              </div>
              <Progress value={calculateProgress(user.xp)} className="h-2.5 bg-emerald-100" />
              <div className="mt-2 flex justify-between text-xs text-emerald-600">
                <span>Current: {user.xp} XP</span>
                <span>Next level: {Math.pow(calculateLevel(user.xp) + 1, 2) * 100} XP</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="mb-4 bg-emerald-50 text-emerald-700">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="trips">Travel History</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="space-y-6">
                    <Card className="p-5">
                      <h3 className="font-semibold text-lg text-emerald-800 mb-3">Bio</h3>
                      <p className="text-gray-700">{mockUserData.bio}</p>
                    </Card>

                    <Card className="p-5">
                      <h3 className="font-semibold text-lg text-emerald-800 mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {mockUserData.interests.map((interest, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="trips" className="space-y-6">
                    <Card className="p-5">
                      <h3 className="font-semibold text-lg text-emerald-800 mb-3">Travel History</h3>
                      <div className="space-y-4">
                        {mockUserData.trips.map((trip, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                              {index === 0 ? <MapPin className="h-4 w-4" /> : <Flag className="h-4 w-4" />}
                            </div>
                            <div>
                              <h4 className="font-medium text-emerald-800">{trip.destination}</h4>
                              <p className="text-sm text-gray-600">{trip.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="achievements" className="space-y-6">
                    <Card className="p-5">
                      <h3 className="font-semibold text-lg text-emerald-800 mb-3">Achievements</h3>
                      <div className="space-y-4">
                        {mockUserData.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                              {achievement.icon === "Globe" ? (
                                <Globe className="h-5 w-5" />
                              ) : achievement.icon === "Users" ? (
                                <Users className="h-5 w-5" />
                              ) : (
                                <Star className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium text-emerald-800">{achievement.name}</h4>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card className="p-5">
                  <h3 className="font-semibold text-emerald-800 mb-3">Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                      <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                      <span className="text-gray-700">Joined {formatDate(user.createdAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                      <span className="text-gray-700">{mockUserData.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-emerald-600" />
                      <span className="text-gray-700">{mockUserData.countries} countries visited</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold text-emerald-800 mb-3">Languages</h3>
                  <div className="space-y-2">
                    {mockUserData.languages.map((language, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span className="text-gray-700">{language}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5">
                  <h3 className="font-semibold text-emerald-800 mb-3">Community</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                      <div className="font-medium text-emerald-800">{mockUserData.connections}</div>
                      <div className="text-xs text-emerald-600">Connections</div>
                    </div>
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <Star className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                      <div className="font-medium text-emerald-800">{mockUserData.reviews}</div>
                      <div className="text-xs text-emerald-600">Reviews</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
