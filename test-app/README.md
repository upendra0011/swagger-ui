# Swagger UI Custom - Test App

This is a test application to verify the custom Swagger UI package (`@upendra19/swagger-ui-custom`) works correctly.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd test-app
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## ✨ Features

This test app includes:

- ✅ **Interactive Controls** - Toggle each configuration option in real-time
- ✅ **Live Preview** - See changes immediately in the Swagger UI
- ✅ **Configuration Display** - View current config as JSON
- ✅ **All 5 Custom Options** - Test all your custom features:
  - `showTryItOut`
  - `showAuthorization`
  - `showInfoLinks`
  - `operationsCollapsible`
  - `showOperationUtilities`

## 🧪 Testing Checklist

### Test Each Feature:

1. **Try It Out Button** (`showTryItOut`)
   - [ ] Uncheck - Button should disappear
   - [ ] Check - Button should appear

2. **Authorization UI** (`showAuthorization`)
   - [ ] Uncheck - Authorize button (top-right) and lock icons should disappear
   - [ ] Check - Authorize button and lock icons should appear

3. **Info Section Links** (`showInfoLinks`)
   - [ ] Uncheck - URL, contact, license links should disappear
   - [ ] Check - All info links should appear

4. **Operations Collapsible** (`operationsCollapsible`)
   - [ ] Uncheck - Operations stay expanded, no collapse arrows
   - [ ] Check - Operations can collapse/expand

5. **Operation Utilities** (`showOperationUtilities`)
   - [ ] Uncheck - Copy and jump-to buttons should disappear
   - [ ] Check - Utility buttons should appear

## 📁 Project Structure

```
test-app/
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main app component
    └── App.css         # Styling
```

## 🎨 How It Works

The app uses your published NPM package:

```javascript
import SwaggerUI from '@upendra19/swagger-ui-custom'
import '@upendra19/swagger-ui-custom/dist/swagger-ui.css'

function App() {
  return (
    <SwaggerUI
      url="https://petstore.swagger.io/v2/swagger.json"
      showTryItOut={false}
      showAuthorization={false}
      showInfoLinks={false}
      operationsCollapsible={false}
      showOperationUtilities={false}
    />
  )
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Notes

- Uses Petstore API (`https://petstore.swagger.io/v2/swagger.json`) for testing
- All configuration options start as `false` to demonstrate the customization
- Toggle checkboxes to see real-time changes

## ✅ Success Criteria

Your package is working correctly if:

1. ✅ App starts without errors
2. ✅ Swagger UI renders
3. ✅ All 5 configuration options work as expected
4. ✅ Toggling checkboxes changes the UI in real-time
5. ✅ No console errors

## 🐛 Troubleshooting

### Package not found
```bash
# Make sure the package is published
npm view @upendra19/swagger-ui-custom

# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Styles not loading
Make sure you import the CSS:
```javascript
import '@upendra19/swagger-ui-custom/dist/swagger-ui.css'
```

### Props not working
Check browser console for errors and verify the package version:
```bash
npm list @upendra19/swagger-ui-custom
```

## 🎉 Success!

If everything works, your custom Swagger UI package is ready to use in production! 🚀
