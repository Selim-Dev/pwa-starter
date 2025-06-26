import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    (set, get) => ({
      // --- NEW AUTHENTICATION STATE ---
      isAuthenticated: false,
      user: null, // Add user object
      // Set a placeholder user on login for the POC
      login: () => set({ isAuthenticated: true, user: { name: 'Rahmat Habsin', phone: '081200001234' } }),
      logout: () => set({ isAuthenticated: false, user: null }),
      // --------------------------------

      // Active tab state
      activeTab: 'home',
      setActiveTab: (tab) => set({ activeTab: tab }),

      // User preferences
      theme: 'light', // 'light' | 'dark' | 'system'
      setTheme: (theme) => set({ theme }),
      
      // App settings
      notifications: true,
      setNotifications: (enabled) => set({ notifications: enabled }),
      
      // ... (rest of the store is unchanged)
      favorites: [],
      addFavorite: (item) => { /* ... */ },
      removeFavorite: (itemId) => { /* ... */ },
      isFavorite: (itemId) => { /* ... */ },
      searchHistory: [],
      addSearchHistory: (query) => { /* ... */ },
      clearSearchHistory: () => { /* ... */ },
      isInstalled: false,
      setInstalled: (installed) => set({ isInstalled: installed }),
      isOnline: navigator.onLine,
      setOnlineStatus: (online) => set({ isOnline: online }),
      version: '1.0.0',
      reset: () => set({ /* ... */ })
    }),
    {
      name: 'pwa-app-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user, // Persist the user object
        theme: state.theme,
        favorites: state.favorites,
        searchHistory: state.searchHistory,
        notifications: state.notifications
      })
    }
  )
)