# Mobile PWA Demo

A modern, mobile-responsive Progressive Web App (PWA) built with React.js and Vite. This serves as a starting point for creating mobile applications without needing to build native apps.

## Features

- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive layout
- 🔧 **Progressive Web App**: Installable on mobile devices like a native app
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎨 **Modern UI**: Clean, intuitive interface with bottom navigation
- 🌙 **Dark Mode Support**: Automatic dark mode detection
- 📱 **Standalone Mode**: Runs in full-screen mode when installed
- 🔄 **Auto Updates**: Service worker handles updates automatically

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Build the PWA for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## PWA Features

### Installation
- **Android**: Open in Chrome, tap the menu, and select "Add to Home Screen"
- **iOS**: Open in Safari, tap the share button, and select "Add to Home Screen"

### Offline Support
The app includes service worker functionality for offline capabilities.

### App-like Experience
- Full-screen mode when installed
- Native-like navigation
- Smooth animations and transitions

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Mobile-responsive styles
├── main.jsx         # Application entry point
└── index.css        # Global styles

public/
├── pwa-icon.svg     # PWA icon
└── index.html       # HTML template with PWA meta tags

vite.config.js       # Vite configuration with PWA plugin
```

## Customization

### Changing the App Name
Update the following files:
- `vite.config.js` - manifest name and description
- `index.html` - title and meta tags
- `src/App.jsx` - header text

### Adding Features
- Add new tabs in the `tabs` array in `App.jsx`
- Create corresponding content in the `renderContent` function
- Style new components in `App.css`

### Styling
The app uses a mobile-first CSS approach with:
- CSS Grid for responsive layouts
- Flexbox for navigation
- CSS custom properties for theming
- Media queries for responsive design

## Browser Support

- Chrome (Android)
- Safari (iOS)
- Firefox
- Edge

## Next Steps for Client

1. **Customize Content**: Replace demo content with actual features
2. **Add Backend Integration**: Connect to APIs for real data
3. **Enhance Offline Features**: Add more sophisticated caching
4. **Push Notifications**: Implement push notification system
5. **Analytics**: Add usage tracking and analytics
6. **Testing**: Test on various devices and browsers

## Deployment

The built app can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## License

This project is open source and available under the MIT License.
