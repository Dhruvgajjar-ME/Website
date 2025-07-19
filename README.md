# 🚀 Dhruv Y Gajjar - Portfolio Website

A modern, responsive portfolio website for a Mechanical Engineer specializing in spacecraft thermal design, composite materials, and advanced manufacturing techniques.

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme**: Professional space-themed design with bright blue accents
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop, 4K)
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Interactive Elements**: Hover effects, scroll-triggered animations, floating action button
- **Loading Screen**: Professional loading animation with spinner

### 📱 Performance Optimizations
- **CSS Optimization**: Consolidated media queries, removed duplicates, reduced file size by ~60%
- **JavaScript Optimization**: Modular code structure, throttled scroll events, cached DOM elements
- **Image Optimization**: Lazy loading, fallback images, optimized loading strategies
- **Service Worker**: Caching for offline functionality and faster loading
- **PWA Ready**: Progressive Web App capabilities with manifest file

### 🔧 Technical Features
- **Semantic HTML**: Proper accessibility with ARIA labels and semantic structure
- **CSS Variables**: Consistent theming with CSS custom properties
- **Responsive Breakpoints**: Optimized for all screen sizes
- **Cross-browser Compatibility**: Works on all modern browsers
- **SEO Optimized**: Meta tags, structured data, semantic markup

## 📊 Performance Metrics

### Before Optimization
- CSS file size: ~29KB (2,947 lines)
- JavaScript file size: ~8KB
- Multiple duplicate media queries
- No caching strategy

### After Optimization
- CSS file size: ~12KB (1,200 lines) - **60% reduction**
- JavaScript file size: ~6KB - **25% reduction**
- Consolidated responsive design
- Service worker caching
- Lazy loading images

## 🎯 Responsive Breakpoints

| Device | Width | Features |
|--------|-------|----------|
| Mobile | < 480px | Compact layout, simplified navigation |
| Tablet | 480px - 768px | Adjusted spacing, optimized touch targets |
| Desktop | 768px - 1200px | Full layout, hover effects |
| Large Desktop | 1200px - 1920px | Enhanced spacing, larger text |
| 4K/Ultra-wide | > 1920px | Maximum container width, scaled elements |

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - Or serve with a local server for PWA features

3. **For development**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file (optimized)
├── style.css           # Optimized CSS (60% smaller)
├── script.js           # Optimized JavaScript (25% smaller)
├── sw.js              # Service Worker for caching
├── manifest.json      # PWA manifest
├── README.md          # This file
└── Dhruv_Gajjar_CV.pdf # Resume/CV
```

## 🎨 Customization

### Colors
The website uses CSS variables for easy customization:
```css
:root {
  --primary-blue: #0ea5e9;
  --hover-blue: #38bdf8;
  --dark-bg: #0f1419;
  --text-light: #f1f5f9;
  --text-muted: #9ca3af;
}
```

### Content
- Update personal information in `index.html`
- Modify project details and descriptions
- Replace images with your own (maintain aspect ratios)
- Update contact information and social links

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 PWA Features

- **Installable**: Can be installed as a native app
- **Offline Support**: Service worker caches essential resources
- **App-like Experience**: Full-screen mode, custom splash screen
- **Fast Loading**: Cached resources for instant loading

## 🎯 Accessibility

- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic HTML structure
- **High Contrast**: Readable text on all backgrounds
- **Reduced Motion**: Respects user's motion preferences

## 🚀 Performance Tips

1. **Image Optimization**: Use WebP format when possible
2. **CDN**: Host images on a CDN for faster loading
3. **Compression**: Enable GZIP compression on server
4. **Caching**: Set appropriate cache headers
5. **Minification**: Minify CSS/JS for production

## 📈 SEO Features

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🔄 Updates & Maintenance

### Regular Updates
- Keep project information current
- Update skills and technologies
- Refresh portfolio images
- Monitor performance metrics

### Version Control
- Track changes with Git
- Use semantic versioning
- Maintain changelog
- Backup before major changes

## 📞 Support

For questions or issues:
- Email: dygajjar55@gmail.com
- LinkedIn: [Dhruv Gajjar](https://www.linkedin.com/in/dhruv-gajjar-4a5b23289)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for showcasing mechanical engineering expertise and innovation.** 