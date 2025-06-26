import { motion } from 'framer-motion'

const SplashScreen = ({ onComplete }) => {
    // Removed auto-redirect timer - now waits for user interaction

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-white relative overflow-hidden" style={{ backgroundColor: '#5ba6e3' }}>
            {/* Main Content */}
            <div className="flex flex-col items-center text-center max-w-sm w-full">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <h1 className="text-4xl font-bold leading-tight tracking-wide">
                        BOOK YOUR<br />
                        CAR WASH
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base leading-relaxed mb-12 px-4 opacity-90"
                >
                    We have made it easy for you to book your car wash and detailing services through our platform
                </motion.p>

                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16 w-full max-w-xs"
                >
                    <div className="aspect-square flex items-center justify-center">
                        <img
                            src="/src/assets/splash.png"
                            alt="Car Wash Illustration"
                            className="w-full h-full object-contain max-w-[280px] max-h-[280px]"
                            onError={(e) => {
                                // Fallback if image doesn't load
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                        />
                        {/* Fallback illustration */}
                        <div className="hidden w-full h-full items-center justify-center text-8xl">
                            🚗💧
                        </div>
                    </div>
                </motion.div>

                {/* Get Started Button */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onComplete}
                    className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition-all duration-200 w-full max-w-xs"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Loading Dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 flex space-x-2"
            >
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </motion.div>
        </div>
    )
}

export default SplashScreen 