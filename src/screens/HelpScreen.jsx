import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    Search,
    MessageCircle,
    Phone,
    Mail,
    ChevronDown,
    ChevronUp,
    Book,
    CreditCard,
    MapPin,
    Settings,
    Shield,
    HelpCircle
} from 'lucide-react'

const HelpScreen = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [expandedFaq, setExpandedFaq] = useState(null)

    const helpCategories = [
        {
            icon: Book,
            title: 'Getting Started',
            color: 'bg-blue-100 text-blue-600',
            topics: ['How to book a car wash', 'Creating an account', 'Finding nearby stations']
        },
        {
            icon: CreditCard,
            title: 'Payments',
            color: 'bg-green-100 text-green-600',
            topics: ['Payment methods', 'Refunds', 'Billing issues']
        },
        {
            icon: MapPin,
            title: 'Locations',
            color: 'bg-purple-100 text-purple-600',
            topics: ['Finding stations', 'Service areas', 'Station reviews']
        },
        {
            icon: Settings,
            title: 'Account',
            color: 'bg-orange-100 text-orange-600',
            topics: ['Profile settings', 'Password reset', 'Notifications']
        }
    ]

    const faqs = [
        {
            question: 'How do I book a car wash?',
            answer: 'Simply open the app, find a nearby station on the map, select your preferred service type, choose your time slot, and confirm your booking with payment.'
        },
        {
            question: 'Can I cancel or reschedule my booking?',
            answer: 'Yes, you can cancel or reschedule your booking up to 2 hours before your appointment time. Go to "My Orders" and select the booking you want to modify.'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept credit cards (Visa, Mastercard), debit cards, and digital wallet payments. You can also top up your in-app wallet for faster checkout.'
        },
        {
            question: 'How do I find the nearest car wash station?',
            answer: 'Use the map feature in the app to see all nearby stations. You can filter by rating, price, and services offered to find the perfect match.'
        },
        {
            question: 'What if I\'m not satisfied with the service?',
            answer: 'We offer a satisfaction guarantee. Contact our support team within 24 hours of your service, and we\'ll work to resolve any issues or provide a refund.'
        },
        {
            question: 'How do I rate and review a station?',
            answer: 'After your service is complete, you\'ll receive a notification to rate your experience. You can also rate stations from your order history in "My Orders".'
        }
    ]

    const contactOptions = [
        {
            icon: MessageCircle,
            title: 'Live Chat',
            subtitle: 'Available 24/7',
            color: 'bg-blue-500',
            action: 'Start Chat'
        },
        {
            icon: Phone,
            title: 'Call Support',
            subtitle: '+62 811 2345 6789',
            color: 'bg-green-500',
            action: 'Call Now'
        },
        {
            icon: Mail,
            title: 'Email Support',
            subtitle: 'support@carwashpro.com',
            color: 'bg-purple-500',
            action: 'Send Email'
        }
    ]

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index)
    }

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Help & Support</h1>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            <div className="px-4 py-6 space-y-6">
                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for help..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <HelpCircle className="w-6 h-6 mr-2 text-indigo-600" />
                        Need Immediate Help?
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {contactOptions.map((option, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center`}>
                                        <option.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-gray-800">{option.title}</h4>
                                        <p className="text-sm text-gray-500">{option.subtitle}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-indigo-600">{option.action}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Help Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Browse Help Topics</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {helpCategories.map((category, index) => (
                            <button
                                key={index}
                                className="text-left p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-3`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">{category.title}</h4>
                                <div className="space-y-1">
                                    {category.topics.map((topic, topicIndex) => (
                                        <p key={topicIndex} className="text-xs text-gray-500">• {topic}</p>
                                    ))}
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800">Frequently Asked Questions</h3>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-gray-800 pr-4">{faq.question}</h4>
                                        {expandedFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </div>
                                </button>

                                {expandedFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-6 pb-4"
                                    >
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {filteredFaqs.length === 0 && searchQuery && (
                        <div className="px-6 py-8 text-center text-gray-500">
                            <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p>No results found for "{searchQuery}"</p>
                            <p className="text-sm mt-1">Try different keywords or contact support</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default HelpScreen 