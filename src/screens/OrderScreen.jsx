// Create this file in src/screens/OrderScreen.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronDown, ChevronRight } from 'lucide-react'
import { useAppStore } from '../stores/appStore'
import ConfirmationModal from '../components/ConfirmationModal'
import stationImage from '../assets/station-details.png'

const SelectField = ({ children, ...props }) => (
    <div className="relative">
        <select {...props} className="w-full appearance-none bg-white border border-yellow-400 rounded-lg py-2.5 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500">
            {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
            <ChevronDown size={16} />
        </div>
    </div>
)

const DateButton = ({ day, date, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 flex flex-col items-center p-1.5 rounded-lg transition-colors ${isActive ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-100 text-gray-600 hover:bg-yellow-200'}`}
    >
        <span className="text-xs">{day}</span>
        <span className="font-bold text-base">{date}</span>
    </button>
)

const TimeSlotButton = ({ time, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`py-2 px-2 rounded-lg transition-colors text-xs font-medium ${isActive ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-100 text-gray-600 hover:bg-yellow-200'}`}
    >
        {time}
    </button>
)

const OrderScreen = () => {
    const navigate = useNavigate();
    const user = useAppStore((state) => state.user);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [selectedDate, setSelectedDate] = useState(16);
    const [selectedTime, setSelectedTime] = useState('10.00 - 11.00 AM');

    const dates = [
        { day: 'Sun', date: 11 }, { day: 'Mon', date: 12 }, { day: 'Tue', date: 13 },
        { day: 'Wed', date: 14 }, { day: 'Thu', date: 15 }, { day: 'Fri', date: 16 }, { day: 'Sat', date: 17 }
    ];

    const timeSlots = [
        '09.00 - 10.00 AM', '10.00 - 11.00 AM', '11.00 - 12.00 AM',
        '02.00 - 03.00 PM', '03.00 - 04.00 PM', '04.00 - 05.00 PM'
    ];

    // Data for confirmation modal
    const bookingDetails = {
        stationName: 'Pak De Station',
        timestamp: '11/8/2022, 11.15 AM',
        username: user?.name || 'N/A',
        phone: user?.phone || 'N/A',
        bookingId: '012089',
        date: 'Sunday, 11 Aug 2022',
        time: '03.00 - 04.00 PM',
        carType: { name: 'Pajero Sport 2019', price: 'SR.75.000' },
        serviceType: { name: 'Special Service', price: 'SR.30.000' },
        tax: 'SR.5.000',
        voucher: '50%',
        totalPrice: 'SR. 55.000'
    };

    const handleConfirmBooking = () => {
        setIsModalOpen(false);
        // Navigate to a success screen (to be created)
        navigate('/success');
    };

    return (
        <>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmBooking}
                details={bookingDetails}
            />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full min-h-screen bg-gray-50 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center p-4 flex-shrink-0">
                    <button onClick={() => navigate(-1)} className="p-2"><ChevronLeft size={24} /></button>
                    <h1 className="flex-grow text-center font-bold text-lg text-yellow-500 mr-8">Pak De Station</h1>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Image */}
                    <div className="px-4 mb-4">
                        <img src={stationImage} alt="Car Wash Station" className="w-full h-56 object-cover rounded-xl" />
                    </div>

                    {/* Form */}
                    <div className="px-4 space-y-4">
                        <div>
                            <h2 className="font-bold text-yellow-500 mb-2 text-base">Select Your Order</h2>
                            <div className="space-y-2">
                                <SelectField defaultValue="">
                                    <option value="" disabled>Select Your Type Car</option>
                                    <option value="suv">SUV</option>
                                    <option value="sedan">Sedan</option>
                                </SelectField>
                                <SelectField defaultValue="">
                                    <option value="" disabled>Select Your Type Service</option>
                                    <option value="regular">Regular</option>
                                    <option value="medium">Medium</option>
                                    <option value="special">Special</option>
                                </SelectField>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-bold text-yellow-500 text-base">Select Your Date</h2>
                                <button className="flex items-center text-sm font-semibold bg-yellow-400 text-gray-800 px-3 py-1 rounded-full">
                                    Aug 2022 <ChevronDown size={14} className="ml-1" />
                                </button>
                            </div>
                            <div className="flex space-x-1">
                                {dates.map(d => <DateButton key={d.date} {...d} isActive={selectedDate === d.date} onClick={() => setSelectedDate(d.date)} />)}
                            </div>
                        </div>

                        <div>
                            <h2 className="font-bold text-yellow-500 mb-2 text-base">Select Time Slot</h2>
                            <div className="grid grid-cols-3 gap-1.5">
                                {timeSlots.map(t => <TimeSlotButton key={t} time={t} isActive={selectedTime === t} onClick={() => setSelectedTime(t)} />)}
                            </div>
                        </div>

                        <div className="relative">
                            <input type="text" placeholder="Check Your Voucher" className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-yellow-500"><ChevronRight size={18} /></button>
                        </div>
                    </div>
                </div>

                {/* Fixed Footer Button */}
                <div className="p-4 bg-gray-50 flex-shrink-0">
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-yellow-400 text-gray-800 font-bold py-3 rounded-xl text-base hover:bg-yellow-500 transition-colors">
                        Book a Wash
                    </button>
                </div>
            </motion.div>
        </>
    )
}

export default OrderScreen;