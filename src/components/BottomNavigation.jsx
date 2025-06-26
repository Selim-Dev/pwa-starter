import { useLocation, Link } from 'react-router-dom'
import { Home, MapPin, Bell, List } from 'lucide-react'

const BottomNavigation = () => {
    const location = useLocation()

    const navItems = [
        { path: '/home', icon: Home },
        { path: '/map', icon: MapPin },
        { path: '/notifications', icon: Bell },
        { path: '/menu', icon: List }
    ]

    return (
        // NOTE: 'fixed' and 'z-50' classes are removed.
        // flex-shrink-0 prevents the nav from shrinking in the flex layout.
        <nav className="bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] rounded-t-2xl flex-shrink-0">
            <div className="flex justify-around items-center h-20">
                {navItems.map(item => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`p-2 transition-colors duration-200 ${isActive ? 'text-yellow-400' : 'text-gray-400'
                                }`}
                        >
                            <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default BottomNavigation