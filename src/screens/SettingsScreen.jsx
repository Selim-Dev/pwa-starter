import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    Bell,
    Shield,
    Moon,
    Globe,
    Volume2,
    Eye,
    Lock,
    Smartphone,
    ChevronRight,
    ToggleLeft,
    ToggleRight
} from 'lucide-react'

const SettingsScreen = () => {
    const navigate = useNavigate()
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        soundEnabled: true,
        autoLogin: true,
        biometric: false,
        locationTracking: true
    })

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const settingsGroups = [
        {
            title: 'Notifications',
            items: [
                {
                    key: 'notifications',
                    icon: Bell,
                    title: 'Push Notifications',
                    subtitle: 'Receive booking updates and offers',
                    toggle: true,
                    color: 'bg-blue-100 text-blue-600'
                },
                {
                    key: 'soundEnabled',
                    icon: Volume2,
                    title: 'Sound Alerts',
                    subtitle: 'Play sounds for notifications',
                    toggle: true,
                    color: 'bg-green-100 text-green-600'
                }
            ]
        },
        {
            title: 'Security & Privacy',
            items: [
                {
                    key: 'biometric',
                    icon: Smartphone,
                    title: 'Biometric Login',
                    subtitle: 'Use fingerprint or face ID',
                    toggle: true,
                    color: 'bg-purple-100 text-purple-600'
                },
                {
                    key: 'autoLogin',
                    icon: Lock,
                    title: 'Auto Login',
                    subtitle: 'Stay logged in on this device',
                    toggle: true,
                    color: 'bg-red-100 text-red-600'
                },
                {
                    key: 'locationTracking',
                    icon: Eye,
                    title: 'Location Tracking',
                    subtitle: 'Allow location for better service',
                    toggle: true,
                    color: 'bg-yellow-100 text-yellow-600'
                }
            ]
        },
        {
            title: 'Appearance & Display',
            items: [
                {
                    key: 'darkMode',
                    icon: Moon,
                    title: 'Dark Mode',
                    subtitle: 'Switch to dark theme',
                    toggle: true,
                    color: 'bg-gray-100 text-gray-600'
                },
                {
                    key: 'language',
                    icon: Globe,
                    title: 'Language',
                    subtitle: 'English',
                    toggle: false,
                    color: 'bg-indigo-100 text-indigo-600'
                }
            ]
        },
        {
            title: 'Account Security',
            items: [
                {
                    key: 'changePassword',
                    icon: Shield,
                    title: 'Change Password',
                    subtitle: 'Update your account password',
                    toggle: false,
                    color: 'bg-orange-100 text-orange-600'
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Settings</h1>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            <div className="px-4 py-6 space-y-6">
                {settingsGroups.map((group, groupIndex) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: groupIndex * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800">{group.title}</h3>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {group.items.map((item, itemIndex) => (
                                <div
                                    key={item.key}
                                    className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.subtitle}</p>
                                        </div>
                                    </div>

                                    {item.toggle ? (
                                        <button
                                            onClick={() => toggleSetting(item.key)}
                                            className="flex-shrink-0"
                                        >
                                            {settings[item.key] ? (
                                                <ToggleRight className="w-8 h-8 text-green-500" />
                                            ) : (
                                                <ToggleLeft className="w-8 h-8 text-gray-300" />
                                            )}
                                        </button>
                                    ) : (
                                        <ChevronRight className="w-6 h-6 text-gray-400" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* App Version */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">App Information</h3>
                    <p className="text-gray-500 mb-1">CarWash Pro</p>
                    <p className="text-sm text-gray-400">Version 1.0.0</p>
                    <p className="text-xs text-gray-400 mt-2">© 2024 CarWash Pro. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default SettingsScreen 