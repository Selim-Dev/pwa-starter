import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Import screen components
import SplashScreen from './screens/SplashScreen'
import PWADownloadScreen from './screens/PWADownloadScreen'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import BookingScreen from './screens/BookingScreen'
import NotificationScreen from './screens/NotificationScreen'
import MenuScreen from './screens/MenuScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import OrderScreen from './screens/OrderScreen'
import SuccessScreen from './screens/SuccessScreen'
import MyOrdersScreen from './screens/MyOrdersScreen'
import ProfileScreen from './screens/ProfileScreen'
import PaymentScreen from './screens/PaymentScreen'
import SettingsScreen from './screens/SettingsScreen'
import RateScreen from './screens/RateScreen'
import HelpScreen from './screens/HelpScreen'
import AboutScreen from './screens/AboutScreen'

// Import components
import BottomNavigation from './components/BottomNavigation'

import './App.css'

// A new component to handle layout, so BottomNavigation is not shown on the booking screen.
const AppLayout = () => {
  const location = useLocation();
  console.log('hi')
  // Hide BottomNavigation on specific pages like the booking details screen
  const hideNavOnRoutes = ['/booking', '/login', '/register', '/order', '/profile', '/payment', '/settings', '/rate', '/help', '/about'];
  const showBottomNav = !hideNavOnRoutes.some(path => location.pathname.startsWith(path));
  return (
    // This is the key change: a flex column layout that fills the screen.
    <div className="h-screen w-screen flex flex-col font-sans">
      {/* This container will grow to fill all available space */}
      <main className="flex-grow overflow-y-auto relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/booking" element={<BookingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/success" element={<SuccessScreen />} />
            <Route path="/my-orders" element={<MyOrdersScreen />} />
            <Route path="/notifications" element={<NotificationScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/rate" element={<RateScreen />} />
            <Route path="/help" element={<HelpScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* The navigation no longer needs to be 'fixed' */}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};


// Main App Component
function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showPWAGuide, setShowPWAGuide] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  // Check screen size and PWA guide preference on mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024)
    }

    const checkPWAGuidePreference = () => {
      const pwaGuideShown = localStorage.getItem('pwaGuideShown')
      // Check if URL has ?resetpwa parameter to force show PWA guide
      const urlParams = new URLSearchParams(window.location.search)
      const forceShowPWA = urlParams.has('resetpwa')

      if (forceShowPWA) {
        localStorage.removeItem('pwaGuideShown')
        return false
      }

      return pwaGuideShown === 'true'
    }

    checkScreenSize()

    // If PWA guide was already shown, skip it
    if (checkPWAGuidePreference()) {
      setShowPWAGuide(false)
    } else {
      // Show PWA guide for first-time users on any device
      setShowPWAGuide(true)
    }

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const handlePWAGuideComplete = () => {
    setShowPWAGuide(false)
  }

  // Show splash screen first on mobile devices (waits for user interaction)
  if (showSplash && !isLargeScreen) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  // Show PWA installation guide for first-time users (both mobile and desktop)
  if (showPWAGuide) {
    return <PWADownloadScreen onComplete={handlePWAGuideComplete} />
  }

  // Main app with router
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App