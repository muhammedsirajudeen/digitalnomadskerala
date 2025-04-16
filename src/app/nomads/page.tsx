"use client"

import { fetcher } from "@/lib/utils"
import useSWR from "swr"
import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, CheckCircle, User2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { User } from "@/model/User"
import GlobalContext from "../provider/GlobalContext"

interface UserResponse {
    users: User[]
}

export default function NomadsPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(6)
    const { data, isLoading, error } = useSWR<UserResponse>("/api/users", fetcher)
    const totalUsers = data?.users?.length || 0
    const totalPages = Math.ceil(totalUsers / usersPerPage)
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = data?.users?.slice(indexOfFirstUser, indexOfLastUser) || []
    const {user}=useContext(GlobalContext)
    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)
        }
    }

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }
    if (error && !user) {
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-md"></div>
            <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-emerald-100">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg> */}
                  <User2/>
                </div>
    
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                  <p className="text-gray-600">You need to be signed in to view the nomad community.</p>
                </div>
    
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-full w-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Sign In to Continue
                </Button>
    
                <p className="text-sm text-gray-500">
                  Join our community of digital nomads and connect with like-minded travelers from around the world.
                </p>
              </div>
            </div>
          </div>
        )
      }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold text-emerald-800">Digital Nomads</h1>
                    <p className="text-gray-600">Connect with fellow travelers from around the world</p>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="p-6 flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <Skeleton className="h-16 w-16 rounded-full" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-32" />
                                                <Skeleton className="h-4 w-24" />
                                            </div>
                                        </div>
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                </Card>
                            ))}
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-600">Failed to load nomads. Please try again later.</p>
                    </div>
                ) : data?.users?.length === 0 ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-10 text-center">
                        <p className="text-emerald-700 text-lg">No nomads found. Be the first to join!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentUsers.map((user) => (
                                <Card
                                    key={user._id}
                                    className="overflow-hidden border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md"
                                >
                                    <div className="p-6 flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-20"></div>
                                                <Image
                                                    src={user.avatar || "/placeholder.svg"}
                                                    alt={user.name}
                                                    width={64}
                                                    height={64}
                                                    className="rounded-full border-2 border-emerald-100 relative z-10"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-emerald-900">{user.name}</h3>
                                                <div className="flex items-center text-sm text-emerald-600">
                                                    {user.isVerified && (
                                                        <div className="flex items-center mr-2">
                                                            <CheckCircle className="h-3 w-3 mr-1 text-emerald-500" />
                                                            <span>Verified</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center text-sm text-gray-500">
                                            <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
                                            <span>Joined {formatDate(user.createdAt)}</span>
                                        </div>

                                        <Button
                                            variant="outline"
                                            className="mt-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 w-full"
                                        >
                                            View Profile
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center space-x-2 mt-8">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <div className="flex items-center space-x-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <Button
                                        key={number}
                                        variant={currentPage === number ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => paginate(number)}
                                        className={
                                            currentPage === number
                                                ? "bg-emerald-600 hover:bg-emerald-700"
                                                : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                                        }
                                    >
                                        {number}
                                    </Button>
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="text-center text-sm text-gray-500 mt-4">
                            Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, totalUsers)} of {totalUsers} nomads
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
