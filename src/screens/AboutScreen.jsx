import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    Star,
    Users,
    Shield,
    Zap,
    Heart,
    Award,
    Globe,
    Mail,
    MapPin,
    Phone
} from 'lucide-react'

const AboutScreen = () => {
    const navigate = useNavigate()

    const features = [
        {
            icon: Zap,
            title: 'Fast Booking',
            description: 'Book your car wash in under 30 seconds',
            color: 'bg-yellow-100 text-yellow-600'
        },
        {
            icon: Shield,
            title: 'Secure Payments',
            description: 'Your payment information is always protected',
            color: 'bg-green-100 text-green-600'
        },
        {
            icon: Users,
            title: 'Trusted Partners',
            description: 'All stations are verified and rated by users',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            icon: Award,
            title: 'Quality Service',
            description: 'Premium car wash services guaranteed',
            color: 'bg-purple-100 text-purple-600'
        }
    ]

    const stats = [
        { number: '50K+', label: 'Happy Customers' },
        { number: '200+', label: 'Partner Stations' },
        { number: '15+', label: 'Cities Covered' },
        { number: '4.8', label: 'App Rating' }
    ]

    const team = [
        {
            name: 'John Smith',
            role: 'CEO & Founder',
            image: '👨‍💼',
            description: 'Passionate about revolutionizing car care services'
        },
        {
            name: 'Sarah Johnson',
            role: 'CTO',
            image: '👩‍💻',
            description: 'Expert in mobile app development and user experience'
        },
        {
            name: 'Mike Chen',
            role: 'Head of Operations',
            image: '👨‍🔧',
            description: 'Ensuring quality service across all partner stations'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">About CarWash Pro</h1>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            <div className="px-4 py-6 space-y-6">
                {/* App Introduction */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-3xl">🚗</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">CarWash Pro</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The easiest way to book professional car wash services. We connect you with trusted car wash stations
                        in your area, making car care convenient and reliable.
                    </p>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">4.8 out of 5 stars on App Store</p>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Why Choose CarWash Pro?</h3>
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex items-start space-x-4"
                            >
                                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white"
                >
                    <h3 className="text-lg font-bold mb-3">Our Mission</h3>
                    <p className="leading-relaxed mb-4">
                        To make car care accessible, convenient, and reliable for everyone. We believe that maintaining
                        your vehicle should be simple and stress-free.
                    </p>
                    <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-300" />
                        <span className="text-sm">Made with love for car enthusiasts</span>
                    </div>
                </motion.div>

                {/* Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Meet Our Team</h3>
                    <div className="space-y-4">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-2xl">
                                    {member.image}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">{member.name}</h4>
                                    <p className="text-sm text-blue-600 mb-1">{member.role}</p>
                                    <p className="text-xs text-gray-600">{member.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Email</p>
                                <p className="text-sm text-gray-600">hello@carwashpro.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Phone</p>
                                <p className="text-sm text-gray-600">+62 811 2345 6789</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Address</p>
                                <p className="text-sm text-gray-600">Pekanbaru, Riau, Indonesia</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <Globe className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Website</p>
                                <p className="text-sm text-gray-600">www.carwashpro.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* App Version */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                    <p className="text-gray-600 mb-1">CarWash Pro Mobile App</p>
                    <p className="text-sm text-gray-400 mb-2">Version 1.0.0 (Build 2024.01)</p>
                    <p className="text-xs text-gray-400">© 2024 CarWash Pro. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutScreen