import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Heart, Send, ThumbsUp } from 'lucide-react'

const RateScreen = () => {
    const navigate = useNavigate()
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [review, setReview] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true)
            // Here you would submit to your backend
            setTimeout(() => {
                navigate(-1)
            }, 2000)
        }
    }

    const ratingLabels = [
        '', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'
    ]

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <ThumbsUp className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                    <p className="text-gray-600 mb-4">Your feedback helps us improve our service</p>
                    <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-6 h-6 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">Redirecting...</p>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Rate Our App</h1>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            <div className="px-4 py-8">
                {/* Main Rating Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl text-center mb-6"
                >
                    {/* App Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl">🚗</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">How was your experience?</h2>
                    <p className="text-gray-600 mb-8">We'd love to hear your feedback about our car wash booking app</p>

                    {/* Star Rating */}
                    <div className="flex justify-center space-x-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setRating(i + 1)}
                                onMouseEnter={() => setHoverRating(i + 1)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="focus:outline-none"
                            >
                                <Star
                                    className={`w-12 h-12 transition-colors duration-200 ${i < (hoverRating || rating)
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Rating Label */}
                    <motion.p
                        key={hoverRating || rating}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg font-semibold text-gray-700 mb-6"
                    >
                        {ratingLabels[hoverRating || rating]}
                    </motion.p>

                    {/* Review Text Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: rating > 0 ? 1 : 0, y: rating > 0 ? 0 : 20 }}
                        className="mb-6"
                    >
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Tell us more about your experience... (optional)"
                            rows={4}
                            className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        onClick={handleSubmit}
                        disabled={rating === 0}
                        whileHover={rating > 0 ? { scale: 1.02 } : {}}
                        whileTap={rating > 0 ? { scale: 0.98 } : {}}
                        className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${rating > 0
                                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-xl'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <Send className="w-6 h-6" />
                        <span>Submit Rating</span>
                    </motion.button>
                </motion.div>

                {/* Quick Feedback Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                >
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">Quick Feedback</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: '⚡', text: 'Fast Booking' },
                            { icon: '🎯', text: 'Easy to Use' },
                            { icon: '💎', text: 'Great Quality' },
                            { icon: '🚀', text: 'Excellent Service' }
                        ].map((item, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3 hover:bg-yellow-50 transition-colors"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium text-gray-700">{item.text}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Love Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8"
                >
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <span>Made with</span>
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        <span>for car lovers</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default RateScreen 