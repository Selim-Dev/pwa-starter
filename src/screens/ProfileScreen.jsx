import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Camera, Edit, Phone, Mail, MapPin, Calendar, Save, X } from 'lucide-react'
import { useAppStore } from '../stores/appStore'

const ProfileScreen = () => {
    const navigate = useNavigate()
    const { user } = useAppStore()
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: user?.name || 'John Doe',
        email: user?.email || 'john.doe@email.com',
        phone: user?.phone || '+62 812 3456 7890',
        address: 'Jl. HR Soebrantas, Tampan, Pekanbaru',
        joinDate: 'January 2024'
    })

    const handleSave = () => {
        // Here you would save to your backend/store
        setIsEditing(false)
        // Show success message
    }

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Profile</h1>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        {isEditing ? <X className="w-6 h-6 text-white" /> : <Edit className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </motion.div>

            <div className="px-4 py-6 space-y-6">
                {/* Profile Picture Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            {formData.name.charAt(0)}
                        </div>
                        {isEditing && (
                            <button className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-full shadow-lg">
                                <Camera className="w-5 h-5 text-gray-800" />
                            </button>
                        )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">{formData.name}</h2>
                    <p className="text-gray-500">Premium Member</p>
                </motion.div>

                {/* Profile Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg space-y-4"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h3>

                    {/* Name */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Edit className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Full Name</p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className="w-full font-medium text-gray-800 bg-gray-50 rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <p className="font-medium text-gray-800">{formData.name}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Email</p>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="w-full font-medium text-gray-800 bg-gray-50 rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <p className="font-medium text-gray-800">{formData.email}</p>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Phone</p>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="w-full font-medium text-gray-800 bg-gray-50 rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <p className="font-medium text-gray-800">{formData.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Address</p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                    className="w-full font-medium text-gray-800 bg-gray-50 rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <p className="font-medium text-gray-800">{formData.address}</p>
                            )}
                        </div>
                    </div>

                    {/* Join Date */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Member Since</p>
                            <p className="font-medium text-gray-800">{formData.joinDate}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Save Button */}
                {isEditing && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={handleSave}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2"
                    >
                        <Save className="w-6 h-6" />
                        <span>Save Changes</span>
                    </motion.button>
                )}
            </div>
        </div>
    )
}

export default ProfileScreen 