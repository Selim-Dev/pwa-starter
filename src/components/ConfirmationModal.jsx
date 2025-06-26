// Create this file in src/components/ConfirmationModal.jsx

import { motion, AnimatePresence } from 'framer-motion'

const DetailRow = ({ label, value, isBold = false }) => (
    <div className={`flex justify-between items-baseline ${isBold ? 'font-bold text-gray-900 text-lg' : 'text-gray-700'}`}>
        <span>{label}</span>
        <span>: {value}</span>
    </div>
)

const ConfirmationModal = ({ isOpen, onClose, onConfirm, details }) => {
    if (!details) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="bg-yellow-50 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Detail Service</h2>
                            <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                                <p className="font-bold text-center text-gray-800">{details.stationName}</p>
                                <p className="text-xs text-gray-500 text-center mb-3">{details.timestamp}</p>

                                <DetailRow label="Username" value={details.username} />
                                <DetailRow label="Phone Number" value={details.phone} />
                                <DetailRow label="Booking ID" value={details.bookingId} />
                                <DetailRow label="Date" value={details.date} />
                                <DetailRow label="Time" value={details.time} />

                                <hr className="my-3 border-gray-200" />

                                <p className="font-bold text-gray-800">Type Car</p>
                                <DetailRow label={details.carType.name} value={details.carType.price} />

                                <p className="font-bold text-gray-800 mt-2">Type Service</p>
                                <DetailRow label={details.serviceType.name} value={details.serviceType.price} />
                                <DetailRow label="Tax" value={details.tax} />
                                <DetailRow label="Voucher First Service" value={details.voucher} />

                                <hr className="my-3 border-t-2 border-dashed border-gray-300" />

                                <DetailRow label="Total Price" value={details.totalPrice} isBold={true} />
                            </div>
                        </div>

                        <div className="flex bg-yellow-100/50 p-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 bg-white border border-gray-300 text-gray-800 font-bold rounded-full transition-colors hover:bg-gray-100 mr-2"
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 py-3 bg-yellow-400 text-gray-800 font-bold rounded-full transition-colors hover:bg-yellow-500 ml-2"
                            >
                                CONFIRM
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ConfirmationModal