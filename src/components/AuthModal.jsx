// Create this file in src/components/AuthModal.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const AuthModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="bg-yellow-100/80 w-full max-w-sm rounded-2xl p-6 text-center shadow-xl"
                    >
                        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />

                        <h2 className="text-lg font-bold text-gray-800">Hy !!!</h2>
                        <p className="text-gray-700 mt-2 mb-6">
                            You should Sign In your Account before you continue your Order.
                        </p>

                        <div className="flex space-x-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 bg-white/50 border border-yellow-400 text-gray-800 font-bold rounded-full transition-colors hover:bg-white/80"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 py-3 bg-yellow-400 text-gray-800 font-bold rounded-full transition-colors hover:bg-yellow-500"
                            >
                                Got It
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AuthModal