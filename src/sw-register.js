import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // Show update notification
    console.log('New content available, please refresh.')
  },
  onOfflineReady() {
    // App is ready for offline use
    console.log('App is ready for offline use.')
  },
  onRegistered(swRegistration) {
    // Service worker registered
    console.log('Service worker registered:', swRegistration)
  },
  onRegisterError(error) {
    // Service worker registration failed
    console.error('Service worker registration failed:', error)
  }
})

export { updateSW } 