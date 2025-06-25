import { useState } from 'react'
import InstallPrompt from './components/InstallPrompt'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'favorites', label: 'Favorites', icon: '❤️' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ]

  const demoCards = [
    { id: 1, title: 'Feature 1', description: 'This is a demo feature card', icon: '✨' },
    { id: 2, title: 'Feature 2', description: 'Another amazing feature', icon: '🚀' },
    { id: 3, title: 'Feature 3', description: 'Mobile-optimized experience', icon: '📱' },
    { id: 4, title: 'Feature 4', description: 'Progressive Web App demo', icon: '⚡' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="content">
            <div className="header">
              <h1>Mobile PWA Demo</h1>
              <p>Experience the power of Progressive Web Apps</p>
            </div>
            <div className="cards-grid">
              {demoCards.map(card => (
                <div key={card.id} className="card">
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'search':
        return (
          <div className="content">
            <div className="search-container">
              <input type="text" placeholder="Search features..." className="search-input" />
              <div className="search-results">
                <p>Search functionality would go here</p>
              </div>
            </div>
          </div>
        )
      case 'favorites':
        return (
          <div className="content">
            <h2>Favorites</h2>
            <div className="favorites-list">
              <p>Your favorite items will appear here</p>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="content">
            <div className="profile-header">
              <div className="profile-avatar">👤</div>
              <h2>User Profile</h2>
            </div>
            <div className="profile-info">
              <p>Profile settings and preferences</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app">
      <div className="main-content">
        {renderContent()}
      </div>

      <nav className="bottom-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <InstallPrompt />
    </div>
  )
}

export default App
