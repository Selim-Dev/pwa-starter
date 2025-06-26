import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Smartphone, Monitor, Globe, ArrowDown, MoreHorizontal, X, Check, Plus } from 'lucide-react'

const PWADownloadScreen = ({ onComplete }) => {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [canInstall, setCanInstall] = useState(false)
    const [isInstalling, setIsInstalling] = useState(false)
    const isMobile = window.innerWidth <= 768

    // Listen for the beforeinstallprompt event
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault()
            // Stash the event so it can be triggered later
            setDeferredPrompt(e)
            setCanInstall(true)
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        }
    }, [])

    const handleInstallLater = () => {
        localStorage.setItem('pwaGuideShown', 'true')
        onComplete()
    }

    const handleInstallNow = async () => {
        if (deferredPrompt && canInstall) {
            setIsInstalling(true)

            try {
                // Show the install prompt
                deferredPrompt.prompt()

                // Wait for the user to respond to the prompt
                const { outcome } = await deferredPrompt.userChoice

                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt')
                } else {
                    console.log('User dismissed the install prompt')
                }

                // Clear the deferredPrompt
                setDeferredPrompt(null)
                setCanInstall(false)
            } catch (error) {
                console.log('Error during installation:', error)
            } finally {
                setIsInstalling(false)
            }
        }

        // Always save preference and continue
        localStorage.setItem('pwaGuideShown', 'true')
        onComplete()
    }

    const mobileSteps = [
        {
            browser: 'Chrome (Android)',
            icon: Globe,
            steps: [
                'Tap the menu (3 dots) in the top right',
                'Tap "Add to Home screen" or "Install app"',
                'Tap "Add" or "Install" to confirm'
            ]
        },
        {
            browser: 'Safari (iPhone)',
            icon: Globe,
            steps: [
                'Tap the Share button (square with arrow)',
                'Scroll down and tap "Add to Home Screen"',
                'Tap "Add" in the top right corner'
            ]
        }
    ]

    const desktopSteps = [
        {
            browser: 'Chrome',
            icon: Globe,
            steps: [
                'Look for the "Install" button in the address bar',
                'Or click menu (⋮) → "Install CarWash Pro"',
                'Click "Install" in the popup dialog'
            ]
        },
        {
            browser: 'Safari',
            icon: Globe,
            steps: [
                'Click File menu → "Add to Dock"',
                'Or use Share button → "Add to Home Screen"',
                'Confirm installation'
            ]
        },
        {
            browser: 'Edge',
            icon: MoreHorizontal,
            steps: [
                'Click the "Install" button in address bar',
                'Or menu (⋯) → "Apps" → "Install this site as an app"',
                'Click "Install" to add to your device'
            ]
        }
    ]

    const steps = isMobile ? mobileSteps : desktopSteps

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-8 py-8 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        {/* App Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                        >
                            <span className="text-3xl sm:text-4xl">🚗</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                        >
                            Install CarWash Pro
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
                        >
                            {isMobile
                                ? "Add CarWash Pro to your home screen for quick access and a native app experience!"
                                : "Get the best experience by installing CarWash Pro as a desktop app. It works offline and feels like a native application!"
                            }
                        </motion.p>
                    </motion.div>

                    {/* Auto Install Section for Mobile */}
                    {isMobile && canInstall && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-6 border border-green-400/30 shadow-2xl mb-8"
                        >
                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <Plus className="w-8 h-8 text-white" />
                                </motion.div>
                                <h2 className="text-2xl font-bold mb-3 text-green-400">Ready to Install!</h2>
                                <p className="text-blue-100 mb-6">
                                    Your device supports automatic installation. Click the button below to install CarWash Pro directly!
                                </p>
                                <button
                                    onClick={handleInstallNow}
                                    disabled={isInstalling}
                                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                >
                                    {isInstalling ? (
                                        <>
                                            <div className="w-5 h-5 inline mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Installing...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-5 h-5 inline mr-2" />
                                            Install Now
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Manual Installation Guide */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: canInstall && isMobile ? 0.8 : 0.5 }}
                        className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-8"
                    >
                        <div className="text-center mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: canInstall && isMobile ? 1.0 : 0.7, type: "spring", stiffness: 200 }}
                                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                            >
                                {isMobile ? <Smartphone className="w-6 h-6 text-white" /> : <Monitor className="w-6 h-6 text-white" />}
                            </motion.div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-2">
                                {canInstall && isMobile ? "Or Install Manually" : isMobile ? "Add to Home Screen" : "Install Desktop App"}
                            </h2>
                            <p className="text-blue-200 text-sm sm:text-base">
                                {isMobile ? "Follow these steps on your mobile browser:" : "Choose your browser and follow the steps:"}
                            </p>
                        </div>

                        {/* Browser Instructions */}
                        <div className="space-y-4 sm:space-y-6">
                            {steps.map((browser, index) => (
                                <motion.div
                                    key={browser.browser}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (canInstall && isMobile ? 1.1 : 0.8) + index * 0.1 }}
                                    className="bg-white/10 rounded-2xl p-4 sm:p-6"
                                >
                                    <div className="flex items-center mb-4">
                                        <browser.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-300" />
                                        <span className="font-semibold text-lg">{browser.browser}</span>
                                    </div>
                                    <ul className="text-sm sm:text-base text-blue-200 space-y-2">
                                        {browser.steps.map((step, stepIndex) => (
                                            <li key={stepIndex} className="flex items-start">
                                                <span className="text-yellow-400 mr-3 mt-1 text-lg">•</span>
                                                <span className="leading-relaxed">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: canInstall && isMobile ? 1.5 : 1.2 }}
                            className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 sm:p-6"
                        >
                            <h3 className="font-semibold text-lg mb-3 text-center">Why Install?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span>Works offline</span>
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span>Faster loading</span>
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span>Native app feel</span>
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span>Quick access</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Action Buttons - Only show manual install for desktop or when auto-install not available */}
                    {(!canInstall || !isMobile) && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <button
                                onClick={handleInstallNow}
                                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                            >
                                <Download className="w-5 h-5 inline mr-2" />
                                Got it, Let's Go!
                            </button>

                            <button
                                onClick={handleInstallLater}
                                className="text-blue-300 hover:text-white transition-colors text-lg underline px-4 py-2"
                            >
                                Maybe later, continue →
                            </button>
                        </motion.div>
                    )}

                    {/* Continue Button for Mobile with Auto-Install */}
                    {canInstall && isMobile && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                            className="text-center"
                        >
                            <button
                                onClick={handleInstallLater}
                                className="text-blue-300 hover:text-white transition-colors text-lg underline px-4 py-2"
                            >
                                Skip installation, continue to app →
                            </button>
                        </motion.div>
                    )}

                    {/* Skip Option */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="text-center mt-6"
                    >
                        <p className="text-blue-300 text-sm">
                            This guide won't show again once you choose an option
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Arrow Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="w-5 h-5 text-blue-300" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default PWADownloadScreen 