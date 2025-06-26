// Create this file in src/screens/LoginScreen.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../stores/appStore";
import { User, Lock, Eye } from "lucide-react";

// Import assets
import loginIllustration from '../assets/login.png'
import facebookIcon from '../assets/facebook.png'
import googleIcon from '../assets/google.png'
import appleIcon from '../assets/apple.png'

const LoginScreen = () => {
    const navigate = useNavigate()
    const login = useAppStore((state) => state.login)

    const handleLogin = () => {
        // In a real app, you'd validate credentials here.
        // For the POC, we just set the authenticated state.
        login()
        // Redirect the user back to the main map screen after "login"
        navigate('/home')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center bg-white p-8"
        >
            <img src={loginIllustration} alt="Car Wash Illustration" className="w-64 mb-8" />

            <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
            <p className="text-gray-500 mb-8">Please sign in to continue</p>

            <div className="w-full space-y-4">
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Username or Phone Number" className="w-full bg-yellow-100 rounded-full py-4 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="password" placeholder="Password" className="w-full bg-yellow-100 rounded-full py-4 pl-12 pr-12 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            <button
                onClick={handleLogin}
                className="w-full bg-yellow-400 text-gray-800 font-bold py-4 rounded-full mt-6 transition-colors hover:bg-yellow-500"
            >
                LOGIN
            </button>

            <div className="flex items-center w-full my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-400 text-sm">or login with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4">
                <p className="text-gray-500">or continue with</p>
                <div className="flex space-x-4">
                    <button className="w-12 h-12 flex items-center justify-center bg-[#1877F2] rounded-lg shadow-sm"><img src={facebookIcon} alt="Facebook login" className="w-6" /></button>
                    <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm"><img src={googleIcon} alt="Google login" className="w-6" /></button>
                    <button className="w-12 h-12 flex items-center justify-center bg-black rounded-lg shadow-sm"><img src={appleIcon} alt="Apple login" className="w-6" /></button>
                </div>
            </div>

            <p className="mt-8 text-gray-500">
                Don't have an account?{" "}
                <button
                    onClick={() => navigate('/register')}
                    className="font-bold text-yellow-500 hover:text-yellow-600 hover:underline"
                >
                    Register here
                </button>
            </p>

        </motion.div>
    )
}

export default LoginScreen