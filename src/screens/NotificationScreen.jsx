import { motion } from 'framer-motion'
import { Bell, Gift, Calendar, CheckCircle, Clock } from 'lucide-react'

// Dummy notification data
const notifications = [
    {
        id: 1,
        type: 'booking',
        icon: Calendar,
        title: 'Booking Confirmed',
        message: 'Your car wash at Pak De Station is confirmed for today at 3:00 PM',
        time: '2 minutes ago',
        isRead: false,
        color: 'bg-blue-500'
    },
    {
        id: 2,
        type: 'promotion',
        icon: Gift,
        title: 'Special Offer!',
        message: '50% off on your next service. Limited time offer!',
        time: '1 hour ago',
        isRead: false,
        color: 'bg-yellow-500'
    },
    {
        id: 3,
        type: 'completed',
        icon: CheckCircle,
        title: 'Service Completed',
        message: 'Your car wash at R CarWash Station has been completed. Thank you!',
        time: '3 hours ago',
        isRead: true,
        color: 'bg-green-500'
    },
    {
        id: 4,
        type: 'reminder',
        icon: Clock,
        title: 'Upcoming Appointment',
        message: 'Reminder: Your car wash appointment is tomorrow at 10:00 AM',
        time: 'Yesterday',
        isRead: true,
        color: 'bg-orange-500'
    },
    {
        id: 5,
        type: 'promotion',
        icon: Gift,
        title: 'Welcome Bonus',
        message: 'Welcome to CarWash! Get 25% off on your first booking.',
        time: '2 days ago',
        isRead: true,
        color: 'bg-purple-500'
    }
]

const NotificationItem = ({ notification, index }) => {
    const Icon = notification.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${notification.isRead ? 'border-gray-300' : 'border-yellow-400'
                }`}
        >
            <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 ${notification.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className="text-white" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                            {notification.title}
                        </h3>
                        {!notification.isRead && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        )}
                    </div>
                    <p className={`text-sm ${notification.isRead ? 'text-gray-500' : 'text-gray-700'} mb-2`}>
                        {notification.message}
                    </p>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
            </div>
        </motion.div>
    )
}

const NotificationScreen = () => {
    const unreadCount = notifications.filter(n => !n.isRead).length

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white px-6 pt-12 pb-6 shadow-sm"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                    {unreadCount > 0 && (
                        <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {unreadCount} new
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Notifications List */}
            <div className="px-6 py-4">
                {notifications.length > 0 ? (
                    <div className="space-y-3">
                        {notifications.map((notification, index) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <Bell size={48} className="text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-500 mb-2">No notifications yet</h3>
                        <p className="text-gray-400">We'll notify you when something important happens</p>
                    </motion.div>
                )}
            </div>

            {/* Mark all as read button */}
            {unreadCount > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-4"
                >
                    <button className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-xl hover:bg-yellow-500 transition-colors">
                        Mark all as read
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default NotificationScreen 