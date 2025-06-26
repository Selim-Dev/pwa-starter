import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { User, CreditCard, History, Bell, HelpCircle, Info, LogOut, ChevronRight, Settings, Star } from 'lucide-react'
import { useAppStore } from '../stores/appStore'

// Reusable component for each menu item
const MenuItem = ({ icon: Icon, label, path = "#", onClick, isLogout = false }) => {
    const Component = onClick ? 'button' : Link
    const props = onClick ? { onClick } : { to: path }

    return (
        <Component
            {...props}
            className={`flex items-center justify-between py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors w-full text-left ${isLogout ? 'border-b-0' : ''}`}
        >
            <div className="flex items-center">
                <Icon className={`w-6 h-6 mr-4 ${isLogout ? 'text-red-500' : 'text-gray-500'}`} />
                <span className={`font-medium ${isLogout ? 'text-red-500' : 'text-gray-800'}`}>{label}</span>
            </div>
            {!isLogout && <ChevronRight className="w-5 h-5 text-gray-400" />}
        </Component>
    )
}

// Main Menu Screen Component
const MenuScreen = () => {
    const navigate = useNavigate()
    const user = useAppStore((state) => state.user)
    const logout = useAppStore((state) => state.logout)

    const handleLogout = () => {
        logout()
        // Navigate to login or home screen after logout
        navigate('/home')
    }

    // Animation variants for the list
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <div className="bg-gray-50 w-full h-full p-6 pb-8">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>

                {/* Header */}
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl font-bold text-gray-800 mb-6"
                >
                    Menu
                </motion.h1>

                {/* Profile Section */}
                <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl shadow-sm mb-6">
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-gray-900">
                                {user?.name || 'Guest User'}
                            </p>
                            <p className="text-sm text-gray-500">
                                {user?.email || 'guest@example.com'}
                            </p>
                            {user?.phone && (
                                <p className="text-xs text-gray-400 mt-1">
                                    {user.phone}
                                </p>
                            )}
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                </motion.div>

                {/* Account Section */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Account</h3>
                    </div>
                    <MenuItem icon={User} label="Edit Profile" path="/profile" />
                    <MenuItem icon={CreditCard} label="Payment Methods" path="/payment" />
                    <MenuItem icon={History} label="My Orders" path="/my-orders" />
                    <MenuItem icon={Settings} label="Settings" path="/settings" />
                </motion.div>

                {/* App Section */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">App</h3>
                    </div>
                    <MenuItem icon={Bell} label="Notifications" path="/notifications" />
                    <MenuItem icon={Star} label="Rate App" path="/rate" />
                    <MenuItem icon={HelpCircle} label="Help & Support" path="/help" />
                    <MenuItem icon={Info} label="About Us" path="/about" />
                </motion.div>

                {/* Logout Button */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <MenuItem
                        icon={LogOut}
                        label="Logout"
                        onClick={handleLogout}
                        isLogout={true}
                    />
                </motion.div>

                {/* App Version */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-6 text-gray-400"
                >
                    <p className="text-xs">Version 1.0.0</p>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default MenuScreen