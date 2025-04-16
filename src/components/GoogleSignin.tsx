'use client'
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useGoogleLogin } from '@react-oauth/google';
import axiosInstance from "@/utils/axiosInstance";

export default function GoogleSignin(){
    const googleSignIn= useGoogleLogin({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse)
            const response=await axiosInstance.post('/auth/signin',{access_token:tokenResponse.access_token})
            console.log(response.data)

        },
      });
    return(
        <Button onClick={()=>googleSignIn()} className="bg-emerald-600 hover:bg-emerald-700 w-52" >
            <LogIn/>Login/Signup
        </Button>
    )
}