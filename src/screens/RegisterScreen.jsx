import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../stores/appStore";
import { User, Lock, Eye, EyeOff, Mail, Phone, ArrowLeft } from "lucide-react";

// Import assets
import loginIllustration from '../assets/login.png'
import facebookIcon from '../assets/facebook.png'
import googleIcon from '../assets/google.png'
import appleIcon from '../assets/apple.png'

const RegisterScreen = () => {
    const navigate = useNavigate()
    const login = useAppStore((state) => state.login)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleRegister = () => {
        // In a real app, you'd validate and send registration data to backend
        // For the POC, we'll just simulate successful registration and login
        login()
        navigate('/home')
    }

    const handleSocialLogin = (provider) => {
        // Simulate social login
        login()
        navigate('/home')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pt-12">
                <button
                    onClick={() => navigate('/login')}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-800">Create Account</h1>
                <div className="w-10"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="px-6 pb-8"
            >
                {/* Illustration */}
                <div className="text-center mb-8">
                    <img src={loginIllustration} alt="Car Wash Illustration" className="w-48 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Join CarWash Pro!</h2>
                    <p className="text-gray-600">Create your account to get started</p>
                </div>

                {/* Registration Form */}
                <div className="space-y-4 mb-6">
                    {/* Full Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm border border-gray-100"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm border border-gray-100"
                        />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm border border-gray-100"
                        />
                    </motion.div>

                    {/* Password */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="w-full bg-white rounded-2xl py-4 pl-12 pr-12 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm border border-gray-100"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </motion.div>

                    {/* Confirm Password */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                    >
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className="w-full bg-white rounded-2xl py-4 pl-12 pr-12 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm border border-gray-100"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </motion.div>
                </div>

                {/* Terms & Conditions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                >
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 w-4 h-4 text-yellow-400 bg-white border-gray-300 rounded focus:ring-yellow-400 focus:ring-2"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                            I agree to the{" "}
                            <a href="#" className="text-yellow-600 font-semibold hover:underline">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-yellow-600 font-semibold hover:underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                </motion.div>

                {/* Register Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={handleRegister}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                    CREATE ACCOUNT
                </motion.button>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center w-full my-6"
                >
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm">or continue with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </motion.div>

                {/* Social Login */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex justify-center space-x-4 mb-6"
                >
                    <button
                        onClick={() => handleSocialLogin('facebook')}
                        className="w-14 h-14 flex items-center justify-center bg-[#1877F2] rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => handleSocialLogin('google')}
                        className="w-14 h-14 flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img src={googleIcon} alt="Google" className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => handleSocialLogin('apple')}
                        className="w-14 h-14 flex items-center justify-center bg-black rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img src={appleIcon} alt="Apple" className="w-6 h-6" />
                    </button>
                </motion.div>

                {/* Login Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-center"
                >
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate('/login')}
                            className="font-bold text-yellow-600 hover:text-yellow-700 hover:underline"
                        >
                            Sign in here
                        </button>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default RegisterScreen 