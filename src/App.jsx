import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Import screen components
import SplashScreen from './screens/SplashScreen'
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
            <Route path="/" element={<Navigate to="/map" replace />} />
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

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  // Main app with router
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App