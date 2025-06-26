import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, Plus, Wallet, History, DollarSign, Eye, EyeOff } from 'lucide-react'

const PaymentScreen = () => {
    const navigate = useNavigate()
    const [showBalance, setShowBalance] = useState(false)
    const [selectedCard, setSelectedCard] = useState(0)

    const cards = [
        {
            id: 1,
            type: 'visa',
            last4: '4532',
            holder: 'John Doe',
            expiry: '12/25',
            color: 'from-blue-500 to-blue-700'
        },
        {
            id: 2,
            type: 'mastercard',
            last4: '8901',
            holder: 'John Doe',
            expiry: '08/26',
            color: 'from-purple-500 to-purple-700'
        }
    ]

    const transactions = [
        { id: 1, title: 'Pak De Station', amount: 25000, date: '2024-01-15', type: 'payment' },
        { id: 2, title: 'Wallet Top Up', amount: 100000, date: '2024-01-14', type: 'topup' },
        { id: 3, title: 'R CarWash Station', amount: 30000, date: '2024-01-13', type: 'payment' },
        { id: 4, title: 'Wallet Top Up', amount: 50000, date: '2024-01-12', type: 'topup' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pt-12 pb-6"
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Payment & Wallet</h1>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            <div className="px-4 py-6 space-y-6">
                {/* Wallet Balance */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <Wallet className="w-6 h-6 text-gray-800" />
                            <h3 className="text-lg font-bold text-gray-800">Wallet Balance</h3>
                        </div>
                        <button
                            onClick={() => setShowBalance(!showBalance)}
                            className="p-2 rounded-full bg-black/10"
                        >
                            {showBalance ? <EyeOff className="w-5 h-5 text-gray-800" /> : <Eye className="w-5 h-5 text-gray-800" />}
                        </button>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-4">
                        {showBalance ? 'Rp 125,000' : 'Rp ••••••'}
                    </div>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2">
                        <Plus className="w-5 h-5" />
                        <span>Top Up</span>
                    </button>
                </motion.div>

                {/* Payment Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Payment Methods</h3>
                        <button className="text-green-600 font-semibold text-sm">Add New</button>
                    </div>

                    <div className="space-y-3">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                onClick={() => setSelectedCard(index)}
                                className={`relative cursor-pointer transition-all duration-300 ${selectedCard === index ? 'scale-105' : ''
                                    }`}
                            >
                                <div className={`bg-gradient-to-r ${card.color} rounded-xl p-4 text-white shadow-lg`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <CreditCard className="w-8 h-8" />
                                        <span className="text-sm font-semibold uppercase">{card.type}</span>
                                    </div>
                                    <div className="text-lg font-mono tracking-wider mb-2">
                                        •••• •••• •••• {card.last4}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">{card.holder}</span>
                                        <span className="text-sm">{card.expiry}</span>
                                    </div>
                                </div>
                                {selectedCard === index && (
                                    <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-4 border-2 border-dashed border-gray-300 rounded-xl py-4 flex items-center justify-center space-x-2 text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors">
                        <Plus className="w-5 h-5" />
                        <span>Add New Card</span>
                    </button>
                </motion.div>

                {/* Transaction History */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <History className="w-5 h-5 text-gray-600" />
                            <h3 className="text-lg font-bold text-gray-800">Recent Transactions</h3>
                        </div>
                        <button className="text-green-600 font-semibold text-sm">View All</button>
                    </div>

                    <div className="space-y-3">
                        {transactions.map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'payment' ? 'bg-red-100' : 'bg-green-100'
                                        }`}>
                                        <DollarSign className={`w-5 h-5 ${transaction.type === 'payment' ? 'text-red-600' : 'text-green-600'
                                            }`} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{transaction.title}</p>
                                        <p className="text-sm text-gray-500">{transaction.date}</p>
                                    </div>
                                </div>
                                <div className={`font-bold ${transaction.type === 'payment' ? 'text-red-600' : 'text-green-600'
                                    }`}>
                                    {transaction.type === 'payment' ? '-' : '+'}Rp {transaction.amount.toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PaymentScreen 