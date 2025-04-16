'use client'
import React, { useEffect } from "react";
import GlobalContext from "./GlobalContext";
import axiosInstance from "@/utils/axiosInstance";
import { User } from "@/model/User";
export default function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
        async function userFetcher() {
            try {
                const response = await axiosInstance.get('/auth/verify')
                setUser(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        userFetcher()
    }, [])
    return (
        <GlobalContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </GlobalContext.Provider>
    );
}