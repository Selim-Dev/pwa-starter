import { useState, useEffect } from 'react'

function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [showInstallPrompt, setShowInstallPrompt] = useState(false)

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowInstallPrompt(true)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt')
        } else {
            console.log('User dismissed the install prompt')
        }

        setDeferredPrompt(null)
        setShowInstallPrompt(false)
    }

    const handleDismiss = () => {
        setShowInstallPrompt(false)
    }

    if (!showInstallPrompt) return null

    return (
        <div className="install-prompt">
            <div className="install-content">
                <h3>Install App</h3>
                <p>Add this app to your home screen for a better experience!</p>
                <div className="install-buttons">
                    <button onClick={handleInstallClick} className="install-btn">
                        Install
                    </button>
                    <button onClick={handleDismiss} className="dismiss-btn">
                        Not Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InstallPrompt 