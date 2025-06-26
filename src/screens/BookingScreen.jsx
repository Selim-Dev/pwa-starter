import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, MapPin, Star, MessageSquare, Phone } from 'lucide-react'
import { useAppStore } from '../stores/appStore' // Import Zustand store
import AuthModal from '../components/AuthModal' // Import the new Modal 
// Correcting asset paths to what was used in the previous step for consistency
import stationImage from '../assets/station-details.png' // Assuming this is the image for "Pak De Station"
import regularServiceIcon from '../assets/services/regular.png'
import mediumServiceIcon from '../assets/services/medium.png'
import specialServiceIcon from '../assets/services/special.png'

const ServiceCard = ({ icon, label, bgColor, isSelected, onClick }) => (
    <div
        onClick={onClick}
        className={`flex-1 flex flex-col items-center justify-center space-y-3 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${bgColor} ${isSelected ? 'ring-4 ring-purple-400 ring-offset-2' : 'hover:opacity-90'}`}
        style={{ height: '113px' }}
    >
        <img src={icon} alt={`${label} service`} className="w-12 h-12 object-contain" />
        <span className="font-bold text-sm text-gray-800 tracking-wider">{label}</span>
    </div>
);

const BookingScreen = () => {
    const navigate = useNavigate()
    const [selectedService, setSelectedService] = useState('SPECIAL')
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Get auth state from Zustand
    const isAuthenticated = useAppStore((state) => state.isAuthenticated)

    const services = [
        { id: 'REGULAR', label: 'REGULAR', icon: regularServiceIcon, bgColor: 'bg-blue-300' },
        { id: 'MEDIUM', label: 'MEDIUM', icon: mediumServiceIcon, bgColor: 'bg-indigo-400' },
        { id: 'SPECIAL', label: 'SPECIAL', icon: specialServiceIcon, bgColor: 'bg-pink-400' },
    ]
    const handleBookNow = () => {
        if (isAuthenticated) {
            // If logged in, proceed with booking logic (placeholder)
            navigate('/order');
        } else {
            // If not logged in, open the modal
            setIsModalOpen(true)
        }
    }

    const handleConfirmLogin = () => {
        setIsModalOpen(false)
        navigate('/login')
    }



    return (
        <>
            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmLogin}
            />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                // NOTE: The main container is no longer 'absolute' but fills the space given by App.jsx
                className="w-full h-full bg-white overflow-y-auto"
            >
                <div className="relative">
                    <img src={stationImage} alt="Pak De Station" className="w-full h-60 object-cover" />
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-12 left-4 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>

                <div className="p-6 pb-32"> {/* Padding bottom to keep content above the action bar */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-yellow-500">Pak De Station</h1>
                            <div className="flex items-center text-gray-500 mt-1">
                                <MapPin size={16} className="mr-2" />
                                <span>Tampan, Pekanbaru</span>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white flex items-center px-3 py-1.5 rounded-md">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1.5" />
                            <span className="font-bold text-sm">5.0</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-yellow-500 mb-2">Description</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We Work Dedicately towards spreading the awareness among car user about their car hygiene habits, cleanlines, durability of exterior look and other common cleaning tips.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-yellow-500 mb-4">Services</h2>
                        <div className="flex space-x-4">
                            {services.map(service => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    label={service.label}
                                    bgColor={service.bgColor}
                                    isSelected={selectedService === service.id}
                                    onClick={() => setSelectedService(service.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* KEY CHANGE: Changed 'fixed' to 'absolute'. This now pins to the parent container. */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                        <button className="p-3 bg-yellow-400 rounded-lg">
                            <MessageSquare className="text-white" />
                        </button>
                        <button className="p-3 bg-yellow-400 rounded-lg">
                            <Phone className="text-white" />
                        </button>
                        <button onClick={handleBookNow} className="flex-grow py-4 bg-yellow-400 text-white text-lg font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default BookingScreen