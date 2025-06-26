// Create this file in src/screens/MyOrdersScreen.jsx

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '../stores/appStore'
import { Calendar, Tag, CheckCircle, Clock } from 'lucide-react'
import ConfirmationModal from '../components/ConfirmationModal'

// --- Mock Data ---
// In a real app, this would come from an API
const mockOrders = [
    {
        stationName: 'Pak De Station',
        timestamp: '11/8/2022, 11.15 AM',
        username: 'Rahmat Habsin', phone: '081200001234',
        bookingId: '012089',
        date: 'Sunday, 11 Aug 2022',
        time: '03.00 - 04.00 PM',
        carType: { name: 'Pajero Sport 2019', price: 'Rp.75.000' },
        serviceType: { name: 'Special Service', price: 'Rp.30.000' },
        tax: 'Rp.5.000',
        voucher: '50%',
        totalPrice: 'Rp. 55.000',
        status: 'Upcoming'
    },
    {
        stationName: 'R CarWash Station',
        timestamp: '05/7/2022, 09.30 AM',
        username: 'Rahmat Habsin', phone: '081200001234',
        bookingId: '011975',
        date: 'Tuesday, 05 Jul 2022',
        time: '10.00 - 11.00 AM',
        carType: { name: 'Honda Civic', price: 'Rp.50.000' },
        serviceType: { name: 'Regular', price: 'Rp.20.000' },
        tax: 'Rp.2.000',
        voucher: 'N/A',
        totalPrice: 'Rp. 72.000',
        status: 'Completed'
    }
];

// --- Reusable Order Item Component ---
const OrderItem = ({ order, onClick }) => {
    const isCompleted = order.status === 'Completed';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-gray-800">{order.stationName}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar size={14} className="mr-2" />
                        <span>{order.date}</span>
                    </div>
                </div>
                <div className={`flex items-center text-xs font-bold py-1 px-2.5 rounded-full ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {isCompleted ? <CheckCircle size={14} className="mr-1.5" /> : <Clock size={14} className="mr-1.5" />}
                    {order.status}
                </div>
            </div>
            <div className="border-t border-dashed my-3"></div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Total Price</span>
                <span className="font-bold text-gray-800">{order.totalPrice}</span>
            </div>
        </motion.div>
    )
}

const MyOrdersScreen = () => {
    const [orders, setOrders] = useState(mockOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useAppStore((state) => state.user);

    const handleViewDetails = (order) => {
        // Safely handle user data - use default values if user is null
        const orderDetails = {
            ...order,
            username: user?.name || 'Guest User',
            phone: user?.phone || 'N/A'
        };
        setSelectedOrder(orderDetails);
        setIsModalOpen(true);
    };

    return (
        <>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => setIsModalOpen(false)} // Just close the modal on confirm for now
                details={selectedOrder}
            />
            <div className="w-full h-full bg-gray-50 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
                <div className="space-y-4">
                    {orders.map(order => (
                        <OrderItem key={order.bookingId} order={order} onClick={() => handleViewDetails(order)} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyOrdersScreen;