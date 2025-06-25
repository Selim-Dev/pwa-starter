# PWA Deployment Guide

This guide will help you deploy your Progressive Web App to various hosting platforms.

## Quick Deploy Options

### 1. Netlify (Recommended for beginners)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the `dist` folder to deploy
   - Or connect your GitHub repository for automatic deployments

3. **Configure PWA settings:**
   - Go to Site Settings > Build & Deploy
   - Add custom headers for PWA:
     ```
     /manifest.webmanifest
     Content-Type: application/manifest+json
     ```

### 2. Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

### 3. GitHub Pages

1. **Add to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ],
       "headers": [
         {
           "source": "/manifest.webmanifest",
           "headers": [
             {
               "key": "Content-Type",
               "value": "application/manifest+json"
             }
           ]
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## PWA Testing Checklist

After deployment, test these PWA features:

### ✅ Installation
- [ ] App can be installed on Android (Chrome)
- [ ] App can be installed on iOS (Safari)
- [ ] App icon appears on home screen
- [ ] App opens in standalone mode

### ✅ Offline Functionality
- [ ] App works without internet connection
- [ ] Cached content loads properly
- [ ] Service worker is registered

### ✅ Performance
- [ ] App loads quickly
- [ ] Smooth animations
- [ ] Responsive on different screen sizes

### ✅ User Experience
- [ ] Bottom navigation works
- [ ] Dark mode works
- [ ] Install prompt appears (if applicable)

## HTTPS Requirement

**Important:** PWAs require HTTPS to work properly. All the hosting platforms above provide HTTPS by default.

## Custom Domain

To use a custom domain:

1. **Purchase domain** from a registrar (GoDaddy, Namecheap, etc.)
2. **Configure DNS** to point to your hosting provider
3. **Update PWA manifest** if needed
4. **Test installation** on the new domain

## Analytics Setup

Consider adding analytics to track PWA usage:

### Google Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### PWA-specific Analytics
Track installation events and offline usage patterns.

## Troubleshooting

### Common Issues

1. **App not installing:**
   - Check HTTPS is enabled
   - Verify manifest.webmanifest is accessible
   - Ensure service worker is registered

2. **Offline not working:**
   - Check service worker registration
   - Verify cache strategies
   - Test in incognito mode

3. **Icons not showing:**
   - Verify icon paths in manifest
   - Check icon file formats
   - Test different icon sizes

### Debug Tools

- **Chrome DevTools:** Application tab for PWA debugging
- **Lighthouse:** PWA audit and performance testing
- **WebPageTest:** Performance and PWA testing

## Next Steps

1. **Monitor performance** using analytics
2. **Gather user feedback** on PWA experience
3. **Iterate and improve** based on usage data
4. **Consider advanced features** like push notifications 