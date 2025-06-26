import { motion } from 'framer-motion'
import { MapPin, Star, Sparkles, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import specialOfferBanner from '../assets/banner.jpg'

const HomeScreen = () => {
    const navigate = useNavigate()

    const stations = [
        {
            id: 1,
            name: 'Pak De Station',
            address: 'Tampan, Pekanbaru',
            rating: 5.0,
            image: '/api/placeholder/80/60',
            isPopular: true,
        },
        {
            id: 2,
            name: 'Haji Rahmat Habsin S...',
            address: 'Tampan, Pekanbaru',
            rating: 5.0,
            image: '/api/placeholder/80/60',
            isPopular: false,
        },
        {
            id: 3,
            name: 'R CarWash Station',
            address: 'Tampan, Pekanbaru',
            rating: 4.0,
            image: '/api/placeholder/80/60',
            isPopular: true,
        },
        {
            id: 4,
            name: 'R CarWash Station',
            address: 'Tampan, Pekanbaru',
            rating: 4.0,
            image: '/api/placeholder/80/60',
            isPopular: false,
        }
    ]

    const handleBookNow = (station) => {
        navigate('/booking', { state: { station } })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
            {/* Enhanced Header with gradient background */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 sm:px-6 pt-12 pb-6 sm:pb-8 relative overflow-hidden"
            >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-2 left-8 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">Welcome !!!</h1>
                    <p className="text-lg sm:text-xl text-white/90 font-medium">Have a good day</p>
                </motion.div>

                {/* Floating sparkles */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-6 right-8"
                >
                    <Sparkles className="w-6 h-6 text-white/60" />
                </motion.div>
            </motion.div>

            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8">
                {/* Enhanced Special Offer Card with glow effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl sm:rounded-3xl blur-sm opacity-20"></div>
                    <div className="relative">
                        <img src={specialOfferBanner} alt="Special Offer Banner" className="w-full h-auto" />
                    </div>
                </motion.div>

                {/* Enhanced Recommend Station Section */}
                <div>
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center"
                        >
                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2" />
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-800">Recommended Stations</h3>
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-blue-600 text-xs sm:text-sm font-semibold bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-blue-200 transition-colors"
                        >
                            See All
                        </motion.button>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        {stations.map((station, index) => (
                            <motion.div
                                key={station.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                            >
                                {/* Popular badge */}
                                {station.isPopular && (
                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center">
                                        <Sparkles size={10} className="mr-1" />
                                        Popular
                                    </div>
                                )}

                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    {/* Enhanced Station Image */}
                                    <div className="w-16 h-12 sm:w-24 sm:h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0">
                                        <div className="w-full h-full bg-gradient-to-br from-red-400 via-red-500 to-red-600 flex items-center justify-center relative">
                                            <span className="text-white text-sm sm:text-lg">🏪</span>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Enhanced Station Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2 leading-tight">{station.name}</h4>
                                        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                                            <MapPin size={12} className="mr-1 text-gray-400 flex-shrink-0" />
                                            <span className="truncate">{station.address}</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center bg-gray-50 px-2 sm:px-3 py-1 rounded-full">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={12}
                                                        className={`${i < Math.floor(station.rating)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="text-xs sm:text-sm font-semibold ml-1 sm:ml-2 text-gray-700">({station.rating})</span>
                                            </div>

                                            <motion.button
                                                onClick={() => handleBookNow(station)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:from-yellow-500 hover:to-yellow-600 flex-shrink-0"
                                            >
                                                Book Now
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen 