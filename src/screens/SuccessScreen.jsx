// Create this file in src/screens/SuccessScreen.jsx

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Import assets
import successIcon from '../assets/success.png'

const SuccessScreen = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-center text-center bg-blue-500 p-8"
        >
            {/* Success Icon with animation */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                className="bg-yellow-400 p-8 rounded-3xl shadow-lg mb-8"
            >
                <img src={successIcon} alt="Success Checkmark" className="w-24 h-24" />
            </motion.div>

            {/* Text Content with animation */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-black text-yellow-400 tracking-wider"
            >
                SUCCESS !!!
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-white/90 mt-4 max-w-xs"
            >
                We have received the order, please wait in line and don't forget to check the notification message in your account.
            </motion.p>

            {/* Continue Button with animation */}
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onClick={() => navigate('/my-orders')}
                className="mt-12 w-full max-w-xs py-4 px-8 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full transition-all hover:bg-yellow-400 hover:text-blue-500"
            >
                CONTINUE
            </motion.button>
        </motion.div>
    )
}

export default SuccessScreen;