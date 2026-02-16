# Swagger UI Configurable

> **Customizable Swagger UI** with configuration-based feature control

A fork of [Swagger UI](https://github.com/swagger-api/swagger-ui) that adds **prop-based configuration** for common UI features, allowing you to customize the interface without modifying code.

## ✨ Features

Control these UI elements with simple boolean props:

- **Authorization UI** (`showAuthorization`) - Show/hide authorize button and lock icons
- **Try It Out Button** (`showTryItOut`) - Show/hide the "Try it out" button
- **Info Section Links** (`showInfoLinks`) - Show/hide URL, contact, license, and external docs links
- **Operations Accordion** (`operationsCollapsible`) - Enable/disable operation collapse/expand
- **Operation Utilities** (`showOperationUtilities`) - Show/hide utility buttons (copy, jump-to)

## 📦 Installation

```bash
npm install @your-username/swagger-ui-configurable
```

## 🚀 Quick Start

### Basic HTML + JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>API Documentation</title>
  <link rel="stylesheet" href="node_modules/@your-username/swagger-ui-configurable/dist/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>

  <script src="node_modules/@your-username/swagger-ui-configurable/dist/swagger-ui-bundle.js"></script>
  <script src="node_modules/@your-username/swagger-ui-configurable/dist/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      const ui = SwaggerUIBundle({
        url: "https://api.example.com/swagger.json",
        dom_id: '#swagger-ui',
        
        // Configuration options
        showTryItOut: false,           // Hide "Try it out" button
        showAuthorization: false,      // Hide authorization UI
        showInfoLinks: false,          // Hide info section links
        operationsCollapsible: false,  // Keep operations expanded
        showOperationUtilities: false, // Hide utility buttons
        
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      })

      window.ui = ui
    }
  </script>
</body>
</html>
```

### React

```bash
npm install @your-username/swagger-ui-configurable react react-dom
```

```javascript
import React from 'react'
import SwaggerUI from '@your-username/swagger-ui-configurable'
import '@your-username/swagger-ui-configurable/dist/swagger-ui.css'

function ApiDocs() {
  return (
    <SwaggerUI
      url="https://api.example.com/swagger.json"
      showTryItOut={false}
      showAuthorization={false}
      showInfoLinks={false}
      operationsCollapsible={false}
      showOperationUtilities={false}
    />
  )
}

export default ApiDocs
```

### Node.js/Express

```javascript
const express = require('express')
const swaggerUi = require('@your-username/swagger-ui-configurable')
const swaggerDocument = require('./swagger.json')

const app = express()

const options = {
  swaggerOptions: {
    showTryItOut: false,
    showAuthorization: false,
    showInfoLinks: false,
    operationsCollapsible: false,
    showOperationUtilities: false
  }
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

app.listen(3000)
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showAuthorization` | `boolean` | `true` | Show/hide authorize button and lock icons |
| `showTryItOut` | `boolean` | `true` | Show/hide "Try it out" button |
| `showInfoLinks` | `boolean` | `true` | Show/hide info section links (URL, contact, license, etc.) |
| `operationsCollapsible` | `boolean` | `true` | Enable/disable operation accordion (collapse/expand) |
| `showOperationUtilities` | `boolean` | `true` | Show/hide utility buttons (copy, jump-to) |

## 📖 Use Cases

### Read-Only API Documentation

Perfect for public API docs where you don't want users testing endpoints:

```javascript
SwaggerUIBundle({
  url: "https://api.example.com/swagger.json",
  showTryItOut: false,        // No testing
  showAuthorization: false,   // No auth UI
  showInfoLinks: false        // Clean, minimal view
})
```

### Internal Developer Portal

Full features for internal developers:

```javascript
SwaggerUIBundle({
  url: "https://internal-api.company.com/swagger.json",
  showTryItOut: true,         // Enable testing
  showAuthorization: true,    // Show auth
  showInfoLinks: true         // Show all metadata
})
```

### Embedded Documentation

Minimal UI for embedded views:

```javascript
SwaggerUIBundle({
  url: "/api/swagger.json",
  showTryItOut: false,
  showAuthorization: false,
  showInfoLinks: false,
  operationsCollapsible: false,  // Always expanded
  showOperationUtilities: false  // Minimal UI
})
```

## 🔄 Migration from Official Swagger UI

This package is **100% backward compatible** with the official Swagger UI. All new configuration options default to `true`, maintaining the original behavior.

To migrate:

1. Replace `swagger-ui` with `@your-username/swagger-ui-configurable`
2. Optionally add configuration props to customize UI
3. No other changes needed!

```bash
# Before
npm install swagger-ui

# After
npm install @your-username/swagger-ui-configurable
```

## 📚 Documentation

For detailed documentation on all configuration options, see [AUTHORIZATION_CONFIG.md](./AUTHORIZATION_CONFIG.md)

## 🤝 Contributing

This is a fork of the official Swagger UI. For issues specific to the configuration features, please open an issue on this repository. For general Swagger UI issues, please refer to the [official repository](https://github.com/swagger-api/swagger-ui).

## 📄 License

Apache 2.0 (same as Swagger UI)

## 🙏 Credits

Based on [Swagger UI](https://github.com/swagger-api/swagger-ui) by SmartBear Software.

Configuration features added by [Your Name].

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@your-username/swagger-ui-configurable)
- [GitHub Repository](https://github.com/your-username/swagger-ui-configurable)
- [Official Swagger UI](https://github.com/swagger-api/swagger-ui)
- [Issue Tracker](https://github.com/your-username/swagger-ui-configurable/issues)
